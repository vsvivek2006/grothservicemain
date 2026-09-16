"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  PlusCircle,
  Building2,
  Edit3,
  Archive,
  Mail,
  Phone,
  Globe,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { StatusBadge, EmptyState } from "@/components/admin/shared";
import { ConfirmDialog } from "@/components/admin/ConfirmDialog";
import { ClientListItem } from "@/modules/billing/queries/clientQueries";
import { archiveClientAction } from "@/modules/billing/actions/clientActions";
import { ClientModal } from "./ClientModal";

interface ClientTableProps {
  initialClients: ClientListItem[];
}

export const ClientTable: React.FC<ClientTableProps> = ({ initialClients }) => {
  const router = useRouter();
  const [clients, setClients] = useState<ClientListItem[]>(initialClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientListItem | null>(null);
  const [archiveTarget, setArchiveTarget] = useState<{ id: string; name: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setClients(initialClients);
  }, [initialClients]);

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      searchTerm === "" ||
      client.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.client_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleOpenCreate = () => {
    setSelectedClient(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (client: ClientListItem) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const confirmArchive = () => {
    if (!archiveTarget) return;
    const { id, name } = archiveTarget;

    startTransition(async () => {
      try {
        const res = await archiveClientAction(id);
        if (res.success) {
          toast.success(`Client "${name}" archived`);
          setClients((prev) =>
            prev.map((c) => (c.id === id ? { ...c, status: "archived" } : c))
          );
          setArchiveTarget(null);
          router.refresh();
        } else {
          toast.error(res.error || "Failed to archive client");
        }
      } catch (err: unknown) {
        toast.error(err instanceof Error ? err.message : "Archive failed");
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-900 p-4 rounded-xl border border-gray-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by company, client code, or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-gray-800/80 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-hidden"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:border-purple-500 focus:outline-hidden"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive</option>
            <option value="archived">Archived</option>
          </select>

          <button
            type="button"
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Register Client</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      {filteredClients.length === 0 ? (
        <EmptyState
          icon={Building2}
          title="No clients found"
          description={
            searchTerm || statusFilter !== "all"
              ? "Try adjusting your search criteria or filters."
              : "Register your first corporate or individual client to start generating invoices."
          }
          action={
            <button
              type="button"
              onClick={handleOpenCreate}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Register Client
            </button>
          }
        />
      ) : (
        <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-800/60 text-gray-400 font-medium border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Primary Contact</th>
                  <th className="py-3 px-4">Billing State</th>
                  <th className="py-3 px-4">GSTIN</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80 text-gray-300">
                {filteredClients.map((client) => {
                  const bp = client.billing_profile;
                  return (
                    <tr
                      key={client.id}
                      className="hover:bg-gray-800/40 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">
                          {client.company_name}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-mono text-[10px] text-yellow-400/90 bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20">
                            {client.client_code}
                          </span>
                          {client.website && (
                            <a
                              href={client.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-gray-500 hover:text-purple-400 flex items-center gap-0.5"
                            >
                              <Globe className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="text-gray-200">{client.contact_name}</div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-gray-500" />
                            {client.email}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-gray-500" />
                            {client.phone}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap text-gray-300">
                        {bp ? (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                            <span>
                              {bp.city && bp.city !== bp.state && bp.city !== "N/A"
                                ? `${bp.city}, `
                                : ""}
                              {bp.state}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        {bp?.gstin ? (
                          <span className="font-mono text-[11px] text-purple-300">
                            {bp.gstin}
                          </span>
                        ) : bp?.pan ? (
                          <span className="font-mono text-[11px] text-yellow-400">
                            PAN: {bp.pan}
                          </span>
                        ) : (
                          <span className="text-gray-500 text-[11px]">Unregistered</span>
                        )}
                      </td>

                      <td className="py-3 px-4 whitespace-nowrap">
                        <StatusBadge status={client.status} type="generic" />
                      </td>

                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(client)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
                          >
                            <Edit3 className="w-3 h-3" />
                            Edit
                          </button>
                          {client.status !== "archived" && (
                            <button
                              type="button"
                              onClick={() => setArchiveTarget({ id: client.id, name: client.company_name })}
                              disabled={isPending}
                              title="Archive Client"
                              className="p-1 rounded text-gray-500 hover:text-rose-400 hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
                            >
                              <Archive className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Confirm Archive Dialog */}
      <ConfirmDialog
        isOpen={Boolean(archiveTarget)}
        title="Archive Client?"
        description={`Are you sure you want to archive "${archiveTarget?.name}"? Archived clients cannot be selected for new invoices until restored.`}
        confirmLabel="Archive Client"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={isPending}
        onConfirm={confirmArchive}
        onCancel={() => setArchiveTarget(null)}
      />

      {/* Modal */}
      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        client={selectedClient}
        onSuccess={() => {
          router.refresh();
        }}
      />
    </div>
  );
};

export default ClientTable;
