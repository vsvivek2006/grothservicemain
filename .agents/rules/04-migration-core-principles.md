# 04 — Migration Core Principles & Route Parity

> **STATUS: PERMANENT / HARD RULE**  
> Governs the migration of `growthservice.in` from React + Vite to Next.js App Router.  
> **Core Principle:** PRESERVE FIRST. IMPROVE LATER. Zero intentional breaking changes to URLs, SEO, UI, content, forms, analytics, redirects, assets, or production behavior.

---

## 1. Absolute Production Safety Rules

### 1.1 Source of Truth Until Cutover
- Vite remains the production baseline until cutover gate verification is signed off.
- `next build` passing is NOT proof of migration completion. Parity across all routes, SEO, and functionality is mandatory.

### 1.2 No Big-Bang Rewrite
Migrate in ordered stages:
`foundation → shared layout → static route families → dynamic architecture → SEO/structured data → functional validation → preview deployment → cutover`.

### 1.3 No Delete-Before-Parity
Never delete, disable, or alter any existing Vite implementation until its Next.js counterpart has been:
- Implemented and typechecked (`tsc --noEmit`)
- Linted and built (`next build`)
- Tested against the full route matrix (83+ routes)
- Verified for SEO, structured data, visual, and functional parity
- Verified on preview deployment

### 1.4 No Fallback-Based Fake Parity
Do not mask unmigrated routes with blanket catch-alls or SPA fallbacks:
- Never route `/*` → `/` or generic fallback pages.
- Every route must be explicitly migrated or deliberately redirected via 301/308 in Next.js config.
- Missing routes must return proper 404 status codes, not 200 with home shell.

---

## 2. Scope & Boundaries

- **Public Website:** All static, dynamic, programmatic SEO, and hub routes migrate to root Next.js App Router.
- **Admin Suite:** Fully merged into root Next.js App Router (`src/app/admin`, `src/lib/ai`, `src/lib/supabase`, `src/components/admin`) per `01-architecture-merge-plan.md`. Standalone `Admin/` folder is deprecated.
- **Out of Scope for Migration:** Do not perform brand redesigns, content re-writes, database schema alterations, or unnecessary dependency replacements during migration.

---

## 3. URLs Are a Public Contract

Every URL is an indexed SEO and user-facing asset. Preservation is mandatory.

### 3.1 Strict URL Matching
- Exact path matching: no changes in path segments, casing, or slug patterns.
- Trailing slash consistency: match current production Vite behavior exactly.
- Dynamic route slugs (`[slug]`, `[location]`, `[hub]`) must map 1:1 to previous React Router parameter schemas.

### 3.2 Dynamic Location & Programmatic SEO Routes
High-risk routes (e.g. `/services/:service/:location`, `/hub/:location`, `/locations/:city`):
- Must use `generateStaticParams()` where static pre-rendering is required.
- Invalid slugs must trigger `notFound()` returning true HTTP 404, never a 200 dummy page.
- Slugs and route parameters must use the centralized dataset (`src/data/`) without loss.

---

## 4. React Router to Next.js Mapping

| React Router Pattern | Next.js App Router Equivalent |
|---|---|
| `<Route path="/" element={<Home />} />` | `src/app/page.tsx` |
| `<Route path="/about" element={<About />} />` | `src/app/about/page.tsx` |
| `<Route path="/services/:slug" element={<ServiceDetail />} />` | `src/app/services/[slug]/page.tsx` |
| `<Route path="/locations/:city" element={<LocationDetail />} />` | `src/app/locations/[city]/page.tsx` |
| `<Route path="/hub/:location" element={<HubDetail />} />` | `src/app/hub/[location]/page.tsx` |
| `<Route path="*" element={<NotFound />} />` | `src/app/not-found.tsx` |

- **No route deletion without proof:** Every route in the Route Parity Inventory must have an active target in Next.js or an explicit 301 redirect rule.

---

## 5. Build Script & Deployment Safety

- Dual-build integrity must be maintained during migration:
  - `npm run build:vite` → outputs to `dist/` (Vite baseline).
  - `npm run next:build` → outputs to `.next/` (Next.js candidate).
- Vercel configuration (`vercel.json` / `next.config.js`):
  - Do not use SPA rewrites (`"source": "/(.*)", "destination": "/index.html"`) in Next.js production.
  - Custom headers (security, cache control) must be preserved in `next.config.js`.
- Next.js version freeze: keep Next.js and React versions pinned to avoid hydration and compiler mismatches.
