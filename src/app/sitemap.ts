import type { MetadataRoute } from 'next';
import { getSitemapRoutes } from '@/routing';
import { citiesData } from '@/data/locations';
import { physicalOffices } from '@/data/offices';
import { servicesData } from '@/data/services';
import { SEO_CONFIG } from '@/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = SEO_CONFIG.canonicalOrigin;
  const urls: MetadataRoute.Sitemap = [];

  // 1. Static Canonical Indexable Pages from authoritative route registry
  for (const route of getSitemapRoutes()) {
    if (route.path === '/locations' || route.path === '/offices') {
      continue;
    }
    urls.push({
      url: `${origin}${route.canonical === '/' ? '' : route.canonical}`,
      changeFrequency: (route.changefreq || 'weekly') as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: route.priority || 0.7,
    });
  }

  // 2. Physical Offices Directory & Detail Pages
  urls.push({
    url: `${origin}/offices`,
    changeFrequency: 'monthly',
    priority: 0.8,
  });
  for (const office of physicalOffices) {
    urls.push({
      url: `${origin}/offices/${office.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // 3. Locations Directory & City Hub Pages
  urls.push({
    url: `${origin}/locations`,
    changeFrequency: 'weekly',
    priority: 0.9,
  });
  for (const city of citiesData) {
    urls.push({
      url: `${origin}/locations/${city.slug}`,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // 4. Canonical Programmatic Location-Service Combinations
  for (const city of citiesData) {
    for (const srvSlug of city.servicesAvailable) {
      const srv = servicesData.find((s) => s.slug === srvSlug);
      if (srv) {
        urls.push({
          url: `${origin}/${city.slug}/${srv.slug}`,
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  }

  return urls;
}
