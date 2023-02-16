import { test as base } from '@playwright/test';

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
          username: `ggn-username-${new Date().getTime()}`,
          email: `ggn-email-${new Date().getTime()}`,
          password: `ggn-password-${new Date().getTime()}`,
        },
      },
    });
    const { user } = await response.json();
    await use(user);
  },
});
