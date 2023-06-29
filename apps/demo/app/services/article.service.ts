'use client';

import { SearchParams } from '../models/search-params.model';
import { Article } from '../models/article.model';
import useSWR from 'swr';

export async function getArticles({
  offset,
  author,
  tag,
  favorited,
  limit,
}: SearchParams): Promise<{ data: Article[] }> {
  const params = new URLSearchParams({
    limit: (limit || '10').toString(),
    offset: (offset || '0').toString(),
    ...(author ? { author } : {}),
    ...(tag ? { tag } : {}),
    ...(favorited ? { favorited } : {}),
  });
  const res = await fetch('https://api.realworld.io/api/articles' + '?' + params);
  return await res.json();
}

export function useArticles({ offset, author, tag, favorited, limit }: SearchParams) {
  const token = localStorage.getItem('token') as string;
  const params = new URLSearchParams({
    limit: (limit || '10').toString(),
    offset: (offset || '0').toString(),
    ...(author ? { author } : {}),
    ...(tag ? { tag } : {}),
    ...(favorited ? { favorited } : {}),
  });

  const { data, error, isLoading } = useSWR('/api/articles' + '?' + params, url =>
    fetch('https://api.realworld.io' + url, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Token ${encodeURIComponent(token)}` } : {}),
      },
    }).then(res => res.json()),
  );

  return {
    articles: data?.articles,
    articlesCount: data?.articlesCount,
    isLoading,
    isError: error,
  };
}

export function useTags() {
  const { data, error, isLoading } = useSWR('/api/tags', url =>
    fetch('https://api.realworld.io' + url)
      .then(res => res.json())
      .then(data => data.tags),
  );

  return {
    tags: data,
    isLoading,
    isError: error,
  };
}

export async function favoriteArticle(slug: string): Promise<Article> {
  const token = localStorage.getItem('token') as string;
  const res = await fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
  });
  const data = await res.json();
  return data.article;
}

export async function unfavoriteArticle(slug: string): Promise<Article> {
  const token = localStorage.getItem('token') as string;
  const res = await fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
  });
  const data = await res.json();
  return data.article;
}
