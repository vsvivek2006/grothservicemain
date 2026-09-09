# Phase 1: Comprehensive Audit & Centralization Blueprint

**Repository**: `https://github.com/vsvivek2006/grothservicemain`  
**Branch**: `staging` (Verified: active branch, compared against `origin/main`)  
**Status**: P0 Audit & Centralization Architecture Complete  
**Date**: September 2026  

---

## 1. Executive Summary & Git Branch Baseline

- **Current Active Branch**: `staging` (Hash: `2b7afed`).
- **Main vs Staging Comparison**:
  - `staging` is 112 files ahead of `origin/main` (+17,998 insertions, -7,582 deletions).
  - Main changes introduced in staging:
    - Added central configuration foundations (`src/config/business.ts`, `src/config/routes.ts`).
    - Added data architecture (`src/data/locations.ts`, `src/data/offices.ts`, `src/data/services.ts`, `src/data/team.ts`, `src/data/industries.ts`).
    - Added UI design system & corporate components (`src/components/ui/*`, `src/components/team/*`, `src/components/animations/*`).
    - Added dedicated programmatic SEO and hub routes (`LocationsHub.tsx`, `CityHubPage.tsx`, `LocationServicePage.tsx`, `OfficesHub.tsx`, `OfficeDetailPage.tsx`, `TrustVerification.tsx`, `Accessibility.tsx`).
    - Fixed security/verification routes and link consistency (`0 broken links` verified via `scratch/link_audit.js`).
- **Critical Finding**:
  While staging added `src/config/business.ts` and `src/data/offices.ts`, multiple legacy pages (`Contact.tsx`, `About.tsx`, `BookCall.tsx`, `Offer.tsx`, `Services.tsx`) still maintain duplicate, hardcoded arrays and inline constants with conflicting numbers, email addresses, and office landmarks.

---

## 2. Table 1: Duplicated Data Sources Inventory

