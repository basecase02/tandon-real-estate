export const dynamic = 'force-static';
import { listings, menu, posts, site } from '@/lib/data';
export default function sitemap() {
  return [
    ...[...menu.map(m => m.href), '/get-started'].map(h => ({ url: site.url + (h === '/' ? '' : h), changeFrequency: 'weekly', priority: h === '/' ? 1 : 0.8 })),
    ...listings.map(l => ({ url: `${site.url}/property/${l.slug}`, changeFrequency: 'daily', priority: 0.7 })),
    ...posts.map(p => ({ url: `${site.url}/blog/${p.slug}`, changeFrequency: 'monthly', priority: 0.6 })),
  ];
}
