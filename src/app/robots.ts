import type { MetadataRoute } from "next";
import { getCanonicalOrigin } from "@/selectors";

export const revalidate = 86400; // 24 hours ISR

export default function robots(): MetadataRoute.Robots {
  const origin = getCanonicalOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/admin",
          "/payment/",
          "/private/",
          "/drafts/",
          "/api/",
        ],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
