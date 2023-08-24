import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";
import { Endpoints } from "./endpoints";
import { Models } from "./models";
import { Factories } from "./factories";

export function makeServer({ environment = "test" }): void {
  const serverState = createServer({
    environment,
    models: Models,
    factories: Factories,
    seeds(server) {
      server.createList("book", faker.number.int({ min: 2, max: 25 }));
    },
  });

  serverState.logging = true;

  serverState.post(`${import.meta.env.VITE_API_URL}/:any`, () => new Promise((): void => {}));

  serverState.urlPrefix = import.meta.env.API_PREFIX ?? "/api";

  for (const namespace of Object.keys(Endpoints)) {
    Endpoints[namespace as keyof typeof Endpoints](serverState);
  }

  serverState.namespace = "";
  serverState.passthrough();
  console.log({ dump: serverState.db.dump() });
}
