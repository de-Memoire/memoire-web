import { AICompletionType } from '@/app/_constant/ai';
import type { UnionToTuple } from '@/app/_constant/type/util';
import { openai } from '@/app/_utils/openai';
import { parseRequest } from '@/app/_utils/server/validation';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { type NextRequest } from 'next/server';
import { z } from 'zod';

type AICompletionType =
  (typeof AICompletionType)[keyof typeof AICompletionType];
const aiCompletionTypeList = Object.values(
  AICompletionType,
) as UnionToTuple<AICompletionType>;

const systemPromptByType = {
  [AICompletionType.EXPRESSIVENESS]:
    '당신은 퇴고를 하고 있는 수필 작가입니다. 지금 쓰고 있는 문장을 더 멋진 표현을 써서 수정하려고 합니다. 문학적으로 표현력이 뛰어나야 합니다. 하지만 길지 않고 절제된 표현을 지향합니다. 새로운 영감을 얻기 위해 기존 문장과 많은 차이가 나게 수정해도 됩니다. 예를 들어 비유하는 대상을 다르게 설정하거나, 표현하는 방식을 바꾸어도 됩니다.',
  [AICompletionType.READABILITY]:
    "당신은 퇴고를 하고 있는 수필 작가입니다. 지금 쓰고 있는 문장을 더 읽기 쉽게 수정하려고 합니다. 문장 구조나 길이 등 읽기 어려운 부분을 고쳐야 합니다. 그리고 '하게체', '해요체' 등 문체를 유지해야 합니다.",
  [AICompletionType.NEXT_SENTENCE]:
    '당신은 수필을 쓰고 있는 작가입니다. 다음으로 이어서 쓸 문장을 만들려고 합니다. 앞으로 이어나갈 내용에 대한 설명이 주어지면, 이어서 쓸 문장을 3개 만들어 주세요. 문학적으로 표현력이 뛰어나야 합니다. 하지만 길지 않고 절제된 표현을 지향합니다.',
} as const;

/** `useCompletion` 명세 참고 */
const requestBodySchema = z.object({
  prompt: z.string().min(1).max(200),
  type: z.enum(aiCompletionTypeList),
});

export type AICompletionBody = z.infer<typeof requestBodySchema>;

export async function POST(request: NextRequest) {
  const rawBody = await request.json();
  const bodyToParse: AICompletionBody = {
    prompt: rawBody.prompt,
    type: rawBody.type,
  };

  const parsedResult = parseRequest(requestBodySchema, bodyToParse);
  if (!parsedResult.success) {
    return parsedResult.response;
  }

  const body = parsedResult.data;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    stream: true,
    messages: [
      {
        role: 'system',
        content: systemPromptByType[body.type],
      },
      {
        role: 'user',
        content: `${body.prompt}`,
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
