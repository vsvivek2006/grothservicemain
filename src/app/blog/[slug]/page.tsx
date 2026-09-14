import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { createPublicClient } from "@/lib/supabase/public";
import { cleanHtml } from "@/lib/ai/contentFormatter";

export const revalidate = 60; // ISR revalidation every 60 seconds

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const supabase = createPublicClient();
    const { data: posts } = await supabase
      .from("posts")
      .select("slug")
      .eq("status", "published")
      .limit(100);

    return (posts || []).map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

interface BlogPostMeta {
  title: string;
  meta_description: string | null;
  cover_image_url: string | null;
  published_at: string | null;
  author: string | null;
}

interface BlogPostDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_description: string | null;
  cover_image_url: string | null;
  author: string | null;
  tags: string[] | null;
  published_at: string | null;
  created_at: string;
  updated_at: string | null;
}

function formatDisplayDate(
  dateStr: string | null | undefined,
  fallbackStr?: string | null
): string {
  const target = dateStr || fallbackStr;
  if (!target) return "";
  try {
    const parsed = new Date(target);
    if (isNaN(parsed.getTime())) return "";
    return format(parsed, "MMMM d, yyyy");
  } catch {
    return "";
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let post: BlogPostMeta | null = null;

  try {
    const supabase = createPublicClient();
    let query = supabase
      .from("posts")
      .select("title, meta_description, cover_image_url, published_at, author")
      .eq("status", "published");

    if (slug === decodedSlug) {
      query = query.eq("slug", slug);
    } else {
      query = query.or(`slug.eq."${slug}",slug.eq."${decodedSlug}"`);
    }

    const { data } = await query.maybeSingle();
    post = data;
  } catch (err) {
    console.error("Error fetching metadata for blog post:", err);
  }

  if (!post) {
    return {
      title: "Article Not Found | Growth Service",
      description: "The requested article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${post.title} | Growth Service`;
  const description =
    post.meta_description ||
    "Read the latest digital marketing and SEO insights on Growth Service Blog.";
  const images = post.cover_image_url ? [post.cover_image_url] : ["https://www.growthservice.in/logo.png"];

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.growthservice.in/blog/${slug}`,
      publishedTime: post.published_at || undefined,
      authors: [post.author || "Growth Service Team"],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let post: BlogPostDetail | null = null;

  try {
    const supabase = createPublicClient();
    // Explicit column selection — NEVER select `source` or `*` on public pages
    let query = supabase
      .from("posts")
      .select(
        "id, title, slug, content, meta_description, cover_image_url, author, tags, published_at, created_at, updated_at"
      )
      .eq("status", "published");

    if (slug === decodedSlug) {
      query = query.eq("slug", slug);
    } else {
      query = query.or(`slug.eq."${slug}",slug.eq."${decodedSlug}"`);
    }

    const { data } = await query.maybeSingle();
    post = data;
  } catch (err) {
    console.error("Error loading blog post page:", err);
  }

  if (!post) {
    notFound();
  }

  const sanitizedContent = cleanHtml(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.meta_description,
    image: post.cover_image_url ? [post.cover_image_url] : ["https://www.growthservice.in/logo.png"],
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at || post.published_at || post.created_at,
    author: {
      "@type": "Person",
      name: post.author || "Growth Service Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Growth Service",
      logo: {
        "@type": "ImageObject",
        url: "https://www.growthservice.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.growthservice.in/blog/${post.slug}`,
    },
  };

  return (
    <article className="min-h-screen bg-gray-950 text-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Hero Header (LOCKED GRADIENT) */}
      <header className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-16 sm:py-24 px-6 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/90 text-purple-300 border border-purple-700/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          {/* Byline & Metadata (strictly human byline) */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-purple-200/90 border-t border-purple-800/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-900/80 border border-purple-600/40 flex items-center justify-center text-yellow-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-purple-300/70 block">Author</span>
                <span className="font-semibold text-white">
                  {post.author || "Growth Service Team"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-900/80 border border-purple-600/40 flex items-center justify-center text-purple-300">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-purple-300/70 block">Published</span>
                <span className="font-medium text-white">
                  {formatDisplayDate(post.published_at, post.created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Post Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        {/* Cover Image */}
        {post.cover_image_url && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-purple-900/40 mb-12 shadow-2xl shadow-purple-950/50 bg-gray-900">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        )}

        {/* Post HTML Content (Sanitized & Styled) */}
        <div
          className="article-content max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        {/* Share & Tags Bottom Row */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                Topics:
              </span>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 border border-purple-900/50 text-purple-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href="/blog"
              className="text-xs font-semibold text-yellow-400 hover:underline flex items-center gap-1"
            >
              ← Back to all articles
            </Link>
          </div>
        )}

        {/* Bottom CTA Banner (LOCKED GRADIENT & BUTTON) */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-blue-900 border border-purple-800/40 text-center space-y-6 shadow-2xl shadow-black/50">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Accelerate Your <span className="text-yellow-400">Growth</span>?
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed">
            Partner with Growth Service for data-driven SEO, content marketing, and high-impact digital campaigns.
          </p>
          <div>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-xl shadow-purple-900/50 transition-all text-sm"
            >
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
