import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  id: z.number(),
});

export const getStory = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const validationResult = parseRequest(requestSchema, {
    id: Number(params.id),
  });

  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const id = validationResult.data.id;

  const supabase = createSupabaseServerClient();

  const result = await supabase
    .from('story')
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

  return NextResponse.json(new ApiResponse(result.data), { status: 200 });
};
