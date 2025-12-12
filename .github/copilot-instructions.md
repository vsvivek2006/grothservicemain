<!--
Short, focused instructions for AI coding assistants working on this repository.
Keep this file concise (20-50 lines). Include examples and file references where helpful.
-->
# Copilot instructions — DiziGrow (Sociallift)

This repository is a small Vite + React + TypeScript single-page app (SPA) used for a marketing/site with payment integration.

Key facts (high-level)
- Project type: Vite React + TypeScript (see `package.json`, `vite.config.ts`).
- Entry: `src/main.tsx` → `src/App.tsx` which registers routes and global scripts.
- Pages live in `src/pages/*`. Reusable UI lives in `src/components/*`.
- Styling: Tailwind (see `tailwind.config.js`) with global `src/index.css`.

Important integrations
- Razorpay (client): Page-level usage via `src/utils/razorpay.ts` and a script injected in `App.tsx`. Use `import.meta.env.VITE_RAZORPAY_KEY_ID` for the client key and `initializeRazorpayPayment` to open checkout.
- Google Analytics (GA4): Injected script in `App.tsx` via `react-helmet`.

Build & dev workflow
- Start dev server: `npm run dev` (runs `vite`).
- Build for production: `npm run build` (outputs to `dist`).
- Preview built output: `npm run preview`.
- Lint: `npm run lint`.

Coding and architecture conventions (observable rules)
- Routes: Centralized in `src/App.tsx` using `react-router-dom`. Add new pages under `src/pages` and register a route there.
- Components: Presentational components under `src/components`. Keep pages thin and delegate UI to components.
- Scripts injected at app-level (analytics/payment) are placed in `App.tsx` using `react-helmet`. If adding third-party SDKs, prefer loading them via utilities (see `src/utils/razorpay.ts`) that guard against double-loading.
- Environment variables: Use Vite's `import.meta.env.VITE_...` convention. Do not expect Node `process.env` at runtime (Vite defines `process.env` in `vite.config.ts` but prefer `import.meta.env`).

Quick examples (how to open Razorpay)
- Utility: `initializeRazorpayPayment({ amount: 1999, prefill: { name, email } })` (see `src/utils/razorpay.ts`).
- Guard: Check `isRazorpayConfigured()` before calling so the app can fail fast in dev without keys.

Files to inspect when making changes
- Routing and global scripts: `src/App.tsx` (most critical).
- Razorpay and payment helpers: `src/utils/razorpay.ts`.
- Entry point and styles: `src/main.tsx`, `src/index.css`.
- Vite config and build options: `vite.config.ts` (manualChunks, outDir, host/ports).

Style and small patterns
- Keep TypeScript types light; many files use inferred types and DOM checks like `document.getElementById('root')!`.
- Prefer inline examples from existing pages (e.g., payment success/failed routes in `App.tsx`) when adding UX flows.

Testing & CI
- No test framework present. Keep changes small and run `npm run dev` / `npm run build` locally to validate.

If you modify environment-dependent behavior
- Document required Vite env vars (prefix `VITE_`) when adding features. Example used: `VITE_RAZORPAY_KEY_ID`.

When in doubt
- Follow existing folder conventions. For a new page: add file in `src/pages`, export a default React component, and add a `<Route path="/your-path" element={<YourPage/>} />` in `App.tsx`.

Ask for clarification if you need runtime credentials or private API endpoints — do not attempt to guess or embed secrets.
