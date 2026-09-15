import assert from "node:assert";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { InvoicePdfDocument, type InvoicePdfData, type BuyerSnapshot } from "../invoicePdfTemplate";
import type { Invoice, InvoiceItem } from "../../types/database";
import type { SellerSnapshot } from "../sellerConfig";

console.log("--- RUNNING INVOICE PDF GENERATION TESTS ---");

const mockSeller: SellerSnapshot = {
  legalName: "Growth Service Private Limited",
  tradeName: "Growth Service",
  website: "https://www.growthservice.in",
  gstin: "08AABCG1234F1Z5",
  pan: "AABCG1234F",
  email: "billing@growthservice.in",
  phone: "+91 9999999999",
  addressLine1: "Mansarovar",
  city: "Jaipur",
  state: "Rajasthan",
  stateCode: "08",
  postalCode: "302020",
  country: "India",
  bankDetails: {
    accountName: "Growth Service Private Limited",
    accountNumber: "123456789012",
    ifscCode: "HDFC0001234",
    bankName: "HDFC Bank",
    branch: "Mansarovar, Jaipur",
  },
};

const mockBuyer: BuyerSnapshot = {
  clientCode: "CLI-001",
  legalName: "Client Enterprises LLP",
  companyName: "Client Enterprises",
  contactName: "John Doe",
  email: "billing@client.com",
  phone: "+91 9876543210",
  gstin: "08XYZAB1234C1Z1",
  addressLine1: "MI Road",
  city: "Jaipur",
  state: "Rajasthan",
  stateCode: "08",
  postalCode: "302001",
  country: "India",
};

const mockInvoice = {
  id: "inv-12345678-0000-0000-0000-000000000001",
  invoice_number: "GS-INV-202627-0001",
  client_id: "cli-12345678-0000-0000-0000-000000000001",
  billing_profile_id: null,
  document_status: "issued",
  payment_status: "unpaid",
  issue_date: "2026-09-15",
  due_date: "2026-09-22",
  currency: "INR",
  subtotal: 50000,
  discount_total: 5000,
  taxable_amount: 45000,
  tax_total: 8100,
  cgst_total: 4050,
  sgst_total: 4050,
  igst_total: 0,
  round_off: 0,
  grand_total: 53100,
  amount_paid: 0,
  amount_due: 53100,
  is_interstate: false,
  seller_snapshot: mockSeller as unknown as Record<string, unknown>,
  buyer_snapshot: mockBuyer as unknown as Record<string, unknown>,
  terms_conditions: "Payment due within 7 days.",
  notes: "Thank you for partnering with Growth Service.",
  version: 1,
  created_at: "2026-09-15T00:00:00.000Z",
  updated_at: "2026-09-15T00:00:00.000Z",
  created_by: null,
} as unknown as Invoice;

const mockItems: InvoiceItem[] = [
  {
    id: "item-1",
    invoice_id: mockInvoice.id,
    item_id: null,
    description_snapshot: "Organic SEO & Content Growth (Monthly)",
    sku_snapshot: "SEO-01",
    hsn_sac_snapshot: "998311",
    unit_snapshot: "month",
    quantity: 1,
    unit_price: 50000,
    line_subtotal: 50000,
    discount_type: "percentage",
    discount_value: 10,
    discount_amount: 5000,
    taxable_amount: 45000,
    tax_rate: 18,
    cgst_rate: 9,
    cgst_amount: 4050,
    sgst_rate: 9,
    sgst_amount: 4050,
    igst_rate: 0,
    igst_amount: 0,
    cess_rate: null,
    cess_amount: null,
    line_total: 53100,
    sort_order: 1,
    metadata: null,
    created_at: "2026-09-15T00:00:00.000Z",
  },
];

async function testPdfRender() {
  const pdfData: InvoicePdfData = {
    invoice: mockInvoice,
    items: mockItems,
    seller: mockSeller,
    buyer: mockBuyer,
  };

  const element = React.createElement(InvoicePdfDocument, pdfData);
  const buffer = await renderToBuffer(element as unknown as React.ReactElement);

  // Test 1: Buffer has non-trivial binary content
  assert.ok(buffer.length > 5000, `Buffer size too small: ${buffer.length} bytes`);
  console.log(`✓ Test 1 Passed: PDF rendered ${buffer.length} bytes successfully`);

  // Test 2: Standard PDF magic header
  const header = buffer.subarray(0, 5).toString("ascii");
  assert.strictEqual(header, "%PDF-", `Expected %PDF- magic header, got ${header}`);
  console.log("✓ Test 2 Passed: Valid %PDF- header verified");

  // Test 3: Inter-state PDF render (IGST path)
  const interstateInvoice = {
    ...mockInvoice,
    is_interstate: true,
    cgst_total: 0,
    sgst_total: 0,
    igst_total: 8100,
  } as unknown as Invoice;

  const interstateItems: InvoiceItem[] = [
    {
      ...mockItems[0],
      cgst_rate: 0,
      cgst_amount: 0,
      sgst_rate: 0,
      sgst_amount: 0,
      igst_rate: 18,
      igst_amount: 8100,
    },
  ];
  const interstateElement = React.createElement(InvoicePdfDocument, {
    invoice: interstateInvoice,
    items: interstateItems,
    seller: mockSeller,
    buyer: { ...mockBuyer, state: "Maharashtra", stateCode: "27" },
  });
  const interstateBuffer = await renderToBuffer(interstateElement as unknown as React.ReactElement);
  assert.ok(interstateBuffer.length > 5000, "Interstate PDF buffer too small");
  console.log(`✓ Test 3 Passed: Inter-state (IGST) invoice PDF rendered ${interstateBuffer.length} bytes successfully`);

  console.log("====================================================");
  console.log("ALL INVOICE PDF GENERATION TESTS PASSED!");
  console.log("====================================================");
}

testPdfRender().catch((err) => {
  console.error("PDF test failed:", err);
  process.exit(1);
});
