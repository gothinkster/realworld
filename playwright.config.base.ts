import { PlaywrightTestConfig } from '@playwright/test';

const baseURL = process.env.E2E_BASE_URL || 'http://localhost:4200/';

export const baseConfig: PlaywrightTestConfig = {
  retries: 3,
  maxFailures: 2,
  timeout: 120000,
  use: {
    baseURL,
  },
};
