import { ErrorCode, ErrorResponse } from '@/app/_constant/api';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import 'server-only';

export const parseRequest = <T extends z.ZodTypeAny>(
  schema: T,
  request: z.infer<T>,
):
  | { isSuccess: true; data: z.infer<T> }
  | { isSuccess: false; response: NextResponse } => {
  const parsedResult = schema.safeParse(request);

  if (!parsedResult.success) {
    return {
      isSuccess: false,
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

  return { isSuccess: true, data: parsedResult.data };
};
