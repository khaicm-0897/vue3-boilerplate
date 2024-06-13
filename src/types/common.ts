export type ResponseSuccess<T = any> = {
  data: T;
  message?: string;
  success?: boolean;
};

export type ResponseError = {
  error: string;
  errorCode: string;
  message: string;
  method: string;
  path: string;
  status: number;
};
