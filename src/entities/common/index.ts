import { AxiosError } from "axios";

export type TMetaPaginatedResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type TErrorItem = {
  message?: string | null;
  errors?: Array<string> | null;
};

export type TMetaErrorResponse<E = TErrorItem> = AxiosError<E>;

export type TMetaResponse<T = null | undefined> = {
  data: T;
  meta: TMetaPaginatedResponse;
};
