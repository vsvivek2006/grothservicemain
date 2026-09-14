# Growth Service — Vite → Next.js Safe Migration Guardrails

> **STATUS: PERMANENT / HARD RULE**
>
> This file governs the migration of the live `growthservice.in` main website from **React + Vite + React Router** to **Next.js App Router**.
>
> **Primary objective:** move the existing production website to Next.js with **zero intentional breaking changes** to URLs, SEO, UI, content, forms, analytics, redirects, assets, business logic, or production behavior.
>
> **Core principle: PRESERVE FIRST. IMPROVE LATER.**
>
> This is a migration project, not a redesign, content rewrite, data rewrite, backend rewrite, or uncontrolled architecture rewrite.

---

# 0. CURRENT REPOSITORY STATE — IMPORTANT

The repository is currently a **hybrid Vite + Next.js migration repository**.

The original production application remains under:

```text
src/
```

and is still built around:

```text
React
Vite
React Router
```

The repository also contains a Next.js application with:

```text
app/
```

and existing Next.js/admin/blog work.

The current Vite application contains substantial production routing/page coverage and centralized routing/data/SEO logic.

Therefore:

> **A successful Next.js build does NOT mean the main website has been migrated.**

The current Next.js `/` page must never be considered a production replacement until it has been made equivalent to the existing Vite homepage and the complete migration acceptance gate has passed.

---

# 1. ABSOLUTE PRODUCTION-SAFETY RULES

## 1.1 Vite remains the production source of truth until final cutover

Until explicit cutover approval:

```text
Vite = production
Next.js = migration candidate
```

The agent must not make the Next.js application the production website merely because:

```text
next build
```

passes.

## 1.2 No big-bang rewrite

Do not rewrite the whole application in one uncontrolled operation.

Migrate:

```text
foundation
→ shared layout
→ route family
→ route family
→ dynamic architecture
→ SEO
→ functional validation
→ preview
→ cutover
```

## 1.3 No delete-before-parity

Never delete, disable, or substantially alter the existing Vite implementation until its Next.js equivalent has been:

- implemented,
- typechecked,
- linted,
- built,
- route-tested,
- SEO-tested,
- functionally tested,
- visually compared,
- preview-deployed,
- verified.

## 1.4 No fallback-based fake parity

Do not hide missing migrations with:

```text
all routes → homepage
all routes → index.html
all unknown routes → generic page
```

A route must be genuinely migrated or intentionally redirected.

---

# 2. OUT OF SCOPE — ADMIN BOUNDARY

The repository contains a standalone `Admin/` Next.js application.

The main-site migration must NOT silently:

- merge the Admin app,
- delete the Admin app,
- move Admin authentication,
- rewrite Admin Supabase logic,
- rewrite Admin AI,
- move Admin routes,
- replace the standalone Admin architecture.

There is also a root `app/admin` / `app/api/admin` tree in the current repository.

This creates a potential duplicate-admin architecture.

## Mandatory rule

Before deciding the final architecture, document one explicit decision:

### Architecture A

```text
growthservice.in
    ↓
Main Next.js public website

Separate Admin deployment
    ↓
Admin application
```

### Architecture B

```text
growthservice.in
    ↓
One Next.js application
    ├── public website
    ├── blog
    └── admin
```

The agent MUST NOT make this architectural decision implicitly.

Until approved, do not delete either implementation.

---

# 3. CURRENT VITE WEBSITE IS THE BEHAVIORAL SOURCE OF TRUTH

Before migrating a route, inspect the current Vite implementation.

The current app contains important routing infrastructure under:

```text
src/routing/
```

including:

```text
route-registry.ts
route-resolver.ts
route-builders.ts
route-normalization.ts
route-types.ts
```

The current route registry contains canonical paths, aliases, sitemap information, priorities and route classification.

## Mandatory rule

**Read and use the existing routing/data/SEO infrastructure before creating equivalent Next.js routes.**

Do not manually guess what the production URL architecture is.

---

# 4. CURRENT VITE APP ROUTING MUST BE INVENTORIED

The current `src/App.tsx` contains:

- lazy-loaded pages,
- static route mappings,
- route aliases,
- legacy redirects,
- dynamic office routes,
- dynamic city routes,
- programmatic location/service routes,
- a 404 fallback.

These behaviors are part of the production contract.

At minimum, identify and preserve route families equivalent to:

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

