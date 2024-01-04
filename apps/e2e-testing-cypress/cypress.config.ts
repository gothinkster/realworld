import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname, {
      bundler: 'webpack',
    }),
    baseUrl: 'https://conduit.realworld.how',
    experimentalRunAllSpecs: true,
    env: {
      prefix: 'schmilblick',
    },
  },
});
