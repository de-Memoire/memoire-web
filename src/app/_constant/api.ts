export const ErrorCode = {
  VALIDATION_FAILED: 1,
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

interface ErrorResponseInfo {
  status: number;
  message: string;
  errorCode?: ErrorCode;
  timestamp?: number;
}

export class ErrorResponse implements ErrorResponseInfo {
  public readonly status: number;
  public readonly message: string;
  public readonly errorCode?: ErrorCode;
  public readonly timestamp: number;

  constructor(info: ErrorResponseInfo) {
    this.status = info.status;
    this.message = info.message;
    this.errorCode = info.errorCode;
    this.timestamp = info.timestamp ?? new Date().getTime();
  }
}
