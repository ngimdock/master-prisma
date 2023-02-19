import { PrismaClient, Role } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log({ message: "hello" });
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
