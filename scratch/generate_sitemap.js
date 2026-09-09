import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// 1. Build TS files
esbuild.buildSync({
  entryPoints: [
    'src/config/routes.ts',
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts'
  ],
  outdir: 'scratch/dist',
  format: 'esm',
  bundle: false
});

const { APP_ROUTES, getSitemapRoutes } = await import('./dist/config/routes.js');
const { citiesData } = await import('./dist/data/locations.js');
const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');

const BASE_URL = 'https://www.growthservice.in';
const TODAY = new Date().toISOString().split('T')[0];

const urls = [];

// 1. Static Canonical Pages
for (const route of getSitemapRoutes()) {
  if (route.path === '/locations' || route.path === '/offices') continue; // Handled below
  urls.push({
    loc: `${BASE_URL}${route.canonical === '/' ? '/' : route.canonical}`,
    priority: route.priority || 0.7,
    changefreq: route.changefreq || 'weekly',
    lastmod: TODAY
  });
}

// 2. Physical Offices Hub & Detail Pages
urls.push({
  loc: `${BASE_URL}/offices`,
  priority: 0.8,
  changefreq: 'monthly',
  lastmod: TODAY
});

for (const office of physicalOffices) {
  urls.push({
    loc: `${BASE_URL}/offices/${office.slug}`,
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: TODAY
  });
}

// 3. Locations Hub & City Hub Pages
urls.push({
  loc: `${BASE_URL}/locations`,
  priority: 0.9,
  changefreq: 'weekly',
  lastmod: TODAY
});

for (const city of citiesData) {
  urls.push({
    loc: `${BASE_URL}/locations/${city.slug}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: TODAY
  });
}

// 4. Programmatic Location-Service Combinations
for (const city of citiesData) {
  for (const srvSlug of city.servicesAvailable) {
    const srv = servicesData.find(s => s.slug === srvSlug);
    if (srv) {
      urls.push({
        loc: `${BASE_URL}/${city.slug}/${srv.slug}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: TODAY
      });
    }
  }
}

// Build XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const u of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority.toFixed(1)}</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${urls.length} verified URLs.`);
