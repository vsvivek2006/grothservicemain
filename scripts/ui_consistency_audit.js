/**
 * Growth Service - Full Site-Wide UI Consistency + Layout Normalization Audit Script
 * Scans all user-facing TSX page files and verifies alignment with the shared design system.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Map of page relative paths to Page Family
const PAGE_FAMILIES = {
  'src/pages/Home.tsx': 'Core Marketing',
  'src/pages/About.tsx': 'Core Marketing',
  'src/pages/Services.tsx': 'Core Marketing',
  'src/pages/Portfolio.tsx': 'Core Marketing',
  'src/pages/Pricing.tsx': 'Core Marketing',
  'src/pages/Packages.tsx': 'Core Marketing',
  'src/pages/Contact.tsx': 'Core Marketing',
  'src/pages/BookCall.tsx': 'Core Marketing',
  'src/pages/FreeWebsiteAudit.tsx': 'Core Marketing',
  'src/pages/Blog.tsx': 'Core Marketing',
  'src/pages/OurImpact.tsx': 'Core Marketing',
  'src/pages/GrowthServices.tsx': 'Core Marketing',
  'src/pages/Offer.tsx': 'Core Marketing',
  'src/pages/NotFound.tsx': 'Core Marketing',

  'src/pages/digital-marketing/SEOService.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/SocialMediaManagement.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/MetaAdsManagement.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/GoogleBusinessProfile.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/ContentMarketing.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/LeadGeneration.tsx': 'Digital Marketing',
  'src/pages/digital-marketing/BrandStrategy.tsx': 'Digital Marketing',
  'src/pages/DigitalMarketing.tsx': 'Digital Marketing',

  'src/pages/design-development/WebsiteDevelopment.tsx': 'Design & Development',
  'src/pages/design-development/UIUXDesign.tsx': 'Design & Development',
  'src/pages/design-development/WordPressDevelopment.tsx': 'Design & Development',
  'src/pages/design-development/EcommerceDevelopment.tsx': 'Design & Development',
  'src/pages/design-development/MobileAppDevelopment.tsx': 'Design & Development',
  'src/pages/DesignDevelopment.tsx': 'Design & Development',

  'src/pages/WhiteLabel.tsx': 'White Label',
  'src/pages/white-label/WhiteLabelSEO.tsx': 'White Label',
  'src/pages/white-label/WhiteLabelPPC.tsx': 'White Label',
  'src/pages/white-label/WhiteLabelSocialMedia.tsx': 'White Label',
  'src/pages/white-label/WhiteLabelWebDevelopment.tsx': 'White Label',

  'src/pages/LocationsHub.tsx': 'Locations & Offices',
  'src/pages/OfficesHub.tsx': 'Locations & Offices',
  'src/pages/TeamPage.tsx': 'Locations & Offices',
  'src/pages/CityHubPage.tsx': 'Locations & Offices',
  'src/pages/OfficeDetailPage.tsx': 'Locations & Offices',
  'src/pages/LocationServicePage.tsx': 'Programmatic Location SEO',

  'src/pages/Resources.tsx': 'Resources & Proof',
  'src/pages/CaseStudies.tsx': 'Resources & Proof',
  'src/pages/Testimonials.tsx': 'Resources & Proof',
  'src/pages/HelpCenter.tsx': 'Resources & Proof',
  'src/FAQ.tsx': 'Resources & Proof',
  'src/pages/SEOResults.tsx': 'Resources & Proof',

  'src/pages/TrustVerification.tsx': 'Trust & Verification',

  'src/pages/Terms.tsx': 'Legal & Compliance',
  'src/pages/Privacy.tsx': 'Legal & Compliance',
  'src/pages/RefundPolicy.tsx': 'Legal & Compliance',
  'src/pages/Accessibility.tsx': 'Legal & Compliance',
  'src/pages/OnboardingAgreement.tsx': 'Legal & Compliance',
};

function getAllPageFiles() {
  const pagesDir = path.join(ROOT_DIR, 'src', 'pages');
  const files = [];

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/'));
      }
    }
  }

  scanDir(pagesDir);

  const faqPath = path.join(ROOT_DIR, 'src', 'FAQ.tsx');
  if (fs.existsSync(faqPath)) {
    files.push('src/FAQ.tsx');
  }

  return files.sort();
}

function auditPage(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const family = PAGE_FAMILIES[filePath] || 'Other';

  const issues = [];
  let score = 100;

  // 1. Container Audit
  const usesSharedContainer = /import\s+.*?\bContainer\b.*?from/.test(content) || /<Container\b/.test(content);
  // Match legacy container mx-auto px-4 or className="container
  const hasLegacyContainer = /className=["'][^"']*\bcontainer\s+mx-auto\b[^"']*["']/.test(content) ||
                             /className=["'][^"']*\bcontainer\b(?!\s*name)[^"']*["']/.test(content);
  const hasRawMaxW7xl = /className=["'][^"']*\bmax-w-7xl\s+mx-auto\s+px-[^"']*["']/.test(content);

  let containerStatus = 'PASS';
  if (hasLegacyContainer) {
    issues.push('Uses legacy "container mx-auto" instead of shared <Container>');
    containerStatus = 'FAIL';
    score -= 25;
  } else if (hasRawMaxW7xl && !usesSharedContainer) {
    issues.push('Raw max-w-7xl mx-auto px-* used instead of shared <Container>');
    containerStatus = 'WARN';
    score -= 10;
  } else if (!usesSharedContainer && !['Home.tsx'].includes(path.basename(filePath))) {
    // Home uses section-level components that import Container
    const importsComponentWithContainer = /HomeHero|HomePresenceRibbon/.test(content);
    if (!importsComponentWithContainer) {
      issues.push('Does not import or use shared <Container>');
      containerStatus = 'WARN';
      score -= 10;
    }
  }

  // 2. Section Audit
  const usesSharedSection = /import\s+.*?\bSection\b.*?from/.test(content) || /<Section\b/.test(content);
  // Check for raw <section py-16 / py-20
  const rawSectionMatches = content.match(/<section\b[^>]*className=["'][^"']*\bpy-(?:12|14|16|20|24|28)\b[^"']*["']/g);
  let sectionStatus = 'PASS';
  if (rawSectionMatches && rawSectionMatches.length > 2 && !usesSharedSection) {
    issues.push(`Found ${rawSectionMatches.length} raw <section py-*> tags instead of shared <Section>`);
    sectionStatus = 'FAIL';
    score -= 20;
  } else if (rawSectionMatches && !usesSharedSection) {
    issues.push(`Found ${rawSectionMatches.length} raw <section py-*> tags`);
    sectionStatus = 'WARN';
    score -= 10;
  }

  // 3. Button Audit
  const usesSharedButton = /import\s+.*?\b(?:Button|AnimatedButton)\b.*?from/.test(content);
  // Look for manual button styling patterns on Links or buttons:
  // e.g., "px-8 py-3 rounded-lg font-semibold text-lg" or "px-6 py-3 rounded-xl"
  const manualButtonRegex = /className=["'][^"']*\bpx-[68]\s+py-[34]\s+rounded-(?:lg|xl|md)\s+font-(?:semibold|bold)[^"']*["']/g;
  const manualButtons = content.match(manualButtonRegex);
  let buttonStatus = 'PASS';
  if (manualButtons && manualButtons.length > 0 && !usesSharedButton) {
    issues.push(`Found ${manualButtons.length} manually styled CTA buttons instead of <Button> or <AnimatedButton>`);
    buttonStatus = 'FAIL';
    score -= 20;
  }

  // 4. Card Audit
  // Look for manual card styles like bg-white p-6 rounded-lg shadow-sm border
  const manualCardRegex = /className=["'][^"']*\bbg-(?:white|gray-50|slate-50)\b[^"']*\bp-[68]\b[^"']*\brounded-(?:lg|xl)\b[^"']*\b(?:shadow|border)\b[^"']*["']/g;
  const manualCards = content.match(manualCardRegex);
  let cardStatus = 'PASS';
  if (manualCards && manualCards.length > 3) {
    issues.push(`Found ${manualCards.length} manually styled card blocks`);
    cardStatus = 'WARN';
    score -= 10;
  }

  // 5. Technology Data Audit (For tech/dev service pages)
  const isTechPage = /WebsiteDevelopment|EcommerceDevelopment|MobileAppDevelopment|WordPressDevelopment|UIUXDesign|DesignDevelopment/.test(filePath);
  let techDataStatus = 'N/A';
  if (isTechPage) {
    const usesCentralizedTech = /from\s+['"].*?technologies['"]/.test(content);
    const hasManualTechSvg = /FaWordpress|FaReact|FaNode|FaShopify|svg.*viewBox="0 0 496 512"/.test(content);
    if (hasManualTechSvg && !usesCentralizedTech) {
      issues.push('Hardcoded inline tech SVGs instead of centralized technologies.ts');
      techDataStatus = 'FAIL';
      score -= 25;
    } else if (usesCentralizedTech) {
      techDataStatus = 'PASS';
    } else {
      techDataStatus = 'WARN';
    }
  }

  // 6. Typography Audit
  let typographyStatus = 'PASS';
  // Check for H1 existence on main pages
  const hasH1 = /<h1\b/.test(content);
  if (!hasH1 && !filePath.includes('Home.tsx') && !filePath.includes('CityHubPage.tsx')) {
    issues.push('Missing <h1> page heading');
    typographyStatus = 'WARN';
    score -= 5;
  }

  // Normalize score
  score = Math.max(0, score);
  const overallStatus = score >= 80 ? (score === 100 ? 'EXCELLENT' : 'PASS') : (score >= 60 ? 'WARN' : 'FAIL');

  return {
    file: filePath,
    family,
    containerStatus,
    sectionStatus,
    buttonStatus,
    cardStatus,
    techDataStatus,
    typographyStatus,
    score,
    status: overallStatus,
    issues
  };
}

function runAudit() {
  console.log('====================================================');
  console.log('       FULL SITE-WIDE UI CONSISTENCY AUDIT          ');
  console.log('====================================================\n');

  const files = getAllPageFiles();
  const results = files.map(auditPage);

  let passCount = 0;
  let warnCount = 0;
  let failCount = 0;

  for (const r of results) {
    if (r.status === 'FAIL') failCount++;
    else if (r.status === 'WARN') warnCount++;
    else passCount++;

    const icon = r.status === 'FAIL' ? '❌' : (r.status === 'WARN' ? '⚠️' : '✅');
    console.log(`${icon} [${r.score}%] ${r.file} (${r.family})`);
    if (r.issues.length > 0) {
      r.issues.forEach(issue => console.log(`   - ${issue}`));
    }
  }

  console.log('\n----------------------------------------------------');
  console.log(`Total Pages Audited: ${results.length}`);
  console.log(`Passed (≥80%):       ${passCount}`);
  console.log(`Warnings (60-79%):   ${warnCount}`);
  console.log(`Failed (<60%):       ${failCount}`);
  console.log('====================================================\n');

  return { results, failCount, warnCount, passCount };
}

// Allow execution directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { failCount } = runAudit();
  if (failCount > 0) {
    process.exit(1);
  }
}

export { runAudit, getAllPageFiles, auditPage };
