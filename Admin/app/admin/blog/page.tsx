import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { PostTable } from "@/components/admin/PostTable";
import type { PostRecord } from "@/lib/validations/post";

export const revalidate = 0; // Always fresh list

export default async function AdminBlogListPage() {
  const supabase = createAdminClient();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, slug, content, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error.message);
  }

  const postList = (posts || []) as PostRecord[];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Blog Posts
          </h1>
          <p className="text-sm text-purple-200/80 mt-1">
            Manage, draft, edit, and publish your blog articles.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/40 transition-all cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          Create Post
        </Link>
      </div>

      <PostTable initialPosts={postList} />
    </div>
  );
}
