# Growth Service — Modular Admin + Billing Implementation Rules

## Operating rulebook for ChatGPT / Coding Agent

Primary priority:

**Item Catalog → Invoice Generation → Payment Link Generation → Payment Tracking**

Current payment provider:

**Razorpay**

Future requirement:

**Razorpay must be replaceable without rewriting the billing domain.**

Execution requirement:

**NEVER implement this whole plan in one go. Execute strictly phase-by-phase with verification gates.**

---

# 0. NON-NEGOTIABLE RULES

## 0.1 Phase-by-phase execution

The agent MUST NOT implement all phases in one response, command sequence, or large commit.

For every phase:

```text
Inspect
  ↓
Plan current phase
  ↓
Implement current phase only
  ↓
Run validation/tests
  ↓
Fix failures
  ↓
Audit current phase
  ↓
Report
  ↓
STOP
```

At the end of each phase, report:

- what changed
- files changed
- database changes
- validation/tests
- failures fixed
- remaining risks
- exact next phase

Then STOP.

Do not automatically continue to the next phase.

---

## 0.2 Repository is the source of truth

Before every phase:

1. Read current repository rules.
2. Inspect the current implementation.
3. Detect existing implementations before creating new ones.
4. Reuse existing utilities and conventions where appropriate.
5. Identify conflicts with this specification.
6. Adapt the plan to the actual codebase.
7. Never assume an old folder/file/API still exists.

Do not create duplicate systems.

---

## 0.3 No unnecessary rewrite

Do not rewrite the public website merely to clean up Admin architecture.

Preserve existing:

- public URLs
- SEO behavior
- content
- UI/theme
- lead generation
- analytics
- blog functionality
- existing working features

Prefer incremental migration over a large rewrite.

---

## 0.4 Performance protection

Adding Admin/business features MUST NOT unnecessarily slow public pages.

Rules:

- Keep Admin code route-scoped.
- Do not import billing components into public routes.
- Do not fetch billing data on public pages.
- Keep payment-provider API logic server-side.
- Do not expose payment-provider secrets to the client.
- Avoid unnecessary global client providers.
- Avoid turning Server Components into Client Components without reason.
- Generate PDFs server-side.
- Keep heavy libraries out of public bundles.
- Preserve/improve existing caching and revalidation behavior.
- Check bundle and route performance after meaningful changes.

---

## 0.5 Theme/UI lock

Do not redesign the Growth Service visual identity during this implementation.

Preserve the existing project theme and established Admin UI.

Do not introduce unrelated:

- color systems
- animation systems
- design systems
- Three.js
- GSAP

unless explicitly requested.

---

# 1. TARGET ADMIN ARCHITECTURE

The Admin should evolve toward:

```text
Dashboard
Clients

Billing
  ├── Items
  ├── Invoices
  ├── Payment Links
  └── Payments

Content
  └── Blog

Future
  ├── SEO
  ├── Backlinks
  ├── Reports
  ├── Employees
  ├── Attendance
  ├── Leave
  ├── Documents
  └── Notifications
```

Only Billing is the current implementation priority.

Do not implement future business modules prematurely.

---

# 2. CORE DOMAIN PRINCIPLE

Never tightly couple billing to Razorpay.

Correct architecture:

```text
Admin UI
   ↓
Billing Domain
   ↓
Billing / Payment Service
   ↓
Payment Provider Interface
   ↓
Razorpay Adapter
   ↓
Razorpay API
```

Future:

```text
Payment Provider Interface
   ├── Razorpay
   ├── Cashfree
   ├── Stripe
   └── Other provider
```

Invoice logic must work independently from the selected payment provider.

---

# 3. CORE BUSINESS OBJECTS

Canonical relationship:

```text
Client
  ↓
Billing Profile
  ↓
Invoice
  ↓
Invoice Items
  ↓
Payment Links
  ↓
Payments
  ↓
Refunds
```

Supporting systems:

```text
Invoice Sequences
Webhook Events
Payment Transactions
Audit Logs
Attachments
Notifications
```

Important distinction:

```text
Invoice        = financial/business document
Payment Link   = payment collection mechanism
Payment        = actual payment event
Razorpay       = external provider
```

