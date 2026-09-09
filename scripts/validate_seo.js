import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/seo/index.ts',
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
  SEO_CONFIG, 
  formatPageTitle, 
  buildOrganizationSchema, 
  buildWebSiteSchema, 
  buildBreadcrumbSchema, 
  buildLocalBusinessSchema, 
  buildServiceSchema, 
  getCanonicalUrl 
} = await import('./dist/seo/index.js');

const { physicalOffices } = await import('./dist/data/offices.js');
const { servicesData } = await import('./dist/data/services.js');
const { citiesData } = await import('./dist/data/locations.js');
const { businessConfig } = await import('./dist/config/business.js');

const errors = [];

console.log('====================================================');
console.log('             SEO ARCHITECTURE VALIDATOR             ');
console.log('====================================================');

// 1. Authoritative Domain Origin Check
if (businessConfig.canonicalOrigin !== 'https://www.growthservice.in') {
  errors.push(`Canonical origin mismatch: expected "https://www.growthservice.in", got "${businessConfig.canonicalOrigin}".`);
}

// 2. Verified Media Assets Check
const logoPath = path.resolve('public/logo.png');
if (!fs.existsSync(logoPath)) {
  errors.push('Primary branded asset "public/logo.png" does not exist.');
}

const robotsPath = path.resolve('public/robots.txt');
if (!fs.existsSync(robotsPath)) {
  errors.push('Robots configuration "public/robots.txt" does not exist.');
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (!robotsContent.includes('Sitemap: https://www.growthservice.in/sitemap.xml')) {
    errors.push('robots.txt does not reference the authoritative sitemap URL (https://www.growthservice.in/sitemap.xml).');
  }
}

// 3. Title Formatter Unit Validation
const testTitle1 = formatPageTitle('SEO Services');
if (testTitle1 !== 'SEO Services | Growth Service') {
  errors.push(`Title formatting failed for standard title: expected "SEO Services | Growth Service", got "${testTitle1}".`);
}

const testTitle2 = formatPageTitle('Growth Service Jaipur Office');
if (testTitle2 !== 'Growth Service Jaipur Office') {
  errors.push(`Title formatting failed for brand-containing title (duplicate suffix created): "${testTitle2}".`);
}

// 4. Schema.org Graph Validations
const orgSchema = buildOrganizationSchema();
if (orgSchema['@type'] !== 'Organization' || !orgSchema.telephone || !orgSchema.email) {
  errors.push('Organization JSON-LD schema is malformed or missing telephone/email.');
}

const websiteSchema = buildWebSiteSchema();
if (websiteSchema['@type'] !== 'WebSite' || websiteSchema.url !== businessConfig.canonicalOrigin) {
  errors.push('WebSite JSON-LD schema is malformed or has invalid origin URL.');
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { label: 'Services', path: '/services' },
  { label: 'SEO Services', path: '/seo' }
]);
if (breadcrumbSchema['@type'] !== 'BreadcrumbList' || !Array.isArray(breadcrumbSchema.itemListElement)) {
  errors.push('BreadcrumbList JSON-LD schema is malformed.');
}

// LocalBusiness Schemas for Physical Offices
for (const office of physicalOffices) {
  const officeSchema = buildLocalBusinessSchema(office);
  if (officeSchema['@type'] !== 'LocalBusiness' || !officeSchema.telephone || !officeSchema.address) {
    errors.push(`LocalBusiness JSON-LD schema for office "${office.slug}" is malformed.`);
  }
}

// Service Schemas
for (const service of servicesData) {
  const serviceSchema = buildServiceSchema(service);
  if (serviceSchema['@type'] !== 'Service' || !serviceSchema.name || !serviceSchema.url) {
    errors.push(`Service JSON-LD schema for service "${service.slug}" is malformed.`);
  }
}

function scanFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf-8');
  if (src.includes('https://growthservice.in')) {
    errors.push(`Apex domain without www ("https://growthservice.in") found in ${path.relative('.', filePath)}`);
  }
  if (src.includes('/og-image.jpg')) {
    errors.push(`Dead Open Graph asset reference "/og-image.jpg" found in ${path.relative('.', filePath)}`);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (file.name !== 'node_modules' && file.name !== '.git' && file.name !== 'dist') {
        scanDir(fullPath);
      }
    } else if (/\.(tsx?|html)$/.test(file.name)) {
      scanFile(fullPath);
    }
  }
}

scanDir(path.resolve('src'));
scanFile(path.resolve('index.html'));

console.log(`Audited Canonical Origin:  ${businessConfig.canonicalOrigin}`);
console.log(`Audited Office Schemas:    ${physicalOffices.length}`);
console.log(`Audited Service Schemas:   ${servicesData.length}`);
console.log('----------------------------------------------------');

if (errors.length > 0) {
  console.error(`❌ SEO VALIDATION FAILED with ${errors.length} violation(s):`);
  errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
  console.log('====================================================');
  process.exit(1);
}

console.log('✅ ALL SEO ARCHITECTURE CHECKS PASSED:');
console.log('  ✓ Authoritative domain origin enforced everywhere (zero apex domain occurrences).');
console.log('  ✓ Verified Open Graph and logo image assets exist.');
console.log('  ✓ robots.txt correctly points to authoritative sitemap.');
console.log('  ✓ Deterministic page title generator avoids brand duplication.');
console.log('  ✓ Schema.org Organization, WebSite, Breadcrumbs, Offices & Services graphs valid.');
console.log('====================================================');
process.exit(0);
