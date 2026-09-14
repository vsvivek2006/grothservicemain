import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/payment/", "/admin/", "/private/", "/drafts/"],
      },
    ],
    sitemap: "https://www.growthservice.in/sitemap.xml",
  };
}
