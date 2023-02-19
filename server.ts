import { PrismaClient, Role, User } from "@prisma/client";
const prisma = new PrismaClient();

const USERS = [
  {
    email: "1@gmail.com",
    name: "1",
    age: 20,
  },
  {
    email: "2@gmail.com",
    name: "2",
    age: 21,
  },
];

async function main() {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
    skip: 2,
    take: 3,
    distinct: ["name"],
  });

  console.log({ users });
}

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err.massage);
  })
  .finally(async () => {
    console.log("In the finally");

    await prisma.$disconnect();
  });
