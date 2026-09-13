# Growth Service — Safe Vite → Next.js Migration Rules

> **Status:** Permanent migration guardrail  
> **Applies to:** The existing production Growth Service main website at `growthservice.in`  
> **Current state:** React + Vite + React Router  
> **Target state:** Next.js (App Router) + TypeScript  
> **Primary objective:** Upgrade the main website to Next.js **without breaking existing routes, SEO, UI, functionality, analytics, forms, tracking, or production behavior.**

---

## 1. NON-NEGOTIABLE MIGRATION PRINCIPLE

This migration is a **production preservation project**, not a redesign and not a rewrite from scratch.

The existing Vite application is already a live production website. The migration must preserve:

- Existing URLs
- Existing route semantics
- Existing page content
- Existing visual design
- Existing brand colors
- Existing responsive behavior
- Existing internal links
- Existing forms and lead flows
- Existing analytics/tracking
- Existing redirects
- Existing canonical/indexing behavior
- Existing assets
- Existing business logic
- Existing data/configuration
- Existing SEO metadata
- Existing structured data/schema
- Existing performance-critical behavior
- Existing third-party integrations

### Absolute rule

**Do not remove working Vite/React functionality until the equivalent Next.js implementation has been built, tested, compared, and verified.**

No "replace first, fix later" migration is allowed.

---

# 2. SCOPE

This rule governs the migration of the **main Growth Service website** from:

```text
React
Vite
React Router
Client-side rendering
```

to:

```text
Next.js
App Router
TypeScript
Server Components by default
Client Components only where necessary
```

## OUT OF SCOPE

The separate `Admin/` Next.js application is NOT part of this migration.

### Do not:

- Rewrite `Admin/`
- Merge `Admin/` into the main app
- Move Admin routes into the public website
- Change Admin authentication
- Change Admin Supabase architecture
- Change Admin AI architecture
- Delete the existing Admin application

The Admin app is intentionally a separate application and must continue deploying independently.

---

# 3. CURRENT PRODUCTION APP IS THE SOURCE OF TRUTH

Before changing anything, treat the current Vite website as the **behavioral and visual source of truth**.

Do not assume that the route tree, page names, or component structure tell the complete story.

Perform an inventory of:

```text
src/
├── pages/
├── components/
├── routing/
├── selectors/
├── services/
├── config/
├── data/
├── seo/
└── App.tsx
```

The current repository already has a centralized routing layer under:

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

**Do not bypass or discard this routing knowledge during migration.**

The existing route registry is evidence of the production URL contract.

---

# 4. CREATE A ROUTE PARITY INVENTORY BEFORE MIGRATION

Before converting any page, create a complete route inventory.

For every existing production route record:

| Field | Required |
|---|---|
| Existing URL | Yes |
| Route type | Static / dynamic / parameterized |
| Existing page/component | Yes |
| SEO title | Yes |
| Meta description | Yes |
| Canonical URL | Yes |
| Robots/indexability | Yes |
| Structured data | Yes |
| Internal links | Yes |
| Redirect behavior | Yes |
| Query parameters | Yes |
| Forms/actions | Yes |
| Analytics events | Yes |
| Images/assets | Yes |
| HTTP behavior | Yes |

No route may be silently dropped because it was "not found during the first pass."

---

# 5. URL PRESERVATION IS MANDATORY

The migration must preserve existing production URLs exactly unless a URL change is explicitly approved.

Examples:

```text
/current-url
/current-url/
```

Do not change:

```text
/current-url
```

into:

```text
/new-url
```

without a verified migration strategy.

## URL rules

- Preserve pathname structure.
- Preserve dynamic parameters.
- Preserve important query parameters.
- Preserve trailing-slash behavior where relevant.
- Preserve encoded characters where relevant.
- Preserve old URLs through `301` redirects when a change is genuinely unavoidable.
- Never allow accidental mass `404` responses after deployment.

---

# 6. REACT ROUTER → NEXT.JS ROUTING MAPPING

The existing React Router configuration must be mapped route-by-route into Next.js App Router.

Do not manually guess the mapping.

Example:

```text
React Router:
<Route path="/services/:slug" ... />

Next.js:
app/services/[slug]/page.tsx
```

For dynamic route families:

```text
Existing route definition
        ↓
Route inventory
        ↓
Next.js segment
        ↓
Page implementation
        ↓
Route parity test
```

## No route deletion without proof

A route can be removed only when:

