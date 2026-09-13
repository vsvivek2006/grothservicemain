"use client";

import { useState } from "react";
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
} from "lucide-react";
import { toast } from "sonner";
import type { PostRecord } from "@/lib/validations/post";
import { deletePostAction } from "@/app/admin/blog/actions";

interface PostTableProps {
  initialPosts: PostRecord[];
}

export function PostTable({ initialPosts }: PostTableProps) {
  const [posts, setPosts] = useState<PostRecord[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : post.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDelete = async (id: string, title: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (!confirmed) return;

    setDeletingId(id);
    try {
      const result = await deletePostAction(id);
      if (!result.success) {
        toast.error("Failed to delete post", { description: result.error });
        return;
      }

      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Post deleted successfully");
    } catch {
      toast.error("Unexpected error deleting post");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar: Search & Status Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search posts by title or slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/80 border border-purple-900/40 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-gray-800/80 border border-purple-900/40">
          {(["all", "published", "draft"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setStatusFilter(filter)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize transition-all cursor-pointer ${
                statusFilter === filter
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-300 hover:text-white hover:bg-purple-950/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table / Empty State */}
      <div className="rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md overflow-hidden shadow-xl shadow-black/20">
        {filteredPosts.length === 0 ? (
          <div className="p-16 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-800/40 mx-auto flex items-center justify-center text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-medium">
                {posts.length === 0
                  ? "No blog posts yet"
                  : "No posts match your search or filter"}
              </p>
              <p className="text-xs text-purple-300/70 mt-1">
                {posts.length === 0
                  ? "Create your first post manually or with AI generation."
                  : "Try clearing search filters."}
              </p>
            </div>
            {posts.length === 0 && (
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                Create First Post
              </Link>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-purple-950/40 text-purple-300 text-xs font-semibold uppercase tracking-wider border-b border-purple-900/30">
                <tr>
                  <th className="py-3.5 px-6">Title</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6">Source (Internal)</th>
                  <th className="py-3.5 px-6">Created</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900/20 text-gray-300">
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-purple-950/20 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="font-semibold text-white max-w-md truncate">
                        {post.title}
                      </div>
                      <div className="text-xs text-purple-300/60 font-mono mt-0.5">
                        /blog/{post.slug}
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      {post.status === "published" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-700/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-950/80 text-yellow-400 border border-yellow-700/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          Draft
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6">
                      {post.source === "ai" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-950 text-purple-300 border border-purple-700/40">
                          <Sparkles className="w-3 h-3 text-yellow-400" />
                          AI
                        </span>
                      )}
                      {post.source === "ai-edited" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950 text-indigo-300 border border-indigo-700/40">
                          <Sparkles className="w-3 h-3 text-indigo-400" />
                          AI-Edited
                        </span>
                      )}
                      {post.source === "manual" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
                          Manual
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6 text-xs text-purple-200/70">
                      {post.created_at
                        ? format(new Date(post.created_at), "MMM d, yyyy")
                        : "—"}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        {post.status === "published" && (
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                            title="View live post"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                          title="Edit post"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={deletingId === post.id}
                          className="p-2 rounded-lg text-rose-400 hover:text-rose-200 hover:bg-rose-950/40 transition-colors disabled:opacity-50 cursor-pointer"
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
        )}
      </div>
    </div>
  );
}
