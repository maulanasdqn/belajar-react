import { Registry } from "miragejs";
import Schema from "miragejs/orm/schema";

import { Models } from "./models";
import { Factories } from "./factories";

type AppRegistry = Registry<typeof Models, typeof Factories>;

export type AppSchema = Schema<AppRegistry>;
