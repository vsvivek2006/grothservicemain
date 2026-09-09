# Final UI/UX Consistency Checklist

**Target Branch**: `staging`  
**Status Key**: `PENDING` | `IN_PROGRESS` | `VERIFIED`

---

### 1. ICON SYSTEM
* **Issue**: Emojis used as UI icons across cards, category tabs, and process steps.
* **Affected**: `Services.tsx`, `Pricing.tsx`, `Resources.tsx`, `HelpCenter.tsx`, `FreeWebsiteAudit.tsx`, `DigitalMarketing.tsx`, `white-label/*`, `design-development/*`, `digital-marketing/*`.
* **Fix**: Replace raw emoji icons with standardized Lucide React icons (`Search`, `Code`, `Smartphone`, `Rocket`, `BarChart3`, `Building`, `Palette`, `Settings`, etc.).
* **Status**: IN_PROGRESS

### 2. CARDS
* **Issue**: Inconsistent border radius (`rounded-xl` vs `rounded-2xl` vs `rounded-3xl`), irregular hover jump (`-translate-y-2` vs `-translate-y-1`), and mismatched borders.
* **Affected**: `ServiceCard.tsx`, `LocationCard.tsx`, `TeamCard.tsx`, `Pricing.tsx`, `Packages.tsx`, `Portfolio.tsx`, `CaseStudies.tsx`.
* **Fix**: Standardize card base: `rounded-2xl`, `border border-slate-200/80`, `bg-white`, subtle hover lift (`hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200`).
* **Status**: IN_PROGRESS

### 3. BUTTONS
* **Issue**: Inconsistent button heights, radii, and gradient variants.
* **Affected**: `Button.tsx`, CTAs in `Home.tsx`, `Header.tsx`, `BookCall.tsx`, `Contact.tsx`, `Services.tsx`.
* **Fix**: Standardize on `min-h-[44px]` for interactive accessibility, consistent signature gradient (`from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800`), and `rounded-xl`.
* **Status**: IN_PROGRESS

### 4. NAVIGATION
* **Issue**: Desktop navigation item active state contrast and chevron alignment.
* **Affected**: `DesktopNavigation.tsx`, `TopBar.tsx`.
* **Fix**: Ensure high-contrast active states, accessible touch/focus targets, and clean spacing.
* **Status**: IN_PROGRESS

### 5. DROPDOWNS
* **Issue**: Hover gap (`mt-1.5`) causing dropdown collapse when moving cursor down; chevron not rotating on keyboard focus; missing `:focus-visible` styling.
* **Affected**: `ServiceDropdown.tsx`.
* **Fix**: Add invisible hover bridge (`before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-['']`), sync chevron rotation with `aria-expanded`, add Escape key handling and `:focus-visible` rings.
* **Status**: IN_PROGRESS

### 6. FORMS
* **Issue**: Varying input heights, placeholder opacity, and focus states.
* **Affected**: `Contact.tsx`, `BookCall.tsx`, `FreeWebsiteAudit.tsx`.
* **Fix**: Unify input base styles: `h-11`, `rounded-xl`, `border-slate-300`, `focus:ring-2 focus:ring-purple-500 focus:border-purple-500`. Explicit label associations.
* **Status**: IN_PROGRESS

### 7. TYPOGRAPHY
* **Issue**: Heading size jumps and inconsistent muted text shades (`text-gray-500` vs `text-slate-400` vs `text-slate-500`).
* **Affected**: Site-wide headings and subtitles.
* **Fix**: Enforce typography scale: H1 (`text-4xl md:text-5xl lg:text-6xl font-extrabold`), H2 (`text-2xl md:text-3xl font-bold`), H3 (`text-xl font-bold`), subtitles (`text-slate-600 leading-relaxed`).
* **Status**: IN_PROGRESS

### 8. SPACING
* **Issue**: Inconsistent section padding (`py-12` vs `py-16` vs `py-20` vs `py-28`).
* **Affected**: Section wrappers across pages.
* **Fix**: Standardize on `Section.tsx` (`py-16 md:py-20 lg:py-24`).
* **Status**: IN_PROGRESS

### 9. SECTIONS
* **Issue**: Section headings constructed with disparate markup instead of `SectionHeader.tsx`.
* **Affected**: Service pages, About sections, Packages sections.
* **Fix**: Standardize eyebrow badge, main title with gradient highlight, and subtitle description layout.
* **Status**: IN_PROGRESS

### 10. TECH STACK
* **Issue**: No canonical tech stack file; hardcoded arrays scattered across pages; inconsistent icons.
* **Affected**: `HomeTechnologySection.tsx`, `services.ts`, `packages.ts`, `Portfolio.tsx`, `CaseStudies.tsx`.
* **Fix**: Create `src/data/technologies.ts` with master metadata, typed icons, and category selectors. Refactor consumers to use it.
* **Status**: IN_PROGRESS

### 11. RESPONSIVE
* **Issue**: Potential horizontal scroll on 320px/375px screens due to fixed-width tables or grids; mobile padding consistency.
* **Affected**: Mega-menu, mobile navigation, data tables, pricing grids.
* **Fix**: Ensure all grids collapse gracefully (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4`), horizontal scrollbars use `overflow-x-auto` with `scrollbar-none`, and container padding is `px-4 sm:px-6 lg:px-8`.
* **Status**: IN_PROGRESS

### 12. ACCESSIBILITY
* **Issue**: Missing `:focus-visible` styling on custom buttons, missing `aria-expanded` synchronization, icon-only buttons without `aria-label`.
* **Affected**: Header actions, modals, floating WhatsApp, form controls.
* **Fix**: Add `:focus-visible:ring-2 :focus-visible:ring-purple-500` throughout; add explicit aria attributes.
* **Status**: IN_PROGRESS

### 13. ANIMATION
* **Issue**: Potential layout shift or harsh transitions on hover.
* **Affected**: Card hover transforms, button scales.
* **Fix**: Restrict transforms to `translate-y` (max 4px) and subtle scale (max 1.02); respect `prefers-reduced-motion`.
* **Status**: IN_PROGRESS

### 14. FOOTER
* **Issue**: Social link icon alignments, office list spacing, and copyright layout.
* **Affected**: `src/components/Footer.tsx`, `src/components/footer/*`.
* **Fix**: Harmonize padding, verify canonical links and data bindings, ensure high contrast.
* **Status**: IN_PROGRESS

### 15. CTA
* **Issue**: Floating WhatsApp z-index and banner padding variance.
* **Affected**: `WhatsAppFloat.tsx`, `CTABanner.tsx`.
* **Fix**: Ensure non-intrusive floating button placement with clear focus states and safe mobile padding.
* **Status**: IN_PROGRESS

### 16. LOCATION UI
* **Issue**: Regional cards variance between hub and city pages.
* **Affected**: `LocationsHub.tsx`, `CityHubPage.tsx`, `LocationServicePage.tsx`.
* **Fix**: Unify card presentation and breadcrumb hierarchy.
* **Status**: IN_PROGRESS

### 17. SERVICE UI
* **Issue**: Deliverables list and feature checks using disparate checkmark colors and icons.
* **Affected**: `Services.tsx`, `LocationServicePage.tsx`, service detail pages.
* **Fix**: Standardize Lucide `CheckCircle` with emerald theme token.
* **Status**: IN_PROGRESS

### 18. TEAM UI
* **Issue**: Team member card aspect ratios and fallback avatars.
* **Affected**: `TeamPage.tsx`, `TeamCard.tsx`.
* **Fix**: Standardize card heights, avatar container, and social icon links.
* **Status**: IN_PROGRESS
