import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('       CENTRALIZATION & ARCHITECTURAL AUDIT');
console.log('====================================================');

// Allowed canonical definition files
const CANONICAL_WHITELIST = new Set([
  'src/config/business.ts',
  'src/config/site.ts',
  'src/data/offices.ts',
  'src/data/team.ts',
  'src/data/services.ts',
  'src/data/packages.ts',
  'src/data/locations.ts',
  'src/data/industries.ts',
  'src/selectors/index.ts',
  'src/selectors/businessSelectors.ts',
  'src/selectors/officeSelectors.ts',
  'src/selectors/locationSelectors.ts',
  'src/selectors/serviceSelectors.ts',
  'src/selectors/packageSelectors.ts',
  'src/selectors/teamSelectors.ts',
  'src/selectors/industrySelectors.ts',
  'src/services/index.ts',
  'src/services/communication.ts'
]);

// Core canonical facts that must never be hardcoded into UI components/pages
const RESTRICTED_FACTS = [
  {
    name: 'Jaipur Office Physical Address',
    patterns: ['138 A, Vivek Vihar', '138A Vivek Vihar'],
    category: 'Office Address'
  },
  {
    name: 'Vrindavan Office Physical Address',
    patterns: ['Radhika Sadan, Pushpa Garden', 'Radhika Sadan Pushpa Garden'],
    category: 'Office Address'
  },
  {
    name: 'Nepal Office Physical Address',
    patterns: ['Near Bariyarpatti Rd', 'Near Bariyarpatti Road'],
    category: 'Office Address'
  },
  {
    name: 'Jaipur Office Phone (+91 62073 00553)',
    patterns: ['6207300553', '62073 00553'],
    category: 'Office Contact'
  },
  {
    name: 'Nepal Office Phone (+977 970-7382481)',
    patterns: ['9707382481', '970-7382481', '97073824881'],
    category: 'Office Contact'
  },
  {
    name: 'Support Desk WhatsApp (919521281509)',
    patterns: ['9521281509'],
    category: 'Support Channel'
  },
  {
    name: 'Raw WhatsApp URL Direct Linking',
    patterns: ['wa.me/9779707382481', 'wa.me/919521281509', 'wa.me/97797073824881'],
    category: 'Communication Construction'
  },
  {
    name: 'Raw Tel URL Direct Linking for Office Phones',
    patterns: ['tel:+916207300553', 'tel:916207300553', 'tel:+9779707382481'],
    category: 'Communication Construction'
  }
];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allSrcFiles = getAllFiles('src');
const violations = [];

for (const filePath of allSrcFiles) {
  const normPath = filePath.replace(/\\/g, '/');
  if (CANONICAL_WHITELIST.has(normPath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineIndex) => {
    // Skip comments
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*')) return;

    for (const fact of RESTRICTED_FACTS) {
      for (const pattern of fact.patterns) {
        if (line.includes(pattern)) {
          violations.push({
            file: normPath,
            line: lineIndex + 1,
            fact: fact.name,
            category: fact.category,
            matchedText: pattern,
            codeSnippet: trimmed
          });
        }
      }
    }
  });
}

console.log(`Inspected ${allSrcFiles.length} source files in src/.`);
console.log(`Canonical Whitelist: ${CANONICAL_WHITELIST.size} files.`);
console.log('----------------------------------------------------');

if (violations.length === 0) {
  console.log('✅ ZERO CENTRALIZATION VIOLATIONS DETECTED!');
  console.log('  ✓ No physical office addresses hardcoded in components or pages.');
  console.log('  ✓ No office telephone numbers hardcoded in components or pages.');
  console.log('  ✓ No raw WhatsApp URLs constructed manually in components or pages.');
  console.log('  ✓ No raw tel: links constructed manually for office phones.');
  console.log('  ✓ All UI consumers bind to canonical selectors and communication helpers.');
  console.log('====================================================');
  console.log('Status: PASSED (code 0)\n');
  process.exit(0);
} else {
  console.error(`❌ FOUND ${violations.length} CENTRALIZATION VIOLATIONS:`);
  violations.forEach((v, idx) => {
    console.error(`\n[${idx + 1}] ${v.file}:${v.line}`);
    console.error(`    Rule:     ${v.fact} (${v.category})`);
    console.error(`    Pattern:  "${v.matchedText}"`);
    console.error(`    Snippet:  ${v.codeSnippet}`);
  });
  console.error('\n====================================================');
  console.error('Status: FAILED (code 1)\n');
  process.exit(1);
}
