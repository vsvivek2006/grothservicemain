import type { MetadataRoute } from "next";
import {
  getSitemapRoutes,
  buildCanonicalUrl,
  buildOfficePath,
  buildCityPath,
  buildLocationServicePath,
} from "@/routing";
import { physicalOffices } from "@/data/offices";
import { citiesData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { createPublicClient } from "@/lib/supabase/public";

export const revalidate = 3600; // Hourly ISR

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  const add = (
    url: string,
    priority: number,
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"],
    lastModified?: Date | string
  ) => {
    const clean = url.trim();
    if (seenUrls.has(clean)) return;
    seenUrls.add(clean);
    routes.push({
      url: clean,
      priority,
      changeFrequency,
      lastModified: lastModified ? new Date(lastModified) : undefined,
    });
  };

  // 1. Static canonical indexable pages from route registry
  for (const route of getSitemapRoutes()) {
    if (route.path === "/locations" || route.path === "/offices") {
      continue;
    }
    add(
      buildCanonicalUrl(route.canonical),
      route.priority || 0.7,
      route.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"]
    );
  }

  // 2. Physical offices
  add(buildCanonicalUrl(buildOfficePath("")), 0.8, "monthly");
  for (const office of physicalOffices) {
    add(buildCanonicalUrl(buildOfficePath(office.slug)), 0.8, "monthly");
  }

  // 3. Locations directory & city hubs
  add(buildCanonicalUrl(buildCityPath("")), 0.9, "weekly");
  for (const city of citiesData) {
    add(buildCanonicalUrl(buildCityPath(city.slug)), 0.8, "weekly");
  }

  // 4. Programmatic location-service combinations
  for (const city of citiesData) {
    for (const srvSlug of city.servicesAvailable) {
      const srv = servicesData.find((s) => s.slug === srvSlug);
      if (srv) {
        add(
          buildCanonicalUrl(buildLocationServicePath(city.slug, srv.slug)),
          0.7,
          "monthly"
        );
      }
    }
  }

  // 5. Dynamic published blog posts
  try {
    const supabase = createPublicClient();
    const { data: posts } = await supabase
      .from("posts")
      .select("slug, updated_at, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (posts) {
      for (const post of posts) {
        add(
          buildCanonicalUrl(`/blog/${post.slug}`),
          0.8,
          "weekly",
          post.updated_at || post.published_at || undefined
        );
      }
    }
  } catch (err) {
    console.error("Error fetching blog posts for sitemap:", err);
  }

  return routes;
}
