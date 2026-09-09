# Phase 2 — Central Application Data Access Architecture

## Overview

Phase 2 turns the canonical data foundation established in Phase 1 into a robust, pure, and centralized **Application Data Access Layer**.

```
EVERY PAGE + COMPONENT
        ↓
selectors / application helpers
        ↓
canonical domain/config
        ↓
single source of truth
```

Application code (pages, components, utilities) no longer maintains private copies of office lists, service catalogs, team records, WhatsApp links, or telephone numbers. All factual relationships and communication links are derived through centralized, deterministic selectors and communication services.

---

## 1. Canonical Data Owners

Canonical facts live strictly within `src/data/`. These files contain pure data structures with zero React dependencies, zero browser APIs, and zero rendering/formatting logic.

| Domain Entity | Canonical Owner | Key Schema / Purpose |
|---|---|---|
| **Offices** | `src/data/offices.ts` | Authoritative physical office records (`id`, `name`, `slug`, `city`, `address`, `phone`, `email`, `landmark`, `postalCode`, `mapUrl`, `workingHours`, `isPhysical`). |
| **Services** | `src/data/services.ts` | 13 core canonical services (`id`, `title`, `slug`, `path`, `category`, `shortDescription`, `fullDescription`, `features`, `deliverables`, `technologies`). |
| **Packages** | `src/data/packages.ts` | Commercial packages & product offerings (`id`, `name`, `slug`, `category`, `price`, `popular`, `features`, `relatedServiceId`). Separated cleanly from core services. |
| **Team Members** | `src/data/team.ts` | 9 verified employee records (`id`, `employeeCode`, `name`, `role`, `department`, `officeId`, `experience`, `avatarUrl`, `skills`, `bio`). |
| **Locations** | `src/data/locations.ts` | 9 geographic regions and 24 serviced cities. Normalized foreign keys: `city.regionSlug` ➔ `Region.slug`, `city.officeId` ➔ `Office.id`, `city.serviceSlugs` ➔ `Service.slug`. |
| **Industries** | `src/data/industries.ts` | Industry verticals served (`id`, `name`, `slug`, `description`, `iconName`). |

---

## 2. Configuration Owners

Configuration files live in `src/config/` and define site-wide application settings, navigation structures, and business identities.

| Config Domain | Config Owner | Purpose |
|---|---|---|
| **Business Identity** | `src/config/business.ts` | Brand name, legal identity, canonical domain, primary email, support email, primary phone, support phone, GSTIN, MSME, social links, trust signals. |
| **Navigation** | `src/config/navigation.ts` | Main header navigation links, dropdown structures, footer link trees, and action buttons. |
| **Site Facade** | `src/config/site.ts` | Central application facade re-exporting canonical data, configuration, selectors, and communication services without array duplication. |

---

## 3. Selector Responsibilities

Selectors (`src/selectors/*.ts`) are pure, typed, deterministic functions that resolve entities, relationships, and queries.

```
src/selectors/
├── businessSelectors.ts  # getBusinessName(), getPrimaryPhone(), getSocialProfiles(), etc.
├── officeSelectors.ts    # getOfficeById(), getOfficeBySlug(), getPhysicalOffices(), getOfficePhone(), etc.
├── serviceSelectors.ts   # getServiceBySlug(), getServices(), getServicesByCategory(), etc.
├── packageSelectors.ts   # getAllPackages(), getPackageById(), getPackagesForService(), etc.
├── locationSelectors.ts  # getCityBySlug(), getOfficeForCity(), getRegionForCity(), etc.
├── teamSelectors.ts      # getAllTeamMembers(), getTeamMemberById(), getOfficeForTeamMember(), etc.
├── industrySelectors.ts  # getAllIndustries(), getIndustryById(), etc.
└── index.ts              # Unified barrel export
```

### Selector Rules
1. **Pure & Deterministic**: No side effects, no mutation of domain data.
2. **Normalized Relationships**: E.g., `getOfficeForCity(citySlug)` resolves `city.officeId ➔ getOfficeById(officeId) ➔ Office`.
3. **Never Duplicate Facts**: Selectors compose canonical entities dynamically; they never maintain hardcoded caches or fallback literals.

