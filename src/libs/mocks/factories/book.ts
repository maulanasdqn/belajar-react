import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import { TBookItem } from "@/entities";

export const bookFactory = Factory.extend<TBookItem>({
  id() {
    return faker.database.mongodbObjectId();
  },
  title() {
    return faker.commerce.productName();
  },
  author() {
    return faker.person.fullName();
  },
  year() {
    const min = 1950;
    const max = 2019;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
});
