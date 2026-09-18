import { NextResponse } from "next/server";
import { generateLlmsFullTxt } from "@/lib/seo/llms";

export const revalidate = 3600; // Automatically regenerate every hour (ISR)

export async function GET() {
  try {
    const text = await generateLlmsFullTxt();
    return new NextResponse(text, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err: unknown) {
    console.error("[llms-full.txt] Error generating content:", err);
    return new NextResponse("Growth Service Digital Solutions — Full LLM Directory", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