---

## 4. Central Communication Service

All telephone, email, and WhatsApp URL generation is centralized in `src/services/communication.ts`.

### Available Helpers

```typescript
// Telephony
getTelHref(phone: string): string          // e.g., "tel:+919341436937"
formatTelHref(phone: string): string       // Strips non-digits except leading +
formatPhoneDisplay(phone: string): string   // Formats phone cleanly for UI

// Email
getMailtoHref(email: string, subject?: string): string // e.g., "mailto:info@growthservice.in"

// WhatsApp Routing
getWhatsAppUrl(target: string, message?: string): string
getPrimaryWhatsAppUrl(message?: string): string     // India primary line
getNepalWhatsAppUrl(message?: string): string       // Nepal international line (+977 9707382488)
getOfficeWhatsAppUrl(officeId: string, message?: string): string // Office-specific with fallback
```

### Core Invariant
**NO COMPONENT OR PAGE MAY DIRECTLY WRITE:**
- `https://wa.me/...`
- `tel:+91...`
- `mailto:...`
- Hardcoded phone formatting or whitespace removal logic.

---

## 5. UI Consumption Rules

1. **Components Only Render**: Components should call selectors at the top level:
   ```tsx
   const city = getCityBySlug(citySlug);
   const office = getOfficeForCity(citySlug);
   const services = getServicesForCity(citySlug);
   ```
2. **Single Import Surface**: All selectors are exported from `src/selectors` (or `@/selectors`). All communication helpers from `src/services` (or `@/services`).
3. **No Private Arrays**: Components must not define local `const offices = [...]` or `const services = [...]`. Use `getPhysicalOffices()` or `getServices()`.
4. **Theme Lock Preserved**: Colors must strictly adhere to the brand palette locked in `AGENTS.md`.

---

## 6. Forbidden Duplication Examples

### ❌ Violation 1: Local Office Array
```tsx
// FORBIDDEN
const offices = [
  { city: 'Jaipur', phone: '+91 93414 36937', address: 'Tonk Road...' },
  { city: 'Vrindavan', phone: '+91 93414 36937', address: 'Raman Reti...' }
];
```
```tsx
// CORRECT
import { getPhysicalOffices } from '../selectors';
const offices = getPhysicalOffices();
```

### ❌ Violation 2: Hardcoded WhatsApp Link
```tsx
// FORBIDDEN
<a href="https://wa.me/97797073824881?text=Hello">Chat</a>
```
```tsx
// CORRECT
import { getNepalWhatsAppUrl } from '../services';
<a href={getNepalWhatsAppUrl("Hello")}>Chat</a>
```

### ❌ Violation 3: Hardcoded Telephone Link
```tsx
// FORBIDDEN
<a href="tel:+919341436937">Call Us</a>
```
```tsx
// CORRECT
import { getPrimaryPhone } from '../selectors';
import { getTelHref } from '../services';
<a href={getTelHref(getPrimaryPhone())}>Call {getPrimaryPhone()}</a>
```

---

## 7. Adding a New Office

To add a 4th physical office (e.g., Delhi NCR):

1. Open `src/data/offices.ts`.
2. Append the new record to `offices`:
   ```typescript
   {
     id: 'delhi',
     name: 'Delhi NCR Office',
     slug: 'delhi',
     city: 'Delhi',
     state: 'Delhi',
     country: 'India',
     address: 'Connaught Place, Central Business District, New Delhi, Delhi 110001',
     phone: '+91 98111 22233',
     email: 'delhi@growthservice.in',
     isPhysical: true,
     workingHours: 'Mon-Sat: 9:30 AM - 6:30 PM',
     landmark: 'Near Rajiv Chowk Metro',
     postalCode: '110001',
     mapUrl: 'https://maps.google.com/?q=Delhi'
   }
   ```
