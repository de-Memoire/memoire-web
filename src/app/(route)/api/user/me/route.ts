import { ApiResponse } from '@/app/_constant/api';
import { authorize } from '@/app/_utils/server/authorization';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const supabase = createSupabaseServerClient();

  const authorizationResult = await authorize(supabase);
  if (!authorizationResult.isSuccess) {
    return authorizationResult.response;
  }

  return NextResponse.json(new ApiResponse(authorizationResult.user), {
    status: 200,
  });
};
