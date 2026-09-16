import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import sharp from "sharp";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export async function POST(request: Request) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:write");

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files (PNG, JPG, WebP, GIF, AVIF) are allowed" },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size exceeds 10MB limit" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    // High-performance image transformation via Sharp:
    // 1. Constrain max bounds to 1600x1600 (without enlarging smaller images)
    // 2. Convert to modern, high-efficiency WebP format (quality 80)
    const optimizedBuffer = await sharp(inputBuffer)
      .resize({
        width: 1600,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80, effort: 4 })
      .toBuffer();

    const adminClient = createAdminClient();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.webp`;
    const filePath = `covers/${fileName}`;

    const { error: uploadError } = await adminClient.storage
      .from("blog-images")
      .upload(filePath, optimizedBuffer, {
        contentType: "image/webp",
        cacheControl: "public, max-age=31536000, immutable",
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: uploadError.message },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = adminClient.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    // Automatically trigger on-demand revalidation for blog and sitemap
    try {
      revalidatePath("/blog");
      revalidatePath("/sitemap.xml");
    } catch {
      // Background revalidation error should not block upload response
    }

    return NextResponse.json({ 
      url: publicUrlData.publicUrl,
      format: "webp",
      size: optimizedBuffer.length
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
