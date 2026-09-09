import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts',
    'src/config/business.ts'
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { 
  APP_ROUTES, 
  getRouteAliases, 
  resolveRoute, 
  buildServicePath, 
  buildOfficePath, 
  buildCityPath, 
  buildLocationServicePath, 
  buildCanonicalUrl,
  normalizePath 
} = await import('./dist/routing/index.js');

const { citiesData } = await import('./dist/data/locations.js');
const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');

const errors = [];
const VALID_CATEGORIES = new Set([
  'primary',
  'services-digital',
  'services-dev',
  'services-whitelabel',
  'locations',
  'offices',
  'resources',
  'company',
  'legal',
  'hidden'
]);

console.log('====================================================');
console.log('            ROUTE ARCHITECTURE VALIDATOR            ');
console.log('====================================================');

// 1. Audit APP_ROUTES integrity
const canonicalPaths = new Set();
for (const [key, route] of Object.entries(APP_ROUTES)) {
  if (!route.path || !route.canonical || !route.label) {
    errors.push(`Route [${key}] is missing mandatory path, canonical, or label.`);
  }

  if (!VALID_CATEGORIES.has(route.category)) {
    errors.push(`Route [${key}] has invalid category "${route.category}".`);
  }

  if (canonicalPaths.has(route.canonical)) {
    errors.push(`Duplicate canonical route found: ${route.canonical} in [${key}].`);
  }
  canonicalPaths.add(route.canonical);
}

// 2. Audit Route Aliases & Loop Detection
const aliases = getRouteAliases();
const seenAliases = new Set();

for (const alias of aliases) {
  if (seenAliases.has(alias.from)) {
    errors.push(`Duplicate alias definition: "${alias.from}"`);
  }
  seenAliases.add(alias.from);

  // Alias target must not be another alias (no redirect chains)
  const targetResolution = resolveRoute(alias.to);
  if (targetResolution.status !== 200) {
    errors.push(`Alias "${alias.from}" points to non-200 destination "${alias.to}" (got ${targetResolution.status}).`);
  }

  // Self-reference check
  if (alias.from === alias.to) {
    errors.push(`Self-referencing alias loop detected: "${alias.from}" -> "${alias.to}".`);
  }
}

// 3. Verify Route Builders generate valid canonical paths
for (const service of servicesData) {
  const servicePath = buildServicePath(service.slug);
  const res = resolveRoute(servicePath);
  if (res.status !== 200) {
    errors.push(`buildServicePath("${service.slug}") -> "${servicePath}" does not resolve to 200 OK.`);
  }
}

for (const office of physicalOffices) {
  const officePath = buildOfficePath(office.slug);
  const res = resolveRoute(officePath);
  if (res.status !== 200) {
    errors.push(`buildOfficePath("${office.slug}") -> "${officePath}" does not resolve to 200 OK.`);
  }
}

for (const city of citiesData) {
  const cityPath = buildCityPath(city.slug);
  const res = resolveRoute(cityPath);
  if (res.status !== 200) {
    errors.push(`buildCityPath("${city.slug}") -> "${cityPath}" does not resolve to 200 OK.`);
  }
}

// 4. Verify Programmatic Route Safety
for (const city of citiesData) {
  for (const srvSlug of city.servicesAvailable) {
    const locSrvPath = buildLocationServicePath(city.slug, srvSlug);
    const res = resolveRoute(locSrvPath);
    if (res.status !== 200) {
      errors.push(`buildLocationServicePath("${city.slug}", "${srvSlug}") -> "${locSrvPath}" failed to resolve.`);
    }
  }
}

// 5. Verify Invalid Routes strictly return 404
const invalidTests = [
  '/nonexistent-static-page',
  '/offices/nonexistent-office-slug',
  '/locations/nonexistent-city-slug',
  '/invalidcity/seo',
  '/jaipur/invalid-service-xyz'
];

for (const inv of invalidTests) {
  const res = resolveRoute(inv);
  if (res.status !== 404) {
    errors.push(`Invalid route "${inv}" expected 404, but resolved with status ${res.status}.`);
  }
}

console.log(`Registered Static Routes: ${Object.keys(APP_ROUTES).length}`);
console.log(`Registered Redirect Aliases: ${aliases.length}`);
console.log(`Services Audited: ${servicesData.length}`);
console.log(`Offices Audited: ${physicalOffices.length}`);
console.log(`Cities Audited: ${citiesData.length}`);
console.log('----------------------------------------------------');

if (errors.length > 0) {
  console.error(`❌ ROUTE VALIDATION FAILED with ${errors.length} violation(s):`);
  errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  console.log('====================================================');
  process.exit(1);
}

console.log('✅ ALL ROUTE VALIDATION CHECKS PASSED:');
console.log('  ✓ 100% of routes have valid categories and labels.');
console.log('  ✓ Zero duplicate canonical routes.');
console.log('  ✓ Zero duplicate aliases or alias loops.');
console.log('  ✓ 100% of route builders resolve to valid 200 OK canonical routes.');
console.log('  ✓ Invalid dynamic combinations strictly return 404.');
console.log('====================================================');
process.exit(0);
