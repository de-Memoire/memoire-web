import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { StoryType, StoryTypeList } from '@/app/_constant/story';
import { getShuffledArray } from '@/app/_utils/algorithm';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  type: z.enum(StoryTypeList),
  limit: z.number().min(1).optional(),
});

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const validationResult = parseRequest(requestSchema, {
    type: searchParams.get('type') as StoryType,
    limit: searchParams.get('limit')
      ? Number(searchParams.get('limit'))
      : undefined,
  });

  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const { limit = 4 } = validationResult.data;

  const supabase = createSupabaseServerClient();

  const result = await supabase
    .from('story')
    .select('*')
    .eq('type', validationResult.data.type)
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

  const stories = result.data;

  if (stories.length < limit) {
    return NextResponse.json(new ApiResponse(stories), { status: 200 });
  }

  return NextResponse.json(
    new ApiResponse(getShuffledArray(stories).slice(0, limit)),
    { status: 200 },
  );
};
