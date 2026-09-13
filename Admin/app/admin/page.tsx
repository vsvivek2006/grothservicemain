import Link from "next/link";
import { format } from "date-fns";
import {
  PlusCircle,
  FileText,
  CheckCircle,
  Clock,
  Sparkles,
  Edit3,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";

export const revalidate = 0; // Fresh metrics on every dashboard load

export default async function AdminDashboardPage() {
  const supabase = createAdminClient();

  const [
    { count: totalCount },
    { count: publishedCount },
    { count: draftsCount },
    { data: recentPosts },
  ] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
    supabase
      .from("posts")
      .select("id, title, slug, status, source, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const posts = recentPosts || [];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Dashboard
          </h1>
          <p className="text-sm text-purple-200/80 mt-1">
            Real-time overview of content publishing metrics and recent post activity.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-purple-800/50 bg-purple-950/20 text-purple-200 hover:text-white hover:bg-purple-900/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-purple-400" />
            Live Blog
          </Link>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/40 transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            Create Post
          </Link>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Posts */}
        <div className="p-6 rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              Total Posts
            </span>
            <p className="text-3xl sm:text-4xl font-black text-white mt-2">
              {totalCount ?? 0}
            </p>
            <span className="text-xs text-purple-300/60 mt-1 inline-block">
              All drafts and published posts
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-700/30 flex items-center justify-center text-purple-400">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        {/* Published Posts */}
        <div className="p-6 rounded-2xl border border-emerald-900/40 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Published
            </span>
            <p className="text-3xl sm:text-4xl font-black text-emerald-400 mt-2">
              {publishedCount ?? 0}
            </p>
            <span className="text-xs text-emerald-300/60 mt-1 inline-block">
              Live on public blog
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-700/30 flex items-center justify-center text-emerald-400">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Drafts */}
        <div className="p-6 rounded-2xl border border-yellow-900/40 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
              Drafts
            </span>
            <p className="text-3xl sm:text-4xl font-black text-yellow-400 mt-2">
              {draftsCount ?? 0}
            </p>
            <span className="text-xs text-yellow-300/60 mt-1 inline-block">
              Unpublished / Under review
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-yellow-950/40 border border-yellow-700/30 flex items-center justify-center text-yellow-400">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md shadow-lg shadow-black/30 overflow-hidden">
        <div className="p-6 border-b border-purple-900/30 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Recent Activity</h2>
            <p className="text-xs text-purple-200/70 mt-0.5">
              Latest blog posts created or modified
            </p>
          </div>
          <Link
            href="/admin/blog"
            className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 transition-colors"
          >
            View all posts
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-800/40 mx-auto flex items-center justify-center text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-medium">No posts in the database yet</p>
              <p className="text-xs text-purple-300/70 mt-1">
                Start by writing a post manually or generating one using AI assistance.
              </p>
            </div>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Create First Post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-purple-950/40 text-purple-300 text-xs font-semibold uppercase tracking-wider border-b border-purple-900/30">
                <tr>
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Source (Internal)</th>
                  <th className="py-3 px-6">Created</th>
                  <th className="py-3 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-900/20 text-gray-300">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-purple-950/20 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-white max-w-xs truncate">
                      {post.title}
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
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 hover:text-white transition-colors border border-purple-700/30"
                      >
                        <Edit3 className="w-3 h-3" />
                        Edit
                      </Link>
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
