# 05 — Phased Migration Strategy & Architecture

> **STATUS: PERMANENT / HARD RULE**  
> Governs the execution phases, component boundaries, and data architecture for the Vite to Next.js migration.

---

## 1. Migration Phase Progression

All migration work must progress sequentially through defined phases. Never skip ahead.

### Phase 0 — Baseline & Route Freeze
- Inventory all existing production routes (static, dynamic, programmatic, redirects).
- Establish baseline test runs (`npm test`, `npm run build:vite`).
- Document all route paths, canonical tags, and status codes in `MIGRATION_LEDGER.md`.

### Phase 1 — Next.js Foundation
- Configure Next.js App Router (`next.config.js`, `tsconfig.json`, Tailwind integration).
- Pin dependencies; ensure dual-build coexistence (`build:vite` and `next:build`).
- Set up root layout shell (`src/app/layout.tsx`) and base HTML metadata.

### Phase 2 — Shared Layout Migration
- Port global navigation (`Header`, `Footer`, `NavigationDrawer`, notification top bars).
- Ensure mobile menus, active link states, and interactive triggers function identically.
- Retain global theme and brand styling without alterations.

### Phase 3 — Static Route Families
- Migrate all fixed-path pages (`/`, `/about`, `/contact`, `/pricing`, `/packages`, etc.).
- Verify each page against live production counterpart for content and layout parity.

### Phase 4 — Dynamic Route Families
- Migrate parameterized routes (`/services/[slug]`, `/locations/[city]`, `/hub/[location]`).
- Implement `generateStaticParams()` using existing data arrays.
- Enforce strict `notFound()` guards for invalid parameters.

### Phase 5 — SEO & Indexation Parity
- Implement `generateMetadata()` for all pages matching production title/description.
- Configure JSON-LD structured data (`Organization`, `LocalBusiness`, `Service`).
- Validate `sitemap.xml`, `robots.txt`, and redirect rules.

### Phase 6 — Business, Forms & Tracking Validation
- Verify lead submission forms (Contact, Free Audit, Book a Call).
- Verify WhatsApp redirection flow (`https://wa.me/...`).
- Verify Google Analytics (GA4) pageview and conversion event tracking.

### Phase 7 — Production Preview & Parity Audit
- Deploy candidate to preview environment.
- Run automated route matrix tests (all 83+ routes returning HTTP 200/404 as expected).
- Perform visual and functional regression audits.

### Phase 8 — Cutover Readiness
- Verify all checklist items in `MIGRATION_LEDGER.md`.
- Ensure rollback runbook (`ROLLBACK.md`) is tested and operational.
- Obtain final stakeholder cutover approval.

---

## 2. Shared Layout Guardrails

The shared layout (`Header`, `Footer`, announcement bars) is the visual backbone of the site:
- **Header & Navigation:** Must replicate desktop dropdowns, mobile hamburger drawer, phone CTA, and WhatsApp action buttons.
- **Notification Bar:** Must preserve exact color gradient (`from-purple-900 via-purple-700 to-pink-600`), text copy, and dismiss behavior.
- **Footer:** Must contain identical navigation links, contact info, social links, legal disclaimers, and copyright notice.
- **Layout Rule:** Do NOT redesign or "re-imagine" layouts during migration.

---

## 3. Server vs. Client Component Strategy

Next.js App Router uses React Server Components (RSC) by default. Use server components where possible, client components only when necessary.

### 3.1 Server Components (Default)
Use for:
- Static content pages and wrappers.
- Layouts and metadata containers.
- Data fetching and programmatic SEO pages.

### 3.2 Client Components (`'use client'`)
Use only when requiring:
- React hooks (`useState`, `useEffect`, `useCallback`, `useContext`).
- Browser APIs (`window`, `localStorage`, `navigator`, DOM events).
- Interactive UI elements (mobile menu toggles, modals, animated accordions, forms).

### 3.3 Golden Rule of Client Boundaries
Push `'use client'` down to the smallest interactive leaf component. Never mark an entire page or root layout as `'use client'` simply to accommodate an interactive button.

---

## 4. Data Centralization & Source of Truth

The current application relies on centralized data arrays in `src/data/` (e.g. `services.ts`, `locations.ts`, `hubs.ts`):
- **Central Data Preservation:** Do NOT hardcode inline strings inside pages or create fragmented duplicate data files.
- **Single Source of Truth:** Next.js route generators, page views, and sitemaps must all consume the same centralized datasets in `src/data/`.
- **Normalization:** Any data transformers or utility functions must produce deterministic, identical output to the Vite implementation.

---

## 5. Route-Family Completion Gate

Before marking any route family as complete in `MIGRATION_LEDGER.md`:
1. Every route in the family must compile cleanly without TypeScript errors.
2. Metadata (title, description, canonical) must match baseline.
3. Desktop and mobile viewports must visually align with production.
4. Form submissions and interactive elements must be verified.
5. Live server tests must return HTTP 200 with complete body content.
