import { PrismaClient, Role, User } from "@prisma/client";
const prisma = new PrismaClient();

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