| Data Field / Resource | Current Values Found in Code | Locations (Files & Components) | Conflict / Inconsistency Analysis |
| :--- | :--- | :--- | :--- |
| **Company Name** | 1. `"Growth Service"`<br/>2. `"GrowthService"`<br/>3. `"Dizigrow"` (partner reference) | - `src/config/business.ts`<br/>- `src/components/Header.tsx`, `Footer.tsx`<br/>- `index.html` (meta & schema)<br/>- `src/utils/razorpay.ts`<br/>- `src/pages/Home.tsx` (client list) | Space vs No Space in branding: `index.html` uses `"GrowthService"` in Schema and title tags, while components use `"Growth Service"`. `"Dizigrow"` is an external client logo on Home, not self-reference. |
| **Primary India Phone** | `+91 93414 36937` | - `src/config/business.ts` (`phones.indiaPrimary`)<br/>- `src/components/Header.tsx` (top bar)<br/>- `src/components/Footer.tsx`<br/>- `src/pages/Contact.tsx`, `About.tsx`, `Offer.tsx`, `Home.tsx`<br/>- `src/pages/white-label/*`<br/>- `src/pages/digital-marketing/*` | Widely hardcoded in >45 page files instead of importing from central `businessConfig.phones.indiaPrimary`. |
| **Jaipur Office Phone** | `+91 62073 00553` | - `src/data/offices.ts` (Jaipur office)<br/>- `src/config/business.ts` (`phones.indiaJaipur`)<br/>- `src/data/locations.ts` (Rajasthan cities)<br/>- `src/pages/Contact.tsx`, `Offer.tsx`, `BookCall.tsx`, `About.tsx`<br/>- `src/pages/digital-marketing/SEOService.tsx`, `MetaAdsManagement.tsx` | Redundantly hardcoded across 25+ files. Jaipur phone is sometimes labeled as general India line in marketing subpages. |
| **Nepal Office Phone** | `+977 970-7382481` | - `src/data/offices.ts` (Nepal office)<br/>- `src/config/business.ts` (`phones.nepalPrimary`)<br/>- `src/data/locations.ts` (Nepal cities)<br/>- `src/components/Header.tsx`<br/>- `src/pages/Contact.tsx`, `Offer.tsx`, `BookCall.tsx`, `About.tsx`<br/>- `src/pages/digital-marketing/*` | Formatted inconsistently: `+977 970-7382481` vs `+977-970-7382481` vs raw digits `9779707382481`. |
| **Support Desk Phone** | `+91 95212 81509` | - `src/config/business.ts` (`phones.supportDesk`)<br/>- `src/FAQ.tsx` (lines 219, 273, 282)<br/>- `src/App.tsx` (line 237 payment failed CTA) | **Major Inconsistency**: Header and Footer display `+91 93414 36937` as customer support/contact, while `FAQ.tsx` and `App.tsx` point users to `+91 95212 81509`. |
| **WhatsApp Number & Link** | 1. `919521281509` (Primary WhatsApp in config)<br/>2. `919341436937` (Used on select pages)<br/>3. `9779707382481` (Nepal WhatsApp) | - `src/config/business.ts`<br/>- `src/components/Header.tsx`<br/>- `src/FAQ.tsx`<br/>- `src/App.tsx` (payment pages)<br/>- `src/pages/NotFound.tsx`, `Contact.tsx`, `OfficeDetailPage.tsx` | **User Confusion Risk**: Depending on which page the user clicks WhatsApp, they chat with either `9521281509` or `9341436937`. Must unify WhatsApp routing. |
| **Company Emails** | 1. `info@growthservice.in`<br/>2. `jaipur@growthservice.in`<br/>3. `nepal@growthservice.in` | - `src/config/business.ts`<br/>- `src/data/offices.ts`<br/>- `src/components/Header.tsx`, `Footer.tsx`<br/>- `src/pages/Contact.tsx`, `About.tsx`, `OnboardingAgreement.tsx`<br/>- `src/pages/digital-marketing/*` | `info@` is hardcoded in >50 components as raw strings instead of referencing `businessConfig.emails.primary`. `sales@` and `hr@` do NOT exist in the codebase. |
| **Physical Offices Array** | 1. `physicalOffices` in `src/data/offices.ts`<br/>2. `businessConfig.offices` in `src/config/business.ts`<br/>3. `offices` in `Contact.tsx`<br/>4. `offices` in `About.tsx`<br/>5. `offices` in `BookCall.tsx`<br/>6. `offices` in `Offer.tsx`<br/>7. `offices` in `Footer.tsx` | - `src/data/offices.ts`<br/>- `src/config/business.ts`<br/>- `src/pages/Contact.tsx` (L64-110)<br/>- `src/pages/About.tsx` (L124-173)<br/>- `src/pages/BookCall.tsx` (L47-78)<br/>- `src/pages/Offer.tsx` (L130-152)<br/>- `src/components/Footer.tsx` (L84-118) | **Severe Duplication**: 5 separate pages define their own private `offices` arrays with mismatched fields: `About.tsx` marks Vrindavan `isHeadOffice: true`, whereas `offices.ts` marks all `isHeadOffice: false`. Different landmarks (`Radhika Sadan ki Bassinet me` vs `Near Pushpa Garden`). |
| **Location & Cities Data** | 1. `citiesData` (24 cities) & `regionsData` (9 regions) in `src/data/locations.ts`<br/>2. Embedded office addresses in `locations.ts`<br/>3. City dropdowns/references in pages | - `src/data/locations.ts`<br/>- `src/pages/LocationsHub.tsx`<br/>- `src/pages/CityHubPage.tsx`<br/>- `src/pages/LocationServicePage.tsx`<br/>- `src/pages/Offer.tsx` | `src/data/locations.ts` contains hardcoded office phone numbers and addresses for Jaipur, Vrindavan, and Bariyarpatti rather than referencing `physicalOffices`. |
| **Team / Employee Data** | 1. `teamMembers` (9 verified employees) in `src/data/team.ts`<br/>2. Page consumers in `TeamPage.tsx`, `Home.tsx`, `OfficeDetailPage.tsx` | - `src/data/team.ts`<br/>- `src/pages/TeamPage.tsx`<br/>- `src/pages/Home.tsx`<br/>- `src/pages/OfficeDetailPage.tsx` | **Resolved in Phase 1 upgrade**: Old inconsistent mock data was replaced with single source `src/data/team.ts` derived from verified business staff. |
| **Services Catalogue** | 1. `servicesData` (13 core services) in `src/data/services.ts`<br/>2. Submenus in `Header.tsx` & `Footer.tsx`<br/>3. `allServices` (10 services) in `Services.tsx` | - `src/data/services.ts`<br/>- `src/pages/Services.tsx` (L53-150)<br/>- `src/components/Header.tsx`<br/>- `src/components/Footer.tsx` | **Data Divergence**: `src/pages/Services.tsx` defines custom package-style services ("Custom Business Website (5 Pages)", "SEO Booster Pack") which do not map to the canonical service slugs in `servicesData`. |
| **Social Media Links** | 1. `businessConfig.social`<br/>2. Hardcoded in `Footer.tsx`<br/>3. Hardcoded in `Contact.tsx`<br/>4. In Schema.org `index.html` & `Home.tsx` | - `src/config/business.ts`<br/>- `src/components/Footer.tsx`<br/>- `src/pages/Contact.tsx` (L664)<br/>- `index.html`<br/>- `src/pages/Home.tsx` | In `Contact.tsx`: hardcoded `https://www.facebook.com/growthservices` (with `www`), while `businessConfig` uses `https://facebook.com/growthservices`. |
| **Payment Gateway Configuration** | 1. Razorpay Key ID: `VITE_RAZORPAY_KEY_ID`<br/>2. Company Name: `'Growth Service'`<br/>3. Theme Color: `'#7C3AED'` | - `src/utils/razorpay.ts`<br/>- `src/components/PaymentButton.tsx`<br/>- `src/pages/Pricing.tsx` | Brand name correctly set to `'Growth Service'`, theme color correctly locked to `#7C3AED`. Key is managed via `.env`. |
| **Google Analytics (GA4) / GTM** | `G-P50L6F04NE` | - `index.html` (lines 94, 99) | Single instance found. No duplicate tags. |

