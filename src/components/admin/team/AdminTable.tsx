"use client";

import React, { useState, useEffect, useMemo, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  PlusCircle,
  ShieldCheck,
  Shield,
  UserCheck,
  Edit3,
  Trash2,
  Users,
  Clock,
  Mail,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import type { AdminRole } from "@/lib/authorization";
import type { TeamMember } from "@/modules/admin/queries/teamQueries";
import { deleteAdminAction } from "@/modules/admin/actions/teamActions";
import { formatDate } from "@/lib/formatters";

const AdminModal = dynamic(
  () => import("./AdminModal").then((mod) => mod.AdminModal),
  { ssr: false }
);

interface AdminTableProps {
  initialMembers: TeamMember[];
  currentUserId: string;
  currentUserRole: AdminRole;
}

const ROLE_STYLES: Record<
  AdminRole,
  { label: string; badgeClass: string; icon: typeof Shield }
> = {
  superadmin: {
    label: "Super Admin",
    badgeClass: "bg-purple-950/80 text-yellow-400 border-purple-800/60",
    icon: ShieldCheck,
  },
  admin: {
    label: "Administrator",
    badgeClass: "bg-blue-950/80 text-blue-300 border-blue-800/60",
    icon: Shield,
  },
  billing_manager: {
    label: "Billing Manager",
    badgeClass: "bg-indigo-950/80 text-indigo-300 border-indigo-800/60",
    icon: UserCheck,
  },
  editor: {
    label: "Content Editor",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border-emerald-800/60",
    icon: Edit3,
  },
};

export const AdminTable: React.FC<AdminTableProps> = ({
  initialMembers,
  currentUserId,
  currentUserRole,
}) => {
  const router = useRouter();
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<TeamMember | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMembers(initialMembers);
  }, [initialMembers]);

  const filteredMembers = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return members.filter((m) => {
      const matchesSearch =
        !term ||
        m.name.toLowerCase().includes(term) ||
        m.email.toLowerCase().includes(term);

      const matchesRole = roleFilter === "all" || m.role === roleFilter;

      return matchesSearch && matchesRole;
    });
  }, [members, searchTerm, roleFilter]);

  const { superAdminCount, adminCount, staffCount } = useMemo(() => {
    let superAdmin = 0;
    let admin = 0;
    let staff = 0;
    for (const m of members) {
      if (m.role === "superadmin") superAdmin++;
      else if (m.role === "admin") admin++;
      else if (m.role === "billing_manager" || m.role === "editor") staff++;
    }
    return { superAdminCount: superAdmin, adminCount: admin, staffCount: staff };
  }, [members]);

  const handleOpenCreate = () => {
    setEditingMember(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (member: TeamMember) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleSuccess = (savedMember: TeamMember) => {
    setMembers((prev) => {
      const idx = prev.findIndex((m) => m.id === savedMember.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = savedMember;
        return next;
      }
      return [savedMember, ...prev];
    });
    router.refresh();
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    const target = deleteTarget;

    startTransition(async () => {
      try {
        const res = await deleteAdminAction(target.id);
        if (res.success) {
          toast.success(`Administrator "${target.name}" removed successfully`);
          setMembers((prev) => prev.filter((m) => m.id !== target.id));
          setDeleteTarget(null);
          router.refresh();
        } else {
          toast.error(res.error || "Failed to remove administrator");
        }
      } catch {
        toast.error("An unexpected error occurred while deleting user.");
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-purple-900/40 text-purple-400 border border-purple-800/40">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{members.length}</div>
            <div className="text-xs text-gray-400 font-medium">Total Administrators</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-yellow-950/40 text-yellow-400 border border-yellow-800/40">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{superAdminCount}</div>
            <div className="text-xs text-gray-400 font-medium">Super Administrators</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-950/40 text-blue-400 border border-blue-800/40">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{adminCount + staffCount}</div>
            <div className="text-xs text-gray-400 font-medium">Admins & Staff Managers</div>
          </div>
        </div>
      </div>

      {/* Filter and Action Bar */}
      <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1 max-w-xl">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search admin by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2 text-xs bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500 cursor-pointer"
          >
            <option value="all">All Roles ({members.length})</option>
            <option value="superadmin">Super Admin ({superAdminCount})</option>
            <option value="admin">Administrator ({adminCount})</option>
            <option value="billing_manager">Billing Manager</option>
            <option value="editor">Content Editor</option>
          </select>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleOpenCreate}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white transition-all shadow-xs cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add Administrator</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-gray-800/60 text-[11px] uppercase tracking-wider text-gray-400 font-semibold border-b border-gray-800">
              <tr>
                <th className="px-5 py-3.5">Administrator</th>
                <th className="px-4 py-3.5">Role</th>
                <th className="px-4 py-3.5 hidden md:table-cell">Created</th>
                <th className="px-4 py-3.5 hidden lg:table-cell">Last Sign In</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    <AlertCircle className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-300">No administrators found</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {searchTerm
                        ? "Try searching with a different keyword."
                        : "Click 'Add Administrator' above to provision a profile."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member) => {
                  const roleConfig = ROLE_STYLES[member.role] || ROLE_STYLES.admin;
                  const Icon = roleConfig.icon;
                  const isSelf = member.id === currentUserId;
                  const isTargetSuper = member.role === "superadmin";

                  // Regular admin cannot edit or delete superadmin
                  const canEdit =
                    currentUserRole === "superadmin" ||
                    !isTargetSuper ||
                    isSelf;
                  const canDelete =
                    !isSelf &&
                    (currentUserRole === "superadmin" || !isTargetSuper);

                  return (
                    <tr
                      key={member.id}
                      className="hover:bg-gray-800/40 transition-colors"
                    >
                      {/* Name & Email */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-purple-900/50 border border-purple-700/50 flex items-center justify-center font-bold text-sm text-yellow-400 shrink-0">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white truncate">
                                {member.name}
                              </span>
                              {isSelf && (
                                <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-purple-900/60 text-purple-300 border border-purple-700/40">
                                  You
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400 text-[11px] truncate">
                              <Mail className="w-3 h-3 text-gray-500 shrink-0" />
                              <span className="truncate">{member.email}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border ${roleConfig.badgeClass}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {roleConfig.label}
                        </span>
                      </td>

                      {/* Created Date */}
                      <td className="px-4 py-4 text-gray-400 hidden md:table-cell">
                        {formatDate(member.created_at)}
                      </td>

                      {/* Last Sign In */}
                      <td className="px-4 py-4 text-gray-400 hidden lg:table-cell">
                        {member.last_sign_in_at ? (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-gray-500" />
                            <span>{formatDate(member.last_sign_in_at)}</span>
                          </div>
                        ) : (
                          <span className="text-gray-500 italic">Never</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          {canEdit && (
                            <button
                              type="button"
                              onClick={() => handleOpenEdit(member)}
                              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                              title={isSelf ? "Edit Your Profile" : "Edit Profile"}
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                          )}

                          {canDelete && (
                            <button
                              type="button"
                              onClick={() => setDeleteTarget(member)}
                              className="p-1.5 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-gray-800 transition-colors"
                              title="Delete Administrator"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Modal */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
        editingMember={editingMember}
        currentUserRole={currentUserRole}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={Boolean(deleteTarget)}
        title="Delete Administrator Profile"
        description={`Are you sure you want to permanently remove administrator "${deleteTarget?.name}" (${deleteTarget?.email})? They will immediately lose all access to the admin portal.`}
        confirmLabel="Yes, Delete User"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={isPending}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
};
