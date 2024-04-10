import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { StoryType, StoryTypeList } from '@/app/_constant/story';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const commonRequestSchema = {
  pen_name: z.string().min(1).optional(),
  content: z.string().min(1),
  parent_story_id: z.number().optional(),
};

const quoteRequestSchema = z.object({
  ...commonRequestSchema,
  type: z.literal(StoryType.QUOTE),
});

const essayRequestSchema = z.object({
  ...commonRequestSchema,
  type: z.literal(StoryType.ESSAY),
  title: z.string().min(1).optional(),
});

const requestSchema = z.union([quoteRequestSchema, essayRequestSchema]);

export const postTemporaryStory = async (request: NextRequest) => {
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

  const user = authorizationResult.user;

  const result = await supabase
    .from('temporary_story')
    .insert({ ...validationResult.data, user_id: user.id })
    .select('*')
    .single();

  if (result.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: result.status,
        message: result.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
      }),
      { status: result.status },
    );
  }

  return NextResponse.json(new ApiResponse(result.data), { status: 201 });
};
