import {
  randEmail,
  randFullName,
  randLine,
  randLines,
  randParagraph,
  randPassword,
  randWord,
} from '@ngneat/falso';
import { PrismaClient } from '@prisma/client';
import { RegisteredUser } from '../app/models/registered-user.model';
import { createUser } from '../app/services/auth.service';
import { addComment, createArticle } from '../app/services/article.service';

const prisma = new PrismaClient();

export const generateUser = async (): Promise<RegisteredUser> =>
  createUser({
    username: randFullName(),
    email: randEmail(),
    password: randPassword(),
    image: 'https://api.realworld.io/images/demo-avatar.png',
    demo: true,
  });

export const generateArticle = async (username: string) =>
  createArticle(
    {
      title: randLine(),
      description: randParagraph(),
      body: randLines({ length: 10 }).join(' '),
      tagList: randWord({ length: 4 }),
    },
    username,
  );

export const generateComment = async (username: string, slug: string) =>
  addComment(randParagraph(), slug, username);

export const main = async () => {
  const users = await Promise.all(Array.from({ length: 30 }, () => generateUser()));
  users?.map(user => user);

  // eslint-disable-next-line no-restricted-syntax
  for await (const user of users) {
    const articles = await Promise.all(
      Array.from({ length: 20 }, () => generateArticle(user.username)),
    );

    // eslint-disable-next-line no-restricted-syntax
    for await (const article of articles) {
      await Promise.all(users.map(userItem => generateComment(userItem.username, article.slug)));
    }
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
