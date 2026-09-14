# 08 — Cutover Testing, Rollback & Final Governance

> **STATUS: PERMANENT / HARD RULE**  
> Dictates the validation gate, automated test matrix, emergency rollback procedure, and hard prohibitions for production cutover.

---

## 1. Dual Build Validation

During migration, both build pipelines must remain clean and functional:
- **Vite Baseline Build:**
  ```bash
  npm run build:vite
  ```
  Must compile without errors and produce production output in `dist/`.
- **Next.js Candidate Build:**
  ```bash
  npm run next:build
  ```
  Must compile all 180+ static and dynamic pages with 0 TypeScript and 0 linting errors.

---

## 2. Automated Test Matrix

Prior to production cutover, the candidate must pass all automated test suites:

### 2.1 Route Parity Suite (`npm test`)
- Executes automated requests against local running server.
- Verifies 83+ core routes:
  - 46 static pages return HTTP 200 with non-empty content.
  - Dynamic service, location, and hub routes return HTTP 200.
  - Deliberately invalid slugs (e.g. `/services/non-existent`) return HTTP 404.
  - Redirect aliases (e.g. `/digital-marketing`) return HTTP 308.

### 2.2 Data Centralization & Link Audits
- Audits internal links across all components to ensure 0 broken links.
- Ensures all pages consume centralized `src/data/` collections.
- Validates XML sitemap links against live server routes.

### 2.3 Visual & Responsive Audits
- Compare candidate against live Vite production on Desktop (1440px) and Mobile (390px).
- Verify navigation drawer, sticky header, gradients, cards, and typography.

---

## 3. Production Cutover Gate

Production deployment to `https://www.growthservice.in/` is strictly blocked until every item is satisfied:

1. [ ] All production routes inventoried and accounted for.
2. [ ] All required routes implemented in Next.js App Router.
3. [ ] Dynamic routes verified (`generateStaticParams`, strict 404 guard).
4. [ ] URL parity verified (identical paths and canonicals).
5. [ ] Redirect parity verified (all 14 legacy aliases return 308).
6. [ ] Metadata parity verified (title, description, alternates).
7. [ ] Canonical parity verified (`https://www.growthservice.in`).
8. [ ] Structured data parity verified (JSON-LD schemas).
9. [ ] Sitemap parity verified (`public/sitemap.xml`, 175 canonical URLs).
10. [ ] Robots parity verified (`public/robots.txt`).
11. [ ] Internal links audited (0 broken links).
12. [ ] Lead forms and WhatsApp action flows tested.
13. [ ] Analytics tested (GA4 measurement ID active).
14. [ ] Typecheck passed (`tsc --noEmit` clean, 0 errors).
15. [ ] Next.js production build passed.
16. [ ] Preview deployment tested and verified.
17. [ ] Rollback runbook verified.
18. [ ] Stakeholder explicit cutover approval.

---

## 4. Emergency Rollback Runbook

If critical production issues arise post-cutover:

### 4.1 Immediate Rollback via Vercel Dashboard (< 60 seconds)
1. Go to Vercel Project Dashboard → **Deployments**.
2. Locate the last known good deployment commit.
3. Click `...` → **Instant Rollback**.
4. Traffic is reverted instantly without rebuilding.

### 4.2 In-Tree Build Rollback
1. Update `package.json` build scripts if necessary to restore `npm run build:vite`.
2. Push commit to `main` branch to trigger Vercel deployment.
3. Verify live site restored at `https://www.growthservice.in/`.

---

## 5. Hard Prohibitions

1. **NO Premature Code Deletion:** Never delete Vite source files before Next.js parity is verified.
2. **NO Blanket SPA Catch-Alls:** Never use `/*` rewrites to fake parity in Next.js.
3. **NO Brand Palette Alterations:** Never substitute official brand purple (`#6A0DAD`), gold (`#FFD700`), or WhatsApp green (`#25D366`) with arbitrary dark/gray tones.
4. **NO Silent 200s on Invalid URLs:** Dynamic routes must return true HTTP 404 for invalid slugs.
5. **NO Unrequested Scaffolding or Rewrites:** Keep all code surgical, minimal, and directly traceable to migration parity.
6. **NO Broken Canonical Links:** Canonical URLs must strictly use `https://www.growthservice.in/` with exact path parity.

---

## 6. Definition of Done

The migration is complete ONLY when:
- The live production domain runs on Next.js App Router.
- Zero drop in indexed search pages or organic search performance occurs.
- All lead capture mechanisms operate with parity.
- `MIGRATION_LEDGER.md` is updated to status `LIVE`.
