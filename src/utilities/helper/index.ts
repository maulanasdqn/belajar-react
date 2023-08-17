import { TMetaErrorResponse, TMetaResponse } from "@/entities";

export const responseMapper = <T>(data: TMetaResponse<T>): TMetaResponse<T> => ({
  ...data,
});

export const responseErrorMapper = <E>(error: TMetaErrorResponse<E>): TMetaErrorResponse<E> => ({
  ...error,
});
