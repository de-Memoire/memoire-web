import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  id: z.number(),
});

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const validationResult = parseRequest(requestSchema, {
    id: Number(params.id),
  });

  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const { id } = validationResult.data;

  const supabase = createSupabaseServerClient();

  const authorizationResult = await authorize(supabase);
  if (!authorizationResult.isSuccess) {
    return authorizationResult.response;
  }

  const { user } = authorizationResult;

  const result = await supabase
    .from('temporary_story')
    .select('*')
    .eq('id', id)
    .is('deleted_at', null)
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

  if (result.data.user_id !== user.id) {
    return NextResponse.json(
      new ErrorResponse({
        status: 401,
        message: '본인의 임시 저장 스토리가 아닙니다',
        errorCode: ErrorCode.NOT_OWNED_CONTENT,
      }),
      { status: 401 },
    );
  }

  return NextResponse.json(new ApiResponse(result.data), { status: 200 });
};
