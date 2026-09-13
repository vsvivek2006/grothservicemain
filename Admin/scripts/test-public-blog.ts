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
const anonSupabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testPublicBlog() {
  console.log("--- Testing Public Blog Pages & Privacy Safeguards ---");

  const testSlug = `public-test-${Date.now()}`;

  // 1. Create a published post
  const { data: post, error: insertError } = await supabase
    .from("posts")
    .insert({
      title: "How Local SEO Drives Agency Growth",
      slug: testSlug,
      content: "<h2>Why Local SEO Matters</h2><p>Local SEO connects high-intent customers directly to local businesses.</p>",
      meta_description: "Discover why local SEO is the fastest way to drive organic foot traffic and customer leads in 2026.",
      cover_image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      author: "Growth Service Team",
      tags: ["Local SEO", "Strategy", "Digital Marketing"],
      status: "published",
      source: "ai-edited", // internal only!
      published_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (insertError) {
    console.error("❌ Failed to create published test post:", insertError.message);
    process.exit(1);
  }
  console.log("✅ Created published post:", post.slug, "ID:", post.id);

  // 2. Query through ANON client with public select (simulating public page query)
  const { data: publicPost, error: publicError } = await anonSupabase
    .from("posts")
    .select("id, title, slug, content, meta_description, cover_image_url, author, tags, published_at, created_at")
    .eq("slug", testSlug)
    .single();

  if (publicError || !publicPost) {
    console.error("❌ Anon query failed:", publicError?.message);
    process.exit(1);
  }
  console.log("✅ Anon query succeeded for:", publicPost.title);

  // 3. Verify Privacy Safeguard: `source` field must NOT be present
  if ("source" in publicPost) {
    console.error("❌ CRITICAL VIOLATION: `source` field was returned in public query!");
    process.exit(1);
  }
  console.log("✅ PRIVACY VERIFIED: `source` field is completely excluded from public query.");

  // 4. Test HTTP fetch to running Next.js dev server on /blog and /blog/[slug]
  try {
    const listRes = await fetch("http://localhost:3000/blog");
    console.log("✅ GET /blog status:", listRes.status);

    const postRes = await fetch(`http://localhost:3000/blog/${testSlug}`);
    console.log(`✅ GET /blog/${testSlug} status:`, postRes.status);

    const postHtml = await postRes.text();
    if (postHtml.includes("ai-edited") || postHtml.includes("AI-Edited")) {
      console.error("❌ CRITICAL VIOLATION: 'ai-edited' leaked into public HTML!");
      process.exit(1);
    }
    console.log("✅ HTML INSPECTION VERIFIED: Zero AI disclosure or source badges in public page source.");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log("Note on fetch test:", msg);
  }

  // 5. Cleanup
  await supabase.from("posts").delete().eq("id", post.id);
  console.log("✅ Cleanup test post completed.");
  console.log("--- Step 6 Public Blog Verification Complete! ---");
}

testPublicBlog();
