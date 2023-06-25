'use client';

import { SearchParams } from '../models/search-params.model';
import useSWR from 'swr';

export async function getArticles(
  { offset, author, tag, favorited }: SearchParams = {
    offset: 0,
  },
): Promise<any> {
  const params = new URLSearchParams({
    limit: '10',
    offset: offset.toString(),
    ...(author ? { author } : {}),
    ...(tag ? { tag } : {}),
    ...(favorited ? { favorited } : {}),
  });
  const res = await fetch('https://api.realworld.io/api/articles' + '?' + params);
  return await res.json();
}

export function useArticles(
  { offset, author, tag, favorited }: SearchParams = {
    offset: 0,
  },
) {
  const params = new URLSearchParams({
    limit: '10',
    offset: offset.toString(),
    ...(author ? { author } : {}),
    ...(tag ? { tag } : {}),
    ...(favorited ? { favorited } : {}),
  });

  const { data, error, isLoading } = useSWR('/api/articles' + '?' + params, url =>
    fetch('https://api.realworld.io' + url).then(res => res.json()),
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

export async function favoriteArticle(slug: string): Promise<any> {
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

export async function unfavoriteArticle(slug: string): Promise<any> {
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
