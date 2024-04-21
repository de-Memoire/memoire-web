import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { StoryType } from '@/app/_constant/story';
import { openai } from '@/app/_utils/openai';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const commonRequestSchema = {
  pen_name: z.string().min(1).optional(),
  content: z.string().min(1),
  cover_image_url: z.string().min(1).optional(),
  parent_story_id: z.number().optional(),
  signature_image_url: z.string().min(1).optional(),
};

const quoteRequestSchema = z.object({
  ...commonRequestSchema,
  type: z.literal(StoryType.QUOTE),
});

const essayRequestSchema = z.object({
  ...commonRequestSchema,
  type: z.literal(StoryType.ESSAY),
  title: z.string().min(1),
});

const requestSchema = z.union([quoteRequestSchema, essayRequestSchema]);

export const postStory = async (request: NextRequest) => {
  const body = await request.json();

  const validationResult = parseRequest(requestSchema, body);
  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const supabase = createSupabaseServerClient();

  const authorizationResult = await authorize(supabase);
  if (!authorizationResult.isSuccess) {
    return authorizationResult.response;
  }

  const { user } = authorizationResult;

  const tagAiPromise = openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: `당신은 수필 전문가입니다. 수필이 주어지면, 우선 수필을 문장 단위로 나누어 주세요. 그리고 각 문장을 보고 그 문장이 속한 카테고리를 소재 측면, 문학적 표현 방식 측면에서 나열해 주세요. 응답은 다음 JSON 형식으로 해주세요:
        {
          "sentences": [
            {
              "content": "문장",
              "a": ["소재 측면 카테고리"],
              "b": ["문학적 표현 방식 측면 카테고리"],
          ],
        }`,
      },
      {
        role: 'user',
        content: `${validationResult.data.content}`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const storyInsertionPromise = supabase
    .from('story')
    .insert({
      ...validationResult.data,
      user_id: user.id,
      pen_name: validationResult.data.pen_name ?? user.username,
    })
    .select('*')
    .single();

  const [tagAiResponse, storyInsertionResponse] = await Promise.all([
    tagAiPromise,
    storyInsertionPromise,
  ]);

  if (storyInsertionResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: storyInsertionResponse.status,
        message: storyInsertionResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: storyInsertionResponse.error,
      }),
      { status: storyInsertionResponse.status },
    );
  }

  const sentences = JSON.parse(tagAiResponse.choices[0].message.content ?? '{}')
    .sentences as {
    content: string;
    a: string[];
    b: string[];
  }[];

  const topicTags = new Set<string>();
  const formTags = new Set<string>();
  sentences.forEach((item) => {
    item.a.forEach((value) => {
      topicTags.add(value);
    });
    item.b.forEach((value) => {
      formTags.add(value);
    });
  });

  const tagsInsertionPromise = supabase
    .from('sentence_tag')
    .upsert(
      [
        ...Array.from(topicTags).map(
          (item) => ({ value: item, type: 'topic' }) as const,
        ),
        ...Array.from(formTags).map(
          (item) => ({ value: item, type: 'form' }) as const,
        ),
      ],
      { ignoreDuplicates: true },
    )
    .select('*');

  const sentencesInsertionPromise = supabase
    .from('sentence')
    .insert(
      sentences.map((item) => ({
        story_id: storyInsertionResponse.data.id,
        content: item.content,
      })),
    )
    .select('*');

  const [tagsResponse, sentencesResponse] = await Promise.all([
    tagsInsertionPromise,
    sentencesInsertionPromise,
  ]);

  if (tagsResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: tagsResponse.status,
        message: tagsResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: tagsResponse.error,
      }),
      { status: tagsResponse.status },
    );
  }

  if (sentencesResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: sentencesResponse.status,
        message: sentencesResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: sentencesResponse.error,
      }),
      { status: sentencesResponse.status },
    );
  }

  const tagIdMap = tagsResponse.data.reduce(
    (prev, cur) => ({ ...prev, [cur.value]: cur.id }),
    {} as Record<string, number | undefined>,
  );

  const sentenceIdMap = sentences.reduce(
    (prev, cur) => {
      const foundItem = sentencesResponse.data.find(
        (a) => a.content === cur.content,
      );
      if (foundItem) {
        return { ...prev, [cur.content]: foundItem.id };
      }
      return prev;
    },
    {} as Record<string, number | undefined>,
  );

  const sentenceTagLogInsertionResponse = await supabase
    .from('sentence_tag_log')
    .insert(
      sentences
        .reduce(
          (prev, cur) => [
            ...prev,
            ...cur.a.map((item) => ({
              sentence_id: sentenceIdMap[cur.content] ?? -1,
              tag_id: tagIdMap[item] ?? -1,
            })),
            ...cur.b.map((item) => ({
              sentence_id: sentenceIdMap[cur.content] ?? -1,
              tag_id: tagIdMap[item] ?? -1,
            })),
          ],
          [] as { sentence_id: number; tag_id: number }[],
        )
        .filter((item) => item.sentence_id !== -1 && item.tag_id !== -1),
    );

  if (sentenceTagLogInsertionResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: sentenceTagLogInsertionResponse.status,
        message: sentenceTagLogInsertionResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: sentenceTagLogInsertionResponse.error,
      }),
      { status: sentenceTagLogInsertionResponse.status },
    );
  }

  return NextResponse.json(new ApiResponse(storyInsertionResponse.data), {
    status: 201,
  });
};