1. The route has been intentionally replaced.
2. A verified redirect exists if required.
3. The replacement returns the expected content.
4. SEO metadata is preserved.
5. Search-engine accessibility has been checked.
6. Existing internal links are updated.
7. Route tests pass.

---

# 7. NEVER USE A BLANKET SPA FALLBACK IN THE FINAL NEXT.JS APP

The current Vite deployment uses SPA-style rewriting to `index.html`.

That behavior is part of the Vite application and must **not** be blindly copied into the Next.js application.

Do not create a catch-all rewrite such as:

```text
all routes → /index.html
```

inside the final Next.js deployment.

Next.js must own its route resolution.

Before removing any existing Vite rewrite behavior:

- inventory every route relying on it,
- recreate those routes in Next.js,
- verify direct navigation,
- verify refresh/deep links,
- verify crawlers,
- verify 404 behavior.

---

# 8. MIGRATE IN PHASES — NEVER BIG-BANG

The migration must happen incrementally.

Recommended phases:

## Phase 0 — Freeze and Baseline

Create a stable baseline of the current production Vite app.

Capture:

- Production build success
- Route inventory
- Sitemap
- Robots
- Metadata
- Canonicals
- Structured data
- Redirects
- Analytics
- Core forms
- Important screenshots
- Page source for important pages
- Performance measurements

Create a migration branch.

Never perform this migration directly on the production branch without review.

---

## Phase 1 — Build the Next.js Shell

Create the Next.js application while preserving the existing website.

At this stage:

- Do not delete Vite.
- Do not alter production routing.
- Do not change production URLs.
- Do not change the design.
- Do not remove existing assets.

The new Next.js app should first be able to boot independently.

---

## Phase 2 — Shared Foundation

Create the minimum stable Next.js foundation:

```text
app/
components/
lib/
public/
```

Establish:

- TypeScript
- styling system
- fonts
- metadata foundation
- image handling
- route utilities
- configuration
- environment variables

Avoid premature abstraction.

Only centralize logic when the existing app demonstrates reuse.

---

## Phase 3 — Migrate Shared Layout

Migrate:

- Header
- Navigation
- Footer
- global styles
- typography
- responsive foundations
- shared CTA elements
- common UI components

### Critical rule

**Pixel/visual behavior must remain equivalent.**

Migration is not permission to redesign.

Do not:

- replace the theme,
- invent new colors,
- change spacing for preference,
- change typography arbitrarily,
- remove animation,
- remove responsive states,
- replace important imagery.

The existing Growth Service theme-lock rules remain authoritative.

---

# 9. COMPONENT MIGRATION STRATEGY

Do not convert every existing component mechanically.

For each component determine:

```text
Pure presentation?
        ↓
Server Component candidate

Needs state/browser APIs/effects?
        ↓
Client Component candidate
```

Default to Server Components.

Use `"use client"` only when genuinely necessary.

Typical client-only cases:

- interactive navigation
- carousels
- browser storage
- animations requiring browser APIs
- form interaction
- event-driven widgets

Do not make the entire page a Client Component simply because one small child needs interactivity.

---

# 10. DATA AND CONFIGURATION MUST NOT BE LOST

The current website contains centralized configuration/data/routing structures.

Before deleting or relocating any existing data:

- identify all consumers,
- identify fallback behavior,
- identify generated content,
- identify route dependencies,
- identify SEO dependencies,
- identify selectors/resolvers,
- verify all references after migration.

Never replace centralized data with hardcoded values merely to make a page easier to port.

### Anti-pattern

```tsx
// copied directly into a page
const cities = [...]
```

when the existing project already has centralized city/service configuration.

Preserve the source of truth.

---

# 11. SEO PARITY IS A HARD REQUIREMENT

The migration must not cause SEO regression.

For every migrated route verify:

### Metadata

- `<title>`
- meta description
- canonical
- robots
- Open Graph
- Twitter metadata
- language/locale behavior where applicable

### Structured data

Preserve all meaningful existing JSON-LD/schema.

Do not remove schema because the page "looks the same."

### Crawling

Verify:

```text
robots.txt
sitemap.xml
```

and all indexed route families.

### Rendering

Important SEO content must exist in the HTML delivered by the Next.js application.

Do not move important search-facing content behind unnecessary client-only rendering.

---

# 12. SITEMAP PARITY

The new Next.js sitemap must preserve the intended production URL set.

Before migration:

```text
old sitemap
```

