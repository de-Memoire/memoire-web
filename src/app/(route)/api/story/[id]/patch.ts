import { ApiResponse, ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { authorize } from '@/app/_utils/server/authorization';
import { parseRequest } from '@/app/_utils/server/validation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  story_id: z.number(),
  content: z.string().min(1).optional(),
  cover_image_url: z.string().min(1).optional(),
  parent_story_id: z.number().optional(),
  signature_image_url: z.string().min(1).optional(),
});

export const patchStory = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const body = await request.json();

  const validationResult = parseRequest(requestSchema, {
    ...body,
    story_id: Number(params.id),
  });
  if (!validationResult.isSuccess) {
    return validationResult.response;
  }

  const { story_id, ...validatedBody } = validationResult.data;

  const supabase = createSupabaseServerClient();

  const authorizationResult = await authorize(supabase);
  if (!authorizationResult.isSuccess) {
    return authorizationResult.response;
  }

  const { user } = authorizationResult;

  const storyResponse = await supabase
    .from('story')
    .select('*')
    .eq('id', story_id)
    .single();

  if (storyResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: storyResponse.status,
        message: storyResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: storyResponse.error,
      }),
      { status: storyResponse.status },
    );
  }

  if (user.id !== storyResponse.data.user_id) {
    return NextResponse.json(
      new ErrorResponse({
        status: 401,
        message: '본인이 작성한 스토리만 수정할 수 있습니다',
        errorCode: ErrorCode.NOT_OWNED_CONTENT,
      }),
      { status: 401 },
    );
  }

  const storyPatchResponse = await supabase
    .from('story')
    .update({ ...storyResponse.data, ...validatedBody })
    .eq('id', story_id);

  if (storyPatchResponse.error) {
    return NextResponse.json(
      new ErrorResponse({
        status: storyPatchResponse.status,
        message: storyPatchResponse.statusText,
        errorCode: ErrorCode.SUPABASE_ERROR,
        extra: storyPatchResponse.error,
      }),
      { status: storyPatchResponse.status },
    );
  }

  return new Response(null, {
    status: 204,
  });
};