/design-development
/web-development
/ui-ux-design
/wordpress-development
/ecommerce
/app-development

/white-label
/white-label-seo
/white-label-ppc
/white-label-smo
/white-label-web

/locations
/offices
/team

/resources
/case-studies
/testimonials
/help-center
/faq

/verify

/terms
/privacy
/refund
/accessibility
/onboarding-agreement
```

Plus all dynamic and programmatic route families.

This list is an initial migration map, not permission to assume it is exhaustive.

---

# 5. ROUTE PARITY INVENTORY — MANDATORY

Create a route matrix before declaring migration complete.

For every existing production route record:

| Property | Required |
|---|---|
| Existing URL | Yes |
| Existing component | Yes |
| Next.js route | Yes |
| Static/dynamic | Yes |
| Canonical URL | Yes |
| Page title | Yes |
| Meta description | Yes |
| Robots | Yes |
| Structured data | Yes |
| Redirects | Yes |
| Internal links | Yes |
| Forms | Yes |
| Analytics | Yes |
| Assets | Yes |
| Query parameters | Yes |
| Expected status code | Yes |

No route may disappear simply because it was not found during a first search.

---

# 6. URLS ARE A PUBLIC CONTRACT

Treat every production URL as a public API.

Preserve:

- pathname,
- parameter structure,
- query behavior,
- important encoding,
- trailing-slash behavior where material,
- legacy aliases,
- redirect behavior.

Do not casually transform:

```text
/current-url
```

into:

```text
/new-url
```

A genuine URL change requires:

```text
old URL
   ↓
301
   ↓
correct new canonical URL
```

Avoid:

```text
A → B → C
```

Prefer:

```text
A → C
```

---

# 7. DYNAMIC LOCATION/PROGRAMMATIC SEO ROUTES ARE HIGH-RISK

The current app contains dynamic patterns equivalent to:

```text
/offices/:officeSlug
/locations/:citySlug
/:city/:serviceSlug
/locations/:city/:serviceSlug
```

These must receive special migration treatment.

Do not migrate them as ordinary static pages.

Verify:

- parameter parsing,
- data lookup,
- fallback behavior,
- 404 behavior,
- metadata,
- canonical,
- structured data,
- sitemap behavior,
- internal links,
- redirects,
- rendering,
- indexability.

If these pages are programmatically generated from centralized data, preserve that data-driven architecture.

---

# 8. REACT ROUTER → NEXT.JS MAPPING

Map existing routes explicitly.

Example:

```text
React Router:
<Route path="/services/:slug" ... />

Next.js:
app/services/[slug]/page.tsx
```

Never create a large generic catch-all route just to get URLs responding.

The final Next.js route structure must represent the actual public site.

---

# 9. VERCEL / SPA REWRITE SAFETY

The existing Vite deployment has SPA-style Vercel rewrite behavior that routes application requests to `index.html`.

That behavior may be correct for the Vite deployment.

It must NOT be copied blindly into the final Next.js deployment.

## Hard rule

Never combine:

```text
Next.js App Router
+
global Vite `/index.html` SPA fallback
```

as a shortcut for migration.

Before removing or changing the old Vite rewrite:

1. Inventory every route.
2. Recreate required routes in Next.js.
3. Test direct navigation.
4. Test hard refresh.
5. Test crawlers.
6. Test 404 behavior.
7. Test redirects.

---

# 10. BUILD SCRIPT SAFETY

During migration, maintain clear separation.

Safe migration-stage concept:

```text
npm run dev
npm run build
npm run preview
        ↓
Current Vite production application

npm run next:dev
npm run next:build
npm run next:start
        ↓
Next.js migration candidate
```

Do not switch the default production scripts from Vite to Next.js until the final cutover is approved.

If the repository's default `dev` / `build` scripts already point to Next.js before migration completion, treat this as a migration risk and restore a safe dual-run setup on the migration branch.

---

# 11. NEXT.JS VERSION FREEZE

Do not mix the framework migration with a major framework-version upgrade.

During the migration:

```text
Choose one tested Next.js version
        ↓
Freeze it
        ↓
Complete migration
        ↓
Cut over
        ↓
