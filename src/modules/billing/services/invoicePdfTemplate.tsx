/**
 * Growth Service — Invoice PDF Template (Phase 5)
 *
 * Server-side React-PDF document built exclusively from frozen invoice
 * snapshots. Never reads current catalog, client, or seller state —
 * ensuring historical invoice reproducibility as required by spec §20.
 *
 * Layout: Indian GST Tax Invoice (A4, portrait)
 */

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Invoice, InvoiceItem } from "../types/database";
import type { SellerSnapshot } from "./sellerConfig";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface BuyerSnapshot {
  clientCode?: string;
  companyName?: string;
  legalName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  gstin?: string | null;
  pan?: string | null;
  addressLine1?: string;
  addressLine2?: string | null;
  city?: string;
  state?: string;
  stateCode?: string;
  postalCode?: string;
  country?: string;
}

export interface InvoicePdfData {
  invoice: Invoice;
  items: InvoiceItem[];
  seller: SellerSnapshot;
  buyer: BuyerSnapshot;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number | null | undefined, currency = "Rs."): string {
  if (n == null) return `${currency} 0.00`;
  return `${currency} ${Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function fmtDate(d: string | null | undefined): string {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function fmtQty(n: number | null | undefined): string {
  if (n == null) return "0";
  return Number(n).toLocaleString("en-IN", { maximumFractionDigits: 3 });
}

// ─── Amount in words ─────────────────────────────────────────────────────────

export function amountToWords(amount: number): string {
  const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen",
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convert(n: number): string {
    if (n === 0) return "";
    if (n < 20) return ones[n] + " ";
    if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10] + " ";
    if (n < 1000) return ones[Math.floor(n / 100)] + " Hundred " + convert(n % 100);
    if (n < 100000) return convert(Math.floor(n / 1000)) + "Thousand " + convert(n % 1000);
    if (n < 10000000) return convert(Math.floor(n / 100000)) + "Lakh " + convert(n % 100000);
    return convert(Math.floor(n / 10000000)) + "Crore " + convert(n % 10000000);
  }

  const abs = Math.abs(amount || 0);
  let integerPart = Math.floor(abs);
  let paise = Math.round((abs - integerPart) * 100);
  if (paise >= 100) {
    integerPart += 1;
    paise = 0;
  }

  let words = convert(integerPart).trim();
  if (!words) words = "Zero";
  words += " Rupees";
  if (paise > 0) words += ` and ${convert(paise).trim()} Paise`;
  return words + " Only";
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const C = {
  purple: "#6A0DAD",
  purpleLight: "#F3E8FF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray400: "#9CA3AF",
  gray600: "#4B5563",
  gray700: "#374151",
  gray900: "#111827",
  white: "#FFFFFF",
  red: "#DC2626",
  green: "#16A34A",
};

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 9, color: C.gray900, backgroundColor: C.white, paddingTop: 32, paddingBottom: 48, paddingHorizontal: 36 },
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  headerLeft: { flex: 1 },
  headerRight: { width: 180, alignItems: "flex-end" },
  companyName: { fontSize: 16, fontFamily: "Helvetica-Bold", color: C.purple, marginBottom: 2 },
  companyAddress: { fontSize: 7.5, color: C.gray600, lineHeight: 1.5 },
  invoiceTitle: { fontSize: 18, fontFamily: "Helvetica-Bold", color: C.purple, textAlign: "right" },
  invoiceNumber: { fontSize: 10, color: C.gray700, textAlign: "right", marginTop: 2 },
  statusBadge: { marginTop: 6, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, backgroundColor: C.purpleLight, alignSelf: "flex-end" },
  statusText: { fontSize: 8, color: C.purple, fontFamily: "Helvetica-Bold" },
  divider: { borderBottomWidth: 1.5, borderBottomColor: C.purple, marginBottom: 12 },
  metaRow: { flexDirection: "row", backgroundColor: C.gray50, borderRadius: 4, paddingHorizontal: 10, paddingVertical: 8, marginBottom: 12 },
  metaCell: { flex: 1 },
  metaLabel: { fontSize: 7, color: C.gray400, marginBottom: 2 },
  metaValue: { fontSize: 8.5, color: C.gray900, fontFamily: "Helvetica-Bold" },
  flagRow: { flexDirection: "row", marginBottom: 8 },
  flag: { fontSize: 7, color: C.gray600, backgroundColor: C.gray100, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 2, marginRight: 6 },
  partiesRow: { flexDirection: "row", marginBottom: 12 },
  partySide: { flex: 1 },
  partyRight: { flex: 1, marginLeft: 14 },
  partyLabel: { fontSize: 7, color: C.white, fontFamily: "Helvetica-Bold", backgroundColor: C.purple, paddingHorizontal: 6, paddingVertical: 3, marginBottom: 5, borderRadius: 2, alignSelf: "flex-start" },
  partyName: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: C.gray900, marginBottom: 2 },
  partyDetail: { fontSize: 8, color: C.gray600, lineHeight: 1.5 },
  partyGstin: { fontSize: 8, color: C.gray700, fontFamily: "Helvetica-Bold", marginTop: 3 },
  tableHeader: { flexDirection: "row", backgroundColor: C.purple, paddingVertical: 5, paddingHorizontal: 4 },
  tableRow: { flexDirection: "row", paddingVertical: 4, paddingHorizontal: 4, borderBottomWidth: 0.4, borderBottomColor: C.gray200 },
  tableRowAlt: { backgroundColor: C.gray50 },
  thText: { fontSize: 7, color: C.white, fontFamily: "Helvetica-Bold" },
  tdText: { fontSize: 7.5, color: C.gray700 },
  tdBold: { fontSize: 7.5, color: C.gray900, fontFamily: "Helvetica-Bold" },
  colNo: { width: 18 },
  colDesc: { flex: 1 },
  colHsn: { width: 48 },
  colQty: { width: 38, textAlign: "right" },
  colRate: { width: 56, textAlign: "right" },
  colDisc: { width: 44, textAlign: "right" },
  colTax: { width: 36, textAlign: "right" },
  colTotal: { width: 60, textAlign: "right" },
  wordsRow: { backgroundColor: C.gray50, borderRadius: 3, padding: 6, marginBottom: 10, marginTop: 4 },
  wordsLabel: { fontSize: 7, color: C.gray400, marginBottom: 2 },
  wordsText: { fontSize: 8, color: C.gray700, fontFamily: "Helvetica-Bold" },
  totalsSection: { flexDirection: "row", marginTop: 6 },
  taxBreakdown: { flex: 1, paddingRight: 10 },
  taxTable: { borderWidth: 0.5, borderColor: C.gray200, borderRadius: 3 },
  taxRow: { flexDirection: "row", paddingHorizontal: 6, paddingVertical: 3, borderBottomWidth: 0.4, borderBottomColor: C.gray200 },
  taxHdr: { backgroundColor: C.gray100 },
  taxCol: { flex: 1, fontSize: 7, color: C.gray600 },
  taxColBold: { flex: 1, fontSize: 7, color: C.gray900, fontFamily: "Helvetica-Bold" },
  summaryTable: { width: 175 },
  summaryRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 2.5, paddingHorizontal: 4, borderBottomWidth: 0.4, borderBottomColor: C.gray200 },
  summaryLabel: { fontSize: 8, color: C.gray600 },
  summaryValue: { fontSize: 8, color: C.gray900, textAlign: "right" },
  summaryLabelBold: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.gray900 },
  summaryValueBold: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.gray900, textAlign: "right" },
  grandTotalRow: { flexDirection: "row", justifyContent: "space-between", backgroundColor: C.purple, paddingVertical: 5, paddingHorizontal: 4, borderRadius: 2, marginTop: 2 },
  grandTotalLabel: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.white },
  grandTotalValue: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.white },
  bankSection: { marginTop: 14, flexDirection: "row" },
  bankLeft: { flex: 1 },
  bankRight: { width: 200 },
  sectionLabel: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: C.purple, marginBottom: 4 },
  bankDetail: { fontSize: 7.5, color: C.gray700, lineHeight: 1.5 },
  noteText: { fontSize: 7.5, color: C.gray600, lineHeight: 1.5 },
  footer: { position: "absolute", bottom: 20, left: 36, right: 36, borderTopWidth: 0.5, borderTopColor: C.gray200, paddingTop: 8, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  footerText: { fontSize: 7, color: C.gray400 },
  footerBrand: { fontSize: 7.5, color: C.purple },
  signatureBox: { width: 130, alignItems: "center" },
  signatureLine: { borderTopWidth: 0.5, borderTopColor: C.gray400, width: "100%", marginBottom: 2 },
  signatureLabel: { fontSize: 7, color: C.gray400 },
  balanceDueRed: { color: C.red },
  balanceDueGreen: { color: C.green },
});

// ─── Document ────────────────────────────────────────────────────────────────

export function InvoicePdfDocument({ invoice, items, seller, buyer }: InvoicePdfData) {
  const isInterstate = invoice.is_interstate;
  const grandTotal = Number(invoice.grand_total) || 0;
  const amountDue = Number(invoice.amount_due) || 0;
  const amountPaid = Number(invoice.amount_paid) || 0;

  const statusLabel: Record<string, string> = {
    draft: "DRAFT INVOICE",
    issued: "TAX INVOICE",
    sent: "TAX INVOICE",
    cancelled: "CANCELLED",
    void: "VOID",
  };

  const docLabel = statusLabel[invoice.document_status] || "INVOICE";

  return (
    <Document
      title={`Invoice ${invoice.invoice_number}`}
      author={seller.legalName}
      subject="GST Tax Invoice"
      creator="Growth Service Billing"
    >
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.companyName}>{seller.tradeName}</Text>
            <Text style={styles.companyAddress}>
              {seller.addressLine1}{seller.addressLine2 ? `, ${seller.addressLine2}` : ""}
              {"\n"}{seller.city}, {seller.state} — {seller.postalCode}
              {"\n"}GSTIN: {seller.gstin}{"  "}PAN: {seller.pan}
              {"\n"}{seller.email}{"  "}{seller.phone}
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.invoiceTitle}>{docLabel}</Text>
            <Text style={styles.invoiceNumber}>#{invoice.invoice_number}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{(invoice.document_status || "draft").toUpperCase()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Meta Row */}
        <View style={styles.metaRow}>
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>Issue Date</Text>
            <Text style={styles.metaValue}>{fmtDate(invoice.issue_date)}</Text>
          </View>
          {invoice.supply_date && invoice.supply_date !== invoice.issue_date && (
            <View style={styles.metaCell}>
              <Text style={styles.metaLabel}>Supply Date</Text>
              <Text style={styles.metaValue}>{fmtDate(invoice.supply_date)}</Text>
            </View>
          )}
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>Due Date</Text>
            <Text style={styles.metaValue}>{fmtDate(invoice.due_date)}</Text>
          </View>
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>Place of Supply</Text>
            <Text style={styles.metaValue}>{invoice.place_of_supply || "—"}</Text>
          </View>
          <View style={styles.metaCell}>
            <Text style={styles.metaLabel}>Payment Status</Text>
            <Text style={styles.metaValue}>{(invoice.payment_status || "unpaid").replace(/_/g, " ").toUpperCase()}</Text>
          </View>
        </View>

        {/* Flags */}
        <View style={styles.flagRow}>
          <Text style={styles.flag}>
            {isInterstate ? "Inter-State (IGST)" : "Intra-State (CGST + SGST)"}
          </Text>
          {invoice.reverse_charge && <Text style={styles.flag}>Reverse Charge Applicable</Text>}
        </View>

        {/* Parties */}
        <View style={styles.partiesRow}>
          <View style={styles.partySide}>
            <Text style={styles.partyLabel}>Bill From</Text>
            <Text style={styles.partyName}>{seller.legalName}</Text>
            <Text style={styles.partyDetail}>
              {seller.addressLine1}{seller.addressLine2 ? `, ${seller.addressLine2}` : ""}
              {"\n"}{seller.city}, {seller.state} {seller.postalCode}
              {"\n"}{seller.country}
            </Text>
            <Text style={styles.partyGstin}>GSTIN: {seller.gstin}</Text>
          </View>
          <View style={styles.partyRight}>
            <Text style={styles.partyLabel}>Bill To</Text>
            <Text style={styles.partyName}>
              {buyer.legalName || buyer.companyName || buyer.contactName || "—"}
            </Text>
            {(buyer.addressLine1 || buyer.city) && (
              <Text style={styles.partyDetail}>
                {[buyer.addressLine1, buyer.addressLine2].filter(Boolean).join(", ")}
                {"\n"}{[buyer.city, buyer.state].filter(Boolean).join(", ")}{" "}
                {buyer.postalCode || ""}
                {buyer.country ? `\n${buyer.country}` : ""}
              </Text>
            )}
            {buyer.gstin && <Text style={styles.partyGstin}>GSTIN: {buyer.gstin}</Text>}
            {!buyer.gstin && buyer.pan && <Text style={styles.partyGstin}>PAN: {buyer.pan}</Text>}
          </View>
        </View>

        {/* Line Items Table */}
        <View style={styles.tableHeader}>
          <Text style={[styles.thText, styles.colNo]}>#</Text>
          <Text style={[styles.thText, styles.colDesc]}>Description</Text>
          <Text style={[styles.thText, styles.colHsn]}>HSN/SAC</Text>
          <Text style={[styles.thText, styles.colQty]}>Qty</Text>
          <Text style={[styles.thText, styles.colRate]}>Rate</Text>
          <Text style={[styles.thText, styles.colDisc]}>Disc.</Text>
          <Text style={[styles.thText, styles.colTax]}>Tax%</Text>
          <Text style={[styles.thText, styles.colTotal]}>Amount</Text>
        </View>

        {items.map((item, idx) => (
          <View key={item.id} style={[styles.tableRow, idx % 2 === 1 ? styles.tableRowAlt : {}]}>
            <Text style={[styles.tdText, styles.colNo]}>{idx + 1}</Text>
            <View style={styles.colDesc}>
              <Text style={styles.tdBold}>{item.description_snapshot}</Text>
              {item.sku_snapshot && (
                <Text style={[styles.tdText, { fontSize: 6.5, color: C.gray400 }]}>SKU: {item.sku_snapshot}</Text>
              )}
            </View>
            <Text style={[styles.tdText, styles.colHsn]}>{item.hsn_sac_snapshot || "—"}</Text>
            <Text style={[styles.tdText, styles.colQty]}>{fmtQty(item.quantity)} {item.unit_snapshot}</Text>
            <Text style={[styles.tdText, styles.colRate]}>{fmt(item.unit_price)}</Text>
            <Text style={[styles.tdText, styles.colDisc]}>
              {Number(item.discount_amount) > 0 ? fmt(item.discount_amount) : "—"}
            </Text>
            <Text style={[styles.tdText, styles.colTax]}>{Number(item.tax_rate)}%</Text>
            <Text style={[styles.tdBold, styles.colTotal]}>{fmt(item.line_total)}</Text>
          </View>
        ))}

        {/* Amount in Words */}
        <View style={styles.wordsRow}>
          <Text style={styles.wordsLabel}>Amount in Words</Text>
          <Text style={styles.wordsText}>{amountToWords(grandTotal)}</Text>
        </View>

        {/* Totals Section */}
        <View style={styles.totalsSection}>
          {/* Tax breakdown */}
          <View style={styles.taxBreakdown}>
            <Text style={styles.sectionLabel}>Tax Summary</Text>
            <View style={styles.taxTable}>
              <View style={[styles.taxRow, styles.taxHdr]}>
                <Text style={[styles.taxColBold, { flex: 1.5 }]}>Description</Text>
                <Text style={styles.taxColBold}>Taxable Amt</Text>
                {isInterstate ? (
                  <>
                    <Text style={styles.taxColBold}>IGST %</Text>
                    <Text style={styles.taxColBold}>IGST Amt</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.taxColBold}>CGST</Text>
                    <Text style={styles.taxColBold}>SGST</Text>
                    <Text style={styles.taxColBold}>Total</Text>
                  </>
                )}
              </View>
              {items.map((item) => (
                <View key={`tax-${item.id}`} style={styles.taxRow}>
                  <Text style={[styles.taxCol, { flex: 1.5 }]}>
                    {item.description_snapshot}
                  </Text>
                  <Text style={styles.taxCol}>{fmt(item.taxable_amount)}</Text>
                  {isInterstate ? (
                    <>
                      <Text style={styles.taxCol}>{Number(item.igst_rate || 0)}%</Text>
                      <Text style={styles.taxCol}>{fmt(item.igst_amount)}</Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.taxCol}>{Number(item.cgst_rate || 0)}% / {fmt(item.cgst_amount)}</Text>
                      <Text style={styles.taxCol}>{Number(item.sgst_rate || 0)}% / {fmt(item.sgst_amount)}</Text>
                      <Text style={styles.taxCol}>{fmt((Number(item.cgst_amount) || 0) + (Number(item.sgst_amount) || 0))}</Text>
                    </>
                  )}
                </View>
              ))}
              <View style={[styles.taxRow, styles.taxHdr]}>
                <Text style={[styles.taxColBold, { flex: 1.5 }]}>Total</Text>
                <Text style={styles.taxColBold}>{fmt(invoice.taxable_total)}</Text>
                {isInterstate ? (
                  <>
                    <Text style={styles.taxColBold}></Text>
                    <Text style={styles.taxColBold}>{fmt(invoice.igst_total)}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.taxColBold}>{fmt(invoice.cgst_total)}</Text>
                    <Text style={styles.taxColBold}>{fmt(invoice.sgst_total)}</Text>
                    <Text style={styles.taxColBold}>{fmt(invoice.tax_total)}</Text>
                  </>
                )}
              </View>
            </View>
          </View>

          {/* Summary */}
          <View style={styles.summaryTable}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>{fmt(invoice.subtotal)}</Text>
            </View>
            {Number(invoice.discount_total) > 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Discount</Text>
                <Text style={styles.summaryValue}>- {fmt(invoice.discount_total)}</Text>
              </View>
            )}
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Taxable Amount</Text>
              <Text style={styles.summaryValue}>{fmt(invoice.taxable_total)}</Text>
            </View>
            {!isInterstate && Number(invoice.cgst_total) > 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>CGST</Text>
                <Text style={styles.summaryValue}>{fmt(invoice.cgst_total)}</Text>
              </View>
            )}
            {!isInterstate && Number(invoice.sgst_total) > 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>SGST</Text>
                <Text style={styles.summaryValue}>{fmt(invoice.sgst_total)}</Text>
              </View>
            )}
            {isInterstate && Number(invoice.igst_total) > 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>IGST</Text>
                <Text style={styles.summaryValue}>{fmt(invoice.igst_total)}</Text>
              </View>
            )}
            {Number(invoice.cess_total) > 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>CESS</Text>
                <Text style={styles.summaryValue}>{fmt(invoice.cess_total)}</Text>
              </View>
            )}
            {Number(invoice.round_off) !== 0 && (
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Round-off</Text>
                <Text style={styles.summaryValue}>{fmt(invoice.round_off)}</Text>
              </View>
            )}
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Grand Total</Text>
              <Text style={styles.grandTotalValue}>{fmt(grandTotal)}</Text>
            </View>
            {amountPaid > 0 && (
              <>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Amount Paid</Text>
                  <Text style={styles.summaryValue}>{fmt(amountPaid)}</Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabelBold}>Balance Due</Text>
                  <Text style={[styles.summaryValueBold, amountDue > 0 ? styles.balanceDueRed : styles.balanceDueGreen]}>
                    {fmt(amountDue)}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        {/* Bank Details & Notes */}
        <View style={styles.bankSection}>
          {seller.bankDetails && (
            <View style={styles.bankLeft}>
              <Text style={styles.sectionLabel}>Bank Details</Text>
              <Text style={styles.bankDetail}>
                {seller.bankDetails.bankName} — {seller.bankDetails.branch}
                {"\n"}A/C: {seller.bankDetails.accountNumber}
                {"\n"}IFSC: {seller.bankDetails.ifscCode}
                {seller.bankDetails.upiId ? `\nUPI: ${seller.bankDetails.upiId}` : ""}
              </Text>
            </View>
          )}
          <View style={styles.bankRight}>
            {invoice.notes && (
              <>
                <Text style={styles.sectionLabel}>Notes</Text>
                <Text style={styles.noteText}>{invoice.notes}</Text>
              </>
            )}
            {invoice.terms_and_conditions && (
              <>
                <Text style={[styles.sectionLabel, { marginTop: 8 }]}>Terms & Conditions</Text>
                <Text style={styles.noteText}>{invoice.terms_and_conditions}</Text>
              </>
            )}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{seller.legalName} | {seller.website}</Text>
          <View style={styles.signatureBox}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>Authorised Signatory</Text>
          </View>
          <Text style={styles.footerBrand}>Growth Service Billing</Text>
        </View>

      </Page>
    </Document>
  );
}
