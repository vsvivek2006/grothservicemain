# Growth Service — Next.js Single-App Merge Architecture Plan

## Mission

Merge the two existing Next.js applications into **one production Next.js application** while preserving the current Growth Service website's URLs, UI, content, SEO behavior, lead flows, analytics, and admin/blog functionality.

This is a consolidation project, not a redesign.

## Current repository reality

The latest `main` branch contains the original Vite application, the root Next migration, and a separate `Admin/` Next application. Recent commits show continued migration work through dynamic routes, SEO/sitemap/robots, live parity testing, production cutover configuration, and Core Web Vitals optimization. The root Next homepage now renders the existing Home view.

The root package currently exposes Next as the default `dev/build/start` runtime while still retaining Vite scripts, so this hybrid state must be treated as transitional until the merged app is actually production-ready.

## Target architecture

Use **one Next.js application at repository root**.

```text
/
├── app/
│   ├── (public)/
│   ├── admin/
│   ├── api/
│   │   └── admin/
│   ├── layout.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
├── data/
├── config/
├── routing/
├── selectors/
├── services/
├── seo/
├── lib/
├── scripts/
├── public/
└── package.json
```

Adapt exact folders to the repository rather than mechanically moving files.

## Non-negotiable decisions

1. **One Next runtime** — no standalone `Admin/` server in the final architecture.
2. **Admin becomes `/admin/*` inside the root Next app.**
3. **Admin APIs/server actions become part of the same root application.**
4. **One dependency graph and one lockfile are authoritative.**
5. **One tested Next/React version is selected and frozen during consolidation.**
6. **Do not combine the merge with an unrelated framework-major upgrade.**
7. Preserve the existing Growth Service visual system; migration is not a redesign.

## Public-site source of truth

The existing Vite application remains the behavioral reference until the merged Next app passes parity gates.

The centralized `src/routing/route-registry.ts` is authoritative for canonical paths, aliases, sitemap inclusion, priorities, and route categories.

Preserve all canonical routes and aliases, including:

- core pages
- digital marketing pages
- design/development pages
- white-label pages
- resources/case studies/testimonials/help center
- offices
- locations
- team/legal/trust pages
- city hubs
- city/service programmatic pages
- blog

Do not create a generic catch-all that hides missing routes.

## Admin merge boundary

The standalone Admin app currently uses Next.js 16.3.5, React 19.2.8, Supabase SSR, Supabase, Tiptap, Groq, Zod, React Hook Form and its own Tailwind/shadcn stack. The root Next app currently uses a different Next/React generation.

Do not blindly copy `Admin/package.json`. First produce a compatibility matrix and select one tested dependency set for the merged application.

The existing Admin proxy protects `/admin/*`; preserve this security boundary in the root application. Public traffic must never be forced through admin authentication.

## Security requirements

Before removing `Admin/`:

- audit every server action and route handler
- audit every Supabase service-role use
- keep secrets server-only
- enforce authorization server-side, not only in proxy/UI
- explicitly define who is an administrator
- validate all mutation input
- sanitize trusted/rendered rich HTML
- validate redirect destinations
- review upload/image handling
- preserve secure cookies/session refresh

## Routing strategy

Remove React Router from the final production runtime.

Convert behavior to native Next App Router routes:

```text
/offices
/offices/[officeSlug]
/locations
/locations/[citySlug]
/[city]/[serviceSlug]
/blog
/blog/[slug]
/admin
/admin/login
/admin/blog/...
/api/admin/...
```

Dynamic routes must use controlled dataset lookups and return proper 404s for invalid combinations.

## SEO

Preserve and improve existing Next SEO behavior:

- metadataBase
- canonical URLs
- per-page metadata
- Open Graph
- Twitter
- JSON-LD
- sitemap
- robots
- redirects
- dynamic metadata
- blog metadata
- admin noindex
- correct 404 behavior

The sitemap must derive from the existing route registry and programmatic datasets rather than duplicated route lists.

## Vercel

Review `vercel.json` before final deployment. Existing headers/redirects can be preserved where appropriate, but **do not carry a Vite SPA `/index.html` fallback into final Next production routing**.

Move behavior to the correct Next mechanisms (`next.config.*`, `proxy.ts`, route handlers, `headers`, `redirects`, `sitemap.ts`, `robots.ts`) where appropriate.

## Vite retirement sequence

1. Baseline Vite.
2. Complete public Next parity.
3. Merge Admin.
4. Run dual-build verification.
5. Run live URL/SEO/functional parity.
6. Preview deploy.
7. Cut production over to Next.
8. Observe and verify.
9. Only then remove Vite, React Router, React Helmet and dead migration code.

## Completion criteria

The merge is complete only when one Next app runs public + admin, all canonical URLs resolve, redirects work, dynamic SEO routes work, blog CRUD/AI/Tiptap work, Supabase auth works, forms and analytics work, sitemap/robots work, CI validates the merged architecture, and rollback remains possible.
