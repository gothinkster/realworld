import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
