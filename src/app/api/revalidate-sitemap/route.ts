import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.REVALIDATION_SECRET || "growth-service-revalidate-secret";

    // Optional secret check: if bearer token provided, verify it
    if (authHeader && !authHeader.endsWith(secret)) {
      return NextResponse.json({ error: "Invalid authorization token" }, { status: 401 });
    }

    revalidatePath("/sitemap.xml");
    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      paths: ["/sitemap.xml", "/blog"],
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Revalidation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return POST(request);
}
