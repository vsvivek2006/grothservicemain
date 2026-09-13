import robots from "../app/robots";
import sitemap from "../app/sitemap";
import * as fs from "fs";
import * as path from "path";

// Load .env.local
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim().replace(/(^["']|["']$)/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

async function run() {
  console.log("--- Verifying SEO (robots.txt & sitemap.xml) ---");

  // Robots
  const r = robots();
  console.log("Robots Rules:", JSON.stringify(r.rules, null, 2));
  console.log("Robots Sitemap URL:", r.sitemap);

  // Sitemap
  const s = await sitemap();
  console.log("Sitemap Entries Total:", s.length);
  for (const item of s) {
    console.log(` - URL: ${item.url} (priority: ${item.priority})`);
  }

  console.log("✅ All SEO routes generated successfully.");
}

run();
