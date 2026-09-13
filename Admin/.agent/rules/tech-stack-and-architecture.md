# Growth Service Blog & Admin — Tech Stack & Architecture

> Part 1 of 3 rule files for this project. See also: database-and-ai-policy.md, build-plan.md — all three apply together.

---

## 1. Project Overview

**Project:** Growth Service — Blog & Admin Platform

**Business context:** Growth Service (growthservice.in) is a digital marketing/SEO agency. The main marketing website is a **separate, existing Vite + React (client-side only) application** — it must NOT be touched, modified, or rebuilt as part of this project.

This project is a **new, standalone Next.js application** that will:
1. Serve a public, SEO-optimized blog (server-rendered — this is the whole reason it's a separate app instead of living in the Vite site)
2. Provide a private admin dashboard for managing blog content
3. Let posts be written manually OR generated with AI assistance, always reviewed by a human before publishing

**Explicitly out of scope for Phase 1** (do not build — see build-plan.md Section 12 for context so naming/structure doesn't conflict later): job openings listings, job application forms, resume uploads, applicant tracking.

---

## 2. Tech Stack — Use Exactly This

| Layer | Choice |
|---|---|
| Framework | Next.js, latest stable, **App Router** |
| Language | TypeScript, strict mode on |
| Database | Supabase (Postgres) |
| Auth | Supabase Auth (email/password) |
| File storage | Supabase Storage (cover images now; resumes in a future phase) |
| Styling | Tailwind CSS |
| UI components | shadcn/ui |
| Icons | lucide-react |
| Rich text editor | Tiptap — `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-image`, `@tiptap/extension-link` |
| Forms & validation | react-hook-form + zod |
| AI provider (current) | Groq (`groq-sdk`) |
| Notifications | sonner (toasts) |
| Dates | date-fns |
| Slugs | slugify |
| Hosting | Vercel |

Do not substitute a different database, auth system, or component library without flagging it first — this stack was chosen deliberately for cost and maintainability.

---

## 3. Critical Rule: AI Provider Abstraction

The owner uses **Groq today** but wants to switch to **OpenAI, Anthropic (Claude), or another provider later** with minimal code changes. This is a hard requirement.

**Rules:**
- No component, page, or API route may import `groq-sdk` (or any provider SDK) directly.
- Every AI call goes through exactly one function: `/lib/ai/generateBlogPost.ts`.
- That function delegates to a provider implementation under `/lib/ai/providers/` (e.g. `groq.ts`). Callers never know which provider is active.
- The active provider is set via `AI_PROVIDER` env var, even though only one provider is implemented today — this documents intent for whoever switches it later.
- Prompts live in `/lib/ai/prompts/blogPost.ts` as exported template strings/functions — never inline inside the call logic — so tone/style can be tuned without touching plumbing.

```typescript
// /lib/ai/generateBlogPost.ts

export interface GenerateBlogPostInput {
  topic: string;
  tone?: string;            // e.g. "professional", "conversational"
  keywords?: string[];      // SEO keywords to naturally include
  wordCount?: number;       // approx target length
  audience?: string;        // e.g. "small business owners in India"
}

export interface GenerateBlogPostOutput {
  title: string;
  metaDescription: string;
  content: string;          // HTML, ready to load into Tiptap
  suggestedTags: string[];
}

export async function generateBlogPost(
  input: GenerateBlogPostInput
): Promise<GenerateBlogPostOutput> {
  // delegates to /lib/ai/providers/groq.ts today
}
```

When a future developer switches providers, only files under `/lib/ai/providers/` and the env var should need to change — nothing else in the app.

---

## 6. Folder Structure

```
/app
  /(public)
    /blog
      /page.tsx                  → public blog list
      /[slug]/page.tsx           → public single post (SSG/ISR)
  /admin
    /login/page.tsx
    /page.tsx                    → dashboard home (counts, recent activity)
    /blog
      /page.tsx                  → list all posts (table, filters)
      /new/page.tsx              → create post (manual or AI mode)
      /[id]/edit/page.tsx        → edit existing post
    layout.tsx                   → protected layout, redirects if not authed
  /api
    /admin
      /blog
        /generate/route.ts       → calls generateBlogPost()
/lib
  /supabase
    /client.ts                   → browser client (anon key)
    /server.ts                   → server client (service role, server-only)
  /ai
    /generateBlogPost.ts         → abstraction, see Section 3
    /providers
      /groq.ts
    /prompts
      /blogPost.ts
/components
  /ui                            → shadcn components (generated)
  /admin                         → Sidebar, PostTable, PostEditor, TagInput, etc.
middleware.ts                    → protects /admin/* routes
```

---

## 7. Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=       # server-only, never expose to the client bundle
AI_PROVIDER=groq
GROQ_API_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` must never appear in client components or in anything shipped to the browser — server-side use only (API routes, server components, `/lib/supabase/server.ts`).
