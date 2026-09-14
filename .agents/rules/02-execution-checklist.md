# Growth Service — Senior Execution Checklist for Antigravity

## Operating mode

Antigravity must operate autonomously:

**inspect → plan → implement → test → fix → re-test → audit → finalize**

Do not stop at compile success. Do not ask for ordinary implementation confirmation. Resolve decisions from repository evidence and these rules.

## Phase 0 — Baseline

Before edits:

- record current `main` SHA
- inspect working tree
- inspect root Next app
- inspect `Admin/`
- inspect Vite source
- inspect all package manifests and lockfiles
- inspect Next/Vite/Tailwind/TypeScript/ESLint/Vercel configs
- inspect `.agents/rules`
- run existing typecheck/lint/data/route/SEO/link tests
- run Vite build
- run Next build
- run live Next parity test if available

Keep pre-existing failures distinguishable from migration failures.

## Phase 1 — Inventory

Search repository-wide for:

```text
react-router
BrowserRouter
Routes
Route
Navigate
useParams
react-helmet
import.meta.env
window.
document.
localStorage
sessionStorage
supabase
service_role
dangerouslySetInnerHTML
NEXT_PUBLIC_
VITE_
```

Inventory:

- public routes
- aliases
- dynamic routes
- components
- data/selectors/services
- API routes
- server actions
- env vars
- browser-only APIs
- third-party SDKs
- analytics
- forms
- Supabase
- AI/Groq
- assets/fonts
- SEO/schema
- tests/scripts

## Phase 2 — Canonical sources

Use:

- Vite behavior as public parity reference
- standalone `Admin/` behavior as admin parity reference
- `src/routing/route-registry.ts` as public routing authority
- root data/selectors as business-data authority

Never choose an implementation merely because it has the newest timestamp.

## Phase 3 — Dependency merge

Build one dependency graph. Reconcile Next, React, Supabase, Tiptap, Groq, Zod, React Hook Form, UI packages, Tailwind, icons and utilities.

Then:

- select compatible versions
- update imports
- update lockfile
- remove only verified-unused packages

Do not weaken TypeScript/build checks to force compatibility.

## Phase 4 — Merge Admin

Move Admin functionality into root App Router while preserving:

- admin URLs
- authentication
- server actions
- API routes
- Supabase
- Tiptap
- AI generation
- draft/publish workflow
- revalidation
- error handling

Never expose service-role credentials to client code.

## Phase 5 — Authentication and authorization

Implement one root `proxy.ts` compatible with the selected Next version.

Required:

- `/admin/*` protected
- `/admin/login` anonymous
- authenticated login redirects to `/admin`
- public routes bypass admin auth
- assets/Next internals bypass auth
- safe failure behavior
- correct cookie refresh
- validated redirect target

Then independently enforce authorization inside sensitive server actions and API routes.

## Phase 6 — Public routes

Remove React Router from production runtime.

For every registry route verify:

- status
- final URL
- component/content
- metadata
- canonical
- internal links
- assets
- interactive behavior

Test representative valid and invalid dynamic city/service combinations.

## Phase 7 — SEO parity

Validate:

- title
- description
- canonical
- OG
- Twitter
- JSON-LD
- sitemap
- robots
- redirects
- trailing slash behavior
- 404 behavior
- noindex behavior
- duplicate metadata prevention
- analytics uniqueness

## Phase 8 — Blog/Admin parity

Test:

1. public blog index
2. public blog detail
3. login
4. invalid login
5. protected dashboard
6. create draft
7. edit draft
8. publish
9. unpublish
10. delete
11. duplicate slug
12. AI generation
13. Tiptap formatting
14. image/link formatting
15. revalidation
16. public visibility after publish

Rich HTML must be safe before public rendering.

## Phase 9 — Business flows

Test every contact/audit/booking/lead flow plus phone, email, WhatsApp and analytics events on desktop and mobile.

Check for duplicate submissions and duplicate analytics initialization.

## Phase 10 — Performance

Verify:

- `next/image` usage where beneficial
- priority only for genuine LCP assets
- lazy loading below the fold
- font loading
- JS transfer and hydration cost
- Core Web Vitals
- no hydration mismatch
- server components by default
- minimal client components

Do not change visible behavior solely to improve a metric.

## Phase 11 — CI

Final CI should cover:

```text
typecheck
lint
data validation
architecture/centralization audits
route validation
route matrix
SEO validation
sitemap validation
link audit
Next production build
Next live-server parity
```

Keep Vite build validation until final cutover.

## Phase 12 — Cutover

Before production:

- clean install/build
- environment verification
- preview deployment
- representative crawl
- dynamic route crawl
- admin auth test
- blog CRUD test
- lead-flow test
- analytics test
- sitemap/robots test
- headers/security test
- mobile and desktop smoke tests

## Phase 13 — Cleanup

Only after successful production observation remove:

- standalone `Admin/`
- Vite-only runtime/config
- React Router
- React Helmet
- Vite dependencies/scripts
- dead migration wrappers
- duplicate components/config
- dead imports

Finish with a repository-wide dependency/dead-code audit.

## Hard stop conditions

Do not perform cleanup when:

- a canonical route is missing
- dynamic SEO routes fail
- admin auth can be bypassed
- server secrets reach client bundles
- blog publishing is broken
- lead forms fail
- analytics is duplicated
- sitemap unexpectedly changes
- build checks were weakened
- an SPA fallback is masking route failures
- standalone Admin is still required at runtime
