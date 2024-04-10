export const ErrorCode = {
  VALIDATION_FAILED: 1,
  NOT_FOUND: 2,
  UNAUTHORIZED: 3,
  SUPABASE_ERROR: 5,
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

interface ErrorResponseInfo {
  status: number;
  message: string;
  errorCode?: ErrorCode;
  timestamp?: number;
  extra?: any;
}

export class ErrorResponse implements ErrorResponseInfo {
  public readonly status: number;
  public readonly message: string;
  public readonly errorCode?: ErrorCode;
  public readonly timestamp: number;
  public readonly extra?: any;

  constructor(info: ErrorResponseInfo) {
    this.status = info.status;
    this.message = info.message;
    this.errorCode = info.errorCode;
    this.timestamp = info.timestamp ?? new Date().getTime();
    this.extra = info.extra;
  }
}

interface ApiResponseInfo {}

export class ApiResponse<T> implements ApiResponseInfo {
  public readonly data: T;

  constructor(data: T, info?: ApiResponseInfo) {
    this.data = data;
  }
}
