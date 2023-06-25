'use client';

import { Article } from '../models/article.model';
import ArticlePreview from './article-preview';
import { useArticles } from '../services/article.service';
import { Pagination } from './pagination';

export default function ArticleList() {
  const { articles, articlesCount, isLoading, isError } = useArticles();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {articles &&
        articles.map((article: Article, index: number) => (
          <ArticlePreview key={index} article={article} />
        ))}

      {articles && articlesCount.length > 0 && <Pagination count={articlesCount} limit={10} />}
    </>
  );
}
