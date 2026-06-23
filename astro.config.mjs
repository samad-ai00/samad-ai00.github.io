import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://samad-ai00.github.io',
  integrations: [tailwind()],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
});