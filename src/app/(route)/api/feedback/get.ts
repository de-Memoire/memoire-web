import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  story_id: z.number(),
});

export const getFeedback = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const validationResult = parseRequest(requestSchema, {
    story_id: Number(searchParams.get('id')),
  });

  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const storyId = validationResult.data.story_id;

  const supabase = createSupabaseServerClient();

  const result = await supabase
    .from('feedback')
    .select(
      `
    *,
    feedback_tag_log (
      feedback_tag (
        id,
        value
      )
    )
    `,
    )
    .eq('story_id', storyId)
    .is('deleted_at', null);

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

  return NextResponse.json(
    new ApiResponse(
      result.data.map((item) => ({
        ...item,
        feedback_tag_log: undefined,
        tags: item.feedback_tag_log
          .map((tagLog) => tagLog.feedback_tag)
          .filter((tag) => !!tag),
      })),
    ),
    { status: 200 },
  );
};
