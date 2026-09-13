import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://blog.growthservice.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/*"],
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