Upgrade separately later
```

Do not perform:

```text
Vite
→ Next 15
→ Next 16
→ another major upgrade
```

all as one migration.

If a framework version change becomes unavoidable, make it a separately documented migration step with its own test gate.

---

# 12. NEXT.JS VERSION-SPECIFIC RULE

Do not rely on generic framework knowledge.

Before modifying Next.js infrastructure:

- inspect the installed Next.js version,
- read the version-matched local Next.js documentation when available,
- respect deprecation notices,
- follow current routing/runtime conventions.

Do not assume an old Next.js convention is valid just because it worked in another project.

---

# 13. SHARED LAYOUT MIGRATION

Migrate:

- Header
- Navigation
- Footer
- global styles
- typography
- shared CTA components
- common responsive behavior

The result must remain visually equivalent to the existing website.

### Migration does NOT authorize:

- redesign,
- arbitrary spacing changes,
- new theme,
- new typography,
- new button styles,
- removal of animations,
- removal of sections,
- removal of responsive behavior.

---

# 14. COMPONENT / SERVER-CLIENT STRATEGY

Use Server Components by default.

Use Client Components when the component genuinely requires:

- browser state,
- browser APIs,
- user interaction,
- client-side effects,
- interactive widgets,
- storage,
- observers,
- client-only third-party libraries.

Do not make the entire application:

```text
"use client"
```

just to simplify migration.

Client boundaries must be intentional.

---

# 15. DATA CENTRALIZATION MUST BE PRESERVED

The existing application contains centralized:

```text
data
config
selectors
routing
services
SEO
```

Do not replace those with page-local duplicated constants.

Bad:

```tsx
const cities = [...]
```

inside individual pages when the existing site already has a centralized source.

Correct:

```text
existing source of truth
        ↓
