export function ServiceReturnSuccess<T>(data: T): ServiceReturnSuccess<T> {
  return {
    isSucceed: true,
    data
  };
}

export function ServiceReturnFail(
  errorCode: ErrorCode,
  errorData: object | string = undefined
): ServiceReturnFail {
  return {
    isSucceed: false,
    errorCode,
    errorData
  };
}

export type ServiceReturn<T> = ServiceReturnFail | ServiceReturnSuccess<T>;

export type ServiceReturnFail = {
  isSucceed: false;
  errorCode: ErrorCode;
  errorData: object | string;
};

export type ServiceReturnSuccess<T> = {
  isSucceed: true;
  data: T;
};

export enum ErrorCode {
  FieldMissing,
  InvalidFieldFormat
}
