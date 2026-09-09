import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Compile routing and data
esbuild.buildSync({
  entryPoints: [
    path.join(rootDir, 'src/routing/index.ts'),
    path.join(rootDir, 'src/config/navigation.ts'),
    path.join(rootDir, 'src/data/locations.ts'),
    path.join(rootDir, 'src/data/offices.ts'),
    path.join(rootDir, 'src/data/services.ts'),
    path.join(rootDir, 'src/data/packages.ts')
  ],
  outdir: path.join(rootDir, 'scripts/dist/deep_audit'),
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { resolveRoute } = await import('./dist/deep_audit/routing/index.js');
const { 
  mainNavigation, digitalMarketingSubmenu, designDevelopmentSubmenu,
  whiteLabelSubmenu, trustAndLegalLinks, footerCompanyLinks, footerResourceLinks 
} = await import('./dist/deep_audit/config/navigation.js');
const { physicalOffices } = await import('./dist/deep_audit/data/offices.js');
const { servicesData } = await import('./dist/deep_audit/data/services.js');
const { commercialPackages } = await import('./dist/deep_audit/data/packages.js');

console.log('--- STARTING THOROUGH ROUTE & LINK SCAN ---');

const issues = [];
const scannedLinks = new Map();

function addOccurrence(url, file, line, raw) {
  if (!scannedLinks.has(url)) {
    scannedLinks.set(url, []);
  }
  scannedLinks.get(url).push({ file, line, raw });
}

// 1. Scan src directory files
function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(full);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      scanSourceFile(full);
    }
  }
}

function scanSourceFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const rel = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const lineNum = index + 1;
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) {
      return;
    }

    // Matches to="..." or href="..." or to={`...`} or href={`...`}
    const linkRegex = /(?:to|href)\s*=\s*(?:["']([^"']+)["']|\{`([^`]+)`\}|\{["']([^"']+)["']\})/g;
    let match;
    while ((match = linkRegex.exec(line)) !== null) {
      const raw = match[1] || match[2] || match[3];
      if (!raw) continue;
      addOccurrence(raw, rel, lineNum, match[0]);
    }

    // Matches navigate("...") or navigate('...')
    const navRegex = /navigate\(\s*["']([^"']+)["']\s*\)/g;
    while ((match = navRegex.exec(line)) !== null) {
      addOccurrence(match[1], rel, lineNum, match[0]);
    }
  });
}

scanDirectory(path.join(rootDir, 'src'));

console.log(`Discovered ${scannedLinks.size} unique link destinations across source files.`);

// 2. Validate all discovered links
for (const [rawUrl, occurrences] of scannedLinks.entries()) {
  // Ignore external / protocol links
  if (
    rawUrl.startsWith('http://') || 
    rawUrl.startsWith('https://') || 
    rawUrl.startsWith('tel:') || 
    rawUrl.startsWith('mailto:') || 
    rawUrl.startsWith('wa.me') ||
    rawUrl.startsWith('javascript:')
  ) {
    continue;
  }

  // Pure hash anchors on same page
  if (rawUrl.startsWith('#')) {
    continue;
  }

  // Handle template literals like /locations/${city.slug} or /${city}/${service}
  if (rawUrl.includes('${')) {
    console.log(`[Dynamic Template Link]: "${rawUrl}" in ${occurrences[0].file}:${occurrences[0].line}`);
    
    // Check known dangerous patterns:
    if (rawUrl.startsWith('/services/${')) {
      issues.push({
        url: rawUrl,
        reason: 'Invalid URL pattern: Growth Service routes services at root (/seo, /web-development) or via programmatic city routes, NOT /services/${slug}',
        occurrences
      });
    }

    // Check office city instead of slug
    if (rawUrl.includes('/offices/') && rawUrl.includes('city')) {
      issues.push({
        url: rawUrl,
        reason: 'Invalid office URL pattern: offices must be routed by office.slug, not office.city (e.g. Nepal office city is Bariyarpatti)',
        occurrences
      });
    }

    // Check canonical origin template
    if (rawUrl.includes('${getCanonicalOrigin()}')) {
      const subPath = rawUrl.replace('${getCanonicalOrigin()}', '');
      const cleanSub = subPath.split('?')[0].split('#')[0];
      const res = resolveRoute(cleanSub);
      if (res.status === 404) {
        issues.push({
          url: rawUrl,
          reason: `Canonical URL path "${cleanSub}" resolves to 404 Not Found`,
          occurrences
        });
      }
    }
    continue;
  }

  // Split off query string and hash
  const cleanPath = rawUrl.split('?')[0].split('#')[0];
  if (!cleanPath) continue;

  // Validate path through canonical resolveRoute
  const res = resolveRoute(cleanPath);
  if (res.status === 404) {
    issues.push({
      url: rawUrl,
      reason: res.reason || 'Route resolved to 404 Not Found',
      occurrences
    });
  } else if (res.status === 301) {
    console.log(`[Alias Redirect Link]: "${rawUrl}" -> canonical "${res.canonical}" (in ${occurrences.map(o => `${o.file}:${o.line}`).join(', ')})`);
  }
}

// 3. Validate Navigation Config
const navArrays = [
  { name: 'mainNavigation', items: mainNavigation },
  { name: 'digitalMarketingSubmenu', items: digitalMarketingSubmenu },
  { name: 'designDevelopmentSubmenu', items: designDevelopmentSubmenu },
  { name: 'whiteLabelSubmenu', items: whiteLabelSubmenu },
  { name: 'trustAndLegalLinks', items: trustAndLegalLinks },
  { name: 'footerCompanyLinks', items: footerCompanyLinks },
  { name: 'footerResourceLinks', items: footerResourceLinks }
];

for (const group of navArrays) {
  for (const item of group.items) {
    const res = resolveRoute(item.href);
    if (res.status === 404) {
      issues.push({
        url: item.href,
        reason: `Nav item "${item.name}" in ${group.name} points to 404 Not Found`,
        occurrences: [{ file: 'src/config/navigation.ts', line: 0, raw: item.href }]
      });
    }
  }
}

// 4. Validate Packages Links
for (const pkg of commercialPackages) {
  if (pkg.serviceSlugs) {
    for (const sSlug of pkg.serviceSlugs) {
      const s = servicesData.find(s => s.slug === sSlug);
      if (!s) {
        issues.push({
          url: sSlug,
          reason: `Package "${pkg.name}" references non-existent service slug "${sSlug}"`,
          occurrences: [{ file: 'src/data/packages.ts', line: 0, raw: sSlug }]
        });
      }
    }
  }
}

// 5. Output Report
console.log('\n====================================================');
console.log(`TOTAL ISSUES / BROKEN ROUTES FOUND: ${issues.length}`);
console.log('====================================================');

if (issues.length > 0) {
  for (const issue of issues) {
    console.log(`\n❌ BROKEN ROUTE: "${issue.url}"`);
    console.log(`   Reason: ${issue.reason}`);
    console.log(`   Occurrences:`);
    for (const occ of issue.occurrences) {
      console.log(`     - ${occ.file}:${occ.line} [${occ.raw}]`);
    }
  }
  process.exit(1);
} else {
  console.log('✅ Zero broken routes found!');
  process.exit(0);
}
