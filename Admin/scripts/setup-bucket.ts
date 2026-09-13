import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const env: Record<string, string> = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const idx = trimmed.indexOf("=");
  if (idx !== -1) {
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim().replace(/(^["']|["']$)/g, "");
    env[key] = val;
  }
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const { data, error } = await supabase.storage.createBucket("blog-images", {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: ["image/png", "image/jpeg", "image/webp", "image/gif"],
  });

  if (error) {
    if (error.message.includes("already exists")) {
      console.log("Storage bucket 'blog-images' already exists.");
    } else {
      console.error("Failed to create bucket:", error.message);
    }
  } else {
    console.log("✅ Storage bucket 'blog-images' created successfully:", data);
  }
}

main();
