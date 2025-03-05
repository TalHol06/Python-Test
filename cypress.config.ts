import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },

  e2e: {
    baseUrl: 'https://python-test-backend-iwv9.onrender.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