Never merge these concepts into one table.

---

# 4. DATABASE FIELDS

## 4.1 clients

Purpose: client master record.

```text
id                  UUID PK
client_code         TEXT UNIQUE
company_name        TEXT
contact_name        TEXT
email               TEXT
phone               TEXT
alternate_phone     TEXT NULL
website             TEXT NULL
status              active | inactive | archived
notes               TEXT NULL
created_by          UUID
updated_by          UUID NULL
created_at          TIMESTAMPTZ
updated_at          TIMESTAMPTZ
```

Rules:

- `client_code` must be unique.
- Do not use email as the primary identifier.
- Preserve historical clients.
- Prefer archive/inactive over destructive deletion.

---

## 4.2 client_contacts

```text
id                  UUID PK
client_id           UUID FK
name                TEXT
email               TEXT NULL
phone               TEXT NULL
designation         TEXT NULL
is_primary          BOOLEAN
is_billing_contact  BOOLEAN
is_active           BOOLEAN
created_at          TIMESTAMPTZ
updated_at          TIMESTAMPTZ
```

One client may have multiple contacts.

---

## 4.3 billing_profiles

```text
id                         UUID PK
client_id                  UUID FK

legal_name                 TEXT
display_name               TEXT NULL

billing_email              TEXT NULL
billing_phone              TEXT NULL

address_line_1             TEXT
address_line_2             TEXT NULL
city                       TEXT
district                   TEXT NULL
state                      TEXT
state_code                 TEXT
postal_code                TEXT
country                    TEXT

gstin                      TEXT NULL
pan                        TEXT NULL
tax_registration_type      TEXT NULL

place_of_supply_state      TEXT NULL
place_of_supply_state_code TEXT NULL

currency                   TEXT DEFAULT 'INR'
payment_terms_days         INTEGER DEFAULT 0

created_at                 TIMESTAMPTZ
updated_at                 TIMESTAMPTZ
```

Rules:

- Keep state and state code separately.
- Do not assume every client has a GSTIN.
- Keep currency explicit.
- Keep payment terms configurable.

---

## 4.4 billing_items

Reusable service/product catalog.

```text
id                        UUID PK
sku                       TEXT UNIQUE
name                      TEXT
short_name                TEXT NULL
description               TEXT NULL

item_type                 TEXT
service_category          TEXT NULL

hsn_sac_code              TEXT NULL
unit                      TEXT

default_unit_price        NUMERIC(precision, scale)
default_tax_rate          NUMERIC
default_discount_type     TEXT NULL
default_discount_value    NUMERIC NULL

currency                  TEXT DEFAULT 'INR'

is_taxable                BOOLEAN DEFAULT true
is_active                 BOOLEAN DEFAULT true

metadata                  JSONB NULL

created_by                UUID
updated_by                UUID NULL
created_at                TIMESTAMPTZ
updated_at                TIMESTAMPTZ
```

Rules:

- Items are reusable catalog records.
- Editing an item must never mutate historical invoices.
- SKU is a stable internal identifier.
- Current catalog price is not historical invoice price.

---

## 4.5 invoice_sequences

Never use `count + 1`.

```text
id              UUID PK
financial_year  TEXT
series          TEXT
last_number     BIGINT
updated_at      TIMESTAMPTZ
```

Example:

```text
GS/26-27/000001
GS/26-27/000002
GS/26-27/000003
```

Rules:

- Transactional/concurrency-safe sequence allocation.
- Financial year explicit.
- Do not casually reuse issued invoice numbers.
- Series/prefix must be configurable.

---

## 4.6 invoices

