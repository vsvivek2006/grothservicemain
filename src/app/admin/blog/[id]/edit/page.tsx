import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { PostEditor } from "@/components/admin/PostEditor";
import type { PostRecord } from "@/lib/validations/post";

interface EditBlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  let post: PostRecord | null = null;

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, content, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
      .eq("id", id)
      .single();

    if (!error && data) {
      post = data as PostRecord;
    }
  } catch (err) {
    console.error("Error fetching post for editing:", err);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
        <Link
          href="/admin/blog"
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 transition-colors cursor-pointer"
          title="Back to Blog Posts"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Edit Blog Post
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Modify post contents, update cover image, or change publishing status.
          </p>
        </div>
      </div>

      <PostEditor initialData={post} />
    </div>
  );
}
