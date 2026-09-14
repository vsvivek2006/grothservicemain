# 07 — UX, Assets, Brand Lock & Integrations

> **STATUS: PERMANENT / HARD RULE**  
> Covers lead flows, third-party analytics, brand styling enforcement, media assets, and environment variables.

---

## 1. Forms & Lead Flow Parity

Lead generation is the central operational function of the website. Every lead pathway must work flawlessly.

### 1.1 Form Implementations
- **Contact Form (`/contact`):** Validates name, phone, email, service interest, and message. Submissions must connect to backend endpoints/Supabase without silent failures.
- **Free SEO / Business Audit Form:** Captures URL, business type, and contact information. Provides immediate user feedback on success/failure.
- **Book a Call / Consultation Modal:** Validates appointment inputs and triggers confirmation alerts.

### 1.2 WhatsApp Action Flow
- WhatsApp triggers must route to official number: `https://wa.me/918800766600` (or configured company number).
- Pre-filled messages must correctly encode service and context information.
- Button styling must use locked WhatsApp green: `bg-[#25D366] hover:bg-emerald-600`.

---

## 2. Analytics & Tracking Parity

- **Google Analytics 4 (GA4):**
  - Measurement ID: `G-P50L6F04NE`.
  - Injected via Next.js `next/script` in `src/app/layout.tsx` with `strategy="afterInteractive"`.
  - Must capture client route transitions across Next.js soft navigations.
- **Event Tracking:**
  - Phone call clicks (`tel:...`).
  - WhatsApp CTA clicks.
  - Form submit completions.

---

## 3. Brand Identity & Theme Color Lock

> **CRITICAL RULE**: The visual identity is **PERMANENTLY LOCKED** to [https://www.growthservice.in/](https://www.growthservice.in/).  
> Never substitute brand colors with generic dark palettes (`slate-950`, `#1c0836`, or plain gray).

### 3.1 Official Brand Color Tokens
| Token / Usage | Value | Tailwind Class |
|---|---|---|
| **Primary Brand Color** | Royal Purple `#6A0DAD` / `#7C3AED` | `text-purple-600`, `bg-purple-600` |
| **Secondary Accent** | Vibrant Gold `#FFD700` / `#F59E0B` | `text-yellow-400`, `bg-yellow-400` |
| **Highlight Accent** | Electric Pink / Fuchsia `#EC4899` | `via-purple-700 to-pink-600` |
| **WhatsApp Action** | WhatsApp Green `#25D366` | `bg-[#25D366]` |
| **Deep Dark Brand** | Deep Navy Purple `#4C1D95` / `#581C87` | `from-gray-900 via-purple-900 to-blue-900` |

### 3.2 Locked Hero Gradients
- **Main Hero:** `bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white`
- **Notification Top Bar:** `bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white`
- **Services / Hub Hero:** `bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white`
- **Primary Action Buttons:** `bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white`

---

## 4. Browser APIs & Storage Safety

- Server Components execute in Node.js where `window`, `document`, and `localStorage` are undefined.
- Always guard browser API access:
  ```ts
  if (typeof window !== 'undefined') {
    // browser logic
  }
  ```
- Use `useEffect` or client-only hooks to avoid server-client hydration mismatches.

---

## 5. Media & Asset Parity

- **Images:** All public assets (`public/images/`, `public/logos/`, team pictures, badges) must resolve with HTTP 200.
- **Favicon & Icons:** Maintain SVG and PNG favicons in `public/` matching current branding.
- **Verification Files:** Preserve search console and domain verification files (`google*.html`, verification tokens) in `public/`.
- **Image Optimization:** Use `next/image` with explicit `width`, `height`, and responsive `sizes` attribute to prevent layout shifts (CLS).

---

## 6. Environment Variables Migration

Map all legacy Vite environment variables to their Next.js equivalents:

| Vite Variable (`.env`) | Next.js App Router Variable (`.env.local`) |
|---|---|
| `VITE_SUPABASE_URL` | `NEXT_PUBLIC_SUPABASE_URL` |
| `VITE_SUPABASE_ANON_KEY` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `VITE_GA_MEASUREMENT_ID` | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |

- **Security Rule:** Private credentials (e.g. `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY`) must NEVER have `NEXT_PUBLIC_` prefix.

---

## 7. Error & Loading Boundaries

- Root Error Boundary: `src/app/error.tsx` catching runtime uncaught exceptions.
- 404 Handler: `src/app/not-found.tsx` rendering brand-consistent 404 page with return-home navigation.
- Loading Skeleton: `src/app/loading.tsx` providing smooth transitions without white-screen flashing.
