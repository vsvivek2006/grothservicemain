# Growth Service — Validation, Security, SEO & Rollback Gates

## Acceptance principle

A successful `next build` is necessary but **not sufficient**. Production acceptance requires architectural, URL, SEO, security, functional, performance and deployment verification.

## Gate A — Architecture

PASS only when:

- exactly one production Next app exists
- public site + admin share one runtime
- no second Next deployment is required
- React Router is gone from production navigation
- Vite SPA fallback is gone
- one dependency graph is authoritative
- one tested Next/React version is locked
- server/client boundaries are explicit

FAIL if `Admin/` must still run separately.

## Gate B — URL parity

Generate a route matrix from the centralized route registry.

For each canonical URL verify:

- status
- final URL
- title
- description
- canonical
- indexability
- major visible content
- internal links

For aliases verify:

- expected 301/308
- correct destination
- no loops
- no unnecessary redirect chains

Explicit representative URLs:

```text
/
/about
/services
/portfolio
/pricing
/packages
/contact
/book-call
/free-audit
/blog
/impact
/growth-services
/offer
/digital-marketing
/seo
/social-media
/paid-marketing
/local-seo
/content-marketing
/lead-generation
/branding
/web-development
/ui-ux-design
/wordpress-development
/ecommerce
/app-development
/white-label
/resources
/case-studies
/testimonials
/help-center
/faq
/offices
/locations
/team
/verify
/terms
/privacy
/refund
/accessibility
```

Also test:

```text
/offices/[officeSlug]
/locations/[citySlug]
/[city]/[serviceSlug]
/blog/[slug]
```

## Gate C — SEO

Verify:

- `metadataBase`
- canonical origin
- per-page canonical
- dynamic metadata
- Open Graph
- Twitter
- Organization JSON-LD
- BlogPosting JSON-LD where applicable
- sitemap.xml
- robots.txt
- indexability
- 404 handling
- admin noindex

Sitemap must not contain aliases, admin URLs, invalid combinations, duplicates, or non-canonical URLs.

## Gate D — Security

### Authentication

- admin routes protected
- login route public
- cookies refresh correctly
- invalid sessions rejected

### Authorization

- server actions authorize mutations
- route handlers authorize mutations
- service-role access is server-only
- authenticated non-admin users cannot mutate admin data

### Input

- Zod validation
- slug validation
- redirect validation
- upload validation
- rich HTML sanitization

### Headers

Verify the final policy for HSTS, content-type sniffing, referrer policy, frame protection, permissions policy and CSP. CSP must be tested against real analytics/font/image endpoints before being treated as a blocking production policy.

## Gate E — Blog integrity

AI and Tiptap content must preserve:

- headings
- paragraphs
- lists
- links
- images
- emphasis
- blockquotes

Malformed/unsafe content must not break layout or execute arbitrary scripts.

Verify draft privacy, publish visibility, slug conflict handling and cache revalidation.

## Gate F — Analytics

Exactly one analytics initialization path.

Verify:

- no duplicate gtag initialization
- no duplicate pageviews
- navigation tracking is correct
- intended admin traffic policy
- CSP permits required endpoints

## Gate G — Performance

Compare baseline vs merged Next for representative pages:

- LCP
- INP
- CLS
- TTFB
- JS transferred
- image transferred
- font transferred
- hydration cost

Investigate regressions instead of accepting them because the build is green.

## Gate H — Functional smoke test

### Public

Navigation, dropdowns, mobile menu, forms, CTA buttons, WhatsApp, phone, email, modals, sliders, accordions and route transitions.

### Admin

Login, logout, dashboard, list/create/edit, draft/publish/delete, AI generation, Tiptap, image/link controls.

## Gate I — Clean build

Run the repository's actual package-manager commands from a clean environment. At minimum the merged application must pass typecheck, lint, production build and the live Next parity test. During migration, also retain the Vite baseline build.

## Gate J — Preview deployment

Before production, verify representative public pages, one office, one location, one city/service page, blog index/detail, admin login/protected page, sitemap and robots. Inspect headers and rendered HTML.

## Rollback strategy

Keep the known-good production reference until the Next deployment is proven stable.

Record before cutover:

- old deployment/reference
- new deployment
- commit SHA
- environment version/state
- database migration state
- Supabase compatibility state

### Roll back immediately for

- widespread 404/5xx
- broken admin auth
- broken lead generation
- serious SEO routing failure
- data loss
- exposed secret
- severe performance regression
- broken publishing
- redirect loops
- production-only runtime/hydration failure

### Rollback procedure

1. Roll back deployment first.
2. Stabilize traffic.
3. Identify root cause.
4. Reproduce in preview.
5. Patch.
6. Rerun all acceptance gates.
7. Redeploy.
8. Repeat smoke tests.

Do not perform emergency architectural rewrites against live production traffic.

## Final acceptance

Declare complete only when there is one Next.js app, one production runtime, one admin boundary, one dependency graph, preserved URLs/SEO/business flows, secure admin operations, validated blog/AI workflow, validated performance, reproducible CI and tested rollback.