Next.js migration layer
```

Preserve fallback logic and relationships.

---

# 16. CONTENT PARITY

Do not rewrite production copy merely because it is being moved from React to Next.js.

Preserve:

- headings,
- paragraphs,
- CTA wording,
- labels,
- service descriptions,
- location content,
- legal copy,
- FAQ content,
- navigation labels.

Do not introduce SEO copy changes during the framework migration unless separately requested and documented.

Framework migration and content optimization are separate workstreams.

---

# 17. SEO PARITY — HARD GATE

Every migrated route must preserve or intentionally improve:

```text
<title>
meta description
canonical
robots
Open Graph
Twitter metadata
structured data / JSON-LD
```

Important SEO content must be present in the rendered page output.

Do not hide important content behind unnecessary client-only rendering.

---

# 18. STRUCTURED DATA PARITY

Inventory existing structured data before migration.

Preserve meaningful schema such as applicable:

```text
Organization
LocalBusiness
Service
FAQ
Breadcrumb
Article
WebSite
```

Do not remove JSON-LD merely because the visual page appears unchanged.

Compare old vs new page source.

---

# 19. SITEMAP PARITY

Compare:

```text
Current Vite/production sitemap
vs
Next.js sitemap
```

Every difference must be explained.

The new sitemap must not include:

- admin routes,
- draft/private pages,
- preview URLs,
- accidental duplicates,
- broken URLs.

The new sitemap must retain the intended public production route set.

---

# 20. ROBOTS PARITY

Verify:

```text
/robots.txt
```

before and after migration.

Never accidentally deploy:

```text
Disallow: /
```

to production.

Do not expose private/admin areas to indexing unintentionally.

---

# 21. REDIRECT PARITY

Inventory all current redirects.

For every redirect verify:

```text
GET old URL
→ expected 301
→ correct destination
```

Test:

- legacy aliases,
- old service names,
- old marketing URLs,
- trailing slash variants where relevant,
- dynamic legacy routes,
- historical routes.

---

# 22. INTERNAL LINK PARITY

Audit:

```text
Header
Navigation
Footer
Cards
CTAs
Breadcrumbs
Buttons
Cross-links
Route aliases
```

No production internal link may accidentally point to:

- preview hosts,
- obsolete URLs,
- deleted routes,
- Vite-only temporary routes,
- duplicate canonical pages.

---

# 23. QUERY PARAMETER PARITY

Inventory routes that use query parameters for:

- analytics,
- attribution,
- filtering,
- campaign tracking,
- form routing,
- business logic.

Preserve important:

```text
utm_*
source
campaign
ref
```

and any application-specific parameters.

Do not strip query parameters during redirects or navigation unless intentionally required.

---

# 24. FORMS / LEAD FLOW PARITY

Forms are business-critical.

For every production form preserve:

- fields,
- validation,
- endpoint,
- submission behavior,
- error states,
- success state,
- notification,
- redirect,
- analytics,
- attribution,
- anti-spam behavior.

A visually identical page with a broken lead form is NOT a successful migration.

---

# 25. ANALYTICS / TRACKING PARITY

Inventory all existing tracking.

Possible systems:

```text
Google Analytics
Google Tag Manager
Meta Pixel
conversion events
custom events
lead events
CTA events
form-submit events
```

Next.js routing differs from SPA routing.

Verify:

- initial pageview,
- client navigation,
- no duplicate pageviews,
- conversion events,
- lead events,
- campaign attribution.

Do not assume existing tracking remains correct automatically.

---

# 26. BROWSER API AUDIT

Before moving code into Server Components, search for:

```text
window
document
localStorage
sessionStorage
navigator
location
matchMedia
IntersectionObserver
ResizeObserver
```

Move browser-dependent behavior behind proper Client Component boundaries.

Never execute browser-only APIs during server rendering.

---

# 27. THIRD-PARTY INTEGRATIONS

Inventory every third-party dependency and classify:

```text
purpose
browser/server
credentials
loading strategy
analytics impact
SEO impact
criticality
```

Do not remove or replace a dependency only because Next.js offers a different solution.

First prove that the existing dependency is unnecessary or replace it in an isolated change.

---

# 28. IMAGE / MEDIA PARITY

Preserve:

- asset URL,
- alt text,
- dimensions,
- aspect ratio,
- crop,
- object positioning,
- loading behavior,
- hero priority,
- video behavior.

When using `next/image`, explicitly verify visual and network behavior.

Do not blindly replace every `<img>`.

---

# 29. CSS / BRAND PARITY

The root repository has permanent Growth Service theme-lock rules.

The migration MUST preserve:

```text
Royal Purple
Vibrant Gold
Pink/Fuchsia
WhatsApp Green
Blue/Purple gradients
```

Do not redesign the visual identity during migration.

Do not replace the established theme with generic monochrome/slate styling.

---

# 30. ACCESSIBILITY PARITY

Preserve:

- keyboard navigation,
- focus states,
- labels,
- semantics,
- ARIA,
- alt text,
- contrast,
- button/link semantics.

Do not introduce accessibility regressions during component conversion.

---

# 31. PERFORMANCE STRATEGY

The correct optimization order is:

```text
Correctness
→ route parity
→ SEO parity
→ functional parity
→ visual parity
→ performance optimization
```

Use Next.js advantages intentionally:

- Server Components,
- static generation,
- ISR where appropriate,
- route splitting,
- optimized images,
- dynamic loading for expensive client components.

Do not remove functionality simply to improve a benchmark.

---

# 32. ENVIRONMENT VARIABLES

Inventory all Vite environment variables.

Classify every variable:

```text
public-safe
server-only secret
build-time
runtime
third-party
optional
required
```

Vite patterns such as:

```text
import.meta.env.VITE_X
```

must be deliberately mapped.

Typical mapping:

```text
public browser value:
VITE_X → NEXT_PUBLIC_X

server-only value:
VITE_X → server-only environment variable
```

Never expose secrets through `NEXT_PUBLIC_*`.

---

# 33. BACKEND / API PRESERVATION

Do not turn a frontend framework migration into a backend rewrite.

Prefer:

```text
existing backend/API
        ↓
Next.js frontend
```

Preserve existing APIs and external service contracts unless a separate migration requirement exists.

Do not simultaneously change:

```text
frontend
backend
database
authentication
```

without explicit scope.

---

# 34. ERROR / LOADING / 404 PARITY

Create intentional Next.js equivalents for:

```text
loading states
error states
404/not-found
```

Do not allow unknown URLs to silently display the homepage.

Verify direct URL access and expected HTTP behavior.

---

# 35. HYBRID REPOSITORY SAFETY AUDIT

Before every major migration step, verify:

```text
Which application is running?
Which application is being built?
Which application owns `/`?
Which application owns `/blog`?
Which application owns `/admin`?
Which application owns API routes?
Which application owns sitemap?
Which application owns robots?
Which Vercel project is deployed?
What is the Vercel Root Directory?
What is the Build Command?
What is the Output/Framework setting?
```

Do not infer deployment ownership solely from folder names.

---

# 36. PRODUCTION DOMAIN CUTOVER SAFETY

Before cutover, document:

```text
Production domain:
growthservice.in

