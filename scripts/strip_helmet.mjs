/**
 * Strip react-helmet <Helmet>...</Helmet> blocks and imports from all view files.
 * These create duplicate head tags in Next.js App Router which already handles
 * metadata via the Metadata API in page.tsx files.
 *
 * Run: node scripts/strip_helmet.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const VIEWS_DIR = new URL('../src/views', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

function getAllTsxFiles(dir) {
  const result = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      result.push(...getAllTsxFiles(full));
    } else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) {
      result.push(full);
    }
  }
  return result;
}

function stripHelmet(content) {
  let changed = false;

  // Remove import line: import { Helmet } from 'react-helmet'; (any quote style)
  const importRe = /^import\s+\{[^}]*Helmet[^}]*\}\s+from\s+['"]react-helmet['"];?\r?\n/gm;
  if (importRe.test(content)) {
    content = content.replace(importRe, '');
    changed = true;
  }

  // Remove <Helmet>...</Helmet> blocks (multi-line, non-greedy)
  // Works for blocks indented with any whitespace
  const helmetBlockRe = /[ \t]*<Helmet>[\s\S]*?<\/Helmet>\r?\n?/g;
  if (helmetBlockRe.test(content)) {
    content = content.replace(helmetBlockRe, '');
    changed = true;
  }

  // Clean up any leftover blank lines (3+ consecutive -> 2)
  content = content.replace(/(\r?\n){3,}/g, '\n\n');

  return { content, changed };
}

let modifiedCount = 0;
let skippedCount = 0;

for (const file of getAllTsxFiles(VIEWS_DIR)) {
  const original = readFileSync(file, 'utf8');
  const { content, changed } = stripHelmet(original);
  if (changed) {
    writeFileSync(file, content, 'utf8');
    console.log(`✓ Stripped: ${file.replace(VIEWS_DIR, '').replace(/\\/g, '/')}`);
    modifiedCount++;
  } else {
    skippedCount++;
  }
}

console.log(`\nDone. Modified: ${modifiedCount}, Skipped (no helmet): ${skippedCount}`);
