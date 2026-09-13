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

async function list() {
  const res = await groq.models.list();
  console.log("Available models:");
  for (const m of res.data) {
    console.log(" -", m.id);
  }
}

list();
