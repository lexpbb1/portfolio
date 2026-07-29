import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
