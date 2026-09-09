# Growth Service — Permanent Project Rules & Theme Color Lock

> **CRITICAL RULE**: The visual identity and theme color palette of Growth Service are **PERMANENTLY LOCKED** to the authentic brand colors of the production website [https://www.growthservice.in/](https://www.growthservice.in/).
> Under NO circumstance may any AI agent or developer change, replace, dull, or substitute these brand colors with arbitrary palettes (such as `slate-950`, `#1c0836`, or plain dark grays).

---

## 1. Official Brand Color Palette (LOCKED)

| Token / Usage | Value | Class / Implementation |
|---|---|---|
| **Primary Brand Color** | Royal Purple `#6A0DAD` / `#7C3AED` | `text-purple-600`, `bg-purple-600`, `purple-700` |
| **Secondary Accent** | Vibrant Gold `#FFD700` / `#F59E0B` | `text-yellow-400`, `bg-yellow-400`, `yellow-500` |
| **Highlight Accent** | Electric Pink / Fuchsia `#EC4899` | `via-purple-700 to-pink-600` |
| **WhatsApp Action** | WhatsApp Green `#25D366` | `bg-[#25D366]`, `hover:bg-emerald-600` |
| **Deep Dark Brand** | Deep Navy Purple `#4C1D95` / `#581C87` | `from-gray-900 via-purple-900 to-blue-900` |

---

## 2. Standard Page Gradient System (LOCKED)

### Main Hero Sections (Home, Locations, Hubs, Detail Pages)
```tsx
bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white
```
- Ambient lighting accents: `bg-purple-600/30` and `bg-blue-600/25` blurred orbs.
- Grid overlay: subtle dot matrix (`DecorativeGrid`).

### Header Notification Top Bar
```tsx
bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white
```
- Accents: `text-yellow-300`, `bg-white/10 hover:bg-white/20`.

### Services & Packages Hero Sections
```tsx
bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white
// or
bg-gradient-to-r from-blue-600 to-indigo-700 text-white
```

### About Page Hero Section
```tsx
bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white
```

### Benefits Section ("Why Choose Us")
```tsx
bg-gradient-to-r from-blue-900 to-purple-900 text-white
```

### Final CTA Banners
```tsx
bg-gradient-to-r from-gray-900 to-blue-900 text-white
// or
bg-gradient-to-r from-blue-600 to-indigo-700 text-white
```

### Primary Action Buttons (CTAs)
```tsx
bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white
```

---

## 3. Strict Prohibitions

1. **DO NOT** replace the rich purple/blue gradients with `slate-950`, `#1c0836`, `#1b0834`, or monochrome black.
2. **DO NOT** change the primary button styling away from the signature blue/purple/indigo gradient.
3. **DO NOT** change the Header notification bar away from `from-purple-900 via-purple-700 to-pink-600`.
4. **DO NOT** modify the colors configured in `tailwind.config.js` (`purple.600: #6A0DAD`, `yellow.400: #FFD700`, `green.400: #25D366`).