---

## 3. Inconsistencies & Mismatches Detailed Breakdown

1. **Head Office Conflict**:
   - `src/pages/About.tsx` (line 154): Vrindavan is marked `isHeadOffice: true`.
   - `src/data/offices.ts` (line 68): Vrindavan is marked `isHeadOffice: false` (Jaipur, Vrindavan, and Nepal are all co-equal physical offices).
   - *Resolution Plan*: Standardize corporate office tiering in `src/data/offices.ts`.
2. **Support Phone Discrepancy**:
   - Primary Phone: `+91 93414 36937` (used on Header, Footer, Contact).
   - Support Desk Phone: `+91 95212 81509` (configured in `business.ts` and used in `FAQ.tsx` and Payment Failed page).
   - *Resolution Plan*: Clarify in unified schema whether `9521281509` is dedicated technical support / billing or if `9341436937` is the universal line.
3. **WhatsApp Routing Inconsistency**:
   - Floating WhatsApp & Header mobile use `919521281509`.
   - Office detail page & NotFound use `919341436937`.
   - Nepal buttons use `9779707382481`.
   - *Resolution Plan*: Route WhatsApp based on locale context (India Default -> `919521281509` or `919341436937`; Nepal -> `9779707382481`).
4. **Services Page Disconnect**:
   - `src/data/services.ts` contains 13 granular services with slug-based programmatic routes.
   - `src/pages/Services.tsx` contains 10 generic package offerings with inline IDs 1–10.
   - *Resolution Plan*: Connect `Services.tsx` to `servicesData` while preserving marketing copy.