```text
id                         UUID PK

client_id                  UUID FK
billing_profile_id         UUID FK

invoice_number             TEXT UNIQUE
invoice_type               TEXT

document_status            draft | issued | sent | cancelled | void
payment_status             unpaid | partially_paid | paid | overdue | refunded | partially_refunded

issue_date                 DATE NULL
supply_date                DATE NULL
due_date                   DATE NULL

currency                   TEXT

subtotal                   NUMERIC
discount_total             NUMERIC
taxable_total              NUMERIC

cgst_total                 NUMERIC
sgst_total                 NUMERIC
igst_total                 NUMERIC
cess_total                 NUMERIC

tax_total                  NUMERIC
round_off                  NUMERIC
grand_total                NUMERIC

amount_paid                NUMERIC
amount_due                 NUMERIC

place_of_supply            TEXT NULL
place_of_supply_state_code TEXT NULL
reverse_charge             BOOLEAN
is_interstate              BOOLEAN

notes                      TEXT NULL
terms_and_conditions       TEXT NULL

seller_snapshot            JSONB
buyer_snapshot             JSONB

created_by                 UUID
updated_by                 UUID NULL

created_at                 TIMESTAMPTZ
updated_at                 TIMESTAMPTZ
issued_at                  TIMESTAMPTZ NULL
cancelled_at               TIMESTAMPTZ NULL
```

Critical rules:

### Separate document and payment status

Example:

```text
document_status = issued
payment_status  = partially_paid
```

### Preserve invoice history

Issued invoices must be reproducible from stored historical data.

### Server is authoritative

Do not trust browser-submitted totals or status transitions.

---

# 5. INVOICE ITEMS

## 5.1 invoice_items

```text
id                    UUID PK
invoice_id            UUID FK

item_id               UUID NULL FK

description_snapshot  TEXT
sku_snapshot          TEXT NULL
hsn_sac_snapshot      TEXT NULL
unit_snapshot         TEXT

quantity              NUMERIC
unit_price            NUMERIC

discount_type         TEXT NULL
discount_value        NUMERIC NULL
discount_amount       NUMERIC

tax_rate              NUMERIC
taxable_amount        NUMERIC

cgst_rate             NUMERIC NULL
cgst_amount           NUMERIC NULL
sgst_rate             NUMERIC NULL
sgst_amount           NUMERIC NULL
igst_rate             NUMERIC NULL
igst_amount           NUMERIC NULL
cess_rate             NUMERIC NULL
cess_amount           NUMERIC NULL

line_subtotal         NUMERIC
line_total             NUMERIC

sort_order             INTEGER
metadata               JSONB NULL

created_at             TIMESTAMPTZ
```

Critical rule:

```text
Current Item Catalog ≠ Historical Invoice Item
```

Invoice item snapshots must survive catalog edits.

---

# 6. TAX / CALCULATION MODEL

Support conceptually:

```text
CGST
SGST
IGST
CESS
```

Per line:

```text
taxable_amount
cgst_rate
cgst_amount
sgst_rate
sgst_amount
igst_rate
igst_amount
cess_rate
cess_amount
```

Invoice totals:

```text
cgst_total
sgst_total
igst_total
cess_total
tax_total
```

Do not assume every invoice is the same tax scenario.

Do not hard-code one tax rate globally.

---

# 7. PAYMENT LINKS

## 7.1 payment_links

```text
id                        UUID PK

invoice_id                UUID FK
client_id                 UUID FK

provider                  TEXT
provider_link_id          TEXT
provider_reference_id     TEXT

amount                    NUMERIC
currency                  TEXT

status                    TEXT

short_url                 TEXT

description               TEXT NULL

expires_at                TIMESTAMPTZ NULL

accept_partial            BOOLEAN
minimum_partial_amount    NUMERIC NULL

customer_name             TEXT NULL
customer_email            TEXT NULL
customer_phone            TEXT NULL

reminder_enabled          BOOLEAN

callback_url              TEXT NULL

metadata                  JSONB NULL

created_by                UUID
created_at                TIMESTAMPTZ
updated_at                TIMESTAMPTZ

cancelled_at              TIMESTAMPTZ NULL
expired_at                TIMESTAMPTZ NULL
```

Current:

```text
provider = razorpay
```

Future:

```text
provider = cashfree
provider = stripe
```

Rules:

- Multiple payment links per invoice must be supported.
- Provider IDs are not invoice IDs.
- Never silently overwrite historical links.
- Validate payment amount against invoice state.
- Provider failures must not corrupt invoice state.

---

# 8. PAYMENTS

## 8.1 payments

