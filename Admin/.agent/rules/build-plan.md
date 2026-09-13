# Growth Service Blog & Admin — Build Plan

> Part 3 of 3 rule files for this project. See also: tech-stack-and-architecture.md, database-and-ai-policy.md — all three apply together.

---

## 8. Build Order — Phase 1

### Step 1 — Project Setup
- Initialize Next.js (App Router) + TypeScript
- Configure Tailwind + shadcn/ui (`npx shadcn@latest init`)
- Deploy an empty skeleton to Vercel on `blog.growthservice.in`

### Step 2 — Supabase Setup
- Create the Supabase project
- Run the migration from database-and-ai-policy.md Section 5
- Create one admin user via Supabase Auth (email/password) — no public sign-up flow

### Step 3 — Admin Auth
- `/admin/login` — email/password form (react-hook-form + zod)
- `middleware.ts` — redirect unauthenticated visitors away from any `/admin/*` route except `/admin/login`
- Logout action

### Step 4 — Admin Dashboard Shell
- Sidebar layout (Dashboard, Blog Posts, Logout)
- `/admin` home — simple counts (total posts, drafts, published)

### Step 5 — Blog CRUD (manual)
- `/admin/blog` — table of posts: title, status, source, created date, edit/delete
- `/admin/blog/new` — title, tags, cover image upload, Tiptap editor, Save as Draft / Publish
- `/admin/blog/[id]/edit` — same editor pre-filled, plus Delete
- Auto-generate slug from title via `slugify`, editable before save

### Step 6 — Public Blog Pages
- `/blog` — published posts only (title, excerpt, date, cover image), paginated
- `/blog/[slug]` — full post with correct `<title>`, meta description, Open Graph tags per post
- Statically generated where possible (`generateStaticParams` + ISR revalidation)

### Step 7 — AI Generation Flow
- On `/admin/blog/new`, add a mode toggle: "Write manually" / "Generate with AI"
- AI mode fields: topic (required), tone, target keywords, word count, audience
- "Generate" → `POST /api/admin/blog/generate` → populates title, meta description, content, and tags into the same editor (fully editable)
- "Regenerate" button to retry
- New AI drafts get `source = 'ai'`; if edited before publish, update to `source = 'ai-edited'` on save
- Enforce: AI-generated posts always start as `status = 'draft'` (see database-and-ai-policy.md Section 4)

### Step 8 — Polish
- `sitemap.xml` and `robots.txt` including blog routes
- Loading states + error toasts (`sonner`) on all admin actions
- Admin dashboard should be usable on a laptop screen at minimum; doesn't need to be mobile-first

---

## 10. Coding Conventions

- Default to server components; add `"use client"` only where real interactivity is needed (forms, editor, toggles)
- Elevated-access Supabase calls go through `/lib/supabase/server.ts` only — don't mix service-role and anon-key usage carelessly in the same file
- Validate all form input with zod schemas — define once, reuse on the client and in the API route
- Keep components small and colocated: an editor's sub-pieces (toolbar, image upload, tag input) live in their own files under `/components/admin/`
- One feature step (Section 8 above) per logical set of commits, not one giant commit at the end

---

## 11. Guardrails — Do Not

- Do NOT modify or touch the existing Vite + React main site — this is a fully separate app
- Do NOT expose `SUPABASE_SERVICE_ROLE_KEY` to any client-side code
- Do NOT call any AI provider SDK from outside `/lib/ai/providers/`
- Do NOT auto-publish AI-generated content under any circumstance
- Do NOT show AI authorship, badges, or disclosures anywhere a site visitor can see
- Do NOT use `select *` on any query that powers a public page/route
- Do NOT build job listings/applications yet — future phase (Section 12 below)

---

## 12. Future Phases (context only — do not build yet)

Keep structure/naming generic enough that these don't require a refactor later:
- **Job Openings** — a `jobs` table (title, department, location, type, description, status) + public `/careers` page
- **Job Applications** — an `applications` table linked to `jobs`, resume upload to Supabase Storage, admin review table with a status field (New/Reviewed/Shortlisted/Rejected)
- Keep the admin sidebar component generic enough that adding "Jobs" and "Applications" nav items later is a small addition, not a rewrite

---

## 13. Phase 1 — Definition of Done

- [ ] Admin can log in and out; `/admin/*` is inaccessible when logged out
- [ ] Admin can create, edit, delete, and publish a post manually
- [ ] Admin can generate a draft via AI, edit it, and publish it
- [ ] Public `/blog` and `/blog/[slug]` show only published posts, with correct per-post meta tags
- [ ] No AI disclosure anywhere public; `source` field never appears outside `/admin`
- [ ] Main Vite site is untouched and still deploys independently
