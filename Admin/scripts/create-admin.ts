import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// Load environment variables from .env.local if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...values] = trimmed.split("=");
      const val = values.join("=").replace(/(^["']|["']$)/g, "");
      if (key && !process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

loadEnv();

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.error("Usage: npx tsx scripts/create-admin.ts <email> <password>");
  process.exit(1);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Error: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function run() {
  console.log(`Creating admin user: ${email}...`);
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error("Failed to create admin user:", error.message);
    process.exit(1);
  }

  console.log(`Successfully created admin user: ${data.user.email} (ID: ${data.user.id})`);
}

run();
