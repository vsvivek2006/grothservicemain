async function testRoutes() {
  const baseUrl = "http://localhost:3005";

  const routes = [
    {
      name: "/admin/login (public admin auth page)",
      url: `${baseUrl}/admin/login`,
      expectedRedirect: false,
      expectedStatus: 200,
    },
    {
      name: "/admin (protected, unauthenticated)",
      url: `${baseUrl}/admin`,
      expectedRedirect: true,
      redirectTargetContains: "/admin/login",
    },
    {
      name: "/admin/blog (protected, unauthenticated)",
      url: `${baseUrl}/admin/blog`,
      expectedRedirect: true,
      redirectTargetContains: "/admin/login",
    },
    {
      name: "/admin/blog/new (protected, unauthenticated)",
      url: `${baseUrl}/admin/blog/new`,
      expectedRedirect: true,
      redirectTargetContains: "/admin/login",
    },
    {
      name: "/blog (public blog listing)",
      url: `${baseUrl}/blog`,
      expectedRedirect: false,
      expectedStatus: 200,
    },
    {
      name: "/blog/how-growth-service-works-a-complete-guide-for-business-leaders (public slug)",
      url: `${baseUrl}/blog/how-growth-service-works-a-complete-guide-for-business-leaders`,
      expectedRedirect: false,
      expectedStatus: 200,
    },
  ];

  console.log("=== Testing Next.js 16 Proxy & Routing in Production Mode (Port 3005) ===\n");
  let passedCount = 0;

  for (const r of routes) {
    try {
      const res = await fetch(r.url, { redirect: "manual" });
      const status = res.status;
      const location = res.headers.get("location") || "";

      console.log(`[TEST] ${r.name}`);
      console.log(`  -> Status: ${status} ${res.statusText}`);
      if (location) {
        console.log(`  -> Location: ${location}`);
      }

      if (r.expectedRedirect) {
        if ((status === 307 || status === 308 || status === 302) && location.includes(r.redirectTargetContains!)) {
          console.log("  -> ✅ PASSED (Correctly redirected unauthenticated request)");
          passedCount++;
        } else {
          console.error(`  -> ❌ FAILED (Expected redirect to ${r.redirectTargetContains})`);
        }
      } else {
        if (status === r.expectedStatus) {
          console.log(`  -> ✅ PASSED (Loaded with ${status} OK)`);
          passedCount++;
        } else {
          console.error(`  -> ❌ FAILED (Expected status ${r.expectedStatus}, got ${status})`);
        }
      }
      console.log("");
    } catch (err: unknown) {
      console.error(`[TEST] ${r.name} ERROR:`, err);
    }
  }

  console.log(`========================================`);
  console.log(`Route Test Results: ${passedCount}/${routes.length} passed.`);
  process.exit(passedCount === routes.length ? 0 : 1);
}

testRoutes();
