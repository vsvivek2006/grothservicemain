import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts',
    'src/config/business.ts'
  ],
  outdir: 'scratch/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { resolveRoute, normalizePath, getRouteAliases } = await import('./dist/routing/index.js');
const { businessConfig } = await import('./dist/config/business.js');

const sitemapPath = path.resolve('public/sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error(`❌ Sitemap file not found at: ${sitemapPath}`);
  process.exit(1);
}

const content = fs.readFileSync(sitemapPath, 'utf-8');
const expectedOrigin = businessConfig.canonicalOrigin;

const errors = [];
const locMatches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

if (locMatches.length === 0) {
  errors.push('Sitemap contains 0 <loc> entries');
}

const seen = new Set();
const aliases = new Set(getRouteAliases().map(a => a.from));

for (const loc of locMatches) {
  // 1. Must use canonical origin
  if (!loc.startsWith(expectedOrigin)) {
    errors.push(`Invalid domain origin in sitemap: ${loc} (expected ${expectedOrigin})`);
  }

  // 2. No query strings or fragments
  if (loc.includes('?') || loc.includes('#')) {
    errors.push(`URL contains query or fragment: ${loc}`);
  }

  // 3. No duplicate URLs
  if (seen.has(loc)) {
    errors.push(`Duplicate URL found in sitemap: ${loc}`);
  }
  seen.add(loc);

  // 4. Trailing slash consistency
  const pathPart = loc.replace(expectedOrigin, '');
  if (pathPart !== '/' && pathPart.endsWith('/')) {
    errors.push(`Subpath contains illegal trailing slash: ${loc}`);
  }

  // 5. Must not be an alias
  const normalizedPath = normalizePath(pathPart);
  if (aliases.has(normalizedPath)) {
    errors.push(`Alias route found in sitemap (must only contain canonical URLs): ${loc}`);
  }

  // 6. Must authoritatively resolve to 200 OK
  const resolution = resolveRoute(pathPart);
  if (resolution.status !== 200) {
    errors.push(`Sitemap URL resolves with non-200 status (${resolution.status}): ${loc} -> ${resolution.kind}`);
  }
}

// 7. Check for fake lastmod dates
if (content.includes('<lastmod>')) {
  errors.push('Fabricated <lastmod> detected. Unverifiable timestamps must be omitted per Google Search guidelines.');
}

console.log('====================================================');
console.log('            SITEMAP VALIDATION REPORT               ');
console.log('====================================================');
console.log(`Total URLs Audited: ${locMatches.length}`);
console.log(`Expected Origin:    ${expectedOrigin}`);
console.log('----------------------------------------------------');

if (errors.length > 0) {
  console.error(`❌ SITEMAP VALIDATION FAILED with ${errors.length} error(s):`);
  errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  console.log('====================================================');
  process.exit(1);
}

console.log('✅ ALL SITEMAP VALIDATION CHECKS PASSED:');
console.log('  ✓ 100% of URLs use authoritative canonical origin.');
console.log('  ✓ Zero duplicate URLs.');
console.log('  ✓ Zero alias redirects.');
console.log('  ✓ Zero invalid programmatic location/service combinations.');
console.log('  ✓ Zero fabricated <lastmod> timestamps.');
console.log('  ✓ 100% of URLs resolve with HTTP 200 OK status.');
console.log('====================================================');
process.exit(0);
