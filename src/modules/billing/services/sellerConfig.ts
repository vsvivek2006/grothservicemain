/**
 * Growth Service — Authoritative Seller Entity Snapshot Configuration
 *
 * Official registered business identity for tax invoices and compliance.
 * Headquarters: Jaipur, Rajasthan (State Code: 08).
 */

export interface SellerSnapshot {
  legalName: string;
  tradeName: string;
  gstin: string;
  pan: string;
  cin?: string;
  email: string;
  phone: string;
  website: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  stateCode: string; // "08" for Rajasthan
  postalCode: string;
  country: string;
  bankDetails?: {
    accountName: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
    branch: string;
    upiId?: string;
  };
}

export function getSellerSnapshot(): SellerSnapshot {
  return {
    legalName: process.env.BILLING_SELLER_LEGAL_NAME || "Growth Service Technologies LLP",
    tradeName: process.env.BILLING_SELLER_TRADE_NAME || "Growth Service",
    gstin: process.env.BILLING_SELLER_GSTIN || "08AAAAA0000A1Z5",
    pan: process.env.BILLING_SELLER_PAN || "AAAAA0000A",
    email: process.env.BILLING_SELLER_EMAIL || "billing@growthservice.in",
    phone: process.env.BILLING_SELLER_PHONE || "+91 99999 99999",
    website: "https://www.growthservice.in",
    addressLine1: process.env.BILLING_SELLER_ADDRESS || "Plot No. 42, Malviya Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    stateCode: "08", // Official GST State Code for Rajasthan
    postalCode: "302017",
    country: "India",
    bankDetails: {
      accountName: "Growth Service Technologies LLP",
      accountNumber: process.env.BILLING_BANK_ACCOUNT || "999988887777",
      ifscCode: process.env.BILLING_BANK_IFSC || "HDFC0001234",
      bankName: "HDFC Bank",
      branch: "Malviya Nagar, Jaipur",
      upiId: "growthservice@okhdfcbank",
    },
  };
}
