import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-01');

  const routes = [
    { path: '/', priority: 1 },
    { path: '/leistungen/', priority: 0.9 },
    { path: '/referenzen/', priority: 0.8 },
    { path: '/ueber-uns/', priority: 0.7 },
    { path: '/faq/', priority: 0.6 },
    { path: '/kontakt/', priority: 0.9 },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
