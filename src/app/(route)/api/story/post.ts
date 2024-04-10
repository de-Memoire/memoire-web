import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { StoryType } from '@/app/_constant/story';
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

  const user = authorizationResult.user;

  const { data, status, error, statusText } = await supabase
    .from('story')
    .insert({
      ...validationResult.data,
      user_id: user.id,
      pen_name: validationResult.data.pen_name ?? user.username,
    })
    .select('*')
    .single();

  if (error) {
    return NextResponse.json(
      new ErrorResponse({
        status: status,
        message: statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: error,
      }),
      { status: status },
    );
  }

  return NextResponse.json(new ApiResponse(data), { status: 201 });
};
