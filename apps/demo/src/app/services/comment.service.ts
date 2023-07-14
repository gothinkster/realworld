import { getHeaders } from '../utils/headers.util';
import { Comment } from '../models/comment.model';

export async function getComments(slug: string): Promise<Comment[]> {
  return fetch(`https://api.realworld.io/api/articles/${slug}/comments`, {
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.comments);
}

export async function createComment(slug: string, body: string): Promise<Comment> {
  return fetch(`https://api.realworld.io/api/articles/${slug}/comments`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      comment: {
        body,
      },
    }),
  })
    .then(res => res.json())
    .then(res => res.comment);
}

export async function deleteComment(slug: string, id: number): Promise<Response> {
  return fetch(`https://api.realworld.io/api/articles/${slug}/comments/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
}
