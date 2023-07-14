import { Author } from '../models/author.model';
import { getHeaders } from '../utils/headers.util';

export async function getProfile(username: string): Promise<Author> {
  return fetch(`https://api.realworld.io/api/profiles/${username}`, {
    cache: 'no-store',
    method: 'GET',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.profile);
}

export async function followUser(username: string): Promise<Author> {
  return fetch(`https://api.realworld.io/api/profiles/${username}/follow`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.profile);
}

export async function unfollowUser(username: string): Promise<Author> {
  return fetch(`https://api.realworld.io/api/profiles/${username}/follow`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
    .then(res => res.json())
    .then(res => res.profile);
}