After migration:

```text
new sitemap
```

Compare them.

Investigate every difference.

A route must not disappear from the sitemap accidentally.

Likewise:

- no admin routes in public sitemap,
- no draft/private URLs,
- no broken URLs,
- no accidental temporary URLs.

---

# 13. ROBOTS PARITY

Preserve intended crawling rules.

Do not accidentally:

```text
Disallow: /
```

on production.

Do not make admin/private routes indexable.

Verify:

```text
robots.txt
```

after every deployment candidate.

---

# 14. REDIRECT PARITY

Inventory current Vercel redirects before migration.

Existing redirects must be preserved or intentionally improved.

For every redirect verify:

```text
old URL
    ↓
301
    ↓
correct destination
```

Do not turn existing permanent redirects into temporary redirects unless intentionally required.

Avoid redirect chains:

```text
A → B → C
```

Prefer:

```text
A → C
```

---

# 15. INTERNAL LINK PARITY

After migration audit all:

```text
<Link>
<a>
navigation items
buttons
CTA links
footer links
breadcrumbs
cards
sitemap references
```

No internal link should point to:

- an old temporary migration URL,
- a removed route,
- a Vite-only route,
- an accidental duplicate route.

---

# 16. FORM AND LEAD FLOW PARITY

Forms are business-critical.

For every form preserve:

- validation
- required fields
- success state
- error state
- submission endpoint
- analytics events
- redirects
- notifications
- spam protection
- tracking parameters

Do not rewrite a working form without testing the complete flow.

A page visually matching the old site is **not considered migrated** if its lead form doesn't work.

---

# 17. ANALYTICS AND TRACKING PARITY

Inventory all current tracking before migration.

This may include:

- Google Analytics
- Google Tag Manager
- Meta Pixel
- ad conversion events
- custom events
- lead events
- button-click events
- form-submit events
- scroll/engagement events

After migration verify that events still fire exactly as intended.

Do not duplicate pageview tracking accidentally because Next.js navigation is different from Vite client-side navigation.

---

# 18. BROWSER STORAGE AND CLIENT STATE

Inventory usage of:

```text
localStorage
sessionStorage
cookies
window
document
navigator
matchMedia
IntersectionObserver
ResizeObserver
```

Before moving code into Server Components, identify browser-only dependencies.

Never execute browser-only APIs during server rendering.

Bad:

```ts
const value = localStorage.getItem("theme");
```

at module/server execution time.

Use a proper Client Component boundary where needed.

---

# 19. THIRD-PARTY LIBRARIES

Before replacing a dependency, answer:

1. Why is it needed?
2. Is it browser-only?
3. Does it support SSR?
4. Does Next.js need a special integration?
5. Will replacing it change user-visible behavior?
6. Is it responsible for analytics, SEO, routing, forms, or business logic?

Do not remove packages merely because a Next.js alternative exists.

The migration goal is stability first.

---

# 20. IMAGE MIGRATION

Preserve:

- image URLs
- `alt` text
- dimensions
- aspect ratios
- responsive behavior
- lazy loading behavior where appropriate
- priority behavior for above-the-fold images

When moving to `next/image`, verify that:

- visual size remains correct,
- cropping remains correct,
- remote image configuration is correct,
- no image route returns 400/404,
- important hero images remain fast.

Do not convert every image blindly.

---

# 21. CSS / TAILWIND MIGRATION

Preserve the existing visual system.

The root repository contains permanent Growth Service theme-lock rules. They remain authoritative during migration.

Do not change:

```text
brand purple
gold
pink/fuchsia
WhatsApp green
deep blue/purple gradients
```

just because the migration is moving to another framework.

### Never use the migration as a reason to redesign.

---

# 22. ACCESSIBILITY PARITY

Migration must not regress:

- keyboard navigation
- focus states
- semantic headings
- alt attributes
- button semantics
- form labels
- ARIA behavior
- color contrast

Where the current site already has good accessibility, preserve it.

Where the migration exposes an existing accessibility bug, fix it only without changing intended UX.

---

# 23. PERFORMANCE STRATEGY

Next.js is being introduced partly to improve rendering and SEO capabilities.

However:

**Do not sacrifice functional parity in pursuit of arbitrary Lighthouse scores.**

Prioritize:

1. Correctness
2. SEO parity
3. Route parity
4. UI parity
5. Business functionality
6. Then performance optimization

Use:

