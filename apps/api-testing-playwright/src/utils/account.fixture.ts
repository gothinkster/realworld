import { test as base } from '@playwright/test';
import { uuid } from 'uuidv4';

type Account = {
  email: string;
  username: string;
  token: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const test = base.extend<{ account: Account }>({
  account: async ({ request }, use) => {
    console.log('request');
    const response = await request.post('/api/users', {
      data: {
        user: {
          username: `ggn-username-${uuid()}`,
          email: `ggn-email-${uuid()}`,
          password: `ggn-password-${uuid()}`,
        },
      },
    });
    const { user } = await response.json();
    await use(user);
  },
});
