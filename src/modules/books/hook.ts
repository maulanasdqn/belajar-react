import { TBookResponse, TMetaErrorResponse } from "@/entities";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getBooks } from "./api";

export const useGetBooks = (
  type: "mock" | "api",
): UseQueryResult<TBookResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["books", type],
    queryFn: async () => await getBooks(type),
  });
};
