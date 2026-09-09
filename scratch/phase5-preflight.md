# Phase 5 Preflight Engineering Audit

**Branch**: `staging`  
**Current Commit**: `7828027` (`feat(architecture): centralize routing and technical SEO`)  
**Timestamp**: September 2026  
**Target Rule**: Work STRICTLY on `staging`. Main branch untouched.

---

## 1. Executive Summary

Phases 1–4 are fully merged and active on `staging`:
- Phase 1: Data normalized in `src/data/` (offices, services, locations, packages, team).
- Phase 2: Selectors & communication service in `src/selectors/`, `src/services/`.
- Phase 3: UI consumers migrated to centralized bindings across all pages/components.
- Phase 4: Single source of truth routing (`src/routing/`), centralized SEO/schemas (`src/seo/`), 175-URL sitemap (`public/sitemap.xml`), and edge-level HTTP 308 redirects (`vercel.json`).

Phase 5 addresses production hardening: complete removal of Razorpay/payments, dependency trimming, CSP/security headers, font duplication elimination, GitHub Actions CI workflow, and TypeScript/ESLint hardening.

---

## 2. Preflight State Inspection

### A. Architecture State
- **Single Source of Truth**: Active in `src/routing/route-registry.ts` and `src/data/`.
- **Theme Lock**: Preserved. Gradients, Royal Purple (`#6A0DAD`), Gold (`#FFD700`), Blue/Indigo gradients, and Emerald WhatsApp CTA buttons untouched.
- **Routing**: Clean route builders and normalization policy active.

### B. Build State
- `npm run build` succeeds (1641 modules transformed, 5.2s).
- Production chunks: `vendor` (141 kB / 45 kB gzip), `index` (157 kB / 43 kB gzip), `Home` (69 kB / 18 kB gzip).

### C. Lint State
- `eslint .` passes with 0 errors currently.
- **Issue**: Rules `'@typescript-eslint/no-unused-vars'` and `'@typescript-eslint/no-explicit-any'` are explicitly turned `'off'` in `eslint.config.js`. Needs tightening.

### D. Dependency State
- **`razorpay: ^2.9.6`** in `dependencies`: Obsolete client bundle weight. User mandates 100% removal of all payment integration.
- **`react-snap: ^1.23.0`** in `devDependencies`: Obsolete pre-render library (abandoned, incompatible with React 18).
- **`vite-plugin-sitemap: ^0.8.2`** in `devDependencies`: Obsolete; sitemap pipeline is fully managed via `scratch/generate_sitemap.js`.
- **`package.json` package name**: Currently generic `vite-react-typescript-starter`. Needs renaming to `growth-service-frontend`.

### E. Security Findings
- **Vercel Security Headers**: Existing `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection: 1; mode=block`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- **Missing / Improvements**:
  - Missing `Strict-Transport-Security` (HSTS).
  - Missing Content Security Policy (`Content-Security-Policy`). A strict but functional CSP should be configured in `vercel.json` without breaking Google Fonts, GA4, or images.
  - Zero private credentials or API keys found in source code or client bundles.

### F. Performance Findings
- **Font Duplication**: `Inter` and `Poppins` fonts are loaded via `@import` in `src/index.css` AND `<link rel="stylesheet">` in `index.html`. The CSS `@import` blocks CSSOM and causes request chaining. Needs removal from `index.css`.
- **`public/logo.png`**: 1254x1254 at 990 KB. Serves as favicon, apple touch icon, and OG image. (Documented for safe CDN caching and asset optimization).
- **Console Logs**: 2 unnecessary `console.log` statements in active pages (`SEOResults.tsx:90`, `BookCall.tsx:118`).

### G. Accessibility Findings
- Semantic elements (`<main>`, `<header>`, `<footer>`, `<nav>`) are in place.
- Interactive elements (buttons, links) have accessible roles.
- Need audit of image alt text, form labels, and focus rings.

### H. Payment / Razorpay Findings
- **`index.html`**: `<script src="https://checkout.razorpay.com/v1/checkout.js" defer></script>` is present.
- **`src/utils/razorpay.ts`**: Active file with Razorpay initialization functions.
- **`src/components/PaymentButton.tsx`**: Dead payment component.
- **`src/pages/FreeWebsiteAudit.tsx`**: Injects Razorpay script in `useEffect` and declares `window.Razorpay`.
- **`src/routing/route-registry.ts`**: Has `/payment/success` and `/payment/failed` routes.
- **`src/App.tsx`**: Renders inline payment success and failure UI.
- **Content Mentions**: Mentions of Razorpay in `TrustVerification.tsx`, `RefundPolicy.tsx`, `HelpCenter.tsx`, and service technology tags.

### I. CI/CD Findings
- No `.github/workflows` exists. Staging pushes have no automated gate check.
- Needs lightweight `.github/workflows/ci.yml` running lint, typecheck, build, and validation scripts.

### J. Deployment Findings
- `vercel.json` has edge redirects and rewrites for SPA fallback.
- Security headers need HSTS and non-breaking CSP.

---

## 3. Action Plan for Phase 5
1. **Remove Razorpay & Payment Subsystem**: Delete `razorpay.ts`, `PaymentButton.tsx`, remove script from `index.html`, remove payment routes from `route-registry.ts` and `App.tsx`, remove dependency from `package.json`, sanitize content references.
2. **Trim Dead Dependencies**: Remove `react-snap`, `vite-plugin-sitemap`, `razorpay`. Update package name.
3. **Hardening TypeScript & ESLint**: Type the 2 `as any` instances in `SEOResults.tsx` and `Packages.tsx`. Re-enable `@typescript-eslint/no-unused-vars` and `@typescript-eslint/no-explicit-any` as `'warn'`.
4. **Font Optimization**: Remove `@import` from `src/index.css`.
5. **Security Headers in `vercel.json`**: Add HSTS and production-safe CSP.
6. **Environment Variables**: Create `.env.example` with safe placeholders.
7. **CI/CD Workflow**: Add `.github/workflows/ci.yml` for `staging` branch.
8. **Regression & Quality Verification**: Run all validators, typecheck, lint, build.
