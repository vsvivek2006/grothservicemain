"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, PlusCircle, Package, Edit3, CheckCircle2, XCircle, Tag } from "lucide-react";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { StatusBadge, EmptyState } from "@/components/admin/shared";
import { BillingItem } from "@/modules/billing/types/database";
import { toggleBillingItemActiveAction } from "@/modules/billing/actions/itemActions";

const ItemModal = dynamic(
  () => import("./ItemModal").then((mod) => mod.ItemModal),
  { ssr: false }
);

interface ItemTableProps {
  initialItems: BillingItem[];
}

export const ItemTable: React.FC<ItemTableProps> = ({ initialItems }) => {
  const router = useRouter();
  const [items, setItems] = useState<BillingItem[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BillingItem | null>(null);
  const [isPending, startTransition] = useTransition();

  const pageSize = 15;

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

  const categories = Array.from(
    new Set(items.map((i) => i.service_category).filter(Boolean))
  ) as string[];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.hsn_sac_code && item.hsn_sac_code.includes(searchTerm));

    const matchesCategory =
      categoryFilter === "all" || item.service_category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalFiltered = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);

  const handleOpenCreate = () => {
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: BillingItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleToggleActive = (id: string, currentStatus: boolean, name: string) => {
    startTransition(async () => {
      try {
        const nextStatus = !currentStatus;
        const res = await toggleBillingItemActiveAction(id, nextStatus);
        if (res.success) {
          toast.success(`"${name}" is now ${nextStatus ? "active" : "inactive"}`);
          setItems((prev) =>
            prev.map((i) => (i.id === id ? { ...i, is_active: nextStatus } : i))
          );
        } else {
          toast.error(res.error || "Failed to update status");
        }
      } catch (err: unknown) {
        toast.error(err instanceof Error ? err.message : "Update failed");
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
            placeholder="Search by item name, SKU, or SAC code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-gray-800/80 border border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-hidden"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:border-purple-500 focus:outline-hidden"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      {filteredItems.length === 0 ? (
        <EmptyState
          icon={Package}
          title="No items in catalog"
          description={
            searchTerm || categoryFilter !== "all"
              ? "No items match your filter criteria."
              : "Create reusable service or product catalog items with default pricing and HSN/SAC codes."
          }
          action={
            <button
              type="button"
              onClick={handleOpenCreate}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Add First Item
            </button>
          }
        />
      ) : (
        <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-800/60 text-gray-400 font-medium border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Item & SKU</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">HSN / SAC</th>
                  <th className="py-3 px-4">Unit Price</th>
                  <th className="py-3 px-4">GST Rate</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80 text-gray-300">
                {paginatedItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-[10px] text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-900/50">
                          {item.sku}
                        </span>
                        <span className="text-[11px] text-gray-500 capitalize">
                          /{item.unit}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      {item.service_category ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-gray-800 text-gray-300 border border-gray-700">
                          <Tag className="w-3 h-3 text-gray-400" />
                          {item.service_category}
                        </span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap font-mono text-[11px] text-gray-400">
                      {item.hsn_sac_code || "—"}
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-semibold text-white">
                        ₹{Number(item.default_unit_price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                      </span>
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-mono text-[11px] text-yellow-400/90 bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20">
                        {item.default_tax_rate}% GST
                      </span>
                    </td>

                    <td className="py-3 px-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleToggleActive(item.id, item.is_active, item.name)}
                        disabled={isPending}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium cursor-pointer"
                      >
                        {item.is_active ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Active
                          </span>
                        ) : (
                          <span className="text-gray-500 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" />
                            Inactive
                          </span>
                        )}
                      </button>
                    </td>

                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(item)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <Edit3 className="w-3 h-3" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-xs text-gray-400">
          <div>
            Showing {startIndex + 1}–{Math.min(startIndex + pageSize, totalFiltered)} of {totalFiltered} items (Page {currentPage} of {totalPages})
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onSuccess={() => {
          startTransition(() => {
            router.refresh();
          });
        }}
      />
    </div>
  );
};

export default ItemTable;
