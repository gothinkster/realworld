import prisma from '../../prisma/prisma-client';
import { Tag } from '../models/tag.model';

const getTags = async (username?: string): Promise<string[]> => {
  const queries = [];
  queries.push({ demo: true });

  if (username) {
    queries.push({
      username: {
        equals: username,
      },
    });
  }

  const tags = await prisma.tag.findMany({
    where: {
      articles: {
        some: {
          author: {
            OR: queries,
          },
        },
      },
    },
    select: {
      name: true,
    },
    orderBy: {
      articles: {
        _count: 'desc',
      },
    },
    take: 10,
  });

  return tags.map((tag: Tag) => tag.name);
};

export default getTags;
