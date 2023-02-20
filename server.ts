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
  const user = await prisma.user.update({
    where: {
      email: "ngimdock@gmail.com",
    },

    data: {
      preference: {
        create: {
          emailUpdates: true,
        },
      },
    },

    include: {
      preference: true,
    },
  });

  console.log({ user });
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
