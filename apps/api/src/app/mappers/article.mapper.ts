import authorMapper from './author.mapper';

const articleMapper = (article: any, username?: string) => ({
  slug: article.slug,
  title: article.title,
  description: article.description,
  body: article.body,
  tagList: article.tagList.map((tag: any) => tag.name),
  createdAt: article.createdAt,
  updatedAt: article.updatedAt,
  favorited: article.favoritedBy.some((item: any) => item.username === username),
  favoritesCount: article.favoritedBy.length,
  author: authorMapper(article.author, username),
});

export default articleMapper;
