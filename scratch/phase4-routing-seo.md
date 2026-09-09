# Phase 4 Architecture Guide: Routing, Technical SEO, and Metadata

**Target Branch**: `staging`  
**Audience**: Senior Engineers & Frontend Architects  
**Scope**: Routing subsystem (`src/routing/`), SEO subsystem (`src/seo/`), Edge redirects (`vercel.json`), and programmatic sitemap pipeline.

---

## 1. Overview & Architecture Principles

Phase 4 establishes an authoritative, single source of truth for all routes, URLs, redirects, sitemaps, and Schema.org metadata across the Growth Service web platform.

```
                  ┌────────────────────────┐
                  │   src/config/business  │
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │      src/routing/      │
                  │  (Routes, Builders,    │
                  │    Aliases, Matcher)   │
                  └───────────┬────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│   src/App.tsx    │ │     src/seo/     │ │ Sitemap Pipeline │
│ (React Router)   │ │(SEOHead, Schemas)│ │(public/sitemap)  │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

---

## 2. Route Source of Truth (`src/routing/`)

All routes are defined in `src/routing/route-registry.ts` and typed in `src/routing/route-types.ts`:

- **`APP_ROUTES`**: Array of `AppRoute` objects representing the 48 canonical routes.
- **Route Fields**:
  - `path`: Normalized path string (e.g. `"/services"`).
  - `name`: Human-readable title.
  - `category`: Strict union `'core' | 'service' | 'industry' | 'package' | 'company' | 'legal' | 'payment' | 'admin' | 'utility'`.
  - `kind`: `'static' | 'dynamic' | 'alias'`.
  - `indexable`: Boolean flag for search engine indexing.
  - `includeInSitemap`: Boolean flag for sitemap XML inclusion.
  - `changefreq`: Priority hint for crawlers.
  - `priority`: Decimal priority between 0.1 and 1.0.
  - `canonicalUrl`: Precomputed canonical URL or generator.

`src/config/routes.ts` re-exports the complete routing module for backwards compatibility.

---

## 3. Canonical Route Model vs. Alias Model

Every route is explicitly declared as either **CANONICAL** or **ALIAS → CANONICAL**:

### Canonical Route
- A distinct, unique page with original content.
- `indexable: true` (unless payment/utility/legal-utility).
- Eligible for sitemap inclusion.
- Has canonical self-referencing `<link rel="canonical" href="https://www.growthservice.in/path">`.

### Alias Route
- Legacy, shorthand, or alternative URL path (e.g. `/website-development`, `/ui-ux`, `/careers`).
- Registered in `src/routing/route-registry.ts` with `canonicalTarget`.
- **Never rendered as a duplicate independent canonical page.**
- **Edge HTTP Redirect**: Mapped in `vercel.json` as a permanent 308 redirect to the canonical target.
- **Client Fallback**: In `src/App.tsx`, `<Route path={alias.path} element={<Navigate to={alias.canonicalTarget} replace />} />` ensures SPA navigation redirects instantly if edge redirect is bypassed.

---

## 4. Edge & Client Redirect Architecture

Permanent 308 redirects are defined in `vercel.json` **before** the SPA catch-all rewrite rule:

```json
{
  "redirects": [
    { "source": "/website-development", "destination": "/services/web-development", "permanent": true },
    { "source": "/ecommerce-development", "destination": "/services/web-development", "permanent": true },
    { "source": "/ui-ux", "destination": "/services/web-development", "permanent": true },
    { "source": "/whitelabel", "destination": "/services", "permanent": true },
    { "source": "/careers", "destination": "/about", "permanent": true },
    { "source": "/about/team", "destination": "/team", "permanent": true },
    { "source": "/webinars", "destination": "/resources", "permanent": true },
    { "source": "/success-stories", "destination": "/case-studies", "permanent": true },
    { "source": "/scam-alert", "destination": "/verify", "permanent": true },
    { "source": "/report-scam", "destination": "/verify", "permanent": true },
    { "source": "/sitemap", "destination": "/sitemap.xml", "permanent": true }
  ],
  "rewrites": [
    { "source": "/((?!assets/|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)", "destination": "/index.html" }
  ]
}
```

This guarantees search bots receive standard HTTP 308 status codes without downloading SPA JS bundles.

---

## 5. Route Normalization Policy

Implemented centrally in `src/routing/route-normalization.ts` via `normalizePath(path: string)`:

1. **Decodes URI components safely** (e.g. `%20` → space).
2. **Removes query strings (`?foo=bar`) and hash fragments (`#hash`)**.
3. **Collapses duplicate slashes** (`//path//to///page` → `/path/to/page`).
4. **Ensures a leading slash** (`services` → `/services`).
5. **Strips trailing slashes** (`/services/` → `/services`), except for the root path `/`.
6. **Lowercases ASCII paths** for consistent matching.

