import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (!fs.existsSync(envPath)) {
  console.error("Missing .env.local");
  process.exit(1);
}

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

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function check() {
  console.log("Checking Supabase connection to:", url);

  // 1. Check Auth Users
  const { data: usersData, error: usersErr } = await supabase.auth.admin.listUsers();
  if (usersErr) {
    console.error("❌ Auth admin check failed:", usersErr.message);
  } else {
    console.log(`✅ Auth check passed. Admin users count: ${usersData.users.length}`);
    for (const user of usersData.users) {
      console.log(`   - User: ${user.email} (confirmed: ${Boolean(user.email_confirmed_at)})`);
    }
  }

  // 2. Check Posts Table
  const { data: posts, error: postsErr } = await supabase
    .from("posts")
    .select("id, title, status, source")
    .limit(1);

  if (postsErr) {
    console.error("❌ Posts table check failed:", postsErr.message);
  } else {
    console.log(`✅ Posts table check passed! Row count: ${posts.length}`);
  }

  // Dashboard counts test
  const [
    { count: totalCount },
    { count: publishedCount },
    { count: draftsCount },
  ] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
  ]);
  console.log(`✅ Dashboard metrics query: Total: ${totalCount ?? 0}, Published: ${publishedCount ?? 0}, Drafts: ${draftsCount ?? 0}`);

  // 3. Check Storage Bucket
  const { data: buckets, error: bucketsErr } = await supabase.storage.listBuckets();
  if (bucketsErr) {
    console.error("❌ Storage buckets check failed:", bucketsErr.message);
  } else {
    const blogImagesBucket = buckets.find((b) => b.id === "blog-images");
    if (blogImagesBucket) {
      console.log("✅ Storage bucket 'blog-images' found.");
    } else {
      console.log("❌ Storage bucket 'blog-images' not found. Available buckets:", buckets.map((b) => b.id));
    }
  }
}

check();
