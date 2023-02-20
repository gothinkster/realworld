import type { PlaywrightTestConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    baseURL: 'https://api.realworld.how',
  },
};

export default config;