```text
id                       UUID PK

invoice_id               UUID FK
payment_link_id          UUID NULL FK

provider                 TEXT
provider_payment_id      TEXT NULL
provider_order_id        TEXT NULL

amount                   NUMERIC
currency                 TEXT

status                   pending | authorized | captured | failed | refunded | partially_refunded

payment_method           TEXT NULL
payment_method_details   JSONB NULL

captured_at              TIMESTAMPTZ NULL
failed_at                TIMESTAMPTZ NULL
failure_reason           TEXT NULL

payer_name               TEXT NULL
payer_email              TEXT NULL
payer_phone              TEXT NULL

provider_fee             NUMERIC NULL
provider_tax             NUMERIC NULL
net_amount               NUMERIC NULL

metadata                 JSONB NULL

created_at               TIMESTAMPTZ
updated_at               TIMESTAMPTZ
```

Rules:

- A payment link is not a payment.
- Support multiple payments per invoice.
- Support partial payments.
- Payment state must be server-authoritative.
- Browser redirect/callback is never the only source of truth.

---

# 9. REFUNDS

## 9.1 refunds

```text
id                   UUID PK
payment_id           UUID FK
invoice_id           UUID FK

provider             TEXT
provider_refund_id   TEXT NULL

amount               NUMERIC
currency             TEXT

status               pending | processed | failed
reason               TEXT NULL

created_at           TIMESTAMPTZ
processed_at         TIMESTAMPTZ NULL

metadata             JSONB NULL
```

Refund UI may be later, but domain boundaries should permit it.

---

# 10. WEBHOOK EVENTS

## 10.1 webhook_events

```text
id                    UUID PK

provider              TEXT
provider_event_id     TEXT
event_type            TEXT

payload               JSONB

status                received | processing | processed | failed
processing_attempts   INTEGER

received_at           TIMESTAMPTZ
processed_at          TIMESTAMPTZ NULL

error_message         TEXT NULL
created_at            TIMESTAMPTZ
```

Required:

```text
UNIQUE(provider, provider_event_id)
```

Rules:

- Verify provider signature before trusting payload.
- Handle retries.
- Handle duplicate events.
- Handle out-of-order events.
- Store enough information for troubleshooting/reconciliation.
- Unknown events should fail safely without breaking the webhook endpoint.

---

# 11. PAYMENT TRANSACTIONS

## 11.1 payment_transactions

```text
id                UUID PK
invoice_id        UUID FK
payment_id        UUID FK NULL

transaction_type  TEXT
amount            NUMERIC

balance_before    NUMERIC
balance_after     NUMERIC

source            TEXT
metadata          JSONB NULL

created_at        TIMESTAMPTZ
```

Purpose:

- reconciliation
- auditability
- partial payments
- refunds
- future accounting/reporting

---

# 12. AUDIT LOGS

## 12.1 audit_logs

```text
id             UUID PK

actor_user_id  UUID
action         TEXT

entity_type    TEXT
entity_id      UUID

old_values     JSONB NULL
new_values     JSONB NULL

ip_address     TEXT NULL
user_agent     TEXT NULL

created_at     TIMESTAMPTZ
```

Track sensitive operations such as:

```text
INVOICE_CREATED
INVOICE_UPDATED
INVOICE_ISSUED
INVOICE_CANCELLED

PAYMENT_LINK_CREATED
PAYMENT_LINK_CANCELLED

PAYMENT_RECORDED
PAYMENT_STATUS_CHANGED

REFUND_CREATED

CLIENT_UPDATED
BILLING_PROFILE_UPDATED

ITEM_CREATED
ITEM_UPDATED
ITEM_ARCHIVED
```

---

# 13. ATTACHMENTS

## 13.1 attachments

```text
id             UUID PK

entity_type    TEXT
entity_id      UUID

file_name      TEXT
storage_path   TEXT
mime_type      TEXT
file_size      BIGINT

visibility     TEXT

uploaded_by    UUID
created_at     TIMESTAMPTZ
```

Future uses:

```text
Invoice PDF
Payment receipt
Contract
SEO report
Backlink report
Client document
```

---

# 14. NOTIFICATIONS

## 14.1 notifications