---

## 6. Typed Route Builders

Never hardcode path strings in components. Use `src/routing/route-builders.ts`:

- `buildServicePath(serviceSlug: string)`: `/services/${slug}`
- `buildOfficePath(officeSlug: string)`: `/offices/${slug}`
- `buildCityPath(citySlug: string)`: `/locations/${slug}`
- `buildLocationServicePath(citySlug: string, serviceSlug: string)`: `/${citySlug}/${serviceSlug}`
- `buildCanonicalUrl(path: string)`: `https://www.growthservice.in${normalizePath(path)}`

---

## 7. Dynamic City & Service Route Validation

Handled in `src/routing/route-resolver.ts` and `src/pages/LocationServicePage.tsx`:

When navigating to `/:city/:serviceSlug`:
1. `city` must match an active record in `CITY_LOCATIONS` (`src/data/locations.ts`).
2. `serviceSlug` must match an active record in `CORE_SERVICES` (`src/data/services.ts`).
3. If city exists in `OFFICES`, the service must also be in `office.servicesOffered` if restricted.
4. **Failure Behavior**: If invalid, `LocationServicePage` immediately renders `NotFoundPage` with noindex metadata.

---

## 8. Canonical URL Strategy

- Master Origin: `https://www.growthservice.in` (enforced in `src/seo/canonical.ts`).
- Trailing Slash Policy: **No trailing slash**.
- Protocol: Enforced HTTPS.
- Zero Apex URLs: Apex `https://growthservice.in` is completely removed from all source code and redirect targets.

---

## 9. Central Metadata & SEO Architecture (`src/seo/`)

### A. `<SEOHead>` Component (`src/seo/SEOHead.tsx`)
A declarative React Helmet component applying:
- Primary `<title>` (deduplicating `"| Growth Service"` via `formatPageTitle`).
- Standard `<meta name="description">` and `<meta name="keywords">`.
- `<link rel="canonical" href="...">`.
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `og:type`).
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Search crawler directives (`robots`, `googlebot` — `index, follow` or `noindex, nofollow`).
- Structured Data injection: `<script type="application/ld+json">`.

### B. Schema.org Builders (`src/seo/schema.ts`)
- `buildOrganizationSchema()`: Company identity, legal name, logo, contacts, social URLs.
- `buildWebSiteSchema()`: Top-level domain and search action.
- `buildBreadcrumbSchema(items)`: Valid hierarchical BreadcrumbList.
- `buildLocalBusinessSchema(office)`: Verified physical address, coordinates, opening hours for branch offices.
- `buildServiceSchema(service, location)`: Service offerings with proper provider attribution (strictly avoids fabricated reviews or ratings).

---

## 10. Sitemap Architecture & Pipeline

### A. Generation (`scratch/generate_sitemap.js`)
Builds `public/sitemap.xml` directly from canonical configuration:
1. Canonical static routes from `getSitemapRoutes()`.
2. Valid offices from `OFFICES`.
3. Valid cities from `CITY_LOCATIONS`.
4. Valid city + service combinations from `isCityServiceAvailable()`.
5. **Omits `<lastmod>` completely** to prevent false crawler signaling (Google Search guidelines).
6. Result: 175 validated canonical URLs.

