/**
 * Helper to ensure every blog post always has an authentic, high-quality cover visual.
 * If an author uploaded a custom cover, it is used directly.
 * Otherwise, a topic-aware professional fallback is provided.
 */

const FALLBACK_COVERS = {
  ppc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  seo: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200",
  social: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
  marketing: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  default: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export function getPostCoverImage(
  url: string | null | undefined,
  title: string = "",
  tags?: string[] | null
): string {
  if (url && typeof url === "string" && url.trim().length > 0) {
    return url.trim();
  }

  const tagString = Array.isArray(tags) ? tags.join(" ") : "";
  const query = `${title} ${tagString}`.toLowerCase();

  if (query.includes("ppc") || query.includes("paid") || query.includes("roi") || query.includes("campaign")) {
    return FALLBACK_COVERS.ppc;
  }

  if (query.includes("seo") || query.includes("local") || query.includes("search") || query.includes("rank")) {
    return FALLBACK_COVERS.seo;
  }

  if (query.includes("social") || query.includes("b2b") || query.includes("instagram") || query.includes("linkedin")) {
    return FALLBACK_COVERS.social;
  }

  return FALLBACK_COVERS.default;
}