Current production deployment:
<verified>

Current build:
<verified>

Next.js candidate:
<verified preview>

Cutover plan:
<verified>

Rollback target:
<verified>
```

The production domain must remain on the working Vite deployment until the acceptance gate is passed.

---

# 37. PREVIEW-FIRST MIGRATION

Every meaningful route/rendering change must be testable in a preview deployment.

At minimum test:

```text
/
/about
/services
/seo
/web-development
/contact
/book-call
/blog
/locations
/offices
/team
/resources
/case-studies
/faq
/terms
/privacy
/404
```

Plus representative dynamic location/office/service routes.

Also test:

```text
redirects
robots.txt
sitemap.xml
forms
analytics
mobile
desktop
```

---

# 38. VISUAL REGRESSION TESTING

For priority pages compare:

```text
Vite production screenshot
vs
Next.js preview screenshot
```

Compare:

- header,
- hero,
- typography,
- spacing,
- cards,
- sections,
- CTA,
- footer,
- responsive behavior,
- animations,
- imagery,
- colors.

The Vite version is the baseline.

---

# 39. FUNCTIONAL REGRESSION TESTING

Each migrated route must be tested for:

```text
direct navigation
hard refresh
internal navigation
browser back
browser forward
mobile
desktop
```

Interactive pages must also be tested for their complete behavior.

---

# 40. DUAL BUILD VALIDATION

During migration, validation should cover BOTH applications where applicable.

### Vite baseline

```text
build
lint
typecheck
route validation
SEO validation
sitemap validation
```

### Next.js candidate

```text
next build
lint
typecheck
route validation
SEO validation
production route testing
```

Do not allow the migration to accidentally stop validating the original Vite baseline before cutover.

---

# 41. MIGRATION PHASES

## PHASE 0 — Baseline

Freeze the production Vite behavior.

Capture:

- route inventory,
- sitemap,
- robots,
- redirects,
- metadata,
- schema,
- screenshots,
- forms,
- analytics,
- assets,
- performance baseline.

Create/maintain the migration branch.

---

## PHASE 1 — Next.js Foundation

Build only:

```text
Next.js app shell
TypeScript
global styles
font system
metadata foundation
public assets
configuration
```

Do NOT replace production.

---

## PHASE 2 — Shared Layout

Migrate:

```text
Header
Navigation
Footer
shared UI
global visual system
```

Verify visual parity.

---

## PHASE 3 — Static Route Families

Migrate stable static pages in controlled groups.

Example:

```text
core
services
legal
resources
company
```

Each group receives its own parity test.

---

## PHASE 4 — Dynamic Route Families

Migrate:

```text
offices
locations
city routes
city/service routes
other dynamic pages
```

Preserve data-driven resolution.

---

## PHASE 5 — SEO / INDEXATION

Compare:

```text
metadata
canonical
robots
schema
sitemap
internal links
```

---

## PHASE 6 — Business/Tracking Validation

Verify:

```text
forms
lead flows
analytics
conversion tracking
third-party integrations
```

---

## PHASE 7 — Production Preview

Run the full production-like Next.js preview.

Test priority routes and route matrix.

---

## PHASE 8 — Cutover Readiness

Only after all gates pass:

```text
Next.js candidate
        ↓
