/**
 * Central SEO Configuration
 * Single source of truth for site origin, title templating, default meta tags, and robots directives.
 */

import { businessConfig } from '../config/business';
import { TitleTemplateOptions } from './seo-types';

export const SEO_CONFIG = {
  canonicalOrigin: businessConfig.canonicalOrigin,
  siteName: businessConfig.name,
  tagline: businessConfig.tagline,
  defaultDescription: businessConfig.description,
  defaultTitle: `${businessConfig.name} | ${businessConfig.tagline}`,
  defaultOgImage: `${businessConfig.canonicalOrigin}/logo.png`,
  themeColor: businessConfig.themeColor || '#7C3AED',
  robots: {
    indexFollow: 'index, follow' as const,
    noindexNofollow: 'noindex, nofollow' as const,
    noindexFollow: 'noindex, follow' as const,
  },
} as const;

/**
 * Deterministically constructs page titles with brand protection.
 * Prevents duplicate brand suffixes such as "Growth Service | Growth Service".
 */
export function formatPageTitle(pageTitle: string, options?: TitleTemplateOptions): string {
  const cleanTitle = pageTitle.trim();
  if (!cleanTitle) return SEO_CONFIG.defaultTitle;

  const brand = SEO_CONFIG.siteName;
  const separator = options?.separator || '|';

  // If title already includes the brand name, return as is
  if (cleanTitle.toLowerCase().includes(brand.toLowerCase())) {
    return cleanTitle;
  }

  // If brand suffix is explicitly disabled, return title
  if (options?.brandSuffix === false) {
    return cleanTitle;
  }

  return `${cleanTitle} ${separator} ${brand}`;
}
