import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('       CANONICAL FACTUAL LITERAL STATIC AUDIT');
console.log('====================================================');

const CANONICAL_FACTS = [
  {
    name: 'India Primary Phone (+91 93414 36937)',
    patterns: ['9341436937', '+91 93414 36937', '+91-93414-36937'],
    ownerFile: 'src/config/business.ts',
    category: 'Phone Line'
  },
  {
    name: 'Jaipur Office Phone (+91 62073 00553)',
    patterns: ['6207300553', '+91 62073 00553'],
    ownerFile: 'src/data/offices.ts',
    category: 'Office Phone'
  },
  {
    name: 'Nepal Office Phone (+977 970-7382481)',
    patterns: ['9707382481', '+977 970-7382481', '970-7382481'],
    ownerFile: 'src/data/offices.ts',
    category: 'Office Phone'
  },
  {
    name: 'Support Desk / India WhatsApp (919521281509)',
    patterns: ['9521281509', '+91 95212 81509'],
    ownerFile: 'src/config/business.ts',
    category: 'Support Channel'
  },
  {
    name: 'Jaipur Office Physical Address',
    patterns: ['JTML MALL', 'JTM Mall'],
    ownerFile: 'src/data/offices.ts',
    category: 'Office Address'
  },
  {
    name: 'Vrindavan Office Physical Address',
    patterns: ['Radhika Sadan', 'Pushpa Garden'],
    ownerFile: 'src/data/offices.ts',
    category: 'Office Address'
  },
  {
    name: 'Nepal Office Physical Address',
    patterns: ['Near Bariyarpatti Rd', 'Bariyarpatti 56500'],
    ownerFile: 'src/data/offices.ts',
    category: 'Office Address'
  }
];

const IGNORED_FILES = new Set([
  'src/config/business.ts',
  'src/data/offices.ts',
  'src/config/site.ts'
]);

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (/\.(tsx|ts|jsx|js|html)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allSrcFiles = getAllFiles('src');

const report = {};
for (const fact of CANONICAL_FACTS) {
  report[fact.name] = {
    owner: fact.ownerFile,
    category: fact.category,
    externalOccurrences: []
  };
}

for (const filePath of allSrcFiles) {
  const normPath = filePath.replace(/\\/g, '/');
  if (IGNORED_FILES.has(normPath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  for (const fact of CANONICAL_FACTS) {
    for (const pattern of fact.patterns) {
      if (content.includes(pattern)) {
        report[fact.name].externalOccurrences.push({
          file: normPath,
          pattern
        });
        break;
      }
    }
  }
}

// Summary Output
console.log('\n--- AUDIT FINDINGS BY CANONICAL FACT ---');
let totalDuplicateOccurrences = 0;

for (const [factName, data] of Object.entries(report)) {
  const count = data.externalOccurrences.length;
  totalDuplicateOccurrences += count;
  if (count === 0) {
    console.log(`\n✅ ${factName}`);
    console.log(`   Authoritative Owner: ${data.owner}`);
    console.log(`   Status: Clean. No external literals found in src/.`);
  } else {
    console.log(`\n❌ ${factName}`);
    console.log(`   Authoritative Owner: ${data.owner}`);
    console.log(`   Duplicate Literal Occurrences (${count} files):`);
    data.externalOccurrences.slice(0, 8).forEach(o => {
      console.log(`     - ${o.file}`);
    });
    if (count > 8) {
      console.log(`     ... and ${count - 8} more files.`);
    }
  }
}

console.log('\n----------------------------------------------------');
console.log(`Total External Literal References: ${totalDuplicateOccurrences}`);
console.log('Status: Informational audit complete.');
console.log('These references are inventoried in scratch/phase1-data-inventory.md');
console.log('and queued for consumption migration in subsequent phases.');
console.log('====================================================\n');
