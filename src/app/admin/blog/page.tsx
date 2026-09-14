import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { PostTable } from "@/components/admin/PostTable";
import type { PostRecord } from "@/lib/validations/post";

export const revalidate = 0; // Always fresh list

export default async function AdminBlogListPage() {
  let postList: PostRecord[] = [];

  try {
    const supabase = createAdminClient();
    const { data: posts, error } = await supabase
      .from("posts")
      .select("id, title, slug, content, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
    }
    postList = (posts || []) as PostRecord[];
  } catch (err) {
    console.error("Admin blog list fetch error:", err);
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-gray-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Blog Posts
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Manage, draft, edit, and publish your blog articles.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer self-start sm:self-auto"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          Create Post
        </Link>
      </div>

      <PostTable initialPosts={postList} />
    </div>
  );
}
