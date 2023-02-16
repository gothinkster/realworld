import { APIRequestContext } from 'playwright';
import { APIResponse } from '@playwright/test';

export const createUser = async (
  request: APIRequestContext,
  username = `ggn-username-${new Date().getTime()}`,
  email = `ggn-email-${new Date().getTime()}`,
  password = `ggn-password-${new Date().getTime()}`,
): Promise<APIResponse> => {
  return request.post('/api/users', {
    data: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

export const login = async (
  request: APIRequestContext,
  email: string,
  password: string,
): Promise<APIResponse> => {
  return request.post('/api/users/login', {
    data: {
      user: {
        email,
        password,
      },
    },
  });
};
