import { ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import 'server-only';

export const parseRequest = <T extends z.ZodTypeAny>(
  schema: T,
  request: z.infer<T>,
):
  | { success: true; data: z.infer<T> }
  | { success: false; response: NextResponse } => {
  const parsedResult = schema.safeParse(request);

  if (!parsedResult.success) {
    return {
      success: false,
      response: NextResponse.json(
        new ErrorResponse({
          status: 422,
          message: parsedResult.error.issues[0].message,
          errorCode: ErrorCode.VALIDATION_FAILED,
        }),
        { status: 422 },
      ),
    };
  }

  return { success: true, data: parsedResult.data };
};
