import { Response, Server } from "miragejs";
import { AppSchema } from "@/libs";
import { responseMapper } from "@/utilities/helper";

export const bookRouter = (server: Server): void => {
  server.get(
    "/books",
    (schema: AppSchema) => {
      const books = schema.all("book");
      const seconds = new Date().getSeconds();

      return seconds % 17 === 0
        ? new Response(401, {}, { message: "Unauthorized" })
        : new Response(
            200,
            {},
            responseMapper({
              data: books.models,
              meta: {
                page: 1,
                per_page: books.length,
                total_pages: 1,
                total: books.length,
              },
            }),
          );
    },
    { timing: 4000 },
  );
};
