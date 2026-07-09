import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/data/profile';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.lang === 'zh');
  return rss({
    title: `${siteConfig.nameZh} - Blog`,
    description: siteConfig.description,
    site: context.site ?? siteConfig.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/zh/blog/${post.slug}/`
    }))
  });
}
