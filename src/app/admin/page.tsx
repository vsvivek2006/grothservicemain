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
  let totalCount = 0;
  let publishedCount = 0;
  let draftsCount = 0;
  let posts: any[] = [];

  try {
    const supabase = createAdminClient();

    const [
      { count: tCount },
      { count: pCount },
      { count: dCount },
      { data: recentPosts },
    ] = await Promise.all([
      supabase.from("posts").select("*", { count: "exact", head: true }),
      supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "published"),
      supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
      supabase
        .from("posts")
        .select("id, title, slug, status, source, created_at")
        .order("created_at", { ascending: false })
        .limit(6),
    ]);

    totalCount = tCount ?? 0;
    publishedCount = pCount ?? 0;
    draftsCount = dCount ?? 0;
    posts = recentPosts || [];
  } catch (err) {
    console.error("Dashboard data fetch error:", err);
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-gray-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Content publishing metrics and recent article activity.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-700 bg-gray-900 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Blog
          </Link>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            Create Post
          </Link>
        </div>
      </div>

      {/* Metrics Cards Grid (Simple, Flat Minimalist) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Articles */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Total Posts</span>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {totalCount}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              All drafts and published posts
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400">
            <FileText className="w-5 h-5" />
          </div>
        </div>

        {/* Published */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Published</span>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
              {publishedCount}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              Live on website
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-900/40 flex items-center justify-center text-emerald-400">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        {/* Drafts */}
        <div className="p-5 rounded-xl border border-gray-800 bg-gray-900 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-gray-400">Drafts</span>
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
              {draftsCount}
            </p>
            <span className="text-[11px] text-gray-500 mt-0.5 block">
              In review or unpublished
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-950/50 border border-amber-900/40 flex items-center justify-center text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/admin/blog/new"
          className="p-4 rounded-xl border border-gray-800 bg-gray-900 hover:border-gray-700 hover:bg-gray-800/60 transition-colors flex items-center justify-between"
        >
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs font-semibold text-white">
                AI Article Generator
              </h3>
            </div>
            <p className="text-[11px] text-gray-400">
              Draft high-converting SEO posts tailored to Growth Service.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500" />
        </Link>

        <Link
          href="/admin/blog"
          className="p-4 rounded-xl border border-gray-800 bg-gray-900 hover:border-gray-700 hover:bg-gray-800/60 transition-colors flex items-center justify-between"
        >
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">
                Manage All Articles
              </h3>
            </div>
            <p className="text-[11px] text-gray-400">
              Search, filter, edit status, or update existing articles.
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-500" />
        </Link>
      </div>

      {/* Recent Posts Section */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-white">Recent Articles</h2>
            <p className="text-[11px] text-gray-400">
              Latest additions to your publication pipeline
            </p>
          </div>
          <Link
            href="/admin/blog"
            className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium transition-colors"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="p-10 text-center space-y-3">
            <FileText className="w-8 h-8 text-gray-600 mx-auto" />
            <div>
              <p className="text-xs font-medium text-white">No posts in the database yet</p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Create your first article manually or generate one with AI assistance.
              </p>
            </div>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Create First Post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-800/60 text-gray-400 font-medium border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Created</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80 text-gray-300">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-800/40 transition-colors">
                    <td className="py-3 px-4 font-medium text-white max-w-xs truncate">
                      {post.title}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {post.status === "published" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-900/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-950/70 text-amber-400 border border-amber-900/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {post.source === "ai" && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-purple-400 font-medium">
                          <Sparkles className="w-3 h-3" />
                          AI
                        </span>
                      )}
                      {post.source === "ai-edited" && (
                        <span className="text-[11px] text-indigo-400 font-medium">
                          AI-Edited
                        </span>
                      )}
                      {(!post.source || post.source === "manual") && (
                        <span className="text-[11px] text-gray-400">Manual</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-400 whitespace-nowrap">
                      {post.created_at
                        ? format(new Date(post.created_at), "MMM d, yyyy")
                        : "—"}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
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
