import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { StoryType } from '@/app/_constant/story';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  story_id: z.number(),
  tags: z.array(z.number()),
  content: z.string().optional(),
});

export const postFeedback = async (request: NextRequest) => {
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

  const feedbackResult = await supabase
    .from('feedback')
    .insert({
      user_id: user.id,
      story_id: validationResult.data.story_id,
      content: validationResult.data.content,
    })
    .select('*')
    .single();

  if (feedbackResult.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: feedbackResult.status,
        message: feedbackResult.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: feedbackResult.error,
      }),
      { status: feedbackResult.status },
    );
  }

  const tagResult = await supabase.from('feedback_tag_log').insert(
    validationResult.data.tags.map((item, index) => ({
      tag_id: item,
      feedback_id: feedbackResult.data.id,
      index,
    })),
  );

  if (tagResult.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: tagResult.status,
        message: tagResult.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: tagResult.error,
      }),
      { status: tagResult.status },
    );
  }

  return NextResponse.json(new ApiResponse(feedbackResult.data), {
    status: 201,
  });
};
