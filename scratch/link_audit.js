import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Extract routes from App.tsx
const appTsx = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf8');
const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
const routes = new Set();
let match;
while ((match = routeRegex.exec(appTsx)) !== null) {
  routes.add(match[1]);
}

console.log('--- DEFINED ROUTES IN App.tsx (' + routes.size + ') ---');

// 2. Scan all files in src
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
const dynamicOrHash = [];
const valid = [];

for (const [link, files] of internalLinks.entries()) {
  const cleanLink = link.split('#')[0].split('?')[0];
  if (!cleanLink || cleanLink === '') {
    dynamicOrHash.push({ link, files: Array.from(files) });
    continue;
  }
  
  // Check exact route match
  if (routes.has(cleanLink)) {
    valid.push({ link, files: Array.from(files) });
  } else {
    // Check dynamic match
    const locMatch = cleanLink.match(/^\/locations\/([^/]+)$/);
    const locServMatch = cleanLink.match(/^\/locations\/([^/]+)\/([^/]+)$/);
    const cityServMatch = cleanLink.match(/^\/([^/]+)\/([^/]+)$/);
    const officeMatch = cleanLink.match(/^\/offices\/([^/]+)$/);

    if (locMatch || locServMatch || cityServMatch || officeMatch) {
      dynamicOrHash.push({ link, cleanLink, files: Array.from(files) });
    } else {
      broken.push({ link, files: Array.from(files) });
    }
  }
}

console.log(`VALID STATIC LINKS: ${valid.length}`);
console.log(`DYNAMIC / HASH LINKS: ${dynamicOrHash.length}`);
console.log(`POTENTIALLY BROKEN / UNMATCHED STATIC LINKS: ${broken.length}`);

if (broken.length > 0) {
  console.log('\nBROKEN LINKS FOUND:');
  broken.sort((a,b) => a.link.localeCompare(b.link)).forEach(b => {
    console.log(`  BROKEN: "${b.link}" -> in: ${b.files.join(', ')}`);
  });
  process.exit(1);
} else {
  console.log('\nAll internal links matched valid routes. 0 broken links.');
  process.exit(0);
}