3. Update `src/data/locations.ts` to associate relevant cities (e.g., `delhi`, `noida`, `gurgaon`) with `officeId: 'delhi'`.
4. Run `npm run data:validate` to ensure all foreign keys and constraints pass.
5. All office grids (`Header`, `Footer`, `Contact`, `About`, `OfficesHub`, `OfficeDetailPage`) immediately display Delhi with zero component modifications!

---

## 8. Adding a New Service

To add a new service (e.g., AI Automation):

1. Open `src/data/services.ts`.
2. Append to `services`:
   ```typescript
   {
     id: 'ai-automation',
     title: 'AI Automation & Agents',
     slug: 'ai-automation',
     path: '/ai-automation',
     category: 'digital-marketing',
     shortDescription: 'Enterprise AI agent development and workflow automation.',
     fullDescription: 'Comprehensive AI solutions to scale your business...',
     features: ['Custom AI Agents', 'Workflow Optimization', 'LLM Integration'],
     deliverables: ['Automated Pipelines', 'API Connectors', '24/7 Monitoring'],
     technologies: ['Python', 'LangChain', 'OpenAI', 'TypeScript']
   }
   ```
3. Associate with serviced cities in `src/data/locations.ts` by adding `'ai-automation'` to `serviceSlugs`.
4. Run `npm run data:validate`.
5. All city service grids, dropdown menus, and service selectors reflect the new service automatically.

---

## 9. Adding a New Employee

To add a new team member:

1. Open `src/data/team.ts`.
2. Append to `teamMembers`:
   ```typescript
   {
     id: 10,
     employeeCode: 'GS-DEL-01',
     name: 'Aarav Sharma',
     role: 'Lead AI Engineer',
     department: 'engineering',
     officeId: 'delhi',
     experience: '6+ Years',
     avatarUrl: 'https://images.unsplash.com/...',
     skills: ['Python', 'AI Agents', 'System Architecture'],
     bio: 'Aarav leads AI agent development and automated pipelines.'
   }
   ```
3. Run `npm run data:validate`.
4. The employee appears automatically on `/team`, under Delhi in `getTeamMembersByOffice('delhi')`, and in team counts.

---

## 10. Adding a New City

To add a new city (e.g., Lucknow):

1. Open `src/data/locations.ts`.
2. Add Lucknow under the `north` region in `cities`:
   ```typescript
   {
     id: 'lucknow',
     name: 'Lucknow',
     slug: 'lucknow',
     regionSlug: 'north',
     officeId: 'jaipur', // mapped to serving physical office
     serviceSlugs: ['seo', 'web-development', 'meta-ads'],
     status: 'active',
     isHub: false,
     population: '3.8M+',
     metaDescription: 'Top digital marketing and web services in Lucknow.'
   }
   ```
3. Run `npm run data:validate`.
4. Lucknow is automatically accessible via `/locations/lucknow`, inherits its contact information from the Jaipur office, and connects to all 3 specified services.

---

## 11. "One Change" Propagation Walkthrough

### Scenario
The Jaipur office phone number changes from `+91 93414 36937` to `+91 98765 43210`.

### Single Modification
Edit **ONE FILE ONLY**: `src/data/offices.ts`:
```typescript
{
  id: 'jaipur',
  // ...
  phone: '+91 98765 43210',
}
```

### Site-Wide Propagation Result
1. **Header Top Bar**: `getOfficePhone('jaipur')` returns `+91 98765 43210`.
2. **Footer Office Grid**: Jaipur card displays `+91 98765 43210` and `getTelHref` generates `tel:+919876543210`.
3. **Contact Page**: Direct phone line for Jaipur updates to `+91 98765 43210`.
4. **Office Detail Page (`/offices/jaipur`)**: Hero, contact card, and call button update to `+91 98765 43210`.
5. **City Hubs & Programmatic Pages (`/locations/jaipur`, `/jaipur/seo`, etc.)**: `getOfficeForCity('jaipur')` derives the new phone number seamlessly.
6. **Book Call / About / Offer**: Jaipur contact reference updates automatically.

**Zero component edits, zero city file edits, zero link breakage.**

Run automated proof:
```bash
npm run test:propagation
```
Output:
```
✅ ALL "ONE CHANGE" PROPAGATION TESTS PASSED!
```