```text
id                    UUID PK

entity_type           TEXT
entity_id             UUID

channel               email | whatsapp | sms
recipient             TEXT

template              TEXT
status                pending | sent | failed

provider              TEXT NULL
provider_message_id   TEXT NULL

sent_at               TIMESTAMPTZ NULL
failed_at             TIMESTAMPTZ NULL
error_message         TEXT NULL

created_at            TIMESTAMPTZ
```

Do not build every notification channel during the core billing phases.

---

# 15. PROVIDER ABSTRACTION

Conceptual contract:

```ts
interface PaymentProvider {
  createPaymentLink(
    input: CreatePaymentLinkInput
  ): Promise<PaymentLinkResult>

  fetchPaymentLink(
    providerLinkId: string
  ): Promise<PaymentLinkResult>

  cancelPaymentLink(
    providerLinkId: string
  ): Promise<void>

  verifyWebhook(
    rawBody: string,
    signature: string
  ): Promise<VerifiedWebhook>

  parseWebhookEvent(
    input: unknown
  ): NormalizedPaymentEvent
}
```

Exact types may follow existing project conventions.

Requirements:

- Billing domain must not import Razorpay directly.
- Provider-specific response shapes stay in the adapter.
- Provider-specific statuses are mapped to internal statuses.
- Provider-specific webhook names are normalized.
- Replacing Razorpay must not require rewriting invoice calculation/state/domain code.

---

# 16. PROVIDER CONFIGURATION

Use a provider factory conceptually:

```text
getPaymentProvider()
```

Current:

```text
PAYMENT_PROVIDER=razorpay
```

Future:

```text
PAYMENT_PROVIDER=cashfree
```

Rules:

- Centralize configuration.
- Validate environment variables server-side.
- Never use `NEXT_PUBLIC_*` for payment secrets.
- Never log secrets.
- Do not access Razorpay environment variables randomly across UI files.

---

# 17. BILLING REQUEST FLOW

New billing code should follow:

```text
Route/Page
  ↓
Server Action / Route Handler
  ↓
Authorization
  ↓
Validation
  ↓
Billing Service
  ↓
Database
  ↓
Payment Provider Adapter (only when needed)
  ↓
Audit
  ↓
Revalidation
```

Avoid new direct page-to-database code:

```text
Page
  ↓
admin DB client
  ↓
DB
```

UI, business logic, data access, and provider integration should remain separable.

---

# 18. INVOICE LIFECYCLE

Document lifecycle:

```text
DRAFT
  ↓
ISSUED
  ↓
SENT
```

Payment lifecycle:

```text
UNPAID
  ↓
PARTIALLY_PAID
  ↓
PAID
```

Side states:

```text
OVERDUE
CANCELLED
VOID
REFUNDED
PARTIALLY_REFUNDED
```

Rules:

- Document status and payment status are independent.
- Transitions are server-validated.
- Browser cannot arbitrarily set status values.
- Historical issued invoices should not be silently edited.

---

# 19. INVOICE CALCULATION

The browser may send:

```text
item ID
quantity
unit price
discount
tax choice
```

The server recalculates:

```text
line_subtotal
discount_amount
taxable_amount
tax_amount
line_total
invoice totals
amount_due
```

Never trust browser-provided:

```text
subtotal
tax total
grand total
amount paid
amount due
```

For financial correctness, server-side calculations are authoritative.

---

# 20. PDF / DOCUMENT ARCHITECTURE

```text
Invoice record
   ↓
Server-side document renderer
   ↓
PDF
   ↓
Download / Storage / Share
```

Rules:

- PDF must be reproducible from stored invoice data.
- Issued invoice PDF must not change because current client/item data changed.
- Prefer server-side generation.
- Store a stable document reference when required.

---

# 21. RAZORPAY RULES

Razorpay is the first provider only.

The Razorpay adapter may know:

```text
Razorpay API client
Payment Link API
Payment Link cancellation
Payment Link retrieval
Webhook signature
Webhook event names
Provider errors
Provider response shapes
```

The following must NOT know Razorpay internals:

```text
Invoice page
Invoice form
Invoice calculation engine
Generic billing service
Generic payment service
```

---

# 22. WEBHOOK FLOW

Required concept:

