/**
 * Route Normalization Utilities
 * Single project-wide standard for path normalization, canonical formatting, and URL sanitization.
 */

/**
 * Normalizes a raw pathname to a standardized canonical route path.
 * 
 * Rules enforced:
 * 1. Safely decodes URI components
 * 2. Strips query parameters (?...) and hash fragments (#...)
 * 3. Collapses multiple consecutive slashes (e.g. "//about///" -> "/about")
 * 4. Ensures a leading slash
 * 5. Strips trailing slashes (except root "/")
 * 6. Converts to lowercase for deterministic route matching
 */
export function normalizePath(rawPath: string): string {
  if (!rawPath || typeof rawPath !== 'string') {
    return '/';
  }

  let cleaned = rawPath.trim();

  // Strip query string and fragment
  const queryIndex = cleaned.indexOf('?');
  if (queryIndex !== -1) {
    cleaned = cleaned.slice(0, queryIndex);
  }
  const hashIndex = cleaned.indexOf('#');
  if (hashIndex !== -1) {
    cleaned = cleaned.slice(0, hashIndex);
  }

  // Safe URI decode
  try {
    cleaned = decodeURI(cleaned);
  } catch {
    // Keep as is if malformed
  }

  // Lowercase
  cleaned = cleaned.toLowerCase();

  // Collapse multiple slashes
  cleaned = cleaned.replace(/\/+/g, '/');

  // Ensure leading slash
  if (!cleaned.startsWith('/')) {
    cleaned = '/' + cleaned;
  }

  // Strip trailing slash except for root '/'
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    cleaned = cleaned.slice(0, -1);
  }

  return cleaned;
}

/**
 * Checks whether a given path matches the canonical form (normalized and valid).
 */
export function isCanonicalPath(path: string): boolean {
  return path === normalizePath(path);
}
