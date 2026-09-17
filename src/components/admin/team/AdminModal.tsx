"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2, ShieldCheck, User, Mail, Lock, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import type { AdminRole } from "@/lib/authorization";
import type { TeamMember } from "@/modules/admin/queries/teamQueries";
import {
  createAdminAction,
  updateAdminAction,
} from "@/modules/admin/actions/teamActions";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (member: TeamMember) => void;
  editingMember: TeamMember | null;
  currentUserRole: AdminRole;
}

const ROLE_LABELS: Record<AdminRole, { label: string; desc: string }> = {
  superadmin: {
    label: "Super Admin",
    desc: "Full system authority, user management, billing, and content.",
  },
  admin: {
    label: "Administrator",
    desc: "Manage billing, blog, and staff profiles (cannot touch superadmins).",
  },
  billing_manager: {
    label: "Billing Manager",
    desc: "Access to clients, catalog, invoices, payments, and ledger only.",
  },
  editor: {
    label: "Content Editor",
    desc: "Access to blog publishing and media uploads only.",
  },
};

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  editingMember,
  currentUserRole,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<AdminRole>("admin");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isEdit = Boolean(editingMember);

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name);
      setEmail(editingMember.email);
      setRole(editingMember.role);
      setPassword("");
    } else {
      setName("");
      setEmail("");
      setRole(currentUserRole === "superadmin" ? "admin" : "billing_manager");
      setPassword("");
    }
    setErrorMsg(null);
  }, [editingMember, isOpen, currentUserRole]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg("Full name is required.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!isEdit && (!password || password.length < 8)) {
      setErrorMsg("Password must be at least 8 characters long.");
      return;
    }

    if (isEdit && password && password.length < 8) {
      setErrorMsg("New password must be at least 8 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEdit && editingMember) {
        const res = await updateAdminAction(editingMember.id, {
          name: name.trim(),
          email: email.trim(),
          role,
          password: password.trim() ? password.trim() : undefined,
        });

        if (res.success) {
          toast.success(`Profile for "${res.data.name}" updated successfully`);
          onSuccess(res.data);
          onClose();
        } else {
          setErrorMsg(res.error || "Failed to update profile.");
          toast.error(res.error || "Failed to update profile.");
        }
      } else {
        const res = await createAdminAction({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
          role,
        });

        if (res.success) {
          toast.success(`Administrator "${res.data.name}" created successfully`);
          onSuccess(res.data);
          onClose();
        } else {
          setErrorMsg(res.error || "Failed to create administrator.");
          toast.error(res.error || "Failed to create administrator.");
        }
      }
    } catch {
      setErrorMsg("An unexpected system error occurred.");
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden text-gray-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400 border border-purple-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                {isEdit ? "Edit Administrator Profile" : "Add New Administrator"}
              </h2>
              <p className="text-xs text-gray-400">
                {isEdit
                  ? "Update role, profile details, or reset credentials."
                  : "Provision a new admin account with dedicated role boundaries."}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-950/50 border border-rose-800/50 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@growthservice.in"
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Role Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              System Role <span className="text-rose-400">*</span>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as AdminRole)}
              className="w-full px-3 py-2 text-sm bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors cursor-pointer"
            >
              {currentUserRole === "superadmin" && (
                <option value="superadmin">Super Admin (Full System Authority)</option>
              )}
              <option value="admin">Administrator (Billing, Content & Staff)</option>
              <option value="billing_manager">Billing Manager (Invoices & Payments Only)</option>
              <option value="editor">Content Editor (Blog & Media Only)</option>
            </select>
            <p className="text-[11px] text-gray-400 mt-1">
              {ROLE_LABELS[role]?.desc}
            </p>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300">
              {isEdit ? "Reset Password (Optional)" : "Account Password"}{" "}
              {!isEdit && <span className="text-rose-400">*</span>}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isEdit ? "Leave empty to keep existing password" : "Minimum 8 characters"}
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
            </div>
            {isEdit && (
              <p className="text-[10px] text-gray-500">
                Provide a new password only if you want to immediately reset this user&apos;s credentials.
              </p>
            )}
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white transition-all shadow-xs disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <span>{isEdit ? "Update Profile" : "Create Administrator"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
