# Growth Service Frontend

Official web platform for Growth Service — high-performance digital marketing, SEO, and web engineering agency.

---

## 1. Quick Start & Development

### Prerequisites
* **Node.js**: `>=18.0.0` (Recommended: Node 20 LTS via `.nvmrc`)
* **npm**: `>=9.0.0`

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```
Starts Vite dev server on `http://localhost:5173`.

---

## 2. Engineering Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Starts Vite local development server with HMR |
| `npm run build` | Compiles optimized production bundle into `dist/` |
| `npm run preview` | Locally serves production build from `dist/` |
| `npm run typecheck` | Type-checks entire codebase using `tsc --noEmit` |
| `npm run lint` | Lints TypeScript and TSX files using ESLint |
| `npm run routes:validate` | Validates route registry, categories, aliases, and builders |
| `npm run routes:test` | Executes 80-case route resolution test matrix |
| `npm run sitemap:generate`| Programmatically builds `public/sitemap.xml` from canonical routes |
| `npm run sitemap:validate`| Validates XML sitemap structure, canonical origin, and status codes |
| `npm run seo:validate` | Validates canonical origin, assets, titles, and JSON-LD schemas |
| `npm run data:validate` | Validates data normalization and foreign key integrity |
| `npm run centralization:audit` | Ensures zero hardcoded business facts or raw tel/wa links in UI |

---

## 3. Architecture & Codebase Map

The application follows a strict **Single Source of Truth** architecture:

```
src/
├── config/              # Business identity, contact defaults, global site constants
│   ├── business.ts      # Canonical business name, phones, emails, social URLs
│   ├── site.ts          # Metadata defaults & origin configuration
│   └── routes.ts        # Re-export barrel for backwards compatibility
├── data/                # Authoritative, normalized master datasets
│   ├── offices.ts       # Verified physical office locations and coordinates
│   ├── locations.ts     # Standard regional and city data records
│   ├── services.ts      # Canonical 13 services, deliverables, and tech stacks
│   ├── packages.ts      # Commercial solution packages and scopes
│   └── team.ts          # Leadership and engineering team members
├── selectors/           # Pure, memoized data access layer
│   ├── businessSelectors.ts  # Contact & company selectors
│   ├── officeSelectors.ts    # Office lookup & contact methods
│   ├── locationSelectors.ts  # City & regional filtering
│   └── serviceSelectors.ts   # Service lookup & category filtering
├── services/            # Cross-cutting communication & utility services
│   └── communication.ts # Canonical WhatsApp, tel:, and mailto: URL generators
├── routing/             # Single source of truth for routing
│   ├── route-types.ts   # Route definitions, categories, and kinds
│   ├── route-registry.ts# 48 canonical routes & edge alias mapping
│   ├── route-builders.ts# Type-safe URL builders (buildServicePath, etc.)
│   ├── route-resolver.ts# Dynamic route matcher & city/service validator
│   └── route-normalization.ts # Project-wide URL normalizer
├── seo/                 # Centralized SEO & Structured Data layer
│   ├── SEOHead.tsx      # Declarative Helmet component (meta, OG, Twitter, JSON-LD)
│   ├── schema.ts        # Schema.org generators (Org, WebSite, Breadcrumbs, etc.)
│   ├── canonical.ts     # Canonical origin enforcement (https://www.growthservice.in)
│   └── seo-config.ts    # Deterministic title and description formatters
├── components/          # Reusable UI components & layouts
└── pages/               # Lazy-loaded page views
```

---

## 4. Where Things Live

* **Where business facts live**: `src/config/business.ts` and `src/data/offices.ts`.
* **Where routes live**: `src/routing/route-registry.ts`.
* **Where services live**: `src/data/services.ts`.
* **Where locations live**: `src/data/locations.ts`.
* **Where SEO logic lives**: `src/seo/` (`SEOHead.tsx`, `schema.ts`, `canonical.ts`).
* **Where route builders live**: `src/routing/route-builders.ts`.

---

## 5. Environment Variables

Client configuration is defined in `.env.example`:

```bash
# Canonical Production URL (defaults to https://www.growthservice.in)
VITE_SITE_URL=https://www.growthservice.in

# Google Analytics 4 Measurement ID
VITE_GA_MEASUREMENT_ID=G-P50L6F04NE
```

> **Security Note**: Never commit `.env` or `.env.local` files containing secrets. All `VITE_*` variables are bundled directly into client JavaScript.

---

## 6. Deployment & Hosting (Vercel)

* **Target Branch**: `staging`
* **Framework**: Vite
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Edge Routing & Redirects**: Handled via `vercel.json` with HTTP 308 permanent redirects for legacy aliases, HSTS headers, and non-blocking Content Security Policy.
