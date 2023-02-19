import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
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
