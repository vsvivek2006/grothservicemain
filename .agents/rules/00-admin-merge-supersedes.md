# ⚠️ Correction — Admin Merge Supersedes Older Rules

> Read this file FIRST, before any other rules file in this folder.

## What changed

The Admin app has already been merged into the root Next.js app (confirmed present: `src/app/admin`, `src/lib/ai`, `src/lib/supabase`, `src/components/admin`). There is no standalone `Admin/` application anymore.

## Rules that are now WRONG and must be ignored

1. **`MIGRATION_LEDGER.md`**, section "Architectural Decisions (Rule 2)" — the line `Admin Boundary: Architecture A selected and locked` and `Admin application (Admin/): Standalone Next.js app, independently deployed. No changes, merges, or deletions.` is **obsolete**. A human or agent must update this section to reflect the merge that already happened, or delete it and replace with a one-line note: "Admin merged into root app on [date] — see `.agents/rules/01-architecture-merge-plan.md`."

2. **`vite-to-nextjs-migration-safety.md`**, the "OUT OF SCOPE" section (the block starting "The separate `Admin/` Next.js application is NOT part of this migration" and including "Do not: Rewrite `Admin/` / Merge `Admin/` into the main app / Delete the existing Admin application") — **delete this entire section**. It directly contradicts the merge that has already happened and will confuse any future work if left in place.

## Source of truth going forward

`01-architecture-merge-plan.md`, `02-execution-checklist.md`, and `03-validation-and-rollback.md` in this same folder are current and correct. If anything in `MIGRATION_LEDGER.md`, `vite-to-nextjs-migration-safety.md`, or `growthservice-vite-to-nextjs-migration-rules.md` conflicts with these three files, **these three files win**.

## Known cleanup still pending

- `src/views/Blog.tsx` (~36KB) is dead code — nothing imports it anymore since `src/app/blog/page.tsx` now fetches from Supabase directly. Safe to delete.
- Decide and confirm: keep the public blog at `/blog` (already live, already has SEO/redirect parity verified per `MIGRATION_LEDGER.md`), or rename to `/blogs` with a fresh 301 redirect. Do not rename without deliberate sign-off, since renaming now costs a second SEO parity pass on an already-live route.
