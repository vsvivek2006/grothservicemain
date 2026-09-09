import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// 1. Compile TS files with esbuild
esbuild.buildSync({
  entryPoints: [
    'src/data/locations.ts',
    'src/data/offices.ts',
    'src/data/services.ts',
    'src/data/team.ts'
  ],
  outdir: 'scratch/dist',
  format: 'esm',
  bundle: false
});

// 2. Import compiled modules
const locationsModule = await import('./dist/locations.js');
const officesModule = await import('./dist/offices.js');
const servicesModule = await import('./dist/services.js');
const teamModule = await import('./dist/team.js');

const { regionsData, citiesData } = locationsModule;
const { physicalOffices } = officesModule;
const { servicesData } = servicesModule;
const { teamMembers } = teamModule;

console.log('=== DATA AUDIT ===');
console.log(`Regions: ${regionsData.length}`);
console.log(`Cities: ${citiesData.length}`);
console.log(`Offices: ${physicalOffices.length}`);
console.log(`Services: ${servicesData.length}`);
console.log(`Team: ${teamMembers.length}`);

const regionSlugSet = new Set(regionsData.map(r => r.slug));
const citySlugSet = new Set(citiesData.map(c => c.slug));
const officeIdSet = new Set(physicalOffices.map(o => o.id));
const serviceSlugSet = new Set(servicesData.map(s => s.slug));

const dataErrors = [];

// Audit regions
for (const region of regionsData) {
  for (const citySlug of region.citySlugs) {
    if (!citySlugSet.has(citySlug)) {
      dataErrors.push(`Region "${region.slug}" has citySlug "${citySlug}" not found in citiesData.`);
    }
  }
}

// Audit cities
for (const city of citiesData) {
  if (!regionSlugSet.has(city.regionSlug)) {
    dataErrors.push(`City "${city.slug}" references nonexistent regionSlug "${city.regionSlug}".`);
  }
  if (city.isPhysicalOffice) {
    if (!city.officeId || !officeIdSet.has(city.officeId)) {
      dataErrors.push(`City "${city.slug}" marked isPhysicalOffice=true but officeId "${city.officeId}" not found in physicalOffices.`);
    }
  }
  for (const srv of city.servicesAvailable) {
    if (!serviceSlugSet.has(srv)) {
      dataErrors.push(`City "${city.slug}" has service "${srv}" not found in servicesData.`);
    }
  }
}

// Audit offices
for (const office of physicalOffices) {
  const matchingCity = citiesData.find(c => c.slug.toLowerCase() === office.slug.toLowerCase() || c.officeId === office.id);
  if (!matchingCity) {
    dataErrors.push(`Office "${office.slug}" has no matching city in citiesData.`);
  }
}

if (dataErrors.length > 0) {
  console.log('\n❌ DATA INCONSISTENCIES FOUND:');
  dataErrors.forEach(err => console.log('  - ' + err));
} else {
  console.log('\n✅ All data relations valid!');
}
