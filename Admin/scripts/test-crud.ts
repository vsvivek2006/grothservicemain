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

async function testCrud() {
  console.log("--- Testing CRUD on Supabase Posts ---");

  // 1. Create Draft
  const testSlug = `test-post-${Date.now()}`;
  const { data: created, error: createError } = await supabase
    .from("posts")
    .insert({
      title: "Test CRUD Post Title",
      slug: testSlug,
      content: "<p>This is a test post for verifying CRUD functionality.</p>",
      meta_description: "A test meta description for the blog post.",
      cover_image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      author: "Growth Service Team",
      tags: ["SEO", "Growth", "Test"],
      status: "draft",
      source: "manual",
    })
    .select()
    .single();

  if (createError) {
    console.error("❌ CREATE FAILED:", createError.message);
    process.exit(1);
  }
  console.log("✅ CREATE SUCCESS:", created.id, created.title, "Status:", created.status);

  // 2. Read
  const { data: fetched, error: fetchError } = await supabase
    .from("posts")
    .select("*")
    .eq("id", created.id)
    .single();

  if (fetchError || !fetched) {
    console.error("❌ READ FAILED:", fetchError?.message);
    process.exit(1);
  }
  console.log("✅ READ SUCCESS:", fetched.slug, "Tags:", fetched.tags);

  // 3. Update (Publish)
  const { data: updated, error: updateError } = await supabase
    .from("posts")
    .update({
      title: "Test CRUD Post Title (Updated & Published)",
      status: "published",
      published_at: new Date().toISOString(),
    })
    .eq("id", created.id)
    .select()
    .single();

  if (updateError) {
    console.error("❌ UPDATE FAILED:", updateError.message);
    process.exit(1);
  }
  console.log("✅ UPDATE SUCCESS:", updated.title, "Status:", updated.status, "PublishedAt:", updated.published_at);

  // 4. Delete
  const { error: deleteError } = await supabase.from("posts").delete().eq("id", created.id);
  if (deleteError) {
    console.error("❌ DELETE FAILED:", deleteError.message);
    process.exit(1);
  }
  console.log("✅ DELETE SUCCESS. Post cleaned up.");

  console.log("--- All CRUD operations verified successfully! ---");
}

testCrud();
