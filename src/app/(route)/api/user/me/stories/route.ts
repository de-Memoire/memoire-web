import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { authorize } from '@/app/_utils/server/authorization';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const supabase = createSupabaseServerClient();

  const authorizationResult = await authorize(supabase);
  if (!authorizationResult.isSuccess) {
    return authorizationResult.response;
  }

  const { user } = authorizationResult;

  const result = await supabase
    .from('story')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

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
    status: 200,
  });
};