```text
Razorpay
   ↓
POST /api/webhooks/razorpay
   ↓
Read raw body
   ↓
Verify signature
   ↓
Extract event ID
   ↓
Deduplicate
   ↓
Persist webhook event
   ↓
Normalize provider event
   ↓
Apply billing rules
   ↓
Update payment
   ↓
Update invoice payment state
   ↓
Record transaction
   ↓
Audit
   ↓
Notification when appropriate
   ↓
Return success
```

Never rely only on browser behavior.

---

# 23. EDGE CASES

The agent MUST consider at least these.

## Payment-link creation

```text
Admin double click
Provider timeout
Provider accepted request but response lost
Duplicate create request
Invoice already paid
Invoice cancelled
Amount greater than outstanding balance
Currency mismatch
Invalid customer details
Expired intended window
```

## Webhooks

```text
Duplicate webhook
Webhook retry
Out-of-order events
Invalid signature
Unknown event
Unknown payment ID
Unknown payment link ID
Payment for cancelled invoice
Partial payment
Multiple payments
Refund after payment
Browser closes before callback
Callback arrives before webhook
Webhook arrives without callback
```

## Invoice

```text
Zero quantity
Negative quantity
Negative price
Invalid decimal precision
Discount > line amount
Tax inconsistency
Missing mandatory billing information
Duplicate invoice number
Concurrent invoice creation
Editing issued invoice
Cancelling issued invoice
Regenerating historical PDF
```

---

# 24. PREFERRED FOLDER STRUCTURE

Target direction:

```text
src/
├── app/
│   ├── admin/
│   │   ├── clients/
│   │   ├── billing/
│   │   │   ├── items/
│   │   │   ├── invoices/
│   │   │   ├── payment-links/
│   │   │   └── payments/
│   │   └── blog/
│   │
│   └── api/
│       └── webhooks/
│           └── razorpay/
│
├── modules/
│   └── billing/
│       ├── actions/
│       ├── domain/
│       ├── queries/
│       ├── schemas/
│       ├── services/
│       ├── types/
│       └── index.ts
│
├── infrastructure/
│   └── payments/
│       ├── payment-provider.ts
│       ├── provider-types.ts
│       └── providers/
│           └── razorpay/
│               ├── client.ts
│               ├── provider.ts
│               ├── mapper.ts
│               └── webhook.ts
│
├── lib/
│   ├── auth/
│   ├── authorization/
│   ├── audit/
│   └── db/
│
└── components/
    └── admin/
        ├── shared/
        ├── billing/
        └── blog/
```

Adapt to existing repo conventions.

Do not create duplicate folders if equivalent architecture already exists.

---

# 25. ADMIN ROUTE MAP

Target:

```text
/admin
/admin/clients

/admin/billing
/admin/billing/items

/admin/billing/invoices
/admin/billing/invoices/new
/admin/billing/invoices/[id]

/admin/billing/payment-links
/admin/billing/payments

/admin/blog
```

Do not create every route in Phase 1.

---

# 26. STRICT PHASE PLAN

## PHASE 0 — RECONNAISSANCE / ARCHITECTURE LOCK

Goal:

Understand the actual repository before modifying it.

Inspect:

- repository rules
- Next.js app structure
- Admin routes/components
- middleware/auth
- Supabase architecture
- validation
- database migrations
- storage
- email infrastructure
- audit/logging
- current payment integration
- environment variable conventions
- direct Admin DB access
- existing shared UI

Output:

```text
Current architecture
Existing reusable modules
Problems affecting billing
Required modular boundaries
Phase 1 exact scope
```

### DO NOT IMPLEMENT BILLING IN PHASE 0.

STOP.

---

## PHASE 1 — MODULAR ADMIN FOUNDATION

Goal:

Establish the architectural boundary for future Admin modules.

Potential work:

- shared Admin primitives
- service/query/action conventions
- authorization boundary
- audit abstraction if missing
- provider abstraction location
- common error/result conventions if useful
- preserve existing Blog

Do not rewrite the whole Admin.

Validation:

```text
npm run typecheck
npm run lint
existing architecture audits
existing route tests
existing data/SEO tests
```

STOP.

---

