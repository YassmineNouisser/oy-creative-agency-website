import type { MetadataRoute } from 'next';

const BASE_URL = 'https://oycreative.tn';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/who-we-are',
    '/services',
    '/packs',
    '/shop',
    '/work',
    '/contact',
  ];

  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
}