5. **Refund Route Misalignment**:
   - In `src/App.tsx`: `<Route path="/refund" element={<Privacy />} />`.
   - `Privacy.tsx` has no refund policy text.
   - *Resolution Plan*: Create dedicated `RefundPolicy.tsx` or point to a dedicated Terms section.

---

## 4. Table 2: Proposed Unified Schema Blueprint (Phase 2 Target)

To eliminate all duplications, we propose a centralized configuration directory structure under `src/config/`:

```
src/config/
├── business.ts       # Identity, phones, emails, social, legal, payment
├── offices.ts        # Factual physical office locations & operational metadata
├── services.ts       # 13 Canonical service definitions, pricing, submenus
├── locations.ts      # Regions, cities, and geo-coordinates
├── routes.ts         # Central route registry with canonicals, aliases, and sitemap settings
├── team.ts           # Verified staff directory linked to office IDs
└── index.ts          # Unified export point
```

### Unified Schema Data Types & Fields:

```typescript
// 1. Business & Brand Identity
export interface BusinessBrandConfig {
  name: string;                // "Growth Service"
  legalName: string;           // "Growth Service"
  tagline: string;             // "Digital Growth Partner"
  domain: string;              // "https://www.growthservice.in"
  brandColor: string;          // "#7C3AED"
  ratings: {
    average: number;           // 4.8
    reviewCount: number;       // 300
    sourceText: string;        // "Rated 4.8/5 across Google, Facebook & Trustpilot"
  };
}

// 2. Communication Channels
export interface CommunicationConfig {
  phones: {
    primaryIndia: string;      // "+91 93414 36937"
    jaipurOffice: string;      // "+91 62073 00553"
    nepalOffice: string;       // "+977 970-7382481"
    supportDesk: string;       // "+91 95212 81509"
  };
  whatsapp: {
    indiaNumber: string;       // "919521281509" or "919341436937"
    nepalNumber: string;       // "9779707382481"
    defaultMessage: string;
    getIndiaUrl: (customText?: string) => string;
    getNepalUrl: (customText?: string) => string;
  };
  emails: {
    primary: string;           // "info@growthservice.in"
    support: string;           // "info@growthservice.in"
    jaipur: string;            // "jaipur@growthservice.in"
    vrindavan: string;         // "info@growthservice.in"
    nepal: string;             // "nepal@growthservice.in"
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

// 3. Physical Corporate Offices (Canonical)
export interface PhysicalOffice {
  id: 'jaipur' | 'vrindavan' | 'nepal';
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  flag: string;
  isHeadOffice: boolean;
  tagline: string;
  address: string;
  landmark: string;
  postalCode: string;
  phone: string;
  email: string;
  timings: string;
  mapLink: string;
  coordinates: { lat: number; lng: number };
  servicesOffered: string[];
  areasServed: string[];
}
```

---

## 5. Table 3: Route Registry vs App.tsx Sync Checklist