## PHASE 2 — BILLING DATABASE FOUNDATION

Create only the required v1 billing foundation:

```text
clients
client_contacts
billing_profiles
billing_items
invoice_sequences
invoices
invoice_items
payment_links
payments
webhook_events
payment_transactions
audit_logs
```

Include:

- PK/FK
- indexes
- unique constraints
- appropriate checks
- timestamps
- RLS
- safe migrations

Do not build the full UI.

STOP.

---

## PHASE 3 — CLIENTS + ITEM CATALOG

Implement:

```text
/admin/clients
/admin/billing/items
```

Clients:

- create
- edit
- archive
- billing profile
- contacts

Items:

- create
- edit
- archive
- search
- active/inactive

Use:

```text
authorization
server validation
RLS
audit
```

STOP.

---

## PHASE 4 — INVOICE ENGINE

Implement:

- draft invoice
- line items
- quantity
- pricing
- discount
- tax
- totals
- invoice numbering
- buyer/seller snapshots
- issue/cancel rules
- payment state calculations
- due date/payment terms

Routes:

```text
/admin/billing/invoices
/admin/billing/invoices/new
/admin/billing/invoices/[id]
```

Do not deeply integrate Razorpay yet.

STOP after calculation/state tests.

---

## PHASE 5 — INVOICE PDF / DOCUMENT LAYER

Implement:

- document renderer
- PDF generation
- PDF download
- optional storage
- document metadata

Verify:

```text
historical data stability
stable invoice number
correct totals
correct tax details
no dependency on current catalog values
```

STOP.

---

## PHASE 6 — PAYMENT PROVIDER ABSTRACTION + RAZORPAY

Implement:

```text
PaymentProvider interface
RazorpayProvider
Razorpay configuration
response mapper
error mapper
```

Only create payment links through the provider abstraction.

STOP.

---

## PHASE 7 — PAYMENT LINK MANAGEMENT

Implement:

- create link
- copy link
- open link
- view status
- cancel link
- expiry display
- partial payment support where applicable
- provider references

Rules:

- outstanding balance validation
- duplicate-request protection
- server amount validation
- audit logging

STOP.

---

## PHASE 8 — WEBHOOKS + RECONCILIATION

Implement:

```text
/api/webhooks/razorpay
```

Include:

- raw-body handling
- signature validation
- webhook persistence
- deduplication
- normalization
- payment updates
- invoice payment-state updates
- reconciliation transaction
- audit

Test:

```text
duplicate
retry
out-of-order
invalid signature
partial payment
full payment
provider failure
```

STOP.

---

## PHASE 9 — BILLING DASHBOARD

Implement operational summary:

```text
Total invoices
Draft
Unpaid
Partially paid
Paid
Overdue
Outstanding amount
Recent payments
Recent payment links
```

Use efficient server-side queries.

Do not fetch every record into the browser just to calculate totals.

STOP.

---

## PHASE 10 — NOTIFICATIONS / SHARING

Later:

```text
Invoice email
Payment-link email
Payment success notification
Payment reminder
```

Keep communication providers abstracted.

STOP.

---

## PHASE 11 — PRODUCTION HARDENING

Audit:

```text
Security
Authorization
RLS
Webhook verification
Idempotency
Financial calculations
Invoice numbering
Performance
Bundle size
Caching
Public-route regression
SEO regression
```

Run all repository validation commands.

STOP.

---

# 27. TESTING RULES

Each phase must test the changes introduced by that phase.

Minimum:

```text
Typecheck
Lint
Unit tests for domain logic
Integration tests for DB behavior
Payment integration tests where applicable
Route tests
Migration validation
RLS/security checks
```

Critical deterministic tests:

```text
subtotal
discount
tax
rounding
grand total
amount paid
amount due
invoice number allocation
payment state transitions
webhook idempotency
```

---

# 28. AUTHORIZATION / RLS

Authentication is not authorization.

Every Admin mutation should conceptually answer:

```text
Who is the user?
What role/permission does the user have?
What resource are they accessing?
What operation are they performing?
```

Do not rely only on hidden UI buttons.

Server-side authorization is mandatory.

RLS should provide a second protection boundary.

---

