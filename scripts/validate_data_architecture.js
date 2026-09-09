import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Compile TS data files to scripts/dist/
esbuild.buildSync({
  entryPoints: [
    'src/data/offices.ts',
    'src/data/locations.ts',
    'src/data/services.ts',
    'src/data/packages.ts',
    'src/data/team.ts',
    'src/data/industries.ts'
  ],
  outdir: 'scripts/dist',
  format: 'esm',
  bundle: true,
  platform: 'node'
});

// 2. Import compiled modules
const { physicalOffices } = await import('./dist/offices.js');
const { regionsData, citiesData } = await import('./dist/locations.js');
const { servicesData } = await import('./dist/services.js');
const { commercialPackages } = await import('./dist/packages.js');
const { teamMembers } = await import('./dist/team.js');
const { industriesData } = await import('./dist/industries.js');

console.log('====================================================');
console.log('   DATA ARCHITECTURE & NORMALIZATION VALIDATOR');
console.log('====================================================');
console.log(`Offices:             ${physicalOffices.length}`);
console.log(`Regions:             ${regionsData.length}`);
console.log(`Cities:              ${citiesData.length}`);
console.log(`Canonical Services:  ${servicesData.length}`);
console.log(`Commercial Packages: ${commercialPackages.length}`);
console.log(`Team Members:        ${teamMembers.length}`);
console.log(`Industries:          ${industriesData.length}`);
console.log('----------------------------------------------------');

const errors = [];

function checkUniqueness(items, key, entityName) {
  const seen = new Set();
  for (const item of items) {
    const val = item[key];
    if (val === undefined || val === null || val === '') {
      errors.push(`[${entityName}] Item has missing/empty "${key}".`);
      continue;
    }
    const strVal = String(val).toLowerCase();
    if (seen.has(strVal)) {
      errors.push(`[${entityName}] Duplicate ${key} detected: "${val}".`);
    }
    seen.add(strVal);
  }
}

// 1. Uniqueness Checks
checkUniqueness(physicalOffices, 'id', 'Offices');
checkUniqueness(physicalOffices, 'slug', 'Offices');
checkUniqueness(regionsData, 'slug', 'Regions');
checkUniqueness(citiesData, 'slug', 'Cities');
checkUniqueness(servicesData, 'slug', 'Services');
checkUniqueness(commercialPackages, 'id', 'Packages');
checkUniqueness(commercialPackages, 'title', 'Packages');
checkUniqueness(teamMembers, 'id', 'Team');
checkUniqueness(teamMembers, 'employeeCode', 'Team');
checkUniqueness(industriesData, 'id', 'Industries');

// Sets for lookup
const officeIdSet = new Set(physicalOffices.map(o => o.id.toLowerCase()));
const officeSlugSet = new Set(physicalOffices.map(o => o.slug.toLowerCase()));
const regionSlugSet = new Set(regionsData.map(r => r.slug.toLowerCase()));
const citySlugSet = new Set(citiesData.map(c => c.slug.toLowerCase()));
const serviceSlugSet = new Set(servicesData.map(s => s.slug.toLowerCase()));
const teamIdSet = new Set(teamMembers.map(t => t.id));

// 2. Relational Integrity: Regions -> Cities
for (const region of regionsData) {
  if (!region.citySlugs || region.citySlugs.length === 0) {
    errors.push(`[Regions] Region "${region.slug}" has empty citySlugs.`);
  }
  for (const cSlug of region.citySlugs) {
    if (!citySlugSet.has(cSlug.toLowerCase())) {
      errors.push(`[Regions] Region "${region.slug}" references invalid citySlug: "${cSlug}".`);
    }
  }
}

// 3. Relational Integrity: Cities -> Regions, Offices, Services
for (const city of citiesData) {
  // City -> Region
  if (!regionSlugSet.has(city.regionSlug.toLowerCase())) {
    errors.push(`[Cities] City "${city.slug}" references invalid regionSlug: "${city.regionSlug}".`);
  }

  // City -> Physical Office
  if (city.isPhysicalOffice) {
    if (!city.officeId) {
      errors.push(`[Cities] City "${city.slug}" isPhysicalOffice=true but missing officeId.`);
    } else if (!officeIdSet.has(city.officeId.toLowerCase())) {
      errors.push(`[Cities] City "${city.slug}" references nonexistent officeId: "${city.officeId}".`);
    }
  } else {
    if (city.officeId) {
      errors.push(`[Cities] Non-office city "${city.slug}" has officeId "${city.officeId}" set (should be undefined).`);
    }
  }

  // City -> Serving Office
  if (city.servingOfficeId && !officeIdSet.has(city.servingOfficeId.toLowerCase())) {
    errors.push(`[Cities] City "${city.slug}" references nonexistent servingOfficeId: "${city.servingOfficeId}".`);
  }

  // City -> Services
  if (!city.servicesAvailable || city.servicesAvailable.length === 0) {
    errors.push(`[Cities] City "${city.slug}" has empty servicesAvailable.`);
  }
  for (const sSlug of city.servicesAvailable) {
    if (!serviceSlugSet.has(sSlug.toLowerCase())) {
      errors.push(`[Cities] City "${city.slug}" references nonexistent serviceSlug: "${sSlug}".`);
    }
  }

  // Anti-duplication check: City record MUST NOT carry duplicated physical office fields
  if (city.address) {
    errors.push(`[Cities] Normalization violation: City "${city.slug}" directly defines "address". Office owns address.`);
  }
  if (city.phone) {
    errors.push(`[Cities] Normalization violation: City "${city.slug}" directly defines "phone". Office/Selector owns phone.`);
  }
  if (city.email) {
    errors.push(`[Cities] Normalization violation: City "${city.slug}" directly defines "email". Office/Selector owns email.`);
  }
  if (city.timings) {
    errors.push(`[Cities] Normalization violation: City "${city.slug}" directly defines "timings". Office owns timings.`);
  }
}

