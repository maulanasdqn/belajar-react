import { TMetaResponse } from "@/entities";

export type TBookItem = {
  id: string;
  title: string;
  author: string;
  year: number;
};

export type TBookResponse = TMetaResponse<TBookItem>;
