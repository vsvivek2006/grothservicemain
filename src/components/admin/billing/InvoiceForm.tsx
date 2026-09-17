"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Client, BillingItem } from "@/modules/billing/types/database";
import {
  calculateInvoiceTotals,
  calculateDueDate,
  LineItemCalculationInput,
} from "@/modules/billing/services/taxCalculation";
import { createInvoiceAction, updateInvoiceAction } from "@/modules/billing/actions/invoiceActions";
import { InvoiceWithRelations } from "@/modules/billing/queries/invoiceQueries";
import { toast } from "sonner";
import { Plus, Trash2, ArrowLeft, Loader2, Calculator, UserPlus, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ClientModal } from "./ClientModal";
import type { ClientListItem } from "@/modules/billing/queries/clientQueries";
import { INDIAN_STATES } from "@/modules/billing/constants/indianStates";

interface LineItemFormState {
  itemId: string | null;
  description: string;
  sku: string;
  hsnSac: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  discountType: "percentage" | "fixed" | "";
  discountValue: number;
  taxRate: number;
}

interface InvoiceFormProps {
  initialInvoice?: InvoiceWithRelations | null;
  clients: Client[];
  catalogItems: BillingItem[];
  defaultClientId?: string;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({
  initialInvoice,
  clients,
  catalogItems,
  defaultClientId,
}) => {
  const router = useRouter();
  const isEditing = Boolean(initialInvoice);

  const [clientList, setClientList] = useState<ClientListItem[]>(clients as ClientListItem[]);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [clientId, setClientId] = useState(
    initialInvoice?.client_id || defaultClientId || (clients[0]?.id ?? "")
  );

  useEffect(() => {
    setClientList(clients as ClientListItem[]);
  }, [clients]);

  useEffect(() => {
    if (defaultClientId && !isEditing) {
      const match = (clients as ClientListItem[]).find((c) => c.id === defaultClientId);
      if (match) {
        setClientId(match.id);
        if (match.billing_profile?.state_code) {
          setPlaceOfSupplyCode(match.billing_profile.state_code);
        }
      }
    }
  }, [defaultClientId, clients, isEditing]);

  const handleClientCreated = (newClient: ClientListItem) => {
    setClientList((prev) => [newClient, ...prev]);
    setClientId(newClient.id);
    if (newClient.billing_profile?.state_code) {
      setPlaceOfSupplyCode(newClient.billing_profile.state_code);
    }
  };
  const [invoiceType, setInvoiceType] = useState(initialInvoice?.invoice_type || "tax_invoice");
  const [issueDate, setIssueDate] = useState(
    initialInvoice?.issue_date || new Date().toISOString().split("T")[0]
  );
  const [supplyDate, setSupplyDate] = useState(
    initialInvoice?.supply_date || new Date().toISOString().split("T")[0]
  );
  const [paymentTermsDays, setPaymentTermsDays] = useState<number>(0);
  const [placeOfSupplyCode, setPlaceOfSupplyCode] = useState(
    initialInvoice?.place_of_supply_state_code || "08"
  );
  const [reverseCharge, setReverseCharge] = useState(initialInvoice?.reverse_charge || false);
  const [notes, setNotes] = useState(initialInvoice?.notes || "");
  const [terms, setTerms] = useState(
    initialInvoice?.terms_and_conditions ||
      "1. Payment due within specified terms.\n2. Late fee of 18% p.a. applicable on overdue invoices.\n3. Digital marketing / tech services rendered as per service agreement."
  );

  const [items, setItems] = useState<LineItemFormState[]>(() => {
    if (initialInvoice?.items && initialInvoice.items.length > 0) {
      return initialInvoice.items.map((it) => ({
        itemId: it.item_id,
        description: it.description_snapshot,
        sku: it.sku_snapshot || "",
        hsnSac: it.hsn_sac_snapshot || "",
        unit: it.unit_snapshot || "unit",
        quantity: Number(it.quantity),
        unitPrice: Number(it.unit_price),
        discountType: it.discount_type || "",
        discountValue: Number(it.discount_value) || 0,
        taxRate: Number(it.tax_rate) || 18,
      }));
    }
    return [
      {
        itemId: null,
        description: "",
        sku: "",
        hsnSac: "998313",
        unit: "month",
        quantity: 1,
        unitPrice: 0,
        discountType: "",
        discountValue: 0,
        taxRate: 18,
      },
    ];
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compute live totals
  const calcInputs: LineItemCalculationInput[] = items.map((it) => ({
    itemId: it.itemId,
    description: it.description || "Unnamed Item",
    sku: it.sku || null,
    hsnSac: it.hsnSac || null,
    unit: it.unit,
    quantity: it.quantity,
    unitPrice: it.unitPrice,
    discountType: it.discountType ? (it.discountType as "percentage" | "fixed") : null,
    discountValue: it.discountValue > 0 ? it.discountValue : null,
    taxRate: it.taxRate,
  }));

  const totals = calculateInvoiceTotals(calcInputs, "08", placeOfSupplyCode, 0);
  const calculatedDueDate = calculateDueDate(issueDate, paymentTermsDays);

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        itemId: null,
        description: "",
        sku: "",
        hsnSac: "998313",
        unit: "month",
        quantity: 1,
        unitPrice: 0,
        discountType: "",
        discountValue: 0,
        taxRate: 18,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) {
      toast.error("Invoice must have at least one line item");
      return;
    }
    setItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleCatalogSelect = (index: number, catalogItemId: string) => {
    const selected = catalogItems.find((c) => c.id === catalogItemId);
    if (!selected) return;

    setItems((prev) =>
      prev.map((item, idx) => {
        if (idx !== index) return item;
        return {
          ...item,
          itemId: selected.id,
          description: selected.name + (selected.description ? ` - ${selected.description}` : ""),
          sku: selected.sku || "",
          hsnSac: selected.hsn_sac_code || "998313",
          unit: selected.unit || "unit",
          unitPrice: Number(selected.default_unit_price),
          taxRate: Number(selected.default_tax_rate),
        };
      })
    );
  };

  const handleItemChange = (index: number, field: keyof LineItemFormState, value: any) => {
    setItems((prev) =>
      prev.map((item, idx) => {
        if (idx !== index) return item;
        return { ...item, [field]: value };
      })
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId) {
      toast.error("Please select a client");
      return;
    }

    if (items.some((it) => !it.description.trim())) {
      toast.error("All line items must have a description");
      return;
    }

    setIsSubmitting(true);

    const placeOfSupplyObj = INDIAN_STATES.find((s) => s.code === placeOfSupplyCode);
    const placeOfSupplyName = placeOfSupplyObj ? placeOfSupplyObj.name : "Rajasthan";

    const payload = {
      client_id: clientId,
      invoice_type: invoiceType as "tax_invoice" | "proforma" | "receipt",
      issue_date: issueDate,
      supply_date: supplyDate,
      payment_terms_days: paymentTermsDays,
      place_of_supply: placeOfSupplyName,
      place_of_supply_state_code: placeOfSupplyCode,
      reverse_charge: reverseCharge,
      notes: notes.trim() || undefined,
      terms_and_conditions: terms.trim() || undefined,
      items: items.map((it, idx) => ({
        item_id: it.itemId,
        description: it.description,
        sku: it.sku || undefined,
        hsn_sac: it.hsnSac || undefined,
        unit: it.unit || "unit",
        quantity: Number(it.quantity),
        unit_price: Number(it.unitPrice),
        discount_type: it.discountType ? (it.discountType as "percentage" | "fixed") : undefined,
        discount_value: it.discountValue > 0 ? Number(it.discountValue) : undefined,
        tax_rate: Number(it.taxRate),
        sort_order: idx,
      })),
    };

    try {
      const res =
        isEditing && initialInvoice
          ? await updateInvoiceAction(initialInvoice.id, payload)
          : await createInvoiceAction(payload);

      if (!res.success) {
        toast.error(res.error || "Failed to save invoice");
        setIsSubmitting(false);
        return;
      }

      toast.success(isEditing ? "Draft invoice updated" : "Draft invoice created");
      // Hard navigation ensures clean server load, eliminates Next.js router cache stall, and updates view instantly
      window.location.href = `/admin/billing/invoices/${res.data.id}`;
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Submission error");
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(val);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/billing/invoices"
            className="rounded-lg border border-gray-800 bg-gray-900/60 p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {isEditing ? `Edit Invoice (${initialInvoice?.invoice_number})` : "Create New Invoice"}
            </h1>
            <p className="text-sm text-gray-400">
              Tax invoice generation with real-time GST computation and immutable snapshots
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/billing/invoices"
            className="rounded-lg border border-gray-700 bg-gray-800/80 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all hover:from-blue-600 hover:to-indigo-800 disabled:opacity-60"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Calculator className="h-4 w-4" />
            )}
            <span>{isEditing ? "Update Invoice" : "Save as Draft"}</span>
          </button>
        </div>
      </div>

      {/* Invoice Meta Grid */}
      <div className="grid grid-cols-1 gap-6 rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-md lg:grid-cols-3">
        {/* Client Selection */}
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Client <span className="text-red-400">*</span>
            </label>
            <button
              type="button"
              onClick={() => setIsClientModalOpen(true)}
              className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Register Client</span>
            </button>
          </div>
          <select
            value={clientId}
            onChange={(e) => {
              const selectedClientId = e.target.value;
              setClientId(selectedClientId);
              if (!isEditing && selectedClientId) {
                const selectedClient = clientList.find((c: any) => c.id === selectedClientId) as any;
                if (selectedClient?.billing_profile?.state_code) {
                  setPlaceOfSupplyCode(selectedClient.billing_profile.state_code);
                }
              }
            }}
            required
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="">Select a registered client...</option>
            {clientList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.company_name} ({c.client_code})
              </option>
            ))}
          </select>

          {clientList.length === 0 && (
            <div className="mt-2 flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/10 p-2.5 text-xs text-amber-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-400" />
                <span>No active clients found. Register one now to bill.</span>
              </div>
              <button
                type="button"
                onClick={() => setIsClientModalOpen(true)}
                className="ml-2 shrink-0 font-semibold text-amber-300 underline hover:text-amber-200 cursor-pointer"
              >
                Register Now
              </button>
            </div>
          )}
        </div>

        {/* Invoice Type */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Document Type
          </label>
          <select
            value={invoiceType}
            onChange={(e) => setInvoiceType(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
          >
            <option value="tax_invoice">Tax Invoice</option>
            <option value="proforma">Proforma Invoice</option>
            <option value="receipt">Payment Receipt</option>
          </select>
        </div>

        {/* Place of Supply */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Place of Supply (GST State)
          </label>
          <select
            value={placeOfSupplyCode}
            onChange={(e) => setPlaceOfSupplyCode(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
          >
            {INDIAN_STATES.map((s) => (
              <option key={s.code} value={s.code}>
                {s.code} - {s.name} {s.code === "08" ? "(Intra-state Rajasthan)" : "(Inter-state)"}
              </option>
            ))}
          </select>
        </div>

        {/* Issue Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Issue Date
          </label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
          />
        </div>

        {/* Supply Date */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Supply Date
          </label>
          <input
            type="date"
            value={supplyDate}
            onChange={(e) => setSupplyDate(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2 text-sm text-white focus:border-purple-500 focus:outline-none"
          />
        </div>

        {/* Payment Terms */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
            Payment Terms (Due: {calculatedDueDate || "Immediate"})
          </label>
          <select
            value={paymentTermsDays}
            onChange={(e) => setPaymentTermsDays(Number(e.target.value))}
            className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 px-3.5 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
          >
            <option value={0}>Immediate (Due on receipt)</option>
            <option value={7}>Net 7 Days</option>
            <option value={15}>Net 15 Days</option>
            <option value={30}>Net 30 Days</option>
            <option value={45}>Net 45 Days</option>
            <option value={60}>Net 60 Days</option>
          </select>
        </div>
      </div>

      {/* Line Items Section */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Invoice Line Items</h2>
          <button
            type="button"
            onClick={handleAddItem}
            className="flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-purple-950/30 px-3.5 py-1.5 text-xs font-medium text-purple-300 hover:bg-purple-900/50"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add Line Item</span>
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const lineSub = Number(item.quantity) * Number(item.unitPrice);
            const lineDisc =
              item.discountType === "percentage"
                ? (lineSub * Number(item.discountValue)) / 100
                : item.discountType === "fixed"
                ? Number(item.discountValue)
                : 0;
            const taxable = Math.max(0, lineSub - lineDisc);
            const tax = (taxable * Number(item.taxRate)) / 100;
            const lineTotal = taxable + tax;

            return (
              <div
                key={idx}
                className="rounded-lg border border-gray-800 bg-gray-800/40 p-4 transition-colors hover:border-gray-700"
              >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
                  {/* Catalog Quick Picker */}
                  <div className="md:col-span-3">
                    <label className="text-[11px] font-medium text-gray-400">
                      Catalog Item (Optional)
                    </label>
                    <select
                      value={item.itemId || ""}
                      onChange={(e) => handleCatalogSelect(idx, e.target.value)}
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Custom Item...</option>
                      {catalogItems.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({formatCurrency(Number(c.default_unit_price))})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <label className="text-[11px] font-medium text-gray-400">
                      Description <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                      placeholder="e.g. Enterprise SEO Monthly Retainer"
                      required
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* SAC Code */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">HSN/SAC</label>
                    <input
                      type="text"
                      value={item.hsnSac}
                      onChange={(e) => handleItemChange(idx, "hsnSac", e.target.value)}
                      placeholder="998313"
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Unit */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">Unit</label>
                    <input
                      type="text"
                      value={item.unit}
                      onChange={(e) => handleItemChange(idx, "unit", e.target.value)}
                      placeholder="month, unit, hr"
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Qty */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">Qty</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(idx, "quantity", Number(e.target.value))}
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Rate */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">Rate (INR)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(idx, "unitPrice", Number(e.target.value))}
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Discount */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">Discount</label>
                    <div className="mt-1 flex gap-1">
                      <select
                        value={item.discountType}
                        onChange={(e) => handleItemChange(idx, "discountType", e.target.value)}
                        className="w-1/2 rounded border border-gray-700 bg-gray-900 px-1 py-1 text-[11px] text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">None</option>
                        <option value="percentage">%</option>
                        <option value="fixed">Flat</option>
                      </select>
                      <input
                        type="number"
                        min="0"
                        value={item.discountValue}
                        onChange={(e) => handleItemChange(idx, "discountValue", Number(e.target.value))}
                        disabled={!item.discountType}
                        placeholder="0"
                        className="w-1/2 rounded border border-gray-700 bg-gray-900 px-1.5 py-1 text-xs text-white focus:border-purple-500 focus:outline-none disabled:opacity-40"
                      />
                    </div>
                  </div>

                  {/* Tax Rate */}
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-medium text-gray-400">Tax Rate</label>
                    <select
                      value={item.taxRate}
                      onChange={(e) => handleItemChange(idx, "taxRate", Number(e.target.value))}
                      className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value={18}>18% (Standard Services)</option>
                      <option value={12}>12%</option>
                      <option value={5}>5%</option>
                      <option value={28}>28%</option>
                      <option value={0}>0% (Exempt)</option>
                    </select>
                  </div>

                  {/* Line Total */}
                  <div className="flex items-end justify-between md:col-span-4">
                    <div>
                      <span className="text-[10px] text-gray-500">Taxable: {formatCurrency(taxable)}</span>
                      <div className="font-mono text-sm font-semibold text-white">
                        Total: {formatCurrency(lineTotal)}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      className="rounded p-1.5 text-gray-500 hover:bg-red-950/40 hover:text-red-400"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary & Notes Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Notes & Terms */}
        <div className="space-y-4 lg:col-span-7">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 backdrop-blur-md">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Customer Notes / Description
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. For marketing campaigns delivered in September 2026..."
              className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-sm text-white focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 backdrop-blur-md">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Terms & Conditions
            </label>
            <textarea
              rows={3}
              value={terms}
              onChange={(e) => setTerms(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-xs font-mono text-gray-300 focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Realtime Calculation Totals Box */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-6 shadow-2xl backdrop-blur-md">
            <h3 className="border-b border-gray-800 pb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Invoice Calculation Summary
            </h3>

            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">{formatCurrency(totals.subtotal)}</span>
              </div>

              {totals.discountTotal > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Discount</span>
                  <span className="font-mono">-{formatCurrency(totals.discountTotal)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-400">
                <span>Taxable Amount</span>
                <span className="font-mono text-white">{formatCurrency(totals.taxableTotal)}</span>
              </div>

              {totals.isInterstate ? (
                <div className="flex justify-between text-blue-400">
                  <span>IGST</span>
                  <span className="font-mono">{formatCurrency(totals.igstTotal)}</span>
                </div>
              ) : (
                <>
                  <div className="flex justify-between text-purple-400">
                    <span>CGST</span>
                    <span className="font-mono">{formatCurrency(totals.cgstTotal)}</span>
                  </div>
                  <div className="flex justify-between text-purple-400">
                    <span>SGST</span>
                    <span className="font-mono">{formatCurrency(totals.sgstTotal)}</span>
                  </div>
                </>
              )}

              {totals.roundOff !== 0 && (
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>Round Off</span>
                  <span className="font-mono">
                    {totals.roundOff > 0 ? `+${totals.roundOff}` : totals.roundOff}
                  </span>
                </div>
              )}

              <div className="border-t border-gray-800 pt-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-semibold text-white">Grand Total</span>
                  <span className="font-mono text-2xl font-bold text-yellow-400">
                    {formatCurrency(totals.grandTotal)}
                  </span>
                </div>
                <div className="mt-1 text-right text-xs text-gray-400">
                  Amount Due: {formatCurrency(totals.amountDue)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
      <ClientModal
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
        onClientCreated={handleClientCreated}
      />
    </>
  );
};
