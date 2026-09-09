import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

esbuild.buildSync({
  entryPoints: [
    'src/config/routes.ts',
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts'
  ],
  outdir: 'scratch/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { APP_ROUTES, getCanonicalPath } = await import('./dist/config/routes.js');
const { citiesData } = await import('./dist/data/locations.js');
const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');

const cityMap = new Map(citiesData.map(c => [c.slug.toLowerCase(), c]));
cityMap.set('panaji', cityMap.get('goa'));
const officeMap = new Map(physicalOffices.map(o => [o.slug.toLowerCase(), o]));
const serviceMap = new Map(servicesData.map(s => [s.slug.toLowerCase(), s]));

function resolveRoute(testPath) {
  const clean = testPath.toLowerCase();

  // Check static registered routes and aliases
  for (const [key, config] of Object.entries(APP_ROUTES)) {
    if (config.path === clean || config.canonical === clean) {
      return { status: 200, type: 'static', canonical: config.canonical };
    }
    if (config.aliases && config.aliases.includes(clean)) {
      return { status: 301, type: 'alias', canonical: config.canonical };
    }
  }

  // Check /offices/:officeSlug
  const officeMatch = clean.match(/^\/offices\/([^/]+)$/);
  if (officeMatch) {
    const slug = officeMatch[1];
    if (officeMap.has(slug)) {
      return { status: 200, type: 'office', slug, office: officeMap.get(slug).name };
    }
    return { status: 404, type: 'office_404', reason: `Office "${slug}" not found` };
  }

  // Check /locations/:citySlug
  const locMatch = clean.match(/^\/locations\/([^/]+)$/);
  if (locMatch) {
    const slug = locMatch[1];
    if (cityMap.has(slug)) {
      return { status: 200, type: 'city_hub', slug, city: cityMap.get(slug).name };
    }
    return { status: 404, type: 'city_404', reason: `City "${slug}" not found` };
  }

  // Check /locations/:city/:serviceSlug OR /:city/:serviceSlug
  const locServMatch = clean.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  const cityServMatch = clean.match(/^\/([^/]+)\/([^/]+)$/);
  if (locServMatch || cityServMatch) {
    const [, citySlug, serviceSlug] = (locServMatch || cityServMatch);
    const city = cityMap.get(citySlug);
    const srv = serviceMap.get(serviceSlug);
    if (!city || !srv || !city.servicesAvailable.includes(srv.slug)) {
      return { status: 404, type: 'programmatic_404', reason: `Invalid city/service combo: ${citySlug}/${serviceSlug}` };
    }
    return { status: 200, type: 'programmatic_seo', city: city.name, service: srv.title };
  }

  return { status: 404, type: 'not_found' };
}

const testPaths = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/pricing',
  '/packages',
  '/contact',
  '/book-call',
  '/free-audit',
  '/blog',
  '/resources',
  '/case-studies',
  '/testimonials',
  '/help-center',
  '/faq',
  '/accessibility',
  '/verify',
  '/refund',
  '/careers',
  // Services
  '/digital-marketing',
  '/seo',
  '/social-media',
  '/paid-marketing',
  '/local-seo',
  '/content-marketing',
  '/lead-generation',
  '/branding',
  '/design-development',
  '/web-development',
  '/ui-ux-design',
  '/wordpress-development',
  '/ecommerce',
  '/app-development',
  '/white-label',
  '/white-label-seo',
  '/white-label-ppc',
  '/white-label-smo',
  '/white-label-web',
  // Locations
  '/locations',
  '/locations/jaipur',
  '/locations/vrindavan',
  '/locations/delhi',
  '/locations/patna',
  '/locations/goa',
  // Offices
  '/offices',
  '/offices/jaipur',
  '/offices/vrindavan',
  '/offices/nepal',
  // Dynamic
  '/jaipur/seo',
  '/jaipur/web-development',
  '/vrindavan/social-media',
  '/patna/seo',
  // Aliases
  '/website-development',
  '/ecommerce-development',
  '/ui-ux',
  '/whitelabel',
  '/about/team',
  '/success-stories',
  '/webinars',
  '/consultation',
  '/scam-alert',
  '/report-scam',
  // Invalids (should return 404)
  '/random-invalid-page',
  '/nonexistent/city',
  '/jaipur/nonexistent-service',
  '/offices/nonexistent'
];

console.log('=== ROUTE MATRIX VERIFICATION ===');
let pass = 0;
let fail = 0;

for (const p of testPaths) {
  const res = resolveRoute(p);
  const isExpected404 = p.startsWith('/random') || p.startsWith('/nonexistent') || p.includes('nonexistent');
  if (isExpected404) {
    if (res.status === 404) {
      console.log(`  ✓ 404 (Expected): ${p} -> ${res.reason || 'Not Found'}`);
      pass++;
    } else {
      console.log(`  ✗ FAIL: ${p} expected 404 but got ${res.status}`);
      fail++;
    }
  } else {
    if (res.status === 200 || res.status === 301) {
      console.log(`  ✓ ${res.status} OK: ${p} -> ${res.type} ${res.canonical ? `(canonical: ${res.canonical})` : ''}`);
      pass++;
    } else {
      console.log(`  ✗ FAIL: ${p} returned ${res.status} (${res.reason})`);
      fail++;
    }
  }
}

console.log(`\nResults: ${pass} PASSED, ${fail} FAILED.`);
if (fail > 0) process.exit(1);