### B. Validation (`scratch/validate_sitemap.js`)
Validates every URL against:
- Canonical domain prefix (`https://www.growthservice.in`).
- Non-empty URL string.
- No duplicate entries.
- No aliases.
- No non-indexable/payment/private routes.
- Strict resolution via `resolveRoute()`.
- Exits with code `1` on any violation.

---

## 11. Indexability Matrix

| Route Category | Example Routes | Indexable? | In Sitemap? | Robots Directive |
|---|---|---|---|---|
| Core Marketing | `/`, `/about`, `/services`, `/contact` | YES | YES | `index, follow` |
| Canonical Services | `/services/web-development`, `/services/seo` | YES | YES | `index, follow` |
| Offices | `/offices/jaipur-malviya-nagar` | YES | YES | `index, follow` |
| Cities | `/locations/jaipur`, `/locations/delhi` | YES | YES | `index, follow` |
| City + Service | `/jaipur/seo`, `/delhi/web-development` | YES | YES | `index, follow` |
| Payment & Checkout | `/payment`, `/payment/success`, `/checkout` | **NO** | **NO** | `noindex, nofollow` |
| Admin / Dashboard | `/admin`, `/dashboard` | **NO** | **NO** | `noindex, nofollow` |
| Aliases | `/website-development`, `/ui-ux` | **NO (Redirects)** | **NO** | 308 Redirect |
| 404 / Invalid | `/*`, `/invalid-city/invalid-service` | **NO** | **NO** | `noindex, nofollow` |

---

## 12. Breadcrumb Architecture

Component `src/components/ui/Breadcrumb.tsx`:
- Takes structured array of `{ name, path }`.
- Automatically normalizes path and formats canonical URL for each crumb.
- Renders visible HTML nav breadcrumbs matching brand theme.
- Emits schema-compliant `BreadcrumbList` JSON-LD via `buildBreadcrumbSchema()`.

---

## 13. How to Extend the Platform

### Adding a New City
1. Open `src/data/locations.ts`.
2. Add city definition to `CITY_LOCATIONS` (e.g. `{ id: 'pune', name: 'Pune', slug: 'pune', ... }`).
3. That's it!
   - Route resolver automatically resolves `/locations/pune` and `/pune/:service`.
   - Sitemap automatically includes Pune and all valid Pune service combinations upon running `npm run sitemap:generate`.
   - Canonical URLs and breadcrumbs are generated dynamically.

### Adding a New Service
1. Open `src/data/services.ts`.
2. Add service to `CORE_SERVICES`.
3. If page requires dedicated bespoke component, map in `src/routing/route-registry.ts` under `APP_ROUTES` and `ROUTE_COMPONENTS` in `src/App.tsx`.
4. Otherwise, standard service builders and city service combinations immediately resolve.

### Adding an Alias
1. Open `src/routing/route-registry.ts` and add alias entry to `ROUTE_ALIASES`:
   ```ts
   { path: '/old-path', canonicalTarget: '/canonical-path', status: 308 }
   ```
2. Open `vercel.json` and add corresponding redirect rule:
   ```json
   { "source": "/old-path", "destination": "/canonical-path", "permanent": true }
   ```
3. Run `npm run routes:validate` to ensure no loops or orphan targets exist.

---

## 14. Validation Suite Reference

All validators run via npm scripts and return standard Unix exit codes:

```bash
# Validate route registry types, categories, aliases, and builders
npm run routes:validate

# Run full route resolution test matrix (80+ cases)
npm run routes:test

# Validate XML sitemap against canonical rules and route resolver
npm run sitemap:validate

# Validate SEO origin, assets, schemas, and title logic
npm run seo:validate

# Validate TypeScript compilation without emitting JS
npm run typecheck

# Full production build test
npm run build
```
