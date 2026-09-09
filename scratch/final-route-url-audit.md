# Growth Service — Comprehensive Final Route, URL & Link Integrity Audit

**Branch**: `staging`  
**Commit Baseline**: `59dc9ed`  
**Timestamp**: 2026-09-10T04:16:00+05:30  
**Auditor**: Antigravity Automated Route Engine

---

## 1. Initial Root Cause Analysis: Why Routes Were Failing

### `http://localhost:5173/terms`
- **Root Cause**: `src/pages/Terms.tsx` attempted to render `<FileText className="h-5 w-5" />` on line 250 without importing `FileText` from `lucide-react`.
- **Runtime Consequence**: Browser threw an unhandled `ReferenceError: FileText is not defined` during React component mounting, causing the entire React tree inside `<Suspense>` to crash or display a blank screen.

### `http://localhost:5173/locations/jaipur`
- **Root Cause 1**: `src/pages/CityHubPage.tsx` referenced `relatedCities` (lines 370, 377) and `<CTABanner />` (line 395) without defining `relatedCities` or importing `CTABanner`.
- **Root Cause 2**: `src/pages/CityHubPage.tsx` referenced `city.id` (lines 49-52) when `LocationData` uses `slug`.
- **Runtime Consequence**: Browser threw `ReferenceError: relatedCities is not defined` when attempting to render the CityHubPage component.

### Systematic Root Cause of Hidden Runtime Failures
- `package.json` had `"typecheck": "tsc --noEmit"`. Because `tsconfig.json` uses TypeScript project references (`tsconfig.app.json`), running `tsc --noEmit` on root inspected zero files and exited 0. `vite build` similarly strips TypeScript types without full typecheck by default.
- Updating `package.json` to `"typecheck": "tsc -b"` ensures strict compile-time verification across all components.

---

## 2. Source-by-Source Route & Link Inventory

### SOURCE A: Route Registry (`src/routing/route-registry.ts`)
- Authoritative static canonical routes: 46 routes
- Authoritative static aliases: 13 alias mappings

### SOURCE B: React Router Definitions (`src/App.tsx`)
- Static routes mapped from `ROUTE_COMPONENTS`
- Dynamic routes:
  - `/offices/:officeSlug` (`OfficeDetailPage`)
  - `/locations/:citySlug` (`CityHubPage`)
  - `/:city/:serviceSlug` (`LocationServicePage`)
  - Legacy alias: `/locations/:city/:serviceSlug` (`LegacyLocationServiceRedirect`)

### SOURCE C: Page Components (`src/pages/*`)
- Root pages: 34 files
- Design & Development: 5 files
- Digital Marketing: 7 files
- White Label: 4 files
- Total page components: 50
- **Orphan Candidate Identified**: `src/pages/SEOResults.tsx`
  - Analysis: 792 lines containing hardcoded demonstration/mock data (`Competitor A`, dummy rankings, mock visitor counts). Not bound to any router route, not in navigation.
  - Decision: Obsolete demo component. Remove safely to prevent exposing mock dashboard in production. Clean up references in `llm.txt` and `llms.txt`.

### SOURCE D: Navigation Configuration (`src/config/navigation.ts`)
- Header main navigation
- Submenus (digital marketing, dev, white-label)
- Footer links
- **Alias Usage Found**: `Careers` (`/careers`) points to alias instead of canonical `/team`.

### SOURCE E: Route Builders (`src/routing/route-builders.ts`)
- Missing explicit hub builders (`buildOfficesPath`, `buildLocationsPath`). Currently rely on ad-hoc strings.
- Action: Add typed, authoritative `buildOfficesPath()` and `buildLocationsPath()`.

### SOURCE F: Route Resolver (`src/routing/route-resolver.ts`)
- **Panaji / Goa Bug**: `cityBySlug.set('panaji', cityBySlug.get('goa')!)` returned `status: 200` for `/locations/panaji` while outputting canonical `/locations/goa`.
- Action: Map `panaji` as an explicit 301 alias redirect to `/locations/goa`. Ensure `/locations/panaji` is never treated as canonical 200, never in sitemap.

### SOURCE G: Sitemap (`public/sitemap.xml`)
- Must contain only public canonical URLs (static + offices + cities + valid city/service combinations).

### SOURCE H: Vercel Redirects (`vercel.json`)
- Must match all permanent aliases defined in the central routing architecture, including `/locations/panaji` -> `/locations/goa`.

---

## 3. Plan of Action
1. Fix all compile and runtime errors in page components (`Terms.tsx`, `CityHubPage.tsx`, `LocationServicePage.tsx`, `Privacy.tsx`, `RefundPolicy.tsx`, `WhiteLabel.tsx`, `OfficesHub.tsx`, etc.).
2. Centralize dynamic route models in `src/routing/dynamic-routes.ts`.
3. Add explicit hub builders `buildOfficesPath()` and `buildLocationsPath()`.
4. Fix Panaji / Goa canonical redirect architecture.
5. Safely remove orphan `SEOResults.tsx` and clean up `llm.txt`/`llms.txt`.
6. Fix navigation alias usage (`/careers` -> `/team`).
7. Update `vercel.json` with all canonical aliases.
8. Create automated route coverage auditor `scripts/audit_route_coverage.js`.
9. Refactor `scripts/test_route_matrix.js` and `scripts/validate_sitemap.js` to derive from central definitions.
10. Verify full suite (`typecheck`, `lint`, `build`, all route and link validators).
