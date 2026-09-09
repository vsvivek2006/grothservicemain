import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Compile TypeScript data & routes using esbuild
esbuild.buildSync({
  entryPoints: [
    path.join(rootDir, 'src/config/routes.ts'),
    path.join(rootDir, 'src/data/locations.ts'),
    path.join(rootDir, 'src/data/offices.ts'),
    path.join(rootDir, 'src/data/services.ts')
  ],
  outdir: path.join(rootDir, 'scratch/dist'),
  format: 'esm',
  bundle: true,
  platform: 'node'
});

// 2. Import compiled modules
const { APP_ROUTES } = await import('./dist/config/routes.js');
const { citiesData } = await import('./dist/data/locations.js');
const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');

// 3. Extract routes from App.tsx
const appTsx = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf8');
const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
const appRoutes = new Set();
let match;
while ((match = routeRegex.exec(appTsx)) !== null) {
  appRoutes.add(match[1]);
}

// Add canonicals & aliases from route registry
for (const r of Object.values(APP_ROUTES)) {
  appRoutes.add(r.path);
  appRoutes.add(r.canonical);
  if (r.aliases) {
    r.aliases.forEach(a => appRoutes.add(a));
  }
}

console.log(`--- REGISTERED ROUTES IN App.tsx / Registry (${appRoutes.size}) ---`);

// 4. Data slug sets
const citySlugMap = new Map();
for (const c of citiesData) {
  citySlugMap.set(c.slug.toLowerCase(), c);
}
// Support alias for panaji -> goa
if (citySlugMap.has('goa')) {
  citySlugMap.set('panaji', citySlugMap.get('goa'));
}

const officeSlugMap = new Map();
for (const o of physicalOffices) {
  officeSlugMap.set(o.slug.toLowerCase(), o);
}

const serviceSlugMap = new Map();
for (const s of servicesData) {
  serviceSlugMap.set(s.slug.toLowerCase(), s);
}

// 5. Scan all files in src
const internalLinks = new Map(); // link -> Set of files
const externalLinks = new Set();

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      scanFile(fullPath);
    }
  }
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  
  // Find to="..." or href="..." or path: "..."
  const toRegex = /(?:to|href|path)\s*[:=]\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = toRegex.exec(content)) !== null) {
    const link = m[1].trim();
    if (!link || link.startsWith('${') || link.includes('${')) continue;
    if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('wa.me')) {
      externalLinks.add(link);
    } else if (link.startsWith('/') || link.startsWith('#')) {
      if (!internalLinks.has(link)) internalLinks.set(link, new Set());
      internalLinks.get(link).add(relPath);
    }
  }
}

scanDir(path.join(rootDir, 'src'));

console.log('\n--- INTERNAL LINKS AUDIT ---');
const broken = [];
const dynamicLinks = [];
const validStatic = [];
const hashOnly = [];

for (const [link, files] of internalLinks.entries()) {
  const cleanLink = link.split('#')[0].split('?')[0];
  if (!cleanLink || cleanLink === '') {
    hashOnly.push({ link, files: Array.from(files) });
    continue;
  }
  
  // 1. Exact route match
  if (appRoutes.has(cleanLink)) {
    validStatic.push({ link, files: Array.from(files) });
    continue;
  }
  
  // 2. Dynamic City Hub: /locations/:citySlug
  const locMatch = cleanLink.match(/^\/locations\/([^/]+)$/);
  if (locMatch) {
    const slug = locMatch[1].toLowerCase();
    if (citySlugMap.has(slug)) {
      dynamicLinks.push({ link, type: 'city-hub', slug, files: Array.from(files) });
    } else {
      broken.push({ link, reason: `Unknown location city slug "${slug}"`, files: Array.from(files) });
    }
    continue;
  }
  
  // 3. Dynamic Office Detail: /offices/:officeSlug
  const officeMatch = cleanLink.match(/^\/offices\/([^/]+)$/);
  if (officeMatch) {
    const slug = officeMatch[1].toLowerCase();
    if (officeSlugMap.has(slug)) {
      dynamicLinks.push({ link, type: 'office-detail', slug, files: Array.from(files) });
    } else {
      broken.push({ link, reason: `Unknown office slug "${slug}"`, files: Array.from(files) });
    }
    continue;
  }
  
  // 4. Programmatic City-Service: /locations/:city/:serviceSlug OR /:city/:serviceSlug
  const locServMatch = cleanLink.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  const cityServMatch = cleanLink.match(/^\/([^/]+)\/([^/]+)$/);
  
  if (locServMatch || cityServMatch) {
    const [, citySlug, serviceSlug] = (locServMatch || cityServMatch);
    const city = citySlugMap.get(citySlug.toLowerCase());
    const service = serviceSlugMap.get(serviceSlug.toLowerCase());
    
    if (!city) {
      broken.push({ link, reason: `City "${citySlug}" not found in locationsData`, files: Array.from(files) });
      continue;
    }
    if (!service) {
      broken.push({ link, reason: `Service "${serviceSlug}" not found in servicesData`, files: Array.from(files) });
      continue;
    }
    if (!city.servicesAvailable.includes(service.slug)) {
      broken.push({ link, reason: `Service "${service.slug}" is not supported in city "${city.name}"`, files: Array.from(files) });
      continue;
    }
    
    dynamicLinks.push({ link, type: 'city-service', city: city.name, service: service.title, files: Array.from(files) });
    continue;
  }
  
  // Not matched anywhere
  broken.push({ link, reason: 'Route not registered in App.tsx or routes registry', files: Array.from(files) });
}

console.log(`VALID STATIC LINKS: ${validStatic.length}`);
console.log(`DYNAMIC VERIFIED LINKS: ${dynamicLinks.length}`);
console.log(`HASH ONLY LINKS: ${hashOnly.length}`);
console.log(`BROKEN / UNMATCHED LINKS: ${broken.length}`);

if (broken.length > 0) {
  console.log('\n❌ BROKEN LINKS FOUND:');
  broken.sort((a, b) => a.link.localeCompare(b.link)).forEach(b => {
    console.log(`  BROKEN: "${b.link}" -> ${b.reason} (in: ${b.files.join(', ')})`);
  });
  process.exit(1);
} else {
  console.log('\n✅ All internal links matched valid routes and verified data. 0 broken links.');
  process.exit(0);
}
