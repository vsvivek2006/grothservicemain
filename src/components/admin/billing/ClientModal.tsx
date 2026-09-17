"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2, Building2 } from "lucide-react";
import { toast } from "sonner";
import { createClientAction, updateClientAction } from "@/modules/billing/actions/clientActions";
import { ClientListItem } from "@/modules/billing/queries/clientQueries";
import { INDIAN_STATES } from "@/modules/billing/constants/indianStates";

export { INDIAN_STATES };

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client?: ClientListItem | null;
  onSuccess?: () => void;
  onClientCreated?: (newClient: ClientListItem) => void;
}

export const ClientModal: React.FC<ClientModalProps> = ({
  isOpen,
  onClose,
  client,
  onSuccess,
  onClientCreated,
}) => {
  const isEditing = Boolean(client);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Core Essential Fields
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("Rajasthan");
  const [stateCode, setStateCode] = useState("08");

  // Optional Identity / Tax Numbers
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [status, setStatus] = useState<"active" | "inactive" | "archived">("active");

  useEffect(() => {
    if (client) {
      setCompanyName(client.company_name || "");
      setEmail(client.email || "");
      setPhone(client.phone || "");
      setWebsite(client.website || "");
      setStatus((client.status as "active" | "inactive" | "archived") || "active");

      const bp = client.billing_profile;
      if (bp) {
        setGstin(bp.gstin || "");
        setPan(bp.pan || "");
        setState(bp.state || "Rajasthan");
        setStateCode(bp.state_code || "08");
        setAddressLine1(bp.address_line_1 && bp.address_line_1 !== "N/A" ? bp.address_line_1 : "");
        setCity(bp.city && bp.city !== "N/A" ? bp.city : "");
        setPostalCode(bp.postal_code && bp.postal_code !== "000000" ? bp.postal_code : "");
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
      setStatus("active");
      setAddressLine1("");
      setCity("");
      setPostalCode("");
      setState("Rajasthan");
      setStateCode("08");
      setGstin("");
      setPan("");
      setAadhaar("");
    }
  }, [client, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSubmitting, onClose]);

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
      status: isEditing ? status : "active",
      billing_profile: {
        legal_name: cleanCompany,
        address_line_1: addressLine1.trim() || "N/A",
        city: city.trim() || state,
        state: state,
        state_code: stateCode,
        postal_code: postalCode.trim() || "000000",
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
      if (!isEditing && res.data && onClientCreated) {
        onClientCreated({
          ...res.data,
          billing_profile: {
            id: "",
            client_id: res.data.id,
            legal_name: payload.billing_profile.legal_name,
            display_name: null,
            billing_email: payload.email,
            billing_phone: payload.phone,
            address_line_1: payload.billing_profile.address_line_1,
            address_line_2: null,
            city: payload.billing_profile.city,
            district: null,
            state: payload.billing_profile.state,
            state_code: payload.billing_profile.state_code,
            postal_code: payload.billing_profile.postal_code,
            country: payload.billing_profile.country,
            gstin: payload.billing_profile.gstin || null,
            pan: payload.billing_profile.pan || null,
            tax_registration_type: payload.billing_profile.tax_registration_type,
            place_of_supply_state: payload.billing_profile.state,
            place_of_supply_state_code: payload.billing_profile.state_code,
            currency: "INR",
            payment_terms_days: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          contacts_count: 0,
        });
      }
      if (onSuccess) onSuccess();
      onClose();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Submission error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => {
          if (!isSubmitting) onClose();
        }}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 shrink-0">
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
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="p-6 space-y-4 flex-1 overflow-y-auto min-h-0">
            {/* 1. Client / Company Name & Status */}
            <div className={isEditing ? "grid grid-cols-1 sm:grid-cols-3 gap-3" : ""}>
              <div className={isEditing ? "sm:col-span-2" : ""}>
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

              {isEditing && (
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as "active" | "inactive" | "archived")}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              )}
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

          {/* 3. Website */}
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

          {/* 4. Billing Address Details */}
          <div className="space-y-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Street Address <span className="text-gray-500 font-normal">(Invoice Header)</span>
              </label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                placeholder="e.g. 123 Business Tower, Tech Zone"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Jaipur"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs focus:border-purple-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  State / POS <span className="text-rose-400">*</span>
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

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  PIN Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                  placeholder="302017"
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-xs font-mono focus:border-purple-500 focus:outline-hidden"
                />
              </div>
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
        </div>

        {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 px-6 py-3.5 border-t border-gray-800 bg-gray-900/95 shrink-0">
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
