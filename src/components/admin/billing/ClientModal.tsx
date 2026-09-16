"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2, Building2 } from "lucide-react";
import { toast } from "sonner";
import { createClientAction, updateClientAction } from "@/modules/billing/actions/clientActions";
import { ClientListItem } from "@/modules/billing/queries/clientQueries";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client?: ClientListItem | null;
  onSuccess?: () => void;
}

export const INDIAN_STATES = [
  { name: "Rajasthan", code: "08" },
  { name: "Maharashtra", code: "27" },
  { name: "Delhi", code: "07" },
  { name: "Karnataka", code: "29" },
  { name: "Uttar Pradesh", code: "09" },
  { name: "Gujarat", code: "24" },
  { name: "Haryana", code: "06" },
  { name: "Tamil Nadu", code: "33" },
  { name: "Telangana", code: "36" },
  { name: "West Bengal", code: "19" },
  { name: "Punjab", code: "03" },
  { name: "Madhya Pradesh", code: "23" },
  { name: "Bihar", code: "10" },
  { name: "Kerala", code: "32" },
  { name: "Andhra Pradesh", code: "37" },
  { name: "Odisha", code: "21" },
  { name: "Assam", code: "18" },
  { name: "Jharkhand", code: "20" },
  { name: "Uttarakhand", code: "05" },
  { name: "Himachal Pradesh", code: "02" },
  { name: "Goa", code: "30" },
  { name: "Chandigarh", code: "04" },
  { name: "Jammu and Kashmir", code: "01" },
  { name: "Chhattisgarh", code: "22" },
  { name: "Puducherry", code: "34" },
];

export const ClientModal: React.FC<ClientModalProps> = ({
  isOpen,
  onClose,
  client,
  onSuccess,
}) => {
  const isEditing = Boolean(client);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Core Essential Fields
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState("Rajasthan");
  const [stateCode, setStateCode] = useState("08");

  // Optional Identity / Tax Numbers
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  useEffect(() => {
    if (client) {
      setCompanyName(client.company_name || "");
      setEmail(client.email || "");
      setPhone(client.phone || "");
      setWebsite(client.website || "");

      const bp = client.billing_profile;
      if (bp) {
        setGstin(bp.gstin || "");
        setPan(bp.pan || "");
        setState(bp.state || "Rajasthan");
        setStateCode(bp.state_code || "08");
      }

      // Check for saved Aadhaar in client notes
      if (client.notes) {
        const match = client.notes.match(/Aadhaar:\s*([0-9\s]+)/i);
        if (match) {
          setAadhaar(match[1].trim());
        }
      }
    } else {
      // Reset form
      setCompanyName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setState("Rajasthan");
      setStateCode("08");
      setGstin("");
      setPan("");
      setAadhaar("");
    }
  }, [client, isOpen]);

  if (!isOpen) return null;

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const found = INDIAN_STATES.find((s) => s.code === selectedCode);
    if (found) {
      setState(found.name);
      setStateCode(found.code);
    }
  };

  const handleGstinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 15);
    setGstin(raw);

    // Auto-detect state code from first 2 digits of GSTIN
    if (raw.length >= 2) {
      const code = raw.slice(0, 2);
      const matched = INDIAN_STATES.find((s) => s.code === code);
      if (matched) {
        setState(matched.name);
        setStateCode(matched.code);
      }
    }

    // Auto-extract PAN from GSTIN (characters 3-12) if PAN not manually set
    if (raw.length === 15 && !pan) {
      setPan(raw.slice(2, 12));
    }
  };

  const handlePanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^0-9A-Z]/g, "").slice(0, 10);
    setPan(raw);
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/[^0-9]/g, "").slice(0, 12);
    const formatted = digitsOnly.match(/.{1,4}/g)?.join(" ") || digitsOnly;
    setAadhaar(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanCompany = companyName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanWebsite = website.trim()
      ? website.trim().startsWith("http")
        ? website.trim()
        : `https://${website.trim()}`
      : "";
    const cleanGstin = gstin.trim().toUpperCase();
    const cleanPan = pan.trim().toUpperCase() || (cleanGstin.length === 15 ? cleanGstin.slice(2, 12) : "");
    const cleanAadhaar = aadhaar.trim();

    const notesContent = cleanAadhaar
      ? `Aadhaar: ${cleanAadhaar}`
      : (client?.notes || "");

    const payload = {
      company_name: cleanCompany,
      contact_name: cleanCompany,
      email: cleanEmail,
      phone: cleanPhone,
      website: cleanWebsite || undefined,
      notes: notesContent,
      status: (client?.status || "active") as "active" | "inactive" | "archived",
      billing_profile: {
        legal_name: cleanCompany,
        address_line_1: "N/A",
        city: state,
        state: state,
        state_code: stateCode,
        postal_code: "000000",
        country: "India",
        gstin: cleanGstin || "",
        pan: cleanPan || "",
        tax_registration_type: cleanGstin ? ("regular" as const) : ("unregistered" as const),
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-400" />
            <h2 className="text-base font-bold text-white tracking-tight">
              {isEditing ? "Edit Client" : "Register New Client"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* 1. Client / Company Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Client / Company Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              required
              autoFocus
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Acme Technologies"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
            />
          </div>

          {/* 2. Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="billing@company.com"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Phone Number <span className="text-rose-400">*</span>
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
          </div>

          {/* 3. Website & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Website URL <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://company.com"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                State / Place of Supply <span className="text-rose-400">*</span>
              </label>
              <select
                value={stateCode}
                onChange={handleStateSelect}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              >
                {INDIAN_STATES.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name} ({s.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 4. GSTIN, PAN & Aadhaar (All Optional) */}
          <div className="pt-2 border-t border-gray-800/80">
            <p className="text-[11px] font-semibold text-gray-400 mb-2">
              Tax &amp; Identity Numbers (Optional)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  GSTIN
                </label>
                <input
                  type="text"
                  maxLength={15}
                  value={gstin}
                  onChange={handleGstinChange}
                  placeholder="08AAAAA0000A1Z5"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden uppercase"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  PAN
                </label>
                <input
                  type="text"
                  maxLength={10}
                  value={pan}
                  onChange={handlePanChange}
                  placeholder="AAAAA0000A"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden uppercase"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  Aadhaar
                </label>
                <input
                  type="text"
                  maxLength={14}
                  value={aadhaar}
                  onChange={handleAadhaarChange}
                  placeholder="XXXX XXXX XXXX"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white rounded-lg shadow-md shadow-purple-950/40 transition-colors disabled:opacity-50 cursor-pointer"
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
