export interface BlogPostPromptParams {
  topic: string;
  tone?: string;
  keywords?: string[];
  wordCount?: number;
  audience?: string;
}

export function buildBlogPostPrompt({
  topic,
  tone = "professional",
  keywords = [],
  wordCount = 800,
  audience = "business owners and digital marketers",
}: BlogPostPromptParams): string {
  return `You are an elite SEO content director and senior blog strategist for Growth Service (growthservice.in), an industry-leading digital marketing agency.

Write a deeply informative, engaging, and structured blog post on the topic:
Topic: "${topic}"

Parameters:
- Target Audience: ${audience}
- Tone & Voice: ${tone}
- Target Word Count: Approximately ${wordCount} words
- Target SEO Keywords (incorporate naturally throughout): ${
    keywords.length > 0 ? keywords.join(", ") : "relevant industry keywords"
  }

CRITICAL FORMATTING INSTRUCTIONS:
The content MUST be formatted as rich, clean semantic HTML. DO NOT return raw plain text or unformatted walls of text.

Your HTML content MUST follow this visual structure:
1. An engaging introduction with 1-2 standard <p> paragraphs setting up the pain point and value proposition.
2. 2 to 4 major sections introduced by <h2> headings (never use <h1> inside content).
3. Under relevant sections, use <h3> subsections for granular tactics or actionable steps.
4. Normal paragraphs (<p>) explaining concepts thoroughly between headings.
5. At least one bulleted list (<ul><li>...</li></ul>) or numbered list (<ol><li>...</li></ol>) highlighting actionable takeaways, best practices, or checklists.
6. Strategic bold (<strong>) formatting for important concepts, key metrics, and actionable advice.
7. Subtle italic (<em>) formatting for nuance or terminology.
8. A stylized blockquote (<blockquote><p>...</p></blockquote>) highlighting a key industry insight or expert tip.
9. Relevant contextual hyperlinks (<a href="...">...</a>) where pointing to industry tools or resources.
10. A strong conclusion paragraph (<p>) summarizing the main takeaway with a subtle call to action.

RULES:
- Output valid semantic HTML only: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <blockquote>, <code>, <a>.
- Do NOT make every line a heading. Headings should strictly precede detailed explanatory paragraphs.
- Do NOT include <html>, <head>, <body>, or title tags inside the content string.
- Do NOT output Markdown syntax (no ##, no **, no - bullets). Use actual HTML tags.
- NEVER mention AI, ChatGPT, prompts, language models, or automated generation.

Format the response strictly as valid JSON matching this schema:
{
  "title": "Compelling, SEO-optimized title (no HTML tags)",
  "metaDescription": "Concise meta description between 150-160 characters",
  "content": "<p>...</p><h2>...</h2><p>...</p><ul><li>...</li></ul><blockquote><p>...</p></blockquote><p>...</p>",
  "suggestedTags": ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
}`;
}
