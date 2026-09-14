# ✅ Rule Files Size Cleanup — COMPLETED

> **STATUS:** All rule files in `.agents/rules/` are strictly verified under the 12,000-character limit.

## Split Summary

The two previous oversized files (`growthservice-vite-to-nextjs-migration-rules.md` and `vite-to-nextjs-migration-safety.md`) have been split into topic-scoped files following the `0X-*.md` naming convention, and the originals deleted:

1. **`04-migration-core-principles.md`** (~4.3k chars): Core principles, URL contract, routing mapping, build safety. (Obsolete "Admin out of scope" removed).
2. **`05-phased-migration-strategy.md`** (~5.1k chars): Migration phases 0–8, layout rules, RSC boundaries, data centralization.
3. **`06-seo-and-indexation-parity.md`** (~4.0k chars): Page metadata, JSON-LD structured data, sitemap, robots, redirects, canonical URLs.
4. **`07-ux-assets-and-integrations.md`** (~4.5k chars): Lead flow parity, GA4, brand palette lock, media, env vars, error boundaries.
5. **`08-cutover-testing-and-rollback.md`** (~4.4k chars): Dual build validation, route test matrix, cutover gate, emergency rollback runbook.
