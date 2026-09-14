import http from 'http';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

function fetchPath(path) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    http.get(url, { headers: { 'Accept': 'text/html' } }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

const testCases = [
  // 1. Root & Static Pages (200 OK)
  { path: '/', expectedStatus: 200, checks: ['Growth Service', '<header', '<footer'] },
  { path: '/about', expectedStatus: 200, checks: ['About Us', '<title>'] },
  { path: '/services', expectedStatus: 200, checks: ['Digital Services', '<title>'] },
  { path: '/contact', expectedStatus: 200, checks: ['Contact', '<title>'] },
  { path: '/pricing', expectedStatus: 200, checks: ['Pricing', '<title>'] },
  { path: '/packages', expectedStatus: 200, checks: ['Packages', '<title>'] },
  { path: '/portfolio', expectedStatus: 200, checks: ['Portfolio', '<title>'] },
  { path: '/blog', expectedStatus: 200, checks: ['Blog', '<title>'] },
  { path: '/free-audit', expectedStatus: 200, checks: ['Free', '<title>'] },
  { path: '/book-call', expectedStatus: 200, checks: ['Book', '<title>'] },
  { path: '/team', expectedStatus: 200, checks: ['Team', '<title>'] },
  { path: '/terms', expectedStatus: 200, checks: ['Terms', '<title>'] },
  { path: '/privacy', expectedStatus: 200, checks: ['Privacy', '<title>'] },

  // 2. Dynamic Office Pages (200 OK)
  { path: '/offices/jaipur', expectedStatus: 200, checks: ['Jaipur Office', '<title>'] },
  { path: '/offices/vrindavan', expectedStatus: 200, checks: ['Vrindavan Office', '<title>'] },
  { path: '/offices/nepal', expectedStatus: 200, checks: ['Nepal Office', '<title>'] },

  // 3. Dynamic Location City Pages (200 OK)
  { path: '/locations/jaipur', expectedStatus: 200, checks: ['Jaipur', '<title>'] },
  { path: '/locations/delhi', expectedStatus: 200, checks: ['Delhi', '<title>'] },
  { path: '/locations/patna', expectedStatus: 200, checks: ['Patna', '<title>'] },
  { path: '/locations/goa', expectedStatus: 200, checks: ['Goa', '<title>'] },

  // 4. Dynamic Programmatic Location-Service Pages (200 OK)
  { path: '/jaipur/seo', expectedStatus: 200, checks: ['SEO', 'Jaipur', '<title>'] },
  { path: '/delhi/web-development', expectedStatus: 200, checks: ['Web', 'Delhi', '<title>'] },
  { path: '/patna/seo', expectedStatus: 200, checks: ['SEO', 'Patna', '<title>'] },
  { path: '/vrindavan/social-media', expectedStatus: 200, checks: ['Social Media', 'Vrindavan', '<title>'] },

  // 5. 308 Redirect Aliases
  { path: '/consultation', expectedStatus: 308, expectedLocation: '/book-call' },
  { path: '/sitemap', expectedStatus: 308, expectedLocation: '/locations' },
  { path: '/careers', expectedStatus: 308, expectedLocation: '/team' },
  { path: '/website-development', expectedStatus: 308, expectedLocation: '/web-development' },
  { path: '/ui-ux', expectedStatus: 308, expectedLocation: '/ui-ux-design' },
  { path: '/ecommerce-development', expectedStatus: 308, expectedLocation: '/ecommerce' },
  { path: '/whitelabel', expectedStatus: 308, expectedLocation: '/white-label' },
  { path: '/scam-alert', expectedStatus: 308, expectedLocation: '/verify' },
  { path: '/report-scam', expectedStatus: 308, expectedLocation: '/verify' },
  { path: '/locations/jaipur/seo', expectedStatus: 308, expectedLocation: '/jaipur/seo' },

  // 6. 404 Invalid Routes
  { path: '/nonexistent-page-xyz', expectedStatus: 404 },
  { path: '/offices/nonexistent-office', expectedStatus: 404 },
  { path: '/locations/fake-city-slug', expectedStatus: 404 },
  { path: '/jaipur/nonexistent-service', expectedStatus: 404 },

  // 7. Sitemap & Robots
  { path: '/sitemap.xml', expectedStatus: 200, checks: ['<urlset', 'https://www.growthservice.in'] },
  { path: '/robots.txt', expectedStatus: 200, checks: ['User-Agent', 'sitemap.xml'] },

  // 8. Dynamic Blog Detail (200 OK)
  { path: '/blog/seo-vs-ppc-which-one-should-you-actually-bet-on', expectedStatus: 200, checks: ['SEO vs PPC', 'Growth Service'] },

  // 9. Admin Anonymous Login (200 OK)
  { path: '/admin/login', expectedStatus: 200, checks: ['Admin', 'Portal'] },

  // 10. Admin Protected Routes (Redirects unauthenticated requests to login)
  { path: '/admin', expectedStatus: 307, locationIncludes: '/admin/login' },
  { path: '/admin/blog', expectedStatus: 307, locationIncludes: '/admin/login' },
  { path: '/admin/blog/new', expectedStatus: 307, locationIncludes: '/admin/login' },
];

async function run() {
  console.log('====================================================');
  console.log('        NEXT.JS PRODUCTION SERVER LIVE AUDIT        ');
  console.log('====================================================');
  let passed = 0;
  let failed = 0;

  for (const tc of testCases) {
    try {
      const res = await fetchPath(tc.path);
      let ok = true;
      const reasons = [];

      if (res.status !== tc.expectedStatus) {
        ok = false;
        reasons.push(`Status: got ${res.status}, expected ${tc.expectedStatus}`);
      }

      if (tc.expectedLocation && res.headers.location !== tc.expectedLocation) {
        ok = false;
        reasons.push(`Location: got ${res.headers.location}, expected ${tc.expectedLocation}`);
      }

      if (tc.locationIncludes && (!res.headers.location || !res.headers.location.includes(tc.locationIncludes))) {
        ok = false;
        reasons.push(`Location: got ${res.headers.location}, expected to include ${tc.locationIncludes}`);
      }

      if (tc.checks) {
        for (const check of tc.checks) {
          if (!res.body.includes(check)) {
            ok = false;
            reasons.push(`Missing content assertion: "${check}"`);
          }
        }
      }

      if (ok) {
        console.log(`  ✓ OK: ${tc.path.padEnd(32)} [${res.status}]`);
        passed++;
      } else {
        console.error(`  ✗ FAIL: ${tc.path.padEnd(30)} -> ${reasons.join('; ')}`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✗ ERROR: ${tc.path} -> ${err.message}`);
      failed++;
    }
  }

  console.log('----------------------------------------------------');
  console.log(`Live Tests: ${passed} PASSED, ${failed} FAILED.`);
  console.log('====================================================');

  if (failed > 0) process.exit(1);
}

run();
