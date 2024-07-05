import { PrismaClient } from "@prisma/client";
import type User from "@/core/models/User";

import type UserInput from "@/core/models/UserInput";

import { faker } from "@faker-js/faker";

export default class UserRepository {
  constructor(private db = new PrismaClient()) {}

  findAll() {
    return this.db.user.findMany();
  }

  findById(id: User["id"]) {
    return this.db.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  save(user: UserInput) {
    return this.db.user.upsert({
      create: {
        ...user,
        avatar: faker.image.avatar(),
      },
      update: user,
      where: {
        id: user.id ?? "",
      },
    });
  }

  delete(id: User["id"]) {
    return this.db.user.delete({
      where: {
        id,
      },
    });
  }
}
