import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

esbuild.buildSync({
  entryPoints: [
    'src/routing/route-registry.ts',
    'src/selectors/officeSelectors.ts',
    'src/selectors/locationSelectors.ts',
    'src/selectors/serviceSelectors.ts'
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { APP_ROUTES, getRouteAliases } = await import('./dist/routing/route-registry.js');
const { getPhysicalOffices } = await import('./dist/selectors/officeSelectors.js');
const { getAllCities } = await import('./dist/selectors/locationSelectors.js');

const BASE_URL = process.env.AUDIT_URL || 'http://localhost:3000';

async function runAudit() {
  console.log('====================================================');
  console.log('       COMPREHENSIVE LIVE RENDER AUDIT              ');
  console.log(`       Target: ${BASE_URL}                          `);
  console.log('====================================================\n');

  const offices = getPhysicalOffices();
  const cities = getAllCities();
  const pairs = [];
  for (const c of cities) {
    for (const s of c.servicesAvailable) {
      pairs.push({ citySlug: c.slug, serviceSlug: s });
    }
  }

  const auditQueue = [];

  // 1. All Canonical Static Routes (46)
  for (const r of Object.values(APP_ROUTES)) {
    auditQueue.push({ url: r.path, expectedStatus: 200, type: 'canonical-static' });
  }

  // 2. All Physical Offices (3)
  for (const off of offices) {
    auditQueue.push({ url: `/offices/${off.slug}`, expectedStatus: 200, type: 'dynamic-office' });
  }

  // 3. All Hub Cities (24)
  for (const c of cities) {
    auditQueue.push({ url: `/locations/${c.slug}`, expectedStatus: 200, type: 'dynamic-city' });
  }

  // 4. All Programmatic City-Service Pairs (103)
  for (const p of pairs) {
    auditQueue.push({ url: `/${p.citySlug}/${p.serviceSlug}`, expectedStatus: 200, type: 'programmatic-pair' });
  }

  // 5. Blog
  auditQueue.push({ url: '/blog', expectedStatus: 200, type: 'blog-index' });
  auditQueue.push({ 
    url: '/blog/how-growth-service-works-a-complete-guide-for-business-leaders', 
    expectedStatus: 200, 
    type: 'blog-post' 
  });

  // 6. Admin Routes
  auditQueue.push({ url: '/admin/login', expectedStatus: 200, type: 'admin-login' });
  auditQueue.push({ url: '/admin', expectedStatus: [307, 308], type: 'admin-protected' });
  auditQueue.push({ url: '/admin/blog', expectedStatus: [307, 308], type: 'admin-protected' });
  auditQueue.push({ url: '/admin/blog/new', expectedStatus: [307, 308], type: 'admin-protected' });

  // 7. Redirect Aliases (13)
  for (const a of getRouteAliases()) {
    auditQueue.push({ url: a.from, expectedStatus: [301, 307, 308], type: 'alias-redirect', dest: a.to });
  }

  // 8. Negative / 404 tests
  auditQueue.push({ url: '/nonexistent-random-page-xyz', expectedStatus: 404, type: '404-check' });
  auditQueue.push({ url: '/offices/invalid-office', expectedStatus: 404, type: '404-check' });
  auditQueue.push({ url: '/locations/invalid-city', expectedStatus: 404, type: '404-check' });
  auditQueue.push({ url: '/jaipur/invalid-service-xyz', expectedStatus: 404, type: '404-check' });
  auditQueue.push({ url: '/blog/nonexistent-draft-xyz', expectedStatus: 404, type: '404-check' });

  console.log(`Total URLs queued for audit: ${auditQueue.length}\n`);

  let passed = 0;
  let failed = 0;
  const failures = [];

  // Run in concurrency batches of 4 to prevent server saturation while auditing fast
  const BATCH_SIZE = 4;
  for (let i = 0; i < auditQueue.length; i += BATCH_SIZE) {
    const batch = auditQueue.slice(i, i + BATCH_SIZE);
    
    await Promise.all(batch.map(async (item) => {
      const target = `${BASE_URL}${item.url}`;
      try {
        const res = await fetch(target, { redirect: 'manual' });
        const status = res.status;

        let statusOk = false;
        if (Array.isArray(item.expectedStatus)) {
          statusOk = item.expectedStatus.includes(status);
        } else {
          statusOk = status === item.expectedStatus;
        }

        let text = null;
        if (status === 200 || item.type === '404-check') {
          text = await res.text();
        }

        // In Next.js dev server, on-demand notFound() can return 200 with the 404 Page Not Found component
        if (!statusOk && item.type === '404-check' && status === 200) {
          if (text && (text.includes('404') || text.includes('Page Not Found'))) {
            statusOk = true;
          }
        }

        if (!statusOk) {
          failures.push({
            url: item.url,
            type: item.type,
            expected: item.expectedStatus,
            got: status,
            reason: `HTTP status mismatch: expected ${JSON.stringify(item.expectedStatus)}, got ${status}`
          });
          failed++;
          process.stdout.write('F');
          return;
        }

        // If status 200 and not a 404-check, inspect body content
        if (status === 200 && item.type !== '404-check') {

          // Check for error traces
          if (text.includes('Application error: a client-side exception has occurred') ||
              text.includes('Unhandled Runtime Error') ||
              text.includes('Internal Server Error') ||
              text.includes('Cannot read properties of undefined')) {
            failures.push({
              url: item.url,
              type: item.type,
              expected: 200,
              got: 200,
              reason: 'HTML body contains client-side/server exception string'
            });
            failed++;
            process.stdout.write('E');
            return;
          }

          // Check for minimum content length (at least 400 chars)
          if (text.length < 400) {
            failures.push({
              url: item.url,
              type: item.type,
              expected: 200,
              got: 200,
              reason: `HTML body too short (${text.length} chars) - possible empty render`
            });
            failed++;
            process.stdout.write('S');
            return;
          }
        }

        passed++;
        process.stdout.write('.');
      } catch (err) {
        failures.push({
          url: item.url,
          type: item.type,
          expected: item.expectedStatus,
          got: 'NETWORK_ERROR',
          reason: err.message
        });
        failed++;
        process.stdout.write('X');
      }
    }));

    if ((i + BATCH_SIZE) % 40 < BATCH_SIZE || i + BATCH_SIZE >= auditQueue.length) {
      console.log(`  (${Math.min(i + BATCH_SIZE, auditQueue.length)}/${auditQueue.length})`);
    }
  }

  console.log(`\n====================================================`);
  console.log(`Live Render Audit Summary:`);
  console.log(`  Passed: ${passed}/${auditQueue.length}`);
  console.log(`  Failed: ${failed}/${auditQueue.length}`);
  console.log(`====================================================`);

  if (failures.length > 0) {
    console.log('\n❌ DETECTED ISSUES:');
    for (const f of failures) {
      console.log(`  - [${f.type}] ${f.url}: ${f.reason}`);
    }
    process.exit(1);
  } else {
    console.log('\n✅ 100% OF PAGES RENDERED CLEANLY WITHOUT ERRORS OR UNEXPECTED 404s!');
    process.exit(0);
  }
}

runAudit();
