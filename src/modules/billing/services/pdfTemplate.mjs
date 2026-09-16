// src/modules/billing/services/invoicePdfTemplate.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from "@react-pdf/renderer";
function fmt(n, currency = "Rs.") {
  if (n == null) return `${currency} 0.00`;
  return `${currency} ${Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}
function fmtDate(d) {
  if (!d) return "\u2014";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}
function fmtQty(n) {
  if (n == null) return "0";
  return Number(n).toLocaleString("en-IN", { maximumFractionDigits: 3 });
}
function amountToWords(amount) {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  function convert(n) {
    if (n === 0) return "";
    if (n < 20) return ones[n] + " ";
    if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10] + " ";
    if (n < 1e3) return ones[Math.floor(n / 100)] + " Hundred " + convert(n % 100);
    if (n < 1e5) return convert(Math.floor(n / 1e3)) + "Thousand " + convert(n % 1e3);
    if (n < 1e7) return convert(Math.floor(n / 1e5)) + "Lakh " + convert(n % 1e5);
    return convert(Math.floor(n / 1e7)) + "Crore " + convert(n % 1e7);
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
var C = {
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
  green: "#16A34A"
};
var styles = StyleSheet.create({
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
  balanceDueGreen: { color: C.green }
});
function InvoicePdfDocument({ invoice, items, seller, buyer }) {
  const isInterstate = invoice.is_interstate;
  const grandTotal = Number(invoice.grand_total) || 0;
  const amountDue = Number(invoice.amount_due) || 0;
  const amountPaid = Number(invoice.amount_paid) || 0;
  const statusLabel = {
    draft: "DRAFT INVOICE",
    issued: "TAX INVOICE",
    sent: "TAX INVOICE",
    cancelled: "CANCELLED",
    void: "VOID"
  };
  const docLabel = statusLabel[invoice.document_status] || "INVOICE";
  return /* @__PURE__ */ React.createElement(
    Document,
    {
      title: `Invoice ${invoice.invoice_number}`,
      author: seller.legalName,
      subject: "GST Tax Invoice",
      creator: "Growth Service Billing"
    },
    /* @__PURE__ */ React.createElement(Page, { size: "A4", style: styles.page }, /* @__PURE__ */ React.createElement(View, { style: styles.header }, /* @__PURE__ */ React.createElement(View, { style: styles.headerLeft }, /* @__PURE__ */ React.createElement(Text, { style: styles.companyName }, seller.tradeName), /* @__PURE__ */ React.createElement(Text, { style: styles.companyAddress }, seller.addressLine1, seller.addressLine2 ? `, ${seller.addressLine2}` : "", "\n", seller.city, ", ", seller.state, " \u2014 ", seller.postalCode, "\n", "GSTIN: ", seller.gstin, "  ", "PAN: ", seller.pan, "\n", seller.email, "  ", seller.phone)), /* @__PURE__ */ React.createElement(View, { style: styles.headerRight }, /* @__PURE__ */ React.createElement(Text, { style: styles.invoiceTitle }, docLabel), /* @__PURE__ */ React.createElement(Text, { style: styles.invoiceNumber }, "#", invoice.invoice_number), /* @__PURE__ */ React.createElement(View, { style: styles.statusBadge }, /* @__PURE__ */ React.createElement(Text, { style: styles.statusText }, (invoice.document_status || "draft").toUpperCase())))), /* @__PURE__ */ React.createElement(View, { style: styles.divider }), /* @__PURE__ */ React.createElement(View, { style: styles.metaRow }, /* @__PURE__ */ React.createElement(View, { style: styles.metaCell }, /* @__PURE__ */ React.createElement(Text, { style: styles.metaLabel }, "Issue Date"), /* @__PURE__ */ React.createElement(Text, { style: styles.metaValue }, fmtDate(invoice.issue_date))), invoice.supply_date && invoice.supply_date !== invoice.issue_date && /* @__PURE__ */ React.createElement(View, { style: styles.metaCell }, /* @__PURE__ */ React.createElement(Text, { style: styles.metaLabel }, "Supply Date"), /* @__PURE__ */ React.createElement(Text, { style: styles.metaValue }, fmtDate(invoice.supply_date))), /* @__PURE__ */ React.createElement(View, { style: styles.metaCell }, /* @__PURE__ */ React.createElement(Text, { style: styles.metaLabel }, "Due Date"), /* @__PURE__ */ React.createElement(Text, { style: styles.metaValue }, fmtDate(invoice.due_date))), /* @__PURE__ */ React.createElement(View, { style: styles.metaCell }, /* @__PURE__ */ React.createElement(Text, { style: styles.metaLabel }, "Place of Supply"), /* @__PURE__ */ React.createElement(Text, { style: styles.metaValue }, invoice.place_of_supply || "\u2014")), /* @__PURE__ */ React.createElement(View, { style: styles.metaCell }, /* @__PURE__ */ React.createElement(Text, { style: styles.metaLabel }, "Payment Status"), /* @__PURE__ */ React.createElement(Text, { style: styles.metaValue }, (invoice.payment_status || "unpaid").replace(/_/g, " ").toUpperCase()))), /* @__PURE__ */ React.createElement(View, { style: styles.flagRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.flag }, isInterstate ? "Inter-State (IGST)" : "Intra-State (CGST + SGST)"), invoice.reverse_charge && /* @__PURE__ */ React.createElement(Text, { style: styles.flag }, "Reverse Charge Applicable")), /* @__PURE__ */ React.createElement(View, { style: styles.partiesRow }, /* @__PURE__ */ React.createElement(View, { style: styles.partySide }, /* @__PURE__ */ React.createElement(Text, { style: styles.partyLabel }, "Bill From"), /* @__PURE__ */ React.createElement(Text, { style: styles.partyName }, seller.legalName), /* @__PURE__ */ React.createElement(Text, { style: styles.partyDetail }, seller.addressLine1, seller.addressLine2 ? `, ${seller.addressLine2}` : "", "\n", seller.city, ", ", seller.state, " ", seller.postalCode, "\n", seller.country), /* @__PURE__ */ React.createElement(Text, { style: styles.partyGstin }, "GSTIN: ", seller.gstin)), /* @__PURE__ */ React.createElement(View, { style: styles.partyRight }, /* @__PURE__ */ React.createElement(Text, { style: styles.partyLabel }, "Bill To"), /* @__PURE__ */ React.createElement(Text, { style: styles.partyName }, buyer.legalName || buyer.companyName || buyer.contactName || "\u2014"), (buyer.addressLine1 || buyer.city) && /* @__PURE__ */ React.createElement(Text, { style: styles.partyDetail }, [buyer.addressLine1, buyer.addressLine2].filter(Boolean).join(", "), "\n", [buyer.city, buyer.state].filter(Boolean).join(", "), " ", buyer.postalCode || "", buyer.country ? `
${buyer.country}` : ""), buyer.gstin && /* @__PURE__ */ React.createElement(Text, { style: styles.partyGstin }, "GSTIN: ", buyer.gstin), !buyer.gstin && buyer.pan && /* @__PURE__ */ React.createElement(Text, { style: styles.partyGstin }, "PAN: ", buyer.pan))), /* @__PURE__ */ React.createElement(View, { style: styles.tableHeader }, /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colNo] }, "#"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colDesc] }, "Description"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colHsn] }, "HSN/SAC"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colQty] }, "Qty"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colRate] }, "Rate"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colDisc] }, "Disc."), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colTax] }, "Tax%"), /* @__PURE__ */ React.createElement(Text, { style: [styles.thText, styles.colTotal] }, "Amount")), items.map((item, idx) => /* @__PURE__ */ React.createElement(View, { key: item.id, style: [styles.tableRow, idx % 2 === 1 ? styles.tableRowAlt : {}] }, /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colNo] }, idx + 1), /* @__PURE__ */ React.createElement(View, { style: styles.colDesc }, /* @__PURE__ */ React.createElement(Text, { style: styles.tdBold }, item.description_snapshot), item.sku_snapshot && /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, { fontSize: 6.5, color: C.gray400 }] }, "SKU: ", item.sku_snapshot)), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colHsn] }, item.hsn_sac_snapshot || "\u2014"), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colQty] }, fmtQty(item.quantity), " ", item.unit_snapshot), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colRate] }, fmt(item.unit_price)), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colDisc] }, Number(item.discount_amount) > 0 ? fmt(item.discount_amount) : "\u2014"), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdText, styles.colTax] }, Number(item.tax_rate), "%"), /* @__PURE__ */ React.createElement(Text, { style: [styles.tdBold, styles.colTotal] }, fmt(item.line_total)))), /* @__PURE__ */ React.createElement(View, { style: styles.wordsRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.wordsLabel }, "Amount in Words"), /* @__PURE__ */ React.createElement(Text, { style: styles.wordsText }, amountToWords(grandTotal))), /* @__PURE__ */ React.createElement(View, { style: styles.totalsSection }, /* @__PURE__ */ React.createElement(View, { style: styles.taxBreakdown }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionLabel }, "Tax Summary"), /* @__PURE__ */ React.createElement(View, { style: styles.taxTable }, /* @__PURE__ */ React.createElement(View, { style: [styles.taxRow, styles.taxHdr] }, /* @__PURE__ */ React.createElement(Text, { style: [styles.taxColBold, { flex: 1.5 }] }, "Description"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "Taxable Amt"), isInterstate ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "IGST %"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "IGST Amt")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "CGST"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "SGST"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, "Total"))), items.map((item) => /* @__PURE__ */ React.createElement(View, { key: `tax-${item.id}`, style: styles.taxRow }, /* @__PURE__ */ React.createElement(Text, { style: [styles.taxCol, { flex: 1.5 }] }, item.description_snapshot), /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, fmt(item.taxable_amount)), isInterstate ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, Number(item.igst_rate || 0), "%"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, fmt(item.igst_amount))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, Number(item.cgst_rate || 0), "% / ", fmt(item.cgst_amount)), /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, Number(item.sgst_rate || 0), "% / ", fmt(item.sgst_amount)), /* @__PURE__ */ React.createElement(Text, { style: styles.taxCol }, fmt((Number(item.cgst_amount) || 0) + (Number(item.sgst_amount) || 0)))))), /* @__PURE__ */ React.createElement(View, { style: [styles.taxRow, styles.taxHdr] }, /* @__PURE__ */ React.createElement(Text, { style: [styles.taxColBold, { flex: 1.5 }] }, "Total"), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, fmt(invoice.taxable_total)), isInterstate ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, fmt(invoice.igst_total))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, fmt(invoice.cgst_total)), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, fmt(invoice.sgst_total)), /* @__PURE__ */ React.createElement(Text, { style: styles.taxColBold }, fmt(invoice.tax_total)))))), /* @__PURE__ */ React.createElement(View, { style: styles.summaryTable }, /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "Subtotal"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.subtotal))), Number(invoice.discount_total) > 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "Discount"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, "- ", fmt(invoice.discount_total))), /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "Taxable Amount"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.taxable_total))), !isInterstate && Number(invoice.cgst_total) > 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "CGST"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.cgst_total))), !isInterstate && Number(invoice.sgst_total) > 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "SGST"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.sgst_total))), isInterstate && Number(invoice.igst_total) > 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "IGST"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.igst_total))), Number(invoice.cess_total) > 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "CESS"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.cess_total))), Number(invoice.round_off) !== 0 && /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "Round-off"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(invoice.round_off))), /* @__PURE__ */ React.createElement(View, { style: styles.grandTotalRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.grandTotalLabel }, "Grand Total"), /* @__PURE__ */ React.createElement(Text, { style: styles.grandTotalValue }, fmt(grandTotal))), amountPaid > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabel }, "Amount Paid"), /* @__PURE__ */ React.createElement(Text, { style: styles.summaryValue }, fmt(amountPaid))), /* @__PURE__ */ React.createElement(View, { style: styles.summaryRow }, /* @__PURE__ */ React.createElement(Text, { style: styles.summaryLabelBold }, "Balance Due"), /* @__PURE__ */ React.createElement(Text, { style: [styles.summaryValueBold, amountDue > 0 ? styles.balanceDueRed : styles.balanceDueGreen] }, fmt(amountDue)))))), /* @__PURE__ */ React.createElement(View, { style: styles.bankSection }, seller.bankDetails && /* @__PURE__ */ React.createElement(View, { style: styles.bankLeft }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionLabel }, "Bank Details"), /* @__PURE__ */ React.createElement(Text, { style: styles.bankDetail }, seller.bankDetails.bankName, " \u2014 ", seller.bankDetails.branch, "\n", "A/C: ", seller.bankDetails.accountNumber, "\n", "IFSC: ", seller.bankDetails.ifscCode, seller.bankDetails.upiId ? `
UPI: ${seller.bankDetails.upiId}` : "")), /* @__PURE__ */ React.createElement(View, { style: styles.bankRight }, invoice.notes && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionLabel }, "Notes"), /* @__PURE__ */ React.createElement(Text, { style: styles.noteText }, invoice.notes)), invoice.terms_and_conditions && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { style: [styles.sectionLabel, { marginTop: 8 }] }, "Terms & Conditions"), /* @__PURE__ */ React.createElement(Text, { style: styles.noteText }, invoice.terms_and_conditions)))), /* @__PURE__ */ React.createElement(View, { style: styles.footer, fixed: true }, /* @__PURE__ */ React.createElement(Text, { style: styles.footerText }, seller.legalName, " | ", seller.website), /* @__PURE__ */ React.createElement(View, { style: styles.signatureBox }, /* @__PURE__ */ React.createElement(View, { style: styles.signatureLine }), /* @__PURE__ */ React.createElement(Text, { style: styles.signatureLabel }, "Authorised Signatory")), /* @__PURE__ */ React.createElement(Text, { style: styles.footerBrand }, "Growth Service Billing")))
  );
}
export {
  InvoicePdfDocument,
  amountToWords
};
