/**
 * Canonical URL Generator
 * Deterministic canonical URL construction using the single authoritative site origin.
 */

import { buildCanonicalUrl } from '../routing/route-builders';
import { SEO_CONFIG } from './seo-config';

/**
 * Returns the authoritative origin URL (e.g., "https://www.growthservice.in").
 */
export function getCanonicalOrigin(): string {
  return SEO_CONFIG.canonicalOrigin;
}

/**
 * Generates an absolute canonical URL for a given path.
 * Guarantees adherence to canonical origin and trailing-slash policies.
 */
export function getCanonicalUrl(path: string): string {
  return buildCanonicalUrl(path, SEO_CONFIG.canonicalOrigin);
}
