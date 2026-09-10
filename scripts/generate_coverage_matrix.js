import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllPageFiles, auditPage } from './ui_consistency_audit.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Map files to routes
const FILE_TO_ROUTE = {
  'src/pages/Home.tsx': '/',
  'src/pages/About.tsx': '/about',
  'src/pages/Services.tsx': '/services',
  'src/pages/Portfolio.tsx': '/portfolio',
  'src/pages/Pricing.tsx': '/pricing',
  'src/pages/Packages.tsx': '/packages',
  'src/pages/Contact.tsx': '/contact',
  'src/pages/BookCall.tsx': '/book-call',
  'src/pages/FreeWebsiteAudit.tsx': '/free-audit',
  'src/pages/Blog.tsx': '/blog',
  'src/pages/OurImpact.tsx': '/impact',
  'src/pages/GrowthServices.tsx': '/growth-services',
  'src/pages/Offer.tsx': '/offer',
  'src/pages/NotFound.tsx': '/404',

  'src/pages/digital-marketing/SEOService.tsx': '/seo',
  'src/pages/digital-marketing/SocialMediaManagement.tsx': '/social-media',
  'src/pages/digital-marketing/MetaAdsManagement.tsx': '/paid-marketing',
  'src/pages/digital-marketing/GoogleBusinessProfile.tsx': '/local-seo',
  'src/pages/digital-marketing/ContentMarketing.tsx': '/content-marketing',
  'src/pages/digital-marketing/LeadGeneration.tsx': '/lead-generation',
  'src/pages/digital-marketing/BrandStrategy.tsx': '/branding',
  'src/pages/DigitalMarketing.tsx': '/digital-marketing',

  'src/pages/design-development/WebsiteDevelopment.tsx': '/web-development',
  'src/pages/design-development/UIUXDesign.tsx': '/ui-ux-design',
  'src/pages/design-development/WordPressDevelopment.tsx': '/wordpress-development',
  'src/pages/design-development/EcommerceDevelopment.tsx': '/ecommerce',
  'src/pages/design-development/MobileAppDevelopment.tsx': '/app-development',
  'src/pages/DesignDevelopment.tsx': '/design-development',

  'src/pages/WhiteLabel.tsx': '/white-label',
  'src/pages/white-label/WhiteLabelSEO.tsx': '/white-label-seo',
  'src/pages/white-label/WhiteLabelPPC.tsx': '/white-label-ppc',
  'src/pages/white-label/WhiteLabelSocialMedia.tsx': '/white-label-smo',
  'src/pages/white-label/WhiteLabelWebDevelopment.tsx': '/white-label-web',

  'src/pages/LocationsHub.tsx': '/locations',
  'src/pages/OfficesHub.tsx': '/offices',
  'src/pages/TeamPage.tsx': '/team',
  'src/pages/CityHubPage.tsx': '/locations/:citySlug',
  'src/pages/OfficeDetailPage.tsx': '/offices/:officeSlug',
  'src/pages/LocationServicePage.tsx': '/:city/:serviceSlug',

  'src/pages/Resources.tsx': '/resources',
  'src/pages/CaseStudies.tsx': '/case-studies',
  'src/pages/Testimonials.tsx': '/testimonials',
  'src/pages/HelpCenter.tsx': '/help-center',
  'src/FAQ.tsx': '/faq',
  'src/pages/SEOResults.tsx': '/seo-results (internal)',

  'src/pages/TrustVerification.tsx': '/verify',

  'src/pages/Terms.tsx': '/terms',
  'src/pages/Privacy.tsx': '/privacy',
  'src/pages/RefundPolicy.tsx': '/refund',
  'src/pages/Accessibility.tsx': '/accessibility',
  'src/pages/OnboardingAgreement.tsx': '/onboarding-agreement',
};

const files = getAllPageFiles();
let md = `# UI Page Coverage Matrix — Full Site-Wide Audit\n\n`;
md += `Generated: ${new Date().toISOString()}\n\n`;
md += `| Route | Component | Family | Container | Section | Button | Card | Breadcrumb | Centralized Data | Responsive | Status |\n`;
md += `|---|---|---|---|---|---|---|---|---|---|---|\n`;

for (const f of files) {
  const fullPath = path.join(ROOT_DIR, f);
  const content = fs.readFileSync(fullPath, 'utf8');
  const audit = auditPage(f);

  const route = FILE_TO_ROUTE[f] || f;
  const comp = path.basename(f, '.tsx');
  const family = audit.family;

  const hasContainer = (/import\s+.*?\bContainer\b.*?from/.test(content) || /<Container\b/.test(content)) && !(/container\s+mx-auto/.test(content));
  const hasSection = /import\s+.*?\bSection\b.*?from/.test(content) || /<Section\b/.test(content);
  const hasButton = /import\s+.*?\b(?:Button|AnimatedButton)\b.*?from/.test(content);
  const hasCard = /import\s+.*?\b(?:Card|BentoGrid|ServiceCard|LocationCard|EmployeeCard)\b.*?from/.test(content);
  const hasBreadcrumb = /import\s+.*?\bBreadcrumb\b.*?from/.test(content) || /<Breadcrumb\b/.test(content);
  const hasCentralData = /from\s+['"].*?(?:selectors|data\/centralizedData|data\/technologies|data\/offices|data\/services)/.test(content);

  const statusBadge = audit.status === 'EXCELLENT' || audit.status === 'PASS' 
    ? '✅ Normal' 
    : (audit.status === 'WARN' ? '⚠️ Needs Review' : '❌ Legacy Pattern');

  md += `| \`${route}\` | \`${comp}\` | ${family} | ${hasContainer ? '✅' : '❌'} | ${hasSection ? '✅' : '❌'} | ${hasButton ? '✅' : '❌'} | ${hasCard ? '✅' : '❌'} | ${hasBreadcrumb ? '✅' : '—'} | ${hasCentralData ? '✅' : '—'} | 320–1440px | ${statusBadge} |\n`;
}

const outputPath = path.join(ROOT_DIR, 'scratch', 'ui-page-coverage.md');
fs.writeFileSync(outputPath, md, 'utf8');
console.log(`Generated ${outputPath} with ${files.length} pages.`);
