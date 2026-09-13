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

async function test(model: string) {
  try {
    const res = await groq.chat.completions.create({
      model,
      messages: [
        { role: "system", content: "You are a JSON assistant. Output valid JSON only." },
        { role: "user", content: "Return a JSON object with key 'status' equal to 'ok'." },
      ],
      response_format: { type: "json_object" },
    });
    console.log(`✅ Model ${model} SUCCESS:`, res.choices[0]?.message?.content);
    return true;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`❌ Model ${model} FAILED:`, msg);
    return false;
  }
}

async function run() {
  await test("openai/gpt-oss-120b");
  await test("qwen/qwen3.8-27b");
  await test("qwen/qwen3.6-27b");
}

run();