// 4. Relational Integrity: Team -> Offices
for (const member of teamMembers) {
  if (!member.officeId || !officeIdSet.has(member.officeId.toLowerCase())) {
    errors.push(`[Team] Member #${member.id} (${member.name}) references invalid officeId: "${member.officeId}".`);
  }
  // Anti-duplication check: TeamMember MUST NOT duplicate officeSlug
  if (member.officeSlug) {
    errors.push(`[Team] Normalization violation: Member #${member.id} defines redundant "officeSlug".`);
  }
}

// 5. Relational Integrity: Offices -> Cities & Team
for (const office of physicalOffices) {
  // Matching city exists
  const matchingCity = citiesData.find(c => c.officeId === office.id || c.slug === office.slug);
  if (!matchingCity) {
    errors.push(`[Offices] Office "${office.id}" has no matching city with officeId="${office.id}".`);
  } else if (!matchingCity.isPhysicalOffice) {
    errors.push(`[Offices] Matching city "${matchingCity.slug}" for office "${office.id}" is not marked isPhysicalOffice=true.`);
  }

  // Team member validation if defined
  if (office.teamMemberIds) {
    for (const tId of office.teamMemberIds) {
      if (!teamIdSet.has(tId)) {
        errors.push(`[Offices] Office "${office.id}" references nonexistent teamMemberId: ${tId}.`);
      }
    }
  }
}

// 6. Relational Integrity: Packages -> Services
for (const pkg of commercialPackages) {
  if (!pkg.serviceSlugs || pkg.serviceSlugs.length === 0) {
    errors.push(`[Packages] Package #${pkg.id} ("${pkg.title}") has no associated serviceSlugs.`);
  }
  for (const sSlug of pkg.serviceSlugs) {
    if (!serviceSlugSet.has(sSlug.toLowerCase())) {
      errors.push(`[Packages] Package #${pkg.id} references invalid serviceSlug: "${sSlug}".`);
    }
  }
}

// 7. Orphan Checks
// Check for orphan offices (offices with 0 team members)
for (const office of physicalOffices) {
  const staff = teamMembers.filter(m => m.officeId.toLowerCase() === office.id.toLowerCase());
  if (staff.length === 0) {
    errors.push(`[Orphan Check] Office "${office.id}" has 0 assigned staff members.`);
  }
}

// Check for orphan regions (regions with 0 cities)
for (const region of regionsData) {
  const regionCities = citiesData.filter(c => c.regionSlug.toLowerCase() === region.slug.toLowerCase());
  if (regionCities.length === 0) {
    errors.push(`[Orphan Check] Region "${region.slug}" has 0 assigned cities in citiesData.`);
  }
}

// 8. Result Reporting & Exit Code
if (errors.length > 0) {
  console.log(`\n❌ FAILED: ${errors.length} data architecture error(s) detected:\n`);
  errors.forEach((err, idx) => console.log(`  ${idx + 1}. ${err}`));
  console.log('\nExiting with code 1.\n');
  process.exit(1);
} else {
  console.log('\n✅ ALL DATA ARCHITECTURE INTEGRITY CHECKS PASSED:');
  console.log('  ✓ No duplicate IDs or slugs across offices, regions, cities, services, packages, team.');
  console.log('  ✓ All city -> region foreign keys valid.');
  console.log('  ✓ All city -> office foreign keys valid.');
  console.log('  ✓ All city -> service foreign keys valid.');
  console.log('  ✓ All team -> office foreign keys valid.');
  console.log('  ✓ All package -> service foreign keys valid.');
  console.log('  ✓ No orphan offices or regions.');
  console.log('  ✓ Single source of truth enforced (no duplicated office facts in city records).');
  console.log('  ✓ Team records normalized (redundant officeSlug eliminated).');
  console.log('----------------------------------------------------');
  console.log('Exiting with code 0.\n');
  process.exit(0);
}
