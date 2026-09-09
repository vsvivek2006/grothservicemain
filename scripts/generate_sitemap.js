import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// 1. Bundle TS data and routing modules to temporary runner
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
  getSitemapRoutes, 
  buildCanonicalUrl, 
  buildOfficePath, 
  buildCityPath, 
  buildLocationServicePath,
  normalizePath 
} = await import('./dist/routing/index.js');

const { citiesData } = await import('./dist/data/locations.js');
const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');
const { businessConfig } = await import('./dist/config/business.js');

const urls = [];
const seenLocs = new Set();

function addUrl(loc, priority, changefreq) {
  const cleanLoc = loc.trim();
  if (seenLocs.has(cleanLoc)) {
    throw new Error(`Duplicate sitemap URL generated: ${cleanLoc}`);
  }
  seenLocs.add(cleanLoc);
  urls.push({
    loc: cleanLoc,
    priority: priority.toFixed(1),
    changefreq
  });
}

// 1. Static Canonical Indexable Pages from authoritative route registry
for (const route of getSitemapRoutes()) {
  if (route.path === '/locations' || route.path === '/offices') {
    // Generated with specific section priorities below
    continue;
  }
  addUrl(
    buildCanonicalUrl(route.canonical),
    route.priority || 0.7,
    route.changefreq || 'weekly'
  );
}

// 2. Physical Offices Directory & Detail Pages
addUrl(buildCanonicalUrl(buildOfficePath('')), 0.8, 'monthly');
for (const office of physicalOffices) {
  addUrl(buildCanonicalUrl(buildOfficePath(office.slug)), 0.8, 'monthly');
}

// 3. Locations Directory & City Hub Pages
addUrl(buildCanonicalUrl(buildCityPath('')), 0.9, 'weekly');
for (const city of citiesData) {
  addUrl(buildCanonicalUrl(buildCityPath(city.slug)), 0.8, 'weekly');
}

// 4. Canonical Programmatic Location-Service Combinations
for (const city of citiesData) {
  for (const srvSlug of city.servicesAvailable) {
    const srv = servicesData.find(s => s.slug === srvSlug);
    if (srv) {
      addUrl(
        buildCanonicalUrl(buildLocationServicePath(city.slug, srv.slug)),
        0.7,
        'monthly'
      );
    }
  }
}

// Build XML (omitting artificial lastmod per Google Search guidelines to avoid falsifying modification dates)
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

const outputPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Authoritative sitemap.xml generated successfully: ${urls.length} URLs written to ${outputPath}`);
