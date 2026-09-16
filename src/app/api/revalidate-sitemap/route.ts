import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { assertAdminUser } from "@/lib/authorization";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.REVALIDATION_SECRET;

    let authorized = false;

    // 1. Verify via Bearer token if REVALIDATION_SECRET is configured
    if (secret && authHeader) {
      const token = authHeader.replace(/^Bearer\s+/i, "").trim();
      if (token === secret) {
        authorized = true;
      }
    }

    // 2. Otherwise verify via authenticated admin session
    if (!authorized) {
      try {
        await assertAdminUser();
        authorized = true;
      } catch {
        authorized = false;
      }
    }

    if (!authorized) {
      return NextResponse.json(
        { error: "Unauthorized. Valid Bearer token or active admin session required." },
        { status: 401 }
      );
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
