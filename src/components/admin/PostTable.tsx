"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  Edit3,
  Trash2,
  ExternalLink,
  Search,
  Sparkles,
  Loader2,
  FileText,
  PlusCircle,
  X,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import type { PostRecord } from "@/lib/validations/post";
import { deletePostAction } from "@/app/admin/blog/actions";
import { ConfirmDialog } from "./ConfirmDialog";

interface PostTableProps {
  initialPosts: PostRecord[];
}

export function PostTable({ initialPosts }: PostTableProps) {
  const [posts, setPosts] = useState<PostRecord[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    id: string;
    title: string;
  }>({
    isOpen: false,
    id: "",
    title: "",
  });

  // Calculate counts for filter pills
  const counts = useMemo(() => {
    return {
      all: posts.length,
      published: posts.filter((p) => p.status === "published").length,
      draft: posts.filter((p) => p.status === "draft").length,
    };
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q) ||
        (post.author && post.author.toLowerCase().includes(q));

      const matchesStatus =
        statusFilter === "all" ? true : post.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [posts, searchQuery, statusFilter]);

  const handleDeleteTrigger = (id: string, title: string) => {
    setConfirmDelete({
      isOpen: true,
      id,
      title,
    });
  };

  const handleConfirmDelete = async () => {
    const { id, title } = confirmDelete;
    if (!id) return;

    setDeletingId(id);
    try {
      const result = await deletePostAction(id);
      if (!result.success) {
        toast.error("Failed to delete post", { description: result.error });
        return;
      }

      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Post deleted successfully", {
        description: `"${title}" has been permanently removed.`,
      });
      setConfirmDelete({ isOpen: false, id: "", title: "" });
    } catch {
      toast.error("Unexpected error deleting post", {
        description: "Please check your network and try again.",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Reusable Custom Confirmation Modal */}
      <ConfirmDialog
        isOpen={confirmDelete.isOpen}
        title="Delete Blog Post?"
        description={`Are you sure you want to delete "${confirmDelete.title}"? This will permanently remove the post and cannot be undone.`}
        confirmLabel="Delete Post"
        cancelLabel="Cancel"
        isDestructive={true}
        isLoading={deletingId === confirmDelete.id}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, id: "", title: "" })}
      />

      {/* Controls Bar: Search & Status Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-sm">
        {/* Search */}
        <div className="relative flex-1 sm:max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by title, slug, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2 rounded-lg bg-gray-800 border border-gray-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-md cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Filter Buttons with Counters */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-gray-800 border border-gray-700 overflow-x-auto">
          {(
            [
              { key: "all", label: "All", count: counts.all },
              { key: "published", label: "Published", count: counts.published },
              { key: "draft", label: "Drafts", count: counts.draft },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setStatusFilter(tab.key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-all cursor-pointer whitespace-nowrap ${
                statusFilter === tab.key
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/60"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  statusFilter === tab.key
                    ? "bg-purple-800 text-yellow-300"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area: Empty State vs Cards (Mobile) vs Table (Desktop) */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-12 sm:p-16 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 mx-auto flex items-center justify-center text-gray-400">
            <FileText className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-sm font-bold text-white">
              {posts.length === 0
                ? "No blog posts yet"
                : "No matching posts found"}
            </h3>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              {posts.length === 0
                ? "Get started by drafting your first article manually or generating high-ranking SEO content with AI."
                : "We couldn't find any posts matching your search query or filter. Try clearing your filters."}
            </p>
          </div>
          {posts.length === 0 ? (
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Create First Post
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
              }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Mobile View: Responsive Cards (<640px) */}
          <div className="block sm:hidden space-y-3">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-xl border border-gray-800 bg-gray-900 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-white text-sm line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-400 mt-0.5 truncate">
                      /blog/{post.slug}
                    </p>
                  </div>
                  {post.status === "published" ? (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-400 border border-amber-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      Draft
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    {post.source === "ai" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded-md border border-purple-800/60">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                        AI
                      </span>
                    )}
                    {post.source === "ai-edited" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded-md border border-indigo-800/60">
                        <Sparkles className="w-2.5 h-2.5 text-indigo-400" />
                        AI-Edited
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {post.created_at
                        ? format(new Date(post.created_at), "MMM d, yyyy")
                        : "—"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {post.status === "published" && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white border border-gray-700 transition-colors"
                        title="View live post"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold border border-gray-700 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteTrigger(post.id, post.title)}
                      disabled={deletingId === post.id}
                      className="p-1.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/50 hover:text-white border border-rose-900/30 transition-colors disabled:opacity-50 cursor-pointer"
                      title="Delete post"
                    >
                      {deletingId === post.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet View: Table (>=640px) */}
          <div className="hidden sm:block rounded-xl border border-gray-800 bg-gray-900 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-800/60 text-gray-400 text-xs font-semibold uppercase tracking-wider border-b border-gray-800">
                  <tr>
                    <th className="py-3.5 px-5">Post Details</th>
                    <th className="py-3.5 px-5">Status</th>
                    <th className="py-3.5 px-5">Source</th>
                    <th className="py-3.5 px-5">Created</th>
                    <th className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-gray-300">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="hover:bg-gray-800/40 transition-colors group"
                    >
                      <td className="py-3.5 px-5">
                        <div className="font-semibold text-white max-w-sm lg:max-w-md truncate group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </div>
                        <div className="text-xs text-gray-400 font-mono mt-0.5 truncate max-w-sm">
                          /blog/{post.slug}
                        </div>
                      </td>

                      <td className="py-3.5 px-5 whitespace-nowrap">
                        {post.status === "published" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-400 border border-amber-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Draft
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-5 whitespace-nowrap">
                        {post.source === "ai" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/60">
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                            AI
                          </span>
                        )}
                        {post.source === "ai-edited" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                            <Sparkles className="w-3 h-3 text-indigo-400" />
                            AI-Edited
                          </span>
                        )}
                        {(!post.source || post.source === "manual") && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700">
                            Manual
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-5 text-xs text-gray-400 whitespace-nowrap">
                        {post.created_at
                          ? format(new Date(post.created_at), "MMM d, yyyy")
                          : "—"}
                      </td>

                      <td className="py-3.5 px-5 text-right whitespace-nowrap">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                              title="View live post"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          )}
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                            title="Edit post"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteTrigger(post.id, post.title)}
                            disabled={deletingId === post.id}
                            className="p-1.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 transition-colors disabled:opacity-50 cursor-pointer"
                            title="Delete post"
                          >
                            {deletingId === post.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