- Server Components where appropriate
- static generation when appropriate
- ISR where appropriate
- optimized images
- code splitting
- lazy loading for non-critical client features

Do not introduce unnecessary client-side JavaScript.

---

# 24. ERROR HANDLING

Create proper Next.js equivalents for:

```text
404
error states
loading states
```

Do not allow unknown routes to silently render the homepage.

A missing route must remain a meaningful 404.

A failed page data request must have an intentional error behavior.

---

# 25. ENVIRONMENT VARIABLES

Inventory all current environment variables before migration.

For each variable classify:

```text
Public browser-safe
Server-only secret
Build-time
Runtime
Third-party
Optional
Required
```

Never expose secrets through `NEXT_PUBLIC_*`.

Do not blindly copy Vite variables into Next.js without classifying them.

Remember that Vite commonly exposes variables through `import.meta.env`, while Next.js uses `process.env`.

Perform an explicit mapping.

---

# 26. VITE ENVIRONMENT VARIABLE MIGRATION

Existing patterns may look like:

```ts
import.meta.env.VITE_SOMETHING
```

They must be intentionally mapped.

For browser-visible values:

```text
VITE_X
    ↓
NEXT_PUBLIC_X
```

For server-only values:

```text
VITE_X
    ↓
SERVER_ONLY_ENV
```

Do not expose server credentials merely because a Vite implementation previously accessed a variable in client code.

---

# 27. NO BREAKING DEPLOYMENT SWITCH

Do not switch the production domain from Vite to Next.js until a complete pre-production verification passes.

Preferred strategy:

```text
Current Production Vite
        ↓
Migration Branch
        ↓
Next.js Preview Deployment
        ↓
Automated Route Tests
        ↓
SEO Tests
        ↓
Visual Comparison
        ↓
Form/Analytics Tests
        ↓
Human Review
        ↓
Production Canary
        ↓
Full Cutover
```

---

# 28. PREVIEW DEPLOYMENT IS MANDATORY

Every migration phase that changes routing or rendering must be deployed to a preview environment.

Test the preview using real URLs.

At minimum:

```text
/
important static routes
important dynamic routes
404
robots.txt
sitemap.xml
redirects
forms
navigation
mobile layout
desktop layout
```

Do not rely exclusively on localhost.

---

# 29. PRODUCTION CUTOVER RULE

The final domain cutover is allowed only when:

- route parity is verified,
- sitemap parity is verified,
- metadata parity is verified,
- redirects are verified,
- forms are verified,
- analytics are verified,
- critical visual comparison is verified,
- build passes,
- typecheck passes,
- lint passes,
- production preview passes,
- rollback is ready.

---

# 30. ROLLBACK MUST BE EASY

Before production cutover, ensure the old Vite application can still be restored quickly.

Do not delete the old deployment immediately.

Maintain:

```text
Vite production deployment
+
Next.js candidate deployment
```

until the Next.js deployment has been stable enough to trust.

The migration is not complete until rollback is no longer necessary.

---

# 31. DATABASE / BACKEND PRESERVATION

If the current website uses APIs, backend services, external endpoints, forms, or data providers:

**Do not change them as part of the frontend framework migration unless necessary.**

Prefer:

```text
Existing backend
        ↑
        |
New Next.js frontend
```

rather than simultaneously changing:

```text
frontend
backend
database
auth
APIs
```

This keeps the migration diagnosable.

---

# 32. DO NOT MIX MIGRATION WITH MAJOR FEATURE WORK

During the migration, avoid introducing unrelated features such as:

- new service architecture
- major redesign
- new CMS
- new database
- new authentication
- unrelated SEO restructuring
- new marketing flows

A framework migration plus a business rewrite becomes difficult to debug.

Finish the migration first.

Then innovate.

---

# 33. TEST MATRIX

The migration must have automated and manual tests.

## Route tests

Test every route from the route inventory.

## Resolution tests

For every important route test:

```text
direct navigation
hard refresh
internal navigation
browser back
browser forward
mobile
desktop
```

## SEO tests

Verify:

```text
title
description
canonical
robots
structured data
OG
sitemap
robots.txt
```

## Functional tests

Verify:

```text
forms
buttons
navigation
interactive components
tracking
third-party integrations
```

## Visual tests

Compare before/after screenshots for critical pages.

---

# 34. NO "CLOSE ENOUGH" PAGE MIGRATION

A migrated page is not complete because:

```text
URL works
```

A page is complete only when:

