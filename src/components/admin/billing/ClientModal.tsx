"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2, Building2, MapPin, FileCheck } from "lucide-react";
import { toast } from "sonner";
import { createClientAction, updateClientAction } from "@/modules/billing/actions/clientActions";
import { ClientListItem } from "@/modules/billing/queries/clientQueries";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client?: ClientListItem | null;
  onSuccess?: () => void;
}

export const ClientModal: React.FC<ClientModalProps> = ({
  isOpen,
  onClose,
  client,
  onSuccess,
}) => {
  const isEditing = Boolean(client);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"active" | "inactive" | "archived">("active");

  // Billing Profile State
  const [legalName, setLegalName] = useState("");
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Rajasthan");
  const [stateCode, setStateCode] = useState("08");
  const [postalCode, setPostalCode] = useState("");
  const [taxRegType, setTaxRegType] = useState("regular");

  useEffect(() => {
    if (client) {
      setCompanyName(client.company_name || "");
      setContactName(client.contact_name || "");
      setEmail(client.email || "");
      setPhone(client.phone || "");
      setWebsite(client.website || "");
      setStatus(client.status || "active");

      const bp = client.billing_profile;
      if (bp) {
        setLegalName(bp.legal_name || "");
        setGstin(bp.gstin || "");
        setPan(bp.pan || "");
        setAddressLine1(bp.address_line_1 || "");
        setCity(bp.city || "");
        setState(bp.state || "Rajasthan");
        setStateCode(bp.state_code || "08");
        setPostalCode(bp.postal_code || "");
        setTaxRegType(bp.tax_registration_type || "regular");
      }
    } else {
      // Reset form
      setCompanyName("");
      setContactName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setStatus("active");
      setLegalName("");
      setGstin("");
      setPan("");
      setAddressLine1("");
      setCity("");
      setState("Rajasthan");
      setStateCode("08");
      setPostalCode("");
      setTaxRegType("regular");
    }
  }, [client, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      company_name: companyName,
      contact_name: contactName,
      email,
      phone,
      website: website ? (website.startsWith("http") ? website : `https://${website}`) : "",
      status,
      billing_profile: {
        legal_name: legalName || companyName,
        address_line_1: addressLine1,
        city,
        state,
        state_code: stateCode,
        postal_code: postalCode,
        country: "India",
        gstin: gstin ? gstin.toUpperCase().trim() : "",
        pan: pan ? pan.toUpperCase().trim() : "",
        tax_registration_type: taxRegType as any,
        currency: "INR",
        payment_terms_days: 0,
      },
      contacts: [],
    };

    try {
      const res = isEditing && client
        ? await updateClientAction(client.id, payload)
        : await createClientAction(payload);

      if (!res.success) {
        toast.error(res.error || "Operation failed");
        setIsSubmitting(false);
        return;
      }

      toast.success(isEditing ? "Client updated successfully" : "Client registered successfully");
      if (onSuccess) onSuccess();
      onClose();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-400" />
            <h2 className="text-base font-semibold text-white">
              {isEditing ? "Edit Client" : "Register New Client"}
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Section 1: Business Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
              1. Business Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Technologies"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Primary Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="billing@acme.com"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Website URL
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://acme.com"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Client Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Billing & GST Details */}
          <div className="space-y-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                2. Billing Profile & Tax
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Legal Registered Name
                </label>
                <input
                  type="text"
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                  placeholder="Defaults to company name"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Tax Registration Type
                </label>
                <select
                  value={taxRegType}
                  onChange={(e) => setTaxRegType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                >
                  <option value="regular">Regular GST Registered</option>
                  <option value="composition">Composition Scheme</option>
                  <option value="unregistered">Unregistered Business</option>
                  <option value="consumer">Consumer (B2C)</option>
                  <option value="overseas">Overseas (Export of Services)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  GSTIN (Optional)
                </label>
                <input
                  type="text"
                  maxLength={15}
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value.toUpperCase())}
                  placeholder="08AAAAA0000A1Z5"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  PAN (Optional)
                </label>
                <input
                  type="text"
                  maxLength={10}
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  placeholder="AAAAA0000A"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Billing Address */}
          <div className="space-y-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                3. Address & Place of Supply
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Billing Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  placeholder="Suite / Floor / Street Name"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Jaipur"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  State *
                </label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Rajasthan"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  State Code (GST) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={5}
                  value={stateCode}
                  onChange={(e) => setStateCode(e.target.value)}
                  placeholder="08"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  required
                  maxLength={10}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="302001"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>
            </div>
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
              {isEditing ? "Save Changes" : "Register Client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientModal;
