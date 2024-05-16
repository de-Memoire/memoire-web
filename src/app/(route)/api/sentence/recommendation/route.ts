import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { getShuffledArray } from '@/app/_utils/algorithm';
import { openai } from '@/app/_utils/openai';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  sentence: z.string().min(1),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validationResult = parseRequest(requestSchema, body);
  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const supabase = createSupabaseServerClient();

  const tagAiResponse = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: `당신은 수필 전문가입니다. 수필의 문장을 보고 그 문장이 속한 카테고리를 소재 측면에서 나열해 주세요. 응답은 다음 JSON 형식으로 해주세요:
        {
          "content": "문장",
          "categories": ["소재 측면 카테고리"],
        }`,
      },
      {
        role: 'user',
        content: `${validationResult.data.sentence}`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const tagAiJsonResult = JSON.parse(
    tagAiResponse.choices[0].message.content ?? '{}',
  );
  const tags: string[] = tagAiJsonResult.categories;

  const sentencesResponse = await supabase
    .from('sentence_tag')
    .select(
      `
  *,
  sentence_tag_log (
    sentence (
      *
    )
  )
  `,
    )
    .in('value', tags);

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

  const sentenceStoryIdMap: Record<string, number> = {};
  sentencesResponse.data.forEach((tagItem) => {
    tagItem.sentence_tag_log.forEach((tagLogItem) => {
      if (tagLogItem.sentence) {
        sentenceStoryIdMap[tagLogItem.sentence.content] =
          tagLogItem.sentence.story_id;
      }
    });
  });

  const sentences = Object.keys(sentenceStoryIdMap).map((item) => ({
    sentence: item,
    story_id: sentenceStoryIdMap[item],
  }));

  if (sentences.length < 3) {
    return NextResponse.json(new ApiResponse(sentences), { status: 200 });
  }

  return NextResponse.json(
    new ApiResponse(getShuffledArray(sentences).slice(0, 3)),
    { status: 200 },
  );
};
