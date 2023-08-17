import { TBookResponse } from "@/entities";
import { api, mock } from "@/services";

export const getBooks = async (): Promise<TBookResponse> => {
  const { data } = await api.get("/books");
  return data;
};

export const getMockBooks = async (): Promise<TBookResponse> => {
  const { data } = await mock.get("/books");
  return data;
};
