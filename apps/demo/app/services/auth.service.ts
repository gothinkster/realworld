import { LoginCredentials } from '../models/login-credentials.model';
import { RegisterCredentials } from '../models/register-credentials.model';
export async function login(credentials: LoginCredentials) {
  return fetch('https://api.realworld.io/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: credentials }),
  });
}
export async function register(credentials: RegisterCredentials) {
  return fetch('https://api.realworld.io/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: credentials }),
  });
}
export async function getCurrentUser() {
  const token = localStorage.getItem('token') as string;
  return fetch('https://api.realworld.io/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
  });
}

export async function updateUser(user: unknown) {
  const token = localStorage.getItem('token') as string;
  return fetch('https://api.realworld.io/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
    body: JSON.stringify({ user }),
  });
}
