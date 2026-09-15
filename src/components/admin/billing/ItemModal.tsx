"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2, Package, Tag } from "lucide-react";
import { toast } from "sonner";
import { createBillingItemAction, updateBillingItemAction } from "@/modules/billing/actions/itemActions";
import { BillingItem } from "@/modules/billing/types/database";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: BillingItem | null;
  onSuccess?: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  isOpen,
  onClose,
  item,
  onSuccess,
}) => {
  const isEditing = Boolean(item);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [description, setDescription] = useState("");
  const [itemType, setItemType] = useState<"service" | "product" | "retainer" | "custom">("service");
  const [category, setCategory] = useState("SEO");
  const [hsnSac, setHsnSac] = useState("998311");
  const [unit, setUnit] = useState("month");
  const [price, setPrice] = useState<number | "">(15000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (item) {
      setSku(item.sku || "");
      setName(item.name || "");
      setShortName(item.short_name || "");
      setDescription(item.description || "");
      setItemType((item.item_type as any) || "service");
      setCategory(item.service_category || "SEO");
      setHsnSac(item.hsn_sac_code || "998311");
      setUnit(item.unit || "month");
      setPrice(item.default_unit_price ?? 0);
      setTaxRate(item.default_tax_rate ?? 18);
      setIsActive(item.is_active ?? true);
    } else {
      setSku("");
      setName("");
      setShortName("");
      setDescription("");
      setItemType("service");
      setCategory("SEO");
      setHsnSac("998311");
      setUnit("month");
      setPrice(15000);
      setTaxRate(18);
      setIsActive(true);
    }
  }, [item, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      sku: sku.trim().toUpperCase(),
      name: name.trim(),
      short_name: shortName.trim() || undefined,
      description: description.trim() || undefined,
      item_type: itemType,
      service_category: category.trim() || undefined,
      hsn_sac_code: hsnSac.trim() || undefined,
      unit: unit.trim() || "unit",
      default_unit_price: Number(price) || 0,
      default_tax_rate: Number(taxRate) || 18,
      currency: "INR",
      is_taxable: taxRate > 0,
      is_active: isActive,
    };

    try {
      const res = isEditing && item
        ? await updateBillingItemAction(item.id, payload)
        : await createBillingItemAction(payload);

      if (!res.success) {
        toast.error(res.error || "Failed to save catalog item");
        setIsSubmitting(false);
        return;
      }

      toast.success(isEditing ? "Item updated successfully" : "Item added to catalog");
      if (onSuccess) onSuccess();
      onClose();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Error saving item");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-purple-400" />
            <h2 className="text-base font-semibold text-white">
              {isEditing ? "Edit Catalog Item" : "Add Service / Product"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                SKU (Catalog Code) *
              </label>
              <input
                type="text"
                required
                value={sku}
                onChange={(e) => setSku(e.target.value.toUpperCase())}
                placeholder="e.g. SEO-RETAINER-01"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              >
                <option value="SEO">SEO & Search Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="Paid Ads">Performance Marketing / PPC</option>
                <option value="Social Media">Social Media Marketing</option>
                <option value="Branding">Branding & Strategy</option>
                <option value="White Label">White Label Agency Services</option>
                <option value="Consulting">Consulting / Strategy</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Service / Item Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Monthly SEO Retainer — Growth Tier"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Short Description (Invoice Snapshot)
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Comprehensive technical SEO, keyword ranking monitoring, and bi-weekly content deliverables."
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                HSN / SAC Code (GST)
              </label>
              <input
                type="text"
                value={hsnSac}
                onChange={(e) => setHsnSac(e.target.value)}
                placeholder="998311 (IT Services)"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Billing Unit
              </label>
              <input
                type="text"
                required
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="month / project / hour"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Default Unit Price (₹ INR) *
              </label>
              <input
                type="number"
                required
                min={0}
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="15000"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                GST Tax Rate (%)
              </label>
              <select
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              >
                <option value={18}>18% (Standard IT/Marketing SAC)</option>
                <option value={12}>12%</option>
                <option value={5}>5%</option>
                <option value={0}>0% (Exempt)</option>
                <option value={28}>28%</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-xs text-gray-300">Active in Catalog</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {isEditing ? "Save Changes" : "Create Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemModal;
