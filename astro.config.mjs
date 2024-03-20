import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://jemand771.net',
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus"
    }
  }
});