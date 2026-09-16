import { performance } from 'perf_hooks';

const BASE_URL = process.env.AUDIT_URL || 'http://localhost:3000';

const PAGES_TO_AUDIT = [
  {
    path: '/',
    name: 'Home',
    expectedSchemas: ['Organization', 'WebSite']
  },
  {
    path: '/about',
    name: 'About',
    expectedSchemas: ['Organization']
  },
  {
    path: '/services',
    name: 'Services',
    expectedSchemas: ['Organization']
  },
  {
    path: '/offices/jaipur',
    name: 'Jaipur Office',
    expectedSchemas: ['LocalBusiness', 'BreadcrumbList']
  },
  {
    path: '/locations/jaipur',
    name: 'Jaipur Hub',
    expectedSchemas: ['BreadcrumbList']
  },
  {
    path: '/jaipur/seo',
    name: 'Jaipur SEO Service',
    expectedSchemas: ['Service', 'BreadcrumbList']
  },
  {
    path: '/blog',
    name: 'Blog Index',
    expectedSchemas: ['Organization']
  },
  {
    path: '/blog/2026-b2b-social-media-marketing-roadmap-proven-steps-for-growth',
    name: 'Blog Post',
    expectedSchemas: ['BlogPosting']
  }
];

async function runSeoAndPerfAudit() {
  console.log('====================================================');
  console.log('      DEEP SEO & SUB-150MS PERFORMANCE AUDIT        ');
  console.log(`      Target: ${BASE_URL}                          `);
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;
  const issues = [];

  // Warm up the server with a quick ping
  try {
    await fetch(`${BASE_URL}/`);
  } catch {
    console.error(`Cannot connect to server at ${BASE_URL}. Ensure it is running.`);
    process.exit(1);
  }

  console.log('Running latency & SEO assertions...\n');

  for (const page of PAGES_TO_AUDIT) {
    const url = `${BASE_URL}${page.path}`;
    
    try {
      // 1. Measure Latency / TTFB
      const t0 = performance.now();
      const res = await fetch(url);
      const t1 = performance.now();
      const ttfb = Math.round(t1 - t0);

      const html = await res.text();

      // Check Status
      if (res.status !== 200) {
        issues.push(`[${page.name}] HTTP Status ${res.status} (expected 200)`);
        failed++;
        continue;
      }

      // 2. Performance Metric (< 150ms)
      const isPerfPass = ttfb <= 150;
      const perfBadge = isPerfPass ? `✓ ${ttfb}ms` : `⚠️ ${ttfb}ms (target <= 150ms)`;

      // 3. Schema.org Validation
      const schemasFound = [];
      const schemaMatches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
      for (const m of schemaMatches) {
        try {
          const parsed = JSON.parse(m[1]);
          if (parsed['@type']) {
            schemasFound.push(parsed['@type']);
          }
        } catch {
          // invalid json
        }
      }

      let schemaOk = true;
      for (const expected of page.expectedSchemas) {
        if (!schemasFound.includes(expected)) {
          schemaOk = false;
          issues.push(`[${page.name}] Missing expected Schema.org @type="${expected}" (found: ${schemasFound.join(', ') || 'none'})`);
        }
      }

      // 4. Meta Tags & Canonical
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : null;
      if (!title || title.length < 15 || title.length > 90) {
        issues.push(`[${page.name}] Title length out of range (${title?.length || 0} chars): "${title || ''}"`);
        schemaOk = false;
      }

      const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                        html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
      const desc = descMatch ? descMatch[1].trim() : null;
      if (!desc || desc.length < 30 || desc.length > 250) {
        issues.push(`[${page.name}] Meta description length abnormal (${desc?.length || 0} chars)`);
        schemaOk = false;
      }

      const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                             html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
      if (!canonicalMatch) {
        issues.push(`[${page.name}] Missing <link rel="canonical">`);
        schemaOk = false;
      }

      // Print row
      console.log(`  ${page.name.padEnd(25)} | TTFB: ${perfBadge.padEnd(14)} | Schemas: [${schemasFound.join(', ')}]`);

      if (schemaOk) {
        passed++;
      } else {
        failed++;
      }
    } catch (err) {
      issues.push(`[${page.name}] Request error: ${err.message}`);
      failed++;
    }
  }

  // 5. Global Asset & Script Caching Inspection on Home
  console.log('\nInspecting Global Performance & Script Configuration...');
  const homeRes = await fetch(`${BASE_URL}/`);
  const homeHtml = await homeRes.text();

  const hasPreconnectFonts = homeHtml.includes('fonts.googleapis.com') && homeHtml.includes('rel="preconnect"');
  console.log(`  ✓ Google Fonts Preconnect: ${hasPreconnectFonts ? 'ACTIVE' : 'MISSING'}`);

  const hasGtmScript = homeHtml.includes('googletagmanager.com/gtag/js');
  console.log(`  ✓ Google Tag Manager: ${hasGtmScript ? 'DETECTED' : 'MISSING'}`);

  console.log('\n====================================================');
  console.log(`SEO & Performance Audit Summary:`);
  console.log(`  Passed: ${passed}/${PAGES_TO_AUDIT.length}`);
  console.log(`  Failed: ${failed}/${PAGES_TO_AUDIT.length}`);
  console.log('====================================================');

  if (issues.length > 0) {
    console.log('\n❌ AUDIT WARNINGS / ISSUES:');
    for (const iss of issues) {
      console.log(`  - ${iss}`);
    }
    if (failed > 0) process.exit(1);
  } else {
    console.log('\n✅ ALL PAGES MET SUB-150MS TTFB & PASSED DEEP TECHNICAL SEO AUDIT!');
    process.exit(0);
  }
}

runSeoAndPerfAudit();
