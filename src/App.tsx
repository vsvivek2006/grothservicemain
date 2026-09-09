import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingFallback from './components/ui/LoadingFallback';
import ScrollToTop from './components/ScrollToTop';
import { APP_ROUTES, getRouteAliases } from './routing';

// Core Pages (Route-level Code Splitting for optimal Core Web Vitals)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const OnboardingAgreement = lazy(() => import('./pages/OnboardingAgreement'));
const Privacy = lazy(() => import('./pages/Privacy'));
const FAQ = lazy(() => import('./FAQ'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FreeWebsiteAudit = lazy(() => import('./pages/FreeWebsiteAudit'));
const Offer = lazy(() => import('./pages/Offer'));
const GrowthServices = lazy(() => import('./pages/GrowthServices'));
const BookCall = lazy(() => import('./pages/BookCall'));
const OurImpact = lazy(() => import('./pages/OurImpact'));
const Packages = lazy(() => import('./pages/Packages'));
const Blog = lazy(() => import('./pages/Blog'));

// Digital Marketing Pages
const SEOService = lazy(() => import('./pages/digital-marketing/SEOService'));
const SocialMediaManagement = lazy(() => import('./pages/digital-marketing/SocialMediaManagement'));
const MetaAdsManagement = lazy(() => import('./pages/digital-marketing/MetaAdsManagement'));
const GoogleBusinessProfile = lazy(() => import('./pages/digital-marketing/GoogleBusinessProfile'));
const ContentMarketing = lazy(() => import('./pages/digital-marketing/ContentMarketing'));
const LeadGeneration = lazy(() => import('./pages/digital-marketing/LeadGeneration'));
const BrandStrategy = lazy(() => import('./pages/digital-marketing/BrandStrategy'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));

// Design & Development Pages
const WebsiteDevelopment = lazy(() => import('./pages/design-development/WebsiteDevelopment'));
const UIUXDesign = lazy(() => import('./pages/design-development/UIUXDesign'));
const WordPressDevelopment = lazy(() => import('./pages/design-development/WordPressDevelopment'));
const EcommerceDevelopment = lazy(() => import('./pages/design-development/EcommerceDevelopment'));
const MobileAppDevelopment = lazy(() => import('./pages/design-development/MobileAppDevelopment'));
const DesignDevelopment = lazy(() => import('./pages/DesignDevelopment'));

// White Label Pages
const WhiteLabel = lazy(() => import('./pages/WhiteLabel'));
const WhiteLabelSEO = lazy(() => import('./pages/white-label/WhiteLabelSEO'));
const WhiteLabelPPC = lazy(() => import('./pages/white-label/WhiteLabelPPC'));
const WhiteLabelSocialMedia = lazy(() => import('./pages/white-label/WhiteLabelSocialMedia'));
const WhiteLabelWebDevelopment = lazy(() => import('./pages/white-label/WhiteLabelWebDevelopment'));

// Resource & Proof Pages
const Resources = lazy(() => import('./pages/Resources'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Hubs, Offices & Location Architecture
const OfficesHub = lazy(() => import('./pages/OfficesHub'));
const OfficeDetailPage = lazy(() => import('./pages/OfficeDetailPage'));
const LocationsHub = lazy(() => import('./pages/LocationsHub'));
const CityHubPage = lazy(() => import('./pages/CityHubPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const TrustVerification = lazy(() => import('./pages/TrustVerification'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));

// Scalable Programmatic Location SEO Template
const LocationServicePage = lazy(() => import('./pages/LocationServicePage'));

// Static Route Component Binding Map
const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  [APP_ROUTES.home.path]: Home,
  [APP_ROUTES.about.path]: About,
  [APP_ROUTES.services.path]: Services,
  [APP_ROUTES.portfolio.path]: Portfolio,
  [APP_ROUTES.pricing.path]: Pricing,
  [APP_ROUTES.packages.path]: Packages,
  [APP_ROUTES.contact.path]: Contact,
  [APP_ROUTES.bookCall.path]: BookCall,
  [APP_ROUTES.freeAudit.path]: FreeWebsiteAudit,
  [APP_ROUTES.blog.path]: Blog,
  [APP_ROUTES.impact.path]: OurImpact,
  [APP_ROUTES.growthServices.path]: GrowthServices,
  [APP_ROUTES.offer.path]: Offer,
  [APP_ROUTES.digitalMarketing.path]: DigitalMarketing,
  [APP_ROUTES.seo.path]: SEOService,
  [APP_ROUTES.socialMedia.path]: SocialMediaManagement,
  [APP_ROUTES.paidMarketing.path]: MetaAdsManagement,
  [APP_ROUTES.localSeo.path]: GoogleBusinessProfile,
  [APP_ROUTES.contentMarketing.path]: ContentMarketing,
  [APP_ROUTES.leadGeneration.path]: LeadGeneration,
  [APP_ROUTES.branding.path]: BrandStrategy,
  [APP_ROUTES.designDevelopment.path]: DesignDevelopment,
  [APP_ROUTES.webDevelopment.path]: WebsiteDevelopment,
  [APP_ROUTES.uiUxDesign.path]: UIUXDesign,
  [APP_ROUTES.wordpressDevelopment.path]: WordPressDevelopment,
  [APP_ROUTES.ecommerce.path]: EcommerceDevelopment,
  [APP_ROUTES.appDevelopment.path]: MobileAppDevelopment,
  [APP_ROUTES.whiteLabel.path]: WhiteLabel,
  [APP_ROUTES.whiteLabelSeo.path]: WhiteLabelSEO,
  [APP_ROUTES.whiteLabelPpc.path]: WhiteLabelPPC,
  [APP_ROUTES.whiteLabelSmo.path]: WhiteLabelSocialMedia,
  [APP_ROUTES.whiteLabelWeb.path]: WhiteLabelWebDevelopment,
  [APP_ROUTES.locationsHub.path]: LocationsHub,
  [APP_ROUTES.officesHub.path]: OfficesHub,
  [APP_ROUTES.team.path]: TeamPage,
  [APP_ROUTES.resources.path]: Resources,
  [APP_ROUTES.caseStudies.path]: CaseStudies,
  [APP_ROUTES.testimonials.path]: Testimonials,
  [APP_ROUTES.helpCenter.path]: HelpCenter,
  [APP_ROUTES.faq.path]: FAQ,
  [APP_ROUTES.verify.path]: TrustVerification,
  [APP_ROUTES.terms.path]: Terms,
  [APP_ROUTES.privacy.path]: Privacy,
  [APP_ROUTES.refund.path]: RefundPolicy,
  [APP_ROUTES.accessibility.path]: Accessibility,
  [APP_ROUTES.onboardingAgreement.path]: OnboardingAgreement,
};

function App() {
  const routeAliases = getRouteAliases();

  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden w-full max-w-[100vw]">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Registered Authoritative Static Routes */}
              {Object.entries(ROUTE_COMPONENTS).map(([path, Component]) => (
                <Route key={path} path={path} element={<Component />} />
              ))}

              {/* Dynamic Office Pages */}
              <Route path="/offices/:officeSlug" element={<OfficeDetailPage />} />

              {/* Dynamic City Hub Pages */}
              <Route path="/locations/:citySlug" element={<CityHubPage />} />

              {/* Dynamic Programmatic Location SEO Pages */}
              <Route path="/:city/:serviceSlug" element={<LocationServicePage />} />

              {/* Dynamic Alias Redirections from Route Registry */}
              {routeAliases.map((alias) => (
                <Route
                  key={alias.from}
                  path={alias.from}
                  element={<Navigate to={alias.to} replace />}
                />
              ))}

              {/* Dynamic Legacy Programmatic Alias */}
              <Route
                path="/locations/:city/:serviceSlug"
                element={<Navigate to="/:city/:serviceSlug" replace />}
              />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
