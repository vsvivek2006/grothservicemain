/**
 * Growth Service Central Route Resolver
 * Authoritative engine for matching, verifying, and resolving all application routes,
 * dynamic parameters, canonical paths, and HTTP redirect statuses.
 */

import { RouteResolution } from './route-types';
import { normalizePath } from './route-normalization';
import { APP_ROUTES, getRouteAliases } from './route-registry';
import { buildOfficePath, buildCityPath, buildLocationServicePath } from './route-builders';
import { physicalOffices } from '../data/offices';
import { citiesData } from '../data/locations';
import { servicesData } from '../data/services';

// Cache lookup maps for high-performance resolution
const officeBySlug = new Map(physicalOffices.map(o => [o.slug.toLowerCase(), o]));
const cityBySlug = new Map(citiesData.map(c => [c.slug.toLowerCase(), c]));
cityBySlug.set('panaji', cityBySlug.get('goa')!); // Known legacy city alias
const serviceBySlug = new Map(servicesData.map(s => [s.slug.toLowerCase(), s]));

/**
 * Checks if a specific service is available and canonically active in a target city.
 */
export function isCityServiceAvailable(citySlug: string, serviceSlug: string): boolean {
  const cleanCity = citySlug.trim().toLowerCase();
  const cleanService = serviceSlug.trim().toLowerCase();
  const city = cityBySlug.get(cleanCity);
  if (!city) return false;
  return city.servicesAvailable.includes(cleanService);
}

/**
 * Authoritatively resolves any application path, determining whether it is a valid
 * 200 canonical route, a 301 alias redirect, or a 404 not-found route.
 */
export function resolveRoute(rawPath: string): RouteResolution {
  const clean = normalizePath(rawPath);

  // 1. Check registered static canonical routes
  for (const route of Object.values(APP_ROUTES)) {
    if (route.canonical === clean || route.path === clean) {
      return {
        status: 200,
        kind: 'static',
        canonical: route.canonical,
        label: route.label,
      };
    }
  }

  // 2. Check registered static alias redirects
  const aliases = getRouteAliases();
  for (const alias of aliases) {
    if (alias.from === clean) {
      return {
        status: 301,
        kind: 'alias',
        canonical: alias.to,
        from: alias.from,
        to: alias.to,
        permanent: alias.permanent,
      };
    }
  }

  // 3. Check Physical Office Detail Pages (/offices/:officeSlug)
  const officeMatch = clean.match(/^\/offices\/([^/]+)$/);
  if (officeMatch) {
    const slug = officeMatch[1];
    const office = officeBySlug.get(slug);
    if (office) {
      return {
        status: 200,
        kind: 'dynamic-office',
        canonical: buildOfficePath(office.slug),
        entityId: office.id,
        label: `${office.name} Office`,
        params: { officeSlug: office.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Office "${slug}" not found`,
    };
  }

  // 4. Check City Hub Pages (/locations/:citySlug)
  const cityMatch = clean.match(/^\/locations\/([^/]+)$/);
  if (cityMatch) {
    const slug = cityMatch[1];
    const city = cityBySlug.get(slug);
    if (city) {
      return {
        status: 200,
        kind: 'dynamic-city',
        canonical: buildCityPath(city.slug),
        entityId: city.slug,
        label: `${city.name} Growth Hub`,
        params: { citySlug: city.slug },
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `City "${slug}" not found`,
    };
  }

  // 5. Check Legacy Programmatic Alias: /locations/:city/:serviceSlug -> /:city/:serviceSlug
  const legacyLocServiceMatch = clean.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  if (legacyLocServiceMatch) {
    const [, citySlug, serviceSlug] = legacyLocServiceMatch;
    const city = cityBySlug.get(citySlug);
    const srv = serviceBySlug.get(serviceSlug);
    if (city && srv && city.servicesAvailable.includes(srv.slug)) {
      const target = buildLocationServicePath(city.slug, srv.slug);
      return {
        status: 301,
        kind: 'alias',
        canonical: target,
        from: clean,
        to: target,
        permanent: true,
      };
    }
    return {
      status: 404,
      kind: 'not-found',
      reason: `Invalid location-service combo: ${citySlug}/${serviceSlug}`,
    };
  }

  // 6. Check Programmatic Location-Service Pages (/:city/:serviceSlug)
  const locationServiceMatch = clean.match(/^\/([^/]+)\/([^/]+)$/);
  if (locationServiceMatch) {
    const [, citySlug, serviceSlug] = locationServiceMatch;
    const city = cityBySlug.get(citySlug);
    const srv = serviceBySlug.get(serviceSlug);

    if (!city || !srv || !city.servicesAvailable.includes(srv.slug)) {
      return {
        status: 404,
        kind: 'not-found',
        reason: `Invalid city/service combo: ${citySlug}/${serviceSlug}`,
      };
    }

    return {
      status: 200,
      kind: 'dynamic-location-service',
      canonical: buildLocationServicePath(city.slug, srv.slug),
      label: `${srv.title} in ${city.name}`,
      params: { city: city.slug, serviceSlug: srv.slug },
    };
  }

  // 7. Unknown / Unregistered path
  return {
    status: 404,
    kind: 'not-found',
    reason: `Route "${clean}" not recognized`,
  };
}

/**
 * Checks if a given path resolves to a 200 OK valid canonical page.
 */
export function isValidCanonicalRoute(path: string): boolean {
  const result = resolveRoute(path);
  return result.status === 200;
}