production cutover
```

Keep Vite available as rollback.

---

# 42. ROUTE-FAMILY COMPLETION GATE

A route family is complete only when:

```text
Next.js route exists
+
content parity
+
visual parity
+
responsive parity
+
SEO parity
+
canonical parity
+
structured data parity
+
internal links
+
forms
+
analytics
+
redirects
+
404 behavior
+
preview verification
```

---

# 43. PRODUCTION CUTOVER GATE

Do NOT switch `growthservice.in` to Next.js until all are true:

- [ ] All production routes inventoried.
- [ ] All required routes implemented.
- [ ] Dynamic routes verified.
- [ ] URL parity verified.
- [ ] Redirect parity verified.
- [ ] Metadata parity verified.
- [ ] Canonical parity verified.
- [ ] Structured data parity verified.
- [ ] Sitemap parity verified.
- [ ] Robots parity verified.
- [ ] Internal links audited.
- [ ] Forms tested.
- [ ] Analytics tested.
- [ ] Assets tested.
- [ ] Desktop tested.
- [ ] Mobile tested.
- [ ] Typecheck passed.
- [ ] Lint passed.
- [ ] Production Next.js build passed.
- [ ] Preview deployment passed.
- [ ] Rollback confirmed.
- [ ] Production cutover explicitly approved.

---

# 44. ROLLBACK

The previous Vite production deployment MUST remain available during the cutover window.

Rollback must be possible without reconstructing the old application.

Recommended:

```text
Vite production
+
Next.js candidate
```

until the Next.js version has demonstrated stability.

---

# 45. MIGRATION MUST NOT MIX WITH UNRELATED WORK

Do not combine framework migration with:

- visual redesign,
- content rewrite,
- unrelated SEO restructuring,
- backend rewrite,
- database rewrite,
- new authentication,
- unrelated feature development,
- large dependency replacement.

A migration must remain easy to debug.

---

# 46. AGENT WORKFLOW

For every route family:

### Step 1
Inspect the existing Vite implementation.

### Step 2
Inspect routing/data/SEO dependencies.

### Step 3
Record the route family in the migration matrix.

### Step 4
Implement the Next.js version.

### Step 5
Run typecheck/lint/build.

### Step 6
Run route/SEO tests.

### Step 7
Compare screenshots.

### Step 8
Test forms/analytics if applicable.

### Step 9
Deploy preview.

### Step 10
Verify preview.

### Step 11
Mark route family `VERIFIED`.

### Step 12
Only then migrate the next route family.

---

# 47. FAILURE HANDLING

When migration causes a regression:

```text
Do NOT hide it.
Do NOT disable the failing behavior.
Do NOT route around it.
Do NOT silently remove the feature.
Do NOT claim parity.
```

Instead:

```text
identify failure
→ document failure
→ fix failure
→ retest
```

---

# 48. MIGRATION LEDGER

Maintain a ledger:

```text
Route:
Old implementation:
Next implementation:
Status:
SEO:
Visual:
Functional:
Analytics:
Forms:
Redirects:
Preview:
Known issues:
```

Recommended statuses:

```text
NOT STARTED
IN PROGRESS
PARITY READY
VERIFIED
CUTOVER READY
LIVE
```

---

# 49. MANDATORY MIGRATION REPORT

At the end of every phase report:

```text
Phase:
Routes migrated:
Routes remaining:

Vite baseline:
PASS / FAIL

Next.js build:
PASS / FAIL

Typecheck:
PASS / FAIL

Lint:
PASS / FAIL

Route parity:
PASS / FAIL

SEO parity:
PASS / FAIL

Visual parity:
PASS / FAIL

Forms:
PASS / FAIL

Analytics:
PASS / FAIL

Redirects:
PASS / FAIL

Sitemap:
PASS / FAIL

Robots:
PASS / FAIL

Preview:
PASS / FAIL

Rollback:
READY / NOT READY

Known issues:
```

Never report "complete" without evidence.

---

# 50. HARD PROHIBITIONS

The migration agent MUST NOT:

- switch production to the Next.js scaffold,
- delete the Vite app before parity,
- change production URLs casually,
- rewrite all routes to `/index.html`,
- use the Vite SPA fallback as a Next.js routing substitute,
- remove SEO metadata,
- remove structured data,
- remove analytics,
- remove lead forms,
- expose secrets,
- silently merge/delete Admin,
- redesign the site,
- rewrite production copy,
- duplicate centralized data unnecessarily,
- discard the current route registry,
- upgrade Next.js major version during the migration without a separate gate,
- change default production scripts prematurely,
- claim parity because only the build passes.

---

# 51. FINAL DEFINITION OF SUCCESS

The migration is successful only when:

```text
Current Vite production website
        ↓
same public URL contract
        ↓
same intended content
        ↓
same visual behavior
        ↓
same responsive behavior
        ↓
same forms and lead flows
        ↓
same analytics
        ↓
same redirects
        ↓
same SEO/indexation behavior
        ↓
Next.js production website
```

The objective is NOT:

> "Make the React application compile as Next.js."

The objective is:

> **"Safely replace the production rendering framework while preserving the production website's public contract."**

When uncertain, choose the option that minimizes production risk.

**Preserve the old implementation until the new implementation is proven equivalent.**

**No cutover until parity is demonstrated.**
