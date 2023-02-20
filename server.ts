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
    where: {
      preference: {
        emailUpdates: true,
      },

      writenPost: {
        every: {
          title: "test",
        },
      },
    },

    orderBy: { name: "asc" },
    include: {
      preference: true,
    },
  });

  const posts = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 23,
        },
      },
    },
  });

  console.log({ users });
  console.log({ posts });
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
