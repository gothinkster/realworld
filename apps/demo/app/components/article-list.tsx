'use client';

import { Article } from '../models/article.model';
import ArticlePreview from './article-preview';
import { useArticles } from '../services/article.service';
import { Pagination } from './pagination';

interface ArticleListProps {
  limit?: number;
}

export default function ArticleList({ limit = 10 }: ArticleListProps = {}) {
  const { articles, articlesCount, isLoading, isError } = useArticles({ limit });
  return (
    <>
      {isLoading && <div>Loading articles...</div>}
      {isError && <div>Error</div>}
      {articles &&
        articles.map((article: Article, index: number) => (
          <ArticlePreview key={index} article={article} />
        ))}

      {articles && articlesCount.length > 0 && <Pagination count={articlesCount} limit={10} />}
    </>
  );
}
