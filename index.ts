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
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });

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

  // get all articles
  const articles = await prisma.article.findMany();

  //  const article = await prisma.article.findMany();

  //Create user and article and associate them
  // const user = await prisma.user.create({
  // data: {
  //   name: "Jan Doe",
  //   email: " jandoe@gmail.com",
  //   articles: {
  //     create: [
  //       {
  //         title: "Second article",
  //         body: "This is a test second article",
  //         published: true, // Ensure all required fields are included
  //       },
  //     ],
  //   },
  // },
  //});

  //create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Second article",
  //     body: "This is a test second article",
  //     published: true,
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });
  // console.log(article);
  console.log(articles);
  //console.log(users);
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
