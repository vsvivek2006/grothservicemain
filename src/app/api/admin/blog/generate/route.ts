import { NextResponse } from "next/server";
import { generateBlogPost } from "@/lib/ai/generateBlogPost";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export async function POST(request: Request) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:write");
    const body = await request.json();
    const { topic, tone, keywords, wordCount, audience, model } = body;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const result = await generateBlogPost({
      topic,
      tone,
      keywords,
      wordCount,
      audience,
      model,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to generate blog post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
