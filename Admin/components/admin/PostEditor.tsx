"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";
import { toast } from "sonner";
import {
  Save,
  Send,
  Trash2,
  Loader2,
  Lock,
  Unlock,
  Sparkles,
  PenTool,
  Info,
} from "lucide-react";
import { postSchema, type PostInput, type PostRecord } from "@/lib/validations/post";
import { createPostAction, updatePostAction, deletePostAction } from "@/app/admin/blog/actions";
import { ImageUpload } from "./ImageUpload";
import { TagInput } from "./TagInput";
import { TiptapEditor } from "./TiptapEditor";
import { AIGeneratorPanel } from "./AIGeneratorPanel";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";

interface PostEditorProps {
  initialData?: PostRecord | null;
}

export function PostEditor({ initialData }: PostEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(initialData?.id);
  const [editorMode, setEditorMode] = useState<"manual" | "ai">("manual");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSlugCustomized, setIsSlugCustomized] = useState(Boolean(initialData?.slug));
  const [isAiGenerated, setIsAiGenerated] = useState(initialData?.source === "ai" || initialData?.source === "ai-edited");
  const [originalAiContent, setOriginalAiContent] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      content: initialData?.content || "",
      meta_description: initialData?.meta_description || "",
      cover_image_url: initialData?.cover_image_url || "",
      author: initialData?.author || "Growth Service Team",
      tags: initialData?.tags || [],
      status: initialData?.status || "draft",
      source: initialData?.source || "manual",
    },
  });

  const titleValue = watch("title");
  const contentValue = watch("content");

  // Handle automatic slug generation
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setValue("title", newTitle);
    if (!isSlugCustomized) {
      const generatedSlug = slugify(newTitle, { lower: true, strict: true });
      setValue("slug", generatedSlug, { shouldValidate: true });
    }
  };

  // Callback when AI generation succeeds
  const handleAiGenerated = (output: GenerateBlogPostOutput) => {
    setValue("title", output.title, { shouldValidate: true });
    const generatedSlug = slugify(output.title, { lower: true, strict: true });
    setValue("slug", generatedSlug, { shouldValidate: true });
    setValue("meta_description", output.metaDescription, { shouldValidate: true });
    setValue("content", output.content, { shouldValidate: true });
    setValue("tags", output.suggestedTags, { shouldValidate: true });
    setValue("source", "ai");
    setValue("status", "draft");

    setIsAiGenerated(true);
    setOriginalAiContent(output.content);
    setIsSlugCustomized(false);
  };

  const handleSave = async (targetStatus: "draft" | "published") => {
    setValue("status", targetStatus);

    await handleSubmit(async (formData: PostInput) => {
      setIsSubmitting(true);
      try {
        // Source tracking:
        // If originally AI-generated and user modified content/title, mark as 'ai-edited'
        let finalSource = formData.source;
        if (isAiGenerated) {
          if (originalAiContent && contentValue !== originalAiContent) {
            finalSource = "ai-edited";
          } else if (!formData.source || formData.source === "manual") {
            finalSource = "ai";
          }
        }

        const payload: PostInput = {
          ...formData,
          status: targetStatus,
          source: finalSource,
        };

        let result;
        if (isEditing && initialData?.id) {
          result = await updatePostAction(initialData.id, payload);
        } else {
          result = await createPostAction(payload);
        }

        if (!result.success) {
          toast.error("Failed to save post", {
            description: result.error,
          });
          return;
        }

        toast.success(
          targetStatus === "published"
            ? "Post published successfully!"
            : "Draft saved successfully!"
        );
        router.push("/admin/blog");
        router.refresh();
      } catch {
        toast.error("Unexpected error saving post");
      } finally {
        setIsSubmitting(false);
      }
    })();
  };

  const handleDelete = async () => {
    if (!initialData?.id) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog post? This action cannot be undone."
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const result = await deletePostAction(initialData.id);
      if (!result.success) {
        toast.error("Failed to delete post", {
          description: result.error,
        });
        return;
      }

      toast.success("Post deleted successfully");
      router.push("/admin/blog");
      router.refresh();
    } catch {
      toast.error("Unexpected error deleting post");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Mode Toggle (only for new posts) */}
      {!isEditing && (
        <div className="flex items-center justify-between p-2 rounded-xl bg-gray-900 border border-purple-900/40">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setEditorMode("manual")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "manual"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                  : "text-gray-400 hover:text-white hover:bg-purple-950/40"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Write Manually
            </button>
            <button
              type="button"
              onClick={() => setEditorMode("ai")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                editorMode === "ai"
                  ? "bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white shadow-md shadow-purple-900/40"
                  : "text-gray-400 hover:text-white hover:bg-purple-950/40"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Generate with AI
            </button>
          </div>

          <span className="text-[11px] text-purple-300/70 hidden sm:inline px-3">
            {editorMode === "ai"
              ? "AI generates full draft into editor; you review before publishing."
              : "Classic rich text drafting."}
          </span>
        </div>
      )}

      {/* AI Assistant Section */}
      {editorMode === "ai" && !isEditing && (
        <AIGeneratorPanel onGenerated={handleAiGenerated} disabled={isSubmitting} />
      )}

      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-purple-900/40 bg-gray-900/90 sticky top-4 z-20 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
            {isEditing ? "Editing Post" : "Draft Editor"}
          </span>
          {initialData?.status && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                initialData.status === "published"
                  ? "bg-emerald-950 text-emerald-400 border border-emerald-700/40"
                  : "bg-yellow-950 text-yellow-400 border border-yellow-700/40"
              }`}
            >
              {initialData.status === "published" ? "Live" : "Draft"}
            </span>
          )}
          {isAiGenerated && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-950 text-purple-300 border border-purple-800/40 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              AI Sourced
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isEditing && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting || isSubmitting}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-rose-300 hover:text-white hover:bg-rose-950/40 border border-rose-900/30 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isDeleting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Trash2 className="w-3.5 h-3.5" />
              )}
              Delete
            </button>
          )}

          <button
            type="button"
            onClick={() => handleSave("draft")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-purple-200 hover:text-white border border-purple-900/40 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Save className="w-3.5 h-3.5 text-yellow-400" />
            )}
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isSubmitting || isDeleting}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-lg shadow-purple-900/40 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            Publish Post
          </button>
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Post Title <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 10 Proven SEO Strategies for Rapid Local Growth"
              value={titleValue || ""}
              onChange={handleTitleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-purple-900/40 text-white text-lg font-bold placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            {errors.title && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
                URL Slug <span className="text-rose-400">*</span>
              </label>
              <button
                type="button"
                onClick={() => setIsSlugCustomized(!isSlugCustomized)}
                className="text-xs text-purple-400 hover:text-yellow-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {isSlugCustomized ? (
                  <>
                    <Lock className="w-3 h-3" />
                    Locked to custom slug
                  </>
                ) : (
                  <>
                    <Unlock className="w-3 h-3 text-yellow-400" />
                    Auto-generating from title
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-purple-400/80 select-none">
                /blog/
              </span>
              <input
                type="text"
                placeholder="10-proven-seo-strategies"
                {...register("slug")}
                onChange={(e) => {
                  setIsSlugCustomized(true);
                  setValue("slug", e.target.value, { shouldValidate: true });
                }}
                className="w-full pl-16 pr-4 py-2.5 rounded-lg bg-gray-900 border border-purple-900/40 text-sm text-yellow-300 font-mono placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>
            {errors.slug && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.slug.message}</p>
            )}
          </div>

          {/* Rich Content Editor */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              Post Content <span className="text-rose-400">*</span>
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <TiptapEditor
                  content={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.content && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.content.message}</p>
            )}
          </div>
        </div>

        {/* Sidebar Metadata (Right col) */}
        <div className="space-y-6">
          {/* Cover Image */}
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
              Cover Image
            </label>
            <Controller
              name="cover_image_url"
              control={control}
              render={({ field }) => (
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* SEO Meta Description */}
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
              Meta Description (SEO)
            </label>
            <textarea
              rows={3}
              placeholder="Brief summary for search engines and social sharing (150-160 characters recommended)..."
              {...register("meta_description")}
              className="w-full px-3.5 py-2.5 rounded-lg bg-gray-800/80 border border-purple-900/40 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
            />
            {errors.meta_description && (
              <p className="text-xs text-rose-400">{errors.meta_description.message}</p>
            )}
          </div>

          {/* Tags */}
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
              Tags
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <TagInput
                  tags={field.value || []}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* Author */}
          <div className="p-5 rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200">
              Author (Public Byline)
            </label>
            <input
              type="text"
              placeholder="Growth Service Team"
              {...register("author")}
              className="w-full px-3.5 py-2.5 rounded-lg bg-gray-800/80 border border-purple-900/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            <p className="text-[11px] text-purple-300/60 flex items-center gap-1 mt-1">
              <Info className="w-3 h-3 text-yellow-400" />
              Public byline always displays authentic team name.
            </p>
            {errors.author && (
              <p className="text-xs text-rose-400">{errors.author.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
