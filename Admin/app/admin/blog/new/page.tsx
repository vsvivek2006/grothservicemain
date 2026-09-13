import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostEditor } from "@/components/admin/PostEditor";

export default function NewBlogPostPage() {
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
            Create Blog Post
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/70 mt-0.5">
            Write your post with real-time slug generation, cover image upload, and rich text editing.
          </p>
        </div>
      </div>

      <PostEditor />
    </div>
  );
}
