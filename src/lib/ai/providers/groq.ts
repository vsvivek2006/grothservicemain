import Groq from "groq-sdk";
import { buildBlogPostPrompt } from "../prompts/blogPost";
import { normalizeContentToHtml } from "../contentFormatter";
import type { GenerateBlogPostInput, GenerateBlogPostOutput } from "../generateBlogPost";

let groqInstance: Groq | null = null;

function getGroqClient(): Groq {
  if (!groqInstance) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is not set in environment variables");
    }
    groqInstance = new Groq({ apiKey });
  }
  return groqInstance;
}

export async function generateBlogPostWithGroq(
  input: GenerateBlogPostInput
): Promise<GenerateBlogPostOutput> {
  const groq = getGroqClient();
  const prompt = buildBlogPostPrompt(input);
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a seasoned human editorial director and performance marketing practitioner with 15+ years of live agency experience. You write with deep analytical substance, natural burstiness, and zero detectable AI clichés or synthetic filler. Output strictly valid JSON matching the requested schema. The content field MUST be clean, valid semantic HTML with rich visual hierarchy (h2, h3, p, ul, ol, li, strong, blockquote). Never output markdown code blocks or commentary around the JSON.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model,
    max_tokens: 3500,
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0]?.message?.content;
  if (!raw) {
    throw new Error("No response received from Groq");
  }

  const parsed = JSON.parse(raw);

  // Normalize and clean HTML content ensuring full rich-text tag validity
  const formattedHtml = normalizeContentToHtml(parsed.content || "");

  return {
    title: parsed.title ? String(parsed.title).trim() : "",
    metaDescription: parsed.metaDescription ? String(parsed.metaDescription).trim() : "",
    content: formattedHtml,
    suggestedTags: Array.isArray(parsed.suggestedTags)
      ? parsed.suggestedTags.map((t: unknown) => String(t).trim()).filter(Boolean)
      : [],
  };
}
