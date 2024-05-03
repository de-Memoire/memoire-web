import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  story_id: z.number(),
});

export const postBookmark = async (request: NextRequest) => {
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

  const result = await supabase
    .from('bookmark')
    .insert({
      story_id: validationResult.data.story_id,
      user_id: user.id,
    })
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

  return NextResponse.json(new ApiResponse(result.data), {
    status: 201,
  });
};
