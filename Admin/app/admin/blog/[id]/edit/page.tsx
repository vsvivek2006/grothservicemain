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
  const supabase = createAdminClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select("id, title, slug, content, meta_description, cover_image_url, author, tags, status, source, published_at, created_at, updated_at")
    .eq("id", id)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/blog"
          className="p-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Edit Blog Post
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
            Modify post contents, update cover image, or change publishing status.
          </p>
        </div>
      </div>

      <PostEditor initialData={post as PostRecord} />
    </div>
  );
}