| Route Path | Registry Status (`routes.ts`) | App.tsx Registration | Header / Footer / Sitemap Status | Required Action / Decision |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Canonical | `<Route path="/" element={<Home />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/about` | Canonical | `<Route path="/about" element={<About />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/services` | Canonical | `<Route path="/services" element={<Services />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/portfolio` | Canonical | `<Route path="/portfolio" element={<Portfolio />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/pricing` | Canonical | `<Route path="/pricing" element={<Pricing />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/packages` | Canonical | `<Route path="/packages" element={<Packages />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/contact` | Canonical | `<Route path="/contact" element={<Contact />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/book-call` | Canonical | `<Route path="/book-call" element={<BookCall />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/consultation` | Alias -> `/book-call` | `<Route path="/consultation" element={<Navigate to="/book-call" replace />} />` | Redirect | ✅ Synced. |
| `/free-audit` | Canonical | `<Route path="/free-audit" element={<FreeWebsiteAudit />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/blog` | Canonical | `<Route path="/blog" element={<Blog />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/impact` | Canonical | `<Route path="/impact" element={<OurImpact />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/growth-services` | Canonical | `<Route path="/growth-services" element={<GrowthServices />} />` | In Sitemap | ✅ Fully in sync. |
| `/offer` | Canonical | `<Route path="/offer" element={<Offer />} />` | In Sitemap | ✅ Fully in sync. |
| `/digital-marketing` | Canonical | `<Route path="/digital-marketing" element={<DigitalMarketing />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/email-marketing` | Alias -> `/digital-marketing` | `<Route path="/email-marketing" element={<Navigate to="/digital-marketing" replace />} />` | Redirect | ✅ Synced. |
| `/seo` | Canonical | `<Route path="/seo" element={<SEOService />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/social-media` | Canonical | `<Route path="/social-media" element={<SocialMediaManagement />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/paid-marketing` | Canonical | `<Route path="/paid-marketing" element={<MetaAdsManagement />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/local-seo` | Canonical | `<Route path="/local-seo" element={<GoogleBusinessProfile />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/content-marketing` | Canonical | `<Route path="/content-marketing" element={<ContentMarketing />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/lead-generation` | Canonical | `<Route path="/lead-generation" element={<LeadGeneration />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/branding` | Canonical | `<Route path="/branding" element={<BrandStrategy />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/design-development`| Canonical | `<Route path="/design-development" element={<DesignDevelopment />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/web-development` | Canonical | `<Route path="/web-development" element={<WebsiteDevelopment />} />` | In Header, Footer, Sitemap | ✅ Canonical in place. |
| `/website-development`| Alias -> `/web-development` | `<Route path="/website-development" element={<Navigate to="/web-development" replace />} />` | Redirect | ✅ Synced. |
| `/ui-ux-design` | Canonical | `<Route path="/ui-ux-design" element={<UIUXDesign />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/ui-ux` | Alias -> `/ui-ux-design` | `<Route path="/ui-ux" element={<Navigate to="/ui-ux-design" replace />} />` | Redirect | ✅ Synced. |
| `/wordpress-development`| Canonical | `<Route path="/wordpress-development" element={<WordPressDevelopment />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/ecommerce` | Canonical | `<Route path="/ecommerce" element={<EcommerceDevelopment />} />` | In Header, Footer, Sitemap | ✅ Canonical in place. |
| `/ecommerce-development`| Alias -> `/ecommerce` | `<Route path="/ecommerce-development" element={<Navigate to="/ecommerce" replace />} />` | Redirect | ✅ Synced. |
| `/app-development` | Canonical | `<Route path="/app-development" element={<MobileAppDevelopment />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/white-label` | Canonical | `<Route path="/white-label" element={<WhiteLabel />} />` | In Header, Footer, Sitemap | ✅ Canonical in place. |
| `/whitelabel` | Alias -> `/white-label` | `<Route path="/whitelabel" element={<Navigate to="/white-label" replace />} />` | Redirect | ✅ Synced. |
| `/white-label-seo` | Canonical | `<Route path="/white-label-seo" element={<WhiteLabelSEO />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/white-label-ppc` | Canonical | `<Route path="/white-label-ppc" element={<WhiteLabelPPC />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/white-label-smo` | Canonical | `<Route path="/white-label-smo" element={<WhiteLabelSocialMedia />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/white-label-web` | Canonical | `<Route path="/white-label-web" element={<WhiteLabelWebDevelopment />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/locations` | Canonical | `<Route path="/locations" element={<LocationsHub />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/sitemap` | Alias -> `/locations` | `<Route path="/sitemap" element={<Navigate to="/locations" replace />} />` | Redirect | ✅ Synced. |
| `/locations/:citySlug` | Dynamic Hub | `<Route path="/locations/:citySlug" element={<CityHubPage />} />` | In Sitemap | ✅ Fully in sync. |
| `/:city/:serviceSlug` | Dynamic Programmatic | `<Route path="/:city/:serviceSlug" element={<LocationServicePage />} />` | In Sitemap (80+ combos) | ✅ Fully in sync. |
| `/locations/:city/:serviceSlug`| Alias -> `/:city/:serviceSlug` | `<Route path="/locations/:city/:serviceSlug" element={<LocationServiceRedirect />} />` | Redirect | ✅ Synced. |
| `/offices` | Canonical | `<Route path="/offices" element={<OfficesHub />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/offices/:officeSlug`| Dynamic Detail | `<Route path="/offices/:officeSlug" element={<OfficeDetailPage />} />` | In Sitemap (3 offices) | ✅ Fully in sync. |
| `/team` | Canonical | `<Route path="/team" element={<TeamPage />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/about/team` | Alias -> `/team` | `<Route path="/about/team" element={<Navigate to="/team" replace />} />` | Redirect | ✅ Synced. |
| `/careers` | Alias -> `/team` | `<Route path="/careers" element={<TeamPage />} />` | In Header & Footer | ⚠️ **Action Needed**: Either keep rendering `TeamPage` (which has `#careers` block) or redirect to `/team#careers`. |
| `/resources` | Canonical | `<Route path="/resources" element={<Resources />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/webinars` | Alias -> `/resources` | `<Route path="/webinars" element={<Navigate to="/resources" replace />} />` | Redirect | ✅ Synced. |
| `/case-studies` | Canonical | `<Route path="/case-studies" element={<CaseStudies />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/success-stories` | Alias -> `/case-studies` | `<Route path="/success-stories" element={<Navigate to="/case-studies" replace />} />` | Redirect | ✅ Synced. |
| `/testimonials` | Canonical | `<Route path="/testimonials" element={<Testimonials />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/help-center` | Canonical | `<Route path="/help-center" element={<HelpCenter />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/faq` | Canonical | `<Route path="/faq" element={<FAQ />} />` | In Header, Footer, Sitemap | ✅ Fully in sync. |
| `/verify` | Canonical | `<Route path="/verify" element={<TrustVerification />} />` | In Header, Footer, Sitemap | ✅ Dedicated page. |
| `/scam-alert` | Alias -> `/verify` | `<Route path="/scam-alert" element={<Navigate to="/verify" replace />} />` | Redirect | ✅ Synced. |
| `/report-scam` | Alias -> `/verify` | `<Route path="/report-scam" element={<Navigate to="/verify" replace />} />` | Redirect | ✅ Synced. |
| `/terms` | Canonical | `<Route path="/terms" element={<Terms />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/privacy` | Canonical | `<Route path="/privacy" element={<Privacy />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/refund` | Canonical in registry | `<Route path="/refund" element={<Privacy />} />` | In Footer, Sitemap | ⚠️ **Action Needed**: Renders `Privacy` component which has 0 refund terms. Needs dedicated `RefundPolicy.tsx` component. |
| `/accessibility` | Canonical | `<Route path="/accessibility" element={<Accessibility />} />` | In Footer, Sitemap | ✅ Dedicated page in place. |
| `/onboarding-agreement`| Canonical | `<Route path="/onboarding-agreement" element={<OnboardingAgreement />} />` | In Footer, Sitemap | ✅ Fully in sync. |
| `/payment/success` | Hidden/Non-Indexable | Inline component in `App.tsx` | robots: noindex | ✅ Working. |
| `/payment/failed` | Hidden/Non-Indexable | Inline component in `App.tsx` | robots: noindex | ✅ Working. |

---

## 6. Risk, Mitigation & Rollback Plan

- **Risk 1: Missing a duplicate when refactoring pages to central config.**
  - *Mitigation*: Run `scratch/link_audit.js` and regex grep checks after every file edit in Phase 2.
- **Risk 2: Breaking existing routes or SEO indexing.**
  - *Mitigation*: Maintain all 12 existing alias redirects in `App.tsx` so legacy URLs seamlessly 301-redirect to canonicals. Run production build and verify sitemap generation.
- **Rollback Strategy**:
  - All original data configurations in `src/data/` remain backward compatible with existing interfaces (`OfficeData`, `ServiceData`, `TeamMember`, `CityData`).
  - Staging commits are atomic and cleanly revertible via Git.
