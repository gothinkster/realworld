import { SearchParams } from '../models/search-params.model';
import { Article } from '../models/article.model';
import { getHeaders } from '../utils/headers.util';

export async function getArticles(
  { offset, author, tag, favorited, limit }: SearchParams,
  signal: AbortSignal | undefined,
): Promise<{ articles: Article[]; articlesCount: number }> {
  const params = new URLSearchParams({
    limit: (limit || '10').toString(),
    offset: (offset || '0').toString(),
    ...(author ? { author } : {}),
    ...(tag ? { tag } : {}),
    ...(favorited ? { favorited } : {}),
  });
  return fetch('https://api.realworld.io/api/articles?' + params, {
    headers: getHeaders(),
    signal,
  }).then(res => res.json());
}

export async function getPersonalFeed(
  { offset, limit }: SearchParams,
  signal: AbortSignal | undefined,
): Promise<{ articles: Article[]; articlesCount: number }> {
  const params = new URLSearchParams({
    limit: (limit || '10').toString(),
    offset: (offset || '0').toString(),
  });
  return fetch('https://api.realworld.io/api/articles/feed?' + params, {
    headers: getHeaders(),
    signal,
  }).then(res => res.json());
}

export async function getArticle(slug: string): Promise<Article> {
  return fetch(`https://api.realworld.io/api/articles/${slug}`, {
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.article);
}

export async function createArticle(article: unknown): Promise<Response> {
  return fetch('https://api.realworld.io/api/articles', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ article }),
  });
}

export async function updateArticle(slug: string, article: unknown): Promise<Response> {
  return fetch(`https://api.realworld.io/api/articles/${slug}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ article }),
  });
}

export async function deleteArticle(slug: string): Promise<Response> {
  return fetch(`https://api.realworld.io/api/articles/${slug}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
}

export async function favoriteArticle(slug: string): Promise<Article> {
  return fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.article);
}

export async function unfavoriteArticle(slug: string): Promise<Article> {
  return fetch(`https://api.realworld.io/api/articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.article);
}
