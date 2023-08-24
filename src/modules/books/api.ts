import { TBookResponse } from "@/entities";
import { api, mock } from "@/services";
import { match } from "ts-pattern";

export const getBooks = async (type: "mock" | "api"): Promise<TBookResponse> =>
  match(type)
    .with("mock", async () => {
      const { data } = await mock.get("/books");
      return data;
    })
    .with("api", async () => {
      const { data } = await api.get("/books");
      return data;
    })
    .exhaustive();