```text
URL works
+
content matches
+
visual behavior matches
+
responsive behavior matches
+
SEO matches
+
links work
+
forms work
+
tracking works
```

---

# 35. MIGRATION ACCEPTANCE CRITERIA

The migration is considered successful only when all of the following are true:

### Architecture

- [ ] Next.js App Router is running successfully.
- [ ] TypeScript is enabled and passing.
- [ ] Existing Vite app remains intact until cutover.
- [ ] Admin remains a separate application.
- [ ] Server/client boundaries are intentional.

### Routes

- [ ] 100% of production routes have been inventoried.
- [ ] 100% of required routes resolve in Next.js.
- [ ] Dynamic routes resolve correctly.
- [ ] Query parameters behave correctly.
- [ ] Unknown routes return proper 404s.

### SEO

- [ ] Titles preserved.
- [ ] Meta descriptions preserved.
- [ ] Canonicals preserved.
- [ ] Robots behavior preserved.
- [ ] Structured data preserved.
- [ ] Open Graph metadata preserved.
- [ ] Sitemap parity verified.
- [ ] Robots parity verified.

### UX

- [ ] Header matches.
- [ ] Footer matches.
- [ ] Navigation matches.
- [ ] Desktop layout matches.
- [ ] Mobile layout matches.
- [ ] Typography matches.
- [ ] Brand colors remain locked.
- [ ] Animations/interactions remain correct.

### Business

- [ ] All important forms work.
- [ ] Lead submission flows work.
- [ ] Success/error states work.
- [ ] Tracking events still fire.
- [ ] Third-party integrations still work.

### Production

- [ ] Preview deployment passes.
- [ ] Production build passes.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Critical routes tested against production candidate.
- [ ] Rollback procedure confirmed.
- [ ] Old Vite production deployment retained until stability is confirmed.

---

# 36. REQUIRED MIGRATION REPORT AFTER EACH PHASE

At the end of every migration phase, report:

```text
Phase:
Date:

Routes migrated:
Routes remaining:

Components migrated:
Components remaining:

SEO parity:
PASS / FAIL

Visual parity:
PASS / FAIL

Functional parity:
PASS / FAIL

Analytics parity:
PASS / FAIL

Build:
PASS / FAIL

Typecheck:
PASS / FAIL

Lint:
PASS / FAIL

Known issues:

Rollback status:

Next phase:
```

Do not claim a phase is complete without evidence.

---

# 37. GIT / BRANCH STRATEGY

Use a dedicated migration branch.

Recommended structure:

```text
main
  ↓
migration/vite-to-next
  ↓
feature/next-foundation
feature/next-routing
feature/next-shared-layout
feature/next-pages
feature/next-seo
feature/next-validation
```

Keep commits small and logically grouped.

Good:

```text
migrate homepage shell to Next.js
migrate route family X
preserve SEO metadata for route family X
```

Bad:

```text
complete next migration
```

Do not mix unrelated refactors into migration commits.

---

# 38. AGENT BEHAVIOR RULES

Any coding agent working on this migration MUST:

1. Inspect the current implementation before modifying it.
2. Read the route registry and routing utilities.
3. Read existing SEO configuration.
4. Read existing theme-lock rules.
5. Inventory affected pages/components before rewriting.
6. Preserve existing behavior.
7. Prefer incremental migration.
8. Run validation after each logical migration batch.
9. Never delete working code merely because it is old.
10. Never assume an apparently unused file is safe to delete without reference analysis.
11. Never redesign pages without explicit approval.
12. Never change production URLs casually.
13. Never disable SEO functionality to simplify migration.
14. Never silently replace analytics or form integrations.
15. Never move secrets into public environment variables.
16. Never modify the separate Admin application unless explicitly requested.
17. Never declare migration complete without route and SEO verification.

---

# 39. WHEN A MIGRATION DECISION IS UNCLEAR

When there is uncertainty:

**Preserve existing production behavior.**

Prefer the option that minimizes:

- URL changes
- visual changes
- business-logic changes
- dependency changes
- data changes
- deployment risk

Do not choose a "cleaner" architecture at the expense of production stability.

---

# 40. FINAL RULE

The question is NOT:

> "Can this page be rebuilt in Next.js?"

The question is:

> **"Can this page be moved to Next.js while remaining equivalent to the production Vite page?"**

If the answer is not yet proven:

**do not remove the existing implementation.**

Migration is complete only after **parity is demonstrated, not assumed.**
