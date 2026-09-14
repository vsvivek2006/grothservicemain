import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 60; // ISR revalidation every 60 seconds

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Insights | Growth Service",
  description: "Actionable digital marketing strategies, SEO masterclasses, web development guides, and business growth playbooks from Growth Service.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Digital Marketing & Web Development Insights | Growth Service",
    description: "Actionable digital marketing strategies, SEO masterclasses, web development guides, and business growth playbooks from Growth Service.",
    url: "https://www.growthservice.in/blog",
    siteName: "Growth Service",
    type: "website",
  },
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

const POSTS_PER_PAGE = 9;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10) || 1);
  const from = (currentPage - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;

  let postList: Array<{
    id: string;
    title: string;
    slug: string;
    meta_description: string | null;
    cover_image_url: string | null;
    author: string | null;
    tags: string[] | null;
    published_at: string | null;
    created_at: string;
  }> = [];
  let totalCount = 0;

  try {
    const supabase = createPublicClient();
    // Explicit column selection — NEVER select `source` or `*` on public pages
    const { data: posts, count, error } = await supabase
      .from("posts")
      .select(
        "id, title, slug, meta_description, cover_image_url, author, tags, published_at, created_at",
        { count: "exact" }
      )
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Error fetching public posts:", error.message);
    } else {
      postList = posts || [];
      totalCount = count || 0;
    }
  } catch (err) {
    console.error("Supabase connection error in /blog:", err);
  }

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE) || 1;

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section (LOCKED GRADIENT) */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-20 px-6 relative overflow-hidden text-center">
        {/* Ambient lighting accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-900/40 text-xs font-semibold text-yellow-300">
            Official Insights &amp; Strategies
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Growth <span className="text-yellow-400">Service</span> Blog
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Expert insights, proven SEO frameworks, and actionable digital marketing tactics to scale your organic presence.
          </p>
        </div>
      </section>

      {/* Posts Grid Container */}
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8">
        {postList.length === 0 ? (
          <div className="p-16 rounded-2xl border border-purple-900/40 bg-gray-900/60 text-center space-y-3">
            <p className="text-xl font-bold text-white">No articles published yet</p>
            <p className="text-sm text-purple-300/70">
              Check back soon for fresh content from the Growth Service team.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postList.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-purple-900/40 bg-gray-900/80 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-purple-600/60 transition-all hover:shadow-xl hover:shadow-purple-950/40 group"
              >
                <div>
                  {/* Cover Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full overflow-hidden bg-gray-950">
                    {post.cover_image_url ? (
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-950/50 to-gray-900 text-purple-400">
                        <span className="text-sm font-semibold tracking-wider uppercase opacity-60">
                          Growth Service
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-950/90 text-purple-300 border border-purple-800/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {post.meta_description && (
                      <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                        {post.meta_description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-6 pt-0 border-t border-purple-900/20 mt-4 flex items-center justify-between text-xs text-purple-300/70">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-yellow-400" />
                      {post.author || "Growth Service Team"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {post.published_at
                        ? format(new Date(post.published_at), "MMM d, yyyy")
                        : format(new Date(post.created_at), "MMM d, yyyy")}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-purple-400 group-hover:text-yellow-400 flex items-center gap-1 transition-colors"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-4">
            {currentPage > 1 ? (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-purple-900/50 bg-gray-900 hover:bg-purple-900/40 text-purple-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-purple-900/20 bg-gray-900/30 text-gray-600 cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </span>
            )}

            <span className="text-sm text-purple-300">
              Page <span className="font-bold text-white">{currentPage}</span> of{" "}
              <span className="font-bold text-white">{totalPages}</span>
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-purple-900/50 bg-gray-900 hover:bg-purple-900/40 text-purple-200 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-purple-900/20 bg-gray-900/30 text-gray-600 cursor-not-allowed">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
