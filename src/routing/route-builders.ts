/**
 * Route Path & URL Builders
 * Centralized typed generators for all application paths and canonical absolute URLs.
 */

import { normalizePath } from './route-normalization';
import { businessConfig } from '../config/business';

/**
 * Builds the canonical path for the homepage.
 */
export function buildHomePath(): string {
  return '/';
}

/**
 * Builds the canonical path for a core service page.
 * Example: buildServicePath('seo') -> '/seo'
 */
export function buildServicePath(serviceSlug: string): string {
  const cleanSlug = serviceSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/${cleanSlug}`;
}

/**
 * Builds the canonical path for a physical office detail page.
 * Example: buildOfficePath('jaipur') -> '/offices/jaipur'
 */
export function buildOfficePath(officeSlug: string): string {
  const cleanSlug = officeSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/offices/${cleanSlug}`;
}

/**
 * Builds the canonical path for a city hub page.
 * Example: buildCityPath('jaipur') -> '/locations/jaipur'
 */
export function buildCityPath(citySlug: string): string {
  const cleanSlug = citySlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/locations/${cleanSlug}`;
}

/**
 * Builds the canonical programmatic path for a location-service landing page.
 * Example: buildLocationServicePath('jaipur', 'seo') -> '/jaipur/seo'
 */
export function buildLocationServicePath(citySlug: string, serviceSlug: string): string {
  const cleanCity = citySlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  const cleanService = serviceSlug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  return `/${cleanCity}/${cleanService}`;
}

/**
 * Builds an absolute canonical URL using the authoritative domain origin.
 * 
 * Rules:
 * - Uses businessConfig.canonicalOrigin ("https://www.growthservice.in")
 * - Formats root path as "https://www.growthservice.in/"
 * - Formats subpaths without trailing slash ("https://www.growthservice.in/seo")
 */
export function buildCanonicalUrl(path: string, customOrigin?: string): string {
  const origin = (customOrigin || businessConfig.canonicalOrigin).replace(/\/+$/, '');
  const normalized = normalizePath(path);
  
  if (normalized === '/') {
    return `${origin}/`;
  }
  return `${origin}${normalized}`;
}
