import { NextResponse } from "next/server";
import { generateBlogPost } from "@/lib/ai/generateBlogPost";
import { createSessionClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const sessionClient = await createSessionClient();
    const {
      data: { user },
      error: authError,
    } = await sessionClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized. You must be an authenticated admin to generate content." },
        { status: 401 }
      );
    }
    const body = await request.json();
    const { topic, tone, keywords, wordCount, audience } = body;

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
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to generate blog post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
