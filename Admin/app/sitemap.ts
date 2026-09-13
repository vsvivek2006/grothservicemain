import type { MetadataRoute } from "next";
import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 3600; // Revalidate sitemap hourly

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://blog.growthservice.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    const supabase = createPublicClient();
    // Only published posts, never draft, never select internal fields
    const { data: posts } = await supabase
      .from("posts")
      .select("slug, updated_at, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    const postRoutes: MetadataRoute.Sitemap = (posts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at || post.published_at || new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}
