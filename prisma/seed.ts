import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
    },
  });

  console.log({ user });
}

main()
  .then(async () => {
    console.log("Database seeded successfully!");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
