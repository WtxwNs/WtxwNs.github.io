import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://wtxwns.github.io',
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeSlug]
    }),
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
