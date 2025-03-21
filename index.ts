import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "john@gmail.com",
  //     },
  //});
  //  const user = await prisma.user.findMany();

  //create article and associate with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "first article",
  //       body: "This is a test first article",
  //       published: true,
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //
  const article = await prisma.article.findMany();
  //  console.log(user);

  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
