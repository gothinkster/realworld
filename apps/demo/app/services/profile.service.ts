import { Author } from '../models/author.model';

export async function getProfile(username: string): Promise<Author> {
  const response = await fetch(`https://api.realworld.io/api/profiles/${username}`, {
    cache: 'no-store',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data.profile;
}

export async function followUser(username: string): Promise<Author> {
  const token = localStorage.getItem('token') as string;
  const response = await fetch(`https://api.realworld.io/api/profiles/${username}/follow`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
  });
  const data = await response.json();
  return data.profile;
}

export async function unfollowUser(username: string): Promise<Author> {
  const token = localStorage.getItem('token') as string;
  const response = await fetch(`https://api.realworld.io/api/profiles/${username}/follow`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
  });
  const data = await response.json();
  return data.profile;
}
