import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: [
    'src/routing/index.ts',
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts',
    'src/config/business.ts'
  ],
  outdir: 'scratch/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

const { 
  resolveRoute, 
  APP_ROUTES, 
  getRouteAliases, 
  buildOfficePath, 
  buildCityPath, 
  buildLocationServicePath,
  normalizePath 
} = await import('./dist/routing/index.js');

const testCases = [
  // Static Canonical Pages (200 OK)
  { path: '/', expectedStatus: 200, expectedKind: 'static' },
  { path: '/about', expectedStatus: 200, expectedKind: 'static' },
  { path: '/services', expectedStatus: 200, expectedKind: 'static' },
  { path: '/portfolio', expectedStatus: 200, expectedKind: 'static' },
  { path: '/pricing', expectedStatus: 200, expectedKind: 'static' },
  { path: '/packages', expectedStatus: 200, expectedKind: 'static' },
  { path: '/contact', expectedStatus: 200, expectedKind: 'static' },
  { path: '/book-call', expectedStatus: 200, expectedKind: 'static' },
  { path: '/free-audit', expectedStatus: 200, expectedKind: 'static' },
  { path: '/blog', expectedStatus: 200, expectedKind: 'static' },
  { path: '/resources', expectedStatus: 200, expectedKind: 'static' },
  { path: '/case-studies', expectedStatus: 200, expectedKind: 'static' },
  { path: '/testimonials', expectedStatus: 200, expectedKind: 'static' },
  { path: '/help-center', expectedStatus: 200, expectedKind: 'static' },
  { path: '/faq', expectedStatus: 200, expectedKind: 'static' },
  { path: '/accessibility', expectedStatus: 200, expectedKind: 'static' },
  { path: '/verify', expectedStatus: 200, expectedKind: 'static' },
  { path: '/refund', expectedStatus: 200, expectedKind: 'static' },
  { path: '/terms', expectedStatus: 200, expectedKind: 'static' },
  { path: '/privacy', expectedStatus: 200, expectedKind: 'static' },
  { path: '/onboarding-agreement', expectedStatus: 200, expectedKind: 'static' },
  { path: '/offer', expectedStatus: 200, expectedKind: 'static' },
  { path: '/growth-services', expectedStatus: 200, expectedKind: 'static' },
  { path: '/impact', expectedStatus: 200, expectedKind: 'static' },

  // Service Canonical Pages (200 OK)
  { path: '/digital-marketing', expectedStatus: 200, expectedKind: 'static' },
  { path: '/seo', expectedStatus: 200, expectedKind: 'static' },
  { path: '/social-media', expectedStatus: 200, expectedKind: 'static' },
  { path: '/paid-marketing', expectedStatus: 200, expectedKind: 'static' },
  { path: '/local-seo', expectedStatus: 200, expectedKind: 'static' },
  { path: '/content-marketing', expectedStatus: 200, expectedKind: 'static' },
  { path: '/lead-generation', expectedStatus: 200, expectedKind: 'static' },
  { path: '/branding', expectedStatus: 200, expectedKind: 'static' },
  { path: '/design-development', expectedStatus: 200, expectedKind: 'static' },
  { path: '/web-development', expectedStatus: 200, expectedKind: 'static' },
  { path: '/ui-ux-design', expectedStatus: 200, expectedKind: 'static' },
  { path: '/wordpress-development', expectedStatus: 200, expectedKind: 'static' },
  { path: '/ecommerce', expectedStatus: 200, expectedKind: 'static' },
  { path: '/app-development', expectedStatus: 200, expectedKind: 'static' },
  { path: '/white-label', expectedStatus: 200, expectedKind: 'static' },
  { path: '/white-label-seo', expectedStatus: 200, expectedKind: 'static' },
  { path: '/white-label-ppc', expectedStatus: 200, expectedKind: 'static' },
  { path: '/white-label-smo', expectedStatus: 200, expectedKind: 'static' },
  { path: '/white-label-web', expectedStatus: 200, expectedKind: 'static' },

  // Hubs & Dynamic Pages (200 OK)
  { path: '/locations', expectedStatus: 200, expectedKind: 'static' },
  { path: '/locations/jaipur', expectedStatus: 200, expectedKind: 'dynamic-city' },
  { path: '/locations/vrindavan', expectedStatus: 200, expectedKind: 'dynamic-city' },
  { path: '/locations/delhi', expectedStatus: 200, expectedKind: 'dynamic-city' },
  { path: '/locations/patna', expectedStatus: 200, expectedKind: 'dynamic-city' },
  { path: '/locations/goa', expectedStatus: 200, expectedKind: 'dynamic-city' },
  { path: '/offices', expectedStatus: 200, expectedKind: 'static' },
  { path: '/offices/jaipur', expectedStatus: 200, expectedKind: 'dynamic-office' },
  { path: '/offices/vrindavan', expectedStatus: 200, expectedKind: 'dynamic-office' },
  { path: '/offices/nepal', expectedStatus: 200, expectedKind: 'dynamic-office' },
  { path: '/team', expectedStatus: 200, expectedKind: 'static' },

  // Programmatic Location-Service Combinations (200 OK)
  { path: '/jaipur/seo', expectedStatus: 200, expectedKind: 'dynamic-location-service' },
  { path: '/jaipur/web-development', expectedStatus: 200, expectedKind: 'dynamic-location-service' },
  { path: '/vrindavan/social-media', expectedStatus: 200, expectedKind: 'dynamic-location-service' },
  { path: '/patna/seo', expectedStatus: 200, expectedKind: 'dynamic-location-service' },

  // Canonical Permanent Aliases (301 Redirects)
  { path: '/website-development', expectedStatus: 301, expectedCanonical: '/web-development' },
  { path: '/ecommerce-development', expectedStatus: 301, expectedCanonical: '/ecommerce' },
  { path: '/ui-ux', expectedStatus: 301, expectedCanonical: '/ui-ux-design' },
  { path: '/whitelabel', expectedStatus: 301, expectedCanonical: '/white-label' },
  { path: '/careers', expectedStatus: 301, expectedCanonical: '/team' },
  { path: '/about/team', expectedStatus: 301, expectedCanonical: '/team' },
  { path: '/success-stories', expectedStatus: 301, expectedCanonical: '/case-studies' },
  { path: '/webinars', expectedStatus: 301, expectedCanonical: '/resources' },
  { path: '/consultation', expectedStatus: 301, expectedCanonical: '/book-call' },
  { path: '/scam-alert', expectedStatus: 301, expectedCanonical: '/verify' },
  { path: '/report-scam', expectedStatus: 301, expectedCanonical: '/verify' },
  { path: '/email-marketing', expectedStatus: 301, expectedCanonical: '/digital-marketing' },
  { path: '/sitemap', expectedStatus: 301, expectedCanonical: '/locations' },
  { path: '/locations/jaipur/seo', expectedStatus: 301, expectedCanonical: '/jaipur/seo' },

  // Normalization Edge Cases (Uppercase, Trailing Slash, Double Slash)
  { path: '/ABOUT/', expectedStatus: 200, expectedKind: 'static' },
  { path: '//services//', expectedStatus: 200, expectedKind: 'static' },
  { path: '/OFFICES/JAIPUR/', expectedStatus: 200, expectedKind: 'dynamic-office' },

  // Invalid / Not-Found Routes (404)
  { path: '/random-invalid-page', expectedStatus: 404 },
  { path: '/nonexistent/city', expectedStatus: 404 },
  { path: '/jaipur/nonexistent-service', expectedStatus: 404 },
  { path: '/offices/nonexistent', expectedStatus: 404 },
  { path: '/locations/unknown-city', expectedStatus: 404 }
];

console.log('====================================================');
console.log('          ROUTE MATRIX VERIFICATION REPORT          ');
console.log('====================================================');

let passed = 0;
let failed = 0;

for (const tc of testCases) {
  const res = resolveRoute(tc.path);
  let ok = res.status === tc.expectedStatus;

  if (ok && tc.expectedKind && res.kind !== tc.expectedKind) {
    ok = false;
  }
  if (ok && tc.expectedCanonical && res.canonical !== tc.expectedCanonical) {
    ok = false;
  }

  if (ok) {
    passed++;
    const label = res.status === 301 ? `301 -> ${res.canonical}` : `${res.status} ${res.kind}`;
    console.log(`  ✓ OK: ${tc.path.padEnd(30)} [${label}]`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${tc.path.padEnd(30)} expected status ${tc.expectedStatus}, got ${res.status} (${res.kind || res.reason})`);
  }
}

console.log('----------------------------------------------------');
console.log(`Results: ${passed} PASSED, ${failed} FAILED.`);
console.log('====================================================');

if (failed > 0) {
  process.exit(1);
}
process.exit(0);
