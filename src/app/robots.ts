import type { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SEO_CONFIG.canonicalOrigin}/sitemap.xml`,
  };
}