# 29. SECRETS

Payment-provider secrets must:

- be server-only
- never use `NEXT_PUBLIC_*`
- never be hard-coded
- never be committed
- never appear in browser bundles
- never be logged

Validate required environment variables at appropriate startup/server boundaries.

---

# 30. FINANCIAL DATA PROTECTION

Financial records are not ordinary CRUD.

Rules:

- Do not silently mutate issued historical invoices.
- Preserve invoice snapshots.
- Preserve payment history.
- Preserve provider IDs.
- Preserve webhook history.
- Preserve audit history.
- Prefer cancellation/void/archive over destructive deletion.
- Store currency explicitly.
- Make the server authoritative for amounts and status.

---

# 31. V1 SCOPE

Must include:

```text
Client
Billing Profile
Item Catalog
Invoice
Invoice Items
Invoice PDF
Payment Link
Razorpay
Payment Tracking
Webhook Processing
Audit
Basic Billing Dashboard
```

Designed for later, but not required in v1:

```text
Refund UI
Credit Notes
Debit Notes
Recurring invoices
Subscriptions
Multiple payment providers
WhatsApp notifications
Advanced accounting
Bank reconciliation
GST filing automation
E-invoicing integration
Payroll
Attendance
```

---

# 32. AGENT MUST NOT

Never:

1. Implement all phases at once.
2. Rewrite the public website unnecessarily.
3. Couple invoice logic to Razorpay.
4. Put payment secrets in client code.
5. Trust browser totals.
6. Generate invoice numbers with `count + 1`.
7. Treat browser callbacks as payment truth.
8. Ignore duplicate/out-of-order webhooks.
9. Destructively delete historical financial records.
10. Load billing/admin code onto public routes unnecessarily.
11. Duplicate utilities already available in the repo.
12. Add dependencies without checking existing packages.
13. Change the visual theme during architecture/backend work.
14. Skip tests because a change appears simple.
15. Start the next phase without a phase gate.

---

# 33. PHASE COMPLETION RESPONSE FORMAT

Every phase completion response MUST use:

```text
PHASE: <number> — <name>

STATUS:
PASS / BLOCKED / PARTIAL

IMPLEMENTED:
- ...

FILES CHANGED:
- ...

DATABASE:
- ...

VALIDATION:
- command/result
- command/result

FIXES:
- ...

RISKS:
- ...

NEXT PHASE:
<exact phase number and name>

STOPPED:
Yes
```

No next phase implementation after this response.

---

# 34. DECISION PRIORITY

When choices conflict, use:

```text
1. Existing repository correctness
2. Data integrity
3. Security / authorization / RLS
4. Financial correctness
5. Backward compatibility
6. Performance
7. Modularity
8. Maintainability
9. UI convenience
10. Feature speed
```

A feature is incomplete if the happy path works while security, integrity, or regression risks remain.

---

# 35. FIRST ACTION WHEN THIS FILE IS PROVIDED

When ChatGPT/Coding Agent receives this file:

DO NOT start coding immediately.

First:

```text
Read repository rules
Read this specification
Inspect actual architecture
Compare specification with current implementation
Prepare Phase 0 findings
```

Then complete ONLY Phase 0.

After Phase 0:

**STOP and wait for explicit instruction to continue.**

---

# 36. FINAL ARCHITECTURAL TARGET

Conceptually:

```text
                    GROWTH SERVICE
                          │
             ┌────────────┴────────────┐
             │                         │
          PUBLIC                     ADMIN
             │                         │
        SEO / Leads               Operations
                                       │
                   ┌───────────────────┼───────────────────┐
                   │                   │                   │
                Clients             Billing             Content
                                       │                   │
                         ┌─────────────┼─────────────┐    Blog
                         │             │             │
                       Items        Invoices       Payments
                                                     │
                                               Payment Links
                                                     │
                                            Payment Provider
                                                     │
                                                  Razorpay
                                                     │
                                             Future Providers
```

The architecture must remain capable of growing into:

```text
Clients
Projects
Billing
Payments
SEO Reports
Backlinks
Employees
Attendance
Documents
Notifications
Analytics
```

without turning Admin into one giant tightly coupled application.
