import Groq from "groq-sdk";
import * as fs from "fs";
import * as path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
let apiKey = "";
for (const line of envContent.split("\n")) {
  const [k, ...v] = line.trim().split("=");
  if (k === "GROQ_API_KEY") {
    apiKey = v.join("=").replace(/(^["']|["']$)/g, "");
  }
}

const groq = new Groq({ apiKey });

async function run() {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are an expert SEO blog writer. You must return valid JSON only with keys: title, metaDescription, content, suggestedTags.",
      },
      {
        role: "user",
        content: "Write a short blog post on 'Local SEO Checklist'. Use rich semantic HTML for content (<h2>, <h3>, <p>, <ul>, <li>, <strong>).",
      },
    ],
    model: "openai/gpt-oss-120b",
    max_tokens: 2048,
    response_format: { type: "json_object" },
  });

  const parsed = JSON.parse(completion.choices[0]?.message?.content || "{}");
  console.log("TITLE:", parsed.title);
  console.log("CONTENT:\n", parsed.content);
}

run();
