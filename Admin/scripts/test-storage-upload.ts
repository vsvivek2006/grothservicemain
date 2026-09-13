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

const adminSupabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function testUpload() {
  console.log("Testing upload to blog-images bucket via service role...");
  const dummyData = Buffer.from("test image data");
  const testFileName = `test-upload-${Date.now()}.png`;

  const { data, error } = await adminSupabase.storage
    .from("blog-images")
    .upload(`test/${testFileName}`, dummyData, {
      contentType: "image/png",
      upsert: true,
    });

  if (error) {
    console.error("❌ Upload failed:", error.message);
    process.exit(1);
  }

  console.log("✅ Upload succeeded:", data.path);

  const { data: publicUrlData } = adminSupabase.storage
    .from("blog-images")
    .getPublicUrl(`test/${testFileName}`);

  console.log("Public URL:", publicUrlData.publicUrl);

  // Clean up
  await adminSupabase.storage.from("blog-images").remove([`test/${testFileName}`]);
  console.log("✅ Test file cleaned up.");
}

testUpload();
