# Phase 4 Preflight Architecture Audit

## 1. Current Branch & Commit
- **Branch**: `staging` (Verified: `git status` on branch `staging`, `main` untouched).
- **Commit**: `bc48344 feat(ui): complete Phase 3 UI consumer migration and component refactoring`

## 2. Architecture State (Phases 1–3)
- **Phase 1 (Data Normalization)**: Canonical data models established in `src/data/` (`offices.ts`, `services.ts`, `packages.ts`, `team.ts`, `locations.ts`, `industries.ts`). Foreign keys strictly normalized. `data:validate` passes with 0 errors.
- **Phase 2 (Selectors & Access Layer)**: Pure selector layer in `src/selectors/` and communication helpers in `src/services/communication.ts`.
- **Phase 3 (UI Migration)**: Modularized `src/components/header/`, `src/components/footer/`, `src/components/home/`, and team subcomponents. `src/pages/Home.tsx` reduced from 1,513 to 135 lines. Zero centralization violations across 146 source files (`centralization:audit` exit code 0).

## 3. Routing Duplication Found
- **Split Route Definitions**:
  - `src/config/routes.ts` defines `APP_ROUTES` with metadata, canonical paths, priorities, and aliases.
  - `src/App.tsx` manually specifies 40+ `<Route>` elements, plus 10+ manual `<Route element={<Navigate to=... replace />} />` alias routes.
  - `scratch/test_route_matrix.js` duplicates route matching logic with private regex and manual Maps.
- **Hardcoded Path Construction**:
  - Navigation links and component actions manually concatenate `/offices/${slug}`, `/locations/${slug}`, `/${city}/${serviceSlug}` instead of consuming centralized route builders.

## 4. Metadata Duplication Found
- Scattered `<Helmet>` blocks across individual page components manually creating `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags.
- Inconsistent titles and title casing.
- No central title template or meta description generator.

## 5. Sitemap Duplication & Integrity Issues
- `scratch/generate_sitemap.js` hardcodes `BASE_URL = 'https://www.growthservice.in'`, manually iterates arrays without route builders, and assigns `lastmod: TODAY` (`new Date()`) across every URL, violating Google's guidelines against artificial lastmod timestamps.
- No automated sitemap validator verifying duplicate URLs, aliases, invalid dynamic routes, or status codes.

## 6. Canonical URL & Origin Inconsistencies
- `index.html` uses `https://www.growthservice.in/` with trailing slash, while `src/config/business.ts` defines `canonicalOrigin: "https://www.growthservice.in"`.
- Some components used `https://growthservice.in` (apex) vs `https://www.growthservice.in` (www subdomain).
- Project rule: Single source of truth is `getCanonicalOrigin()` (`https://www.growthservice.in`). Standardize canonical paths without trailing slash (except root `/`).

## 7. Alias Inconsistencies & Client-Side vs Platform Redirects
- Aliases (`/website-development`, `/ecommerce-development`, `/ui-ux`, `/whitelabel`, `/careers`, `/about/team`, `/webinars`, `/success-stories`, `/scam-alert`, `/report-scam`, `/consultation`, `/email-marketing`, `/sitemap`) only redirected via React Router `<Navigate replace />`.
- Search engine crawlers hitting these URLs receive an SPA HTML response rather than a 301/308 HTTP redirect.
- Platform-level redirects must be configured in `vercel.json` without breaking SPA rewrites or static assets.

## 8. Dynamic City/Service Route Issues
- Catch-all dynamic route `/:city/:serviceSlug` matches arbitrary two-segment URLs.
- Invalidation must be strict: If `city` is not in `citiesData`, or `serviceSlug` is not in `servicesData`, or `!city.servicesAvailable.includes(serviceSlug)`, the page must render a genuine `NotFound` view and exclude itself from sitemaps and indexation.

## 9. Structured-Data Duplication
- `index.html` has hardcoded Organization JSON-LD with brand typo "GrowthService" and legacy phone/address data.
- Multiple pages inject disparate JSON-LD schemas.
- Need a central structured data generator (`src/seo/schema.ts`) deriving data from `businessConfig`, `officesData`, `servicesData`, `citiesData`.

## 10. Route Registry Type Safety
- In `src/config/routes.ts`, route `verify` specifies `category: "company"`, but the `AppRoute.category` union type lacked `"company"`.

## 11. Dependency & Tooling Audit
- `next-seo` is installed in `package.json` dependencies but completely unused.
- `@types/react-router-dom` v5 types installed while project uses `react-router-dom` v6.
- `react-snap` and `vite-plugin-sitemap` installed but unconfigured.
