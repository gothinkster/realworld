import { APIRequestContext } from 'playwright';
import { APIResponse } from '@playwright/test';
import { uuid } from 'uuidv4';

export const createUser = async (
  request: APIRequestContext,
  username = `ggn-username-${uuid()}`,
  email = `ggn-email-${uuid()}`,
  password = `ggn-password-${uuid()}`,
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
