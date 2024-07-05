import type User from "@/core/models/User";
import { faker } from "@faker-js/faker";

const buildUser = (): User => {
  return {
    id: "",
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
  };
};

export default buildUser;
