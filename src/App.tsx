import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingFallback from './components/ui/LoadingFallback';
import ScrollToTop from './components/ScrollToTop';

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

// Scalable Programmatic Location SEO Template
const LocationServicePage = lazy(() => import('./pages/LocationServicePage'));

// Physical Offices & Location Architecture
const OfficesHub = lazy(() => import('./pages/OfficesHub'));
const OfficeDetailPage = lazy(() => import('./pages/OfficeDetailPage'));
const LocationsHub = lazy(() => import('./pages/LocationsHub'));
const CityHubPage = lazy(() => import('./pages/CityHubPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));

import { useParams, Navigate } from 'react-router-dom';
import { businessConfig } from './config/business';

// Helper component for programmatic dynamic route alias redirection
const LocationServiceRedirect: React.FC = () => {
  const { city, serviceSlug } = useParams<{ city: string; serviceSlug: string }>();
  return <Navigate to={`/${city}/${serviceSlug}`} replace />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Primary Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/onboarding-agreement" element={<OnboardingAgreement />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/book-call" element={<BookCall />} />
              <Route path="/free-audit" element={<FreeWebsiteAudit />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/impact" element={<OurImpact />} />
              <Route path="/growth-services" element={<GrowthServices />} />

              {/* Digital Marketing Suite */}
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/seo" element={<SEOService />} />
              <Route path="/social-media" element={<SocialMediaManagement />} />
              <Route path="/paid-marketing" element={<MetaAdsManagement />} />
              <Route path="/local-seo" element={<GoogleBusinessProfile />} />
              <Route path="/content-marketing" element={<ContentMarketing />} />
              <Route path="/lead-generation" element={<LeadGeneration />} />
              <Route path="/branding" element={<BrandStrategy />} />

              {/* Design & Development Suite with Canonical Paths */}
              <Route path="/design-development" element={<DesignDevelopment />} />
              <Route path="/web-development" element={<WebsiteDevelopment />} />
              <Route path="/website-development" element={<Navigate to="/web-development" replace />} />
              <Route path="/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/wordpress-development" element={<WordPressDevelopment />} />
              <Route path="/ecommerce" element={<EcommerceDevelopment />} />
              <Route path="/ecommerce-development" element={<Navigate to="/ecommerce" replace />} />
              <Route path="/app-development" element={<MobileAppDevelopment />} />

              {/* White Label Agency Suite */}
              <Route path="/white-label" element={<WhiteLabel />} />
              <Route path="/white-label-seo" element={<WhiteLabelSEO />} />
              <Route path="/white-label-ppc" element={<WhiteLabelPPC />} />
              <Route path="/white-label-smo" element={<WhiteLabelSocialMedia />} />
              <Route path="/white-label-web" element={<WhiteLabelWebDevelopment />} />

              {/* Content & Proof Hubs */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/offer" element={<Offer />} />

              {/* Physical Offices & Teams */}
              <Route path="/offices" element={<OfficesHub />} />
              <Route path="/offices/:officeSlug" element={<OfficeDetailPage />} />
              <Route path="/team" element={<TeamPage />} />

              {/* Canonical Route Aliases -> Redirect to Canonical */}
              <Route path="/careers" element={<Navigate to="/team" replace />} />
              <Route path="/about/team" element={<Navigate to="/team" replace />} />
              <Route path="/refund" element={<Navigate to="/privacy" replace />} />
              <Route path="/success-stories" element={<Navigate to="/case-studies" replace />} />
              <Route path="/webinars" element={<Navigate to="/resources" replace />} />
              <Route path="/email-marketing" element={<Navigate to="/digital-marketing" replace />} />
              <Route path="/ui-ux" element={<Navigate to="/ui-ux-design" replace />} />
              <Route path="/consultation" element={<Navigate to="/book-call" replace />} />
              <Route path="/whitelabel" element={<Navigate to="/white-label" replace />} />
              <Route path="/sitemap" element={<Navigate to="/locations" replace />} />
              <Route path="/accessibility" element={<Navigate to="/terms" replace />} />
              <Route path="/scam-alert" element={<Navigate to="/help-center" replace />} />
              <Route path="/verify" element={<Navigate to="/contact" replace />} />
              <Route path="/report-scam" element={<Navigate to="/contact" replace />} />

              {/* Scalable Locations Directory & City Hubs */}
              <Route path="/locations" element={<LocationsHub />} />
              <Route path="/locations/:citySlug" element={<CityHubPage />} />

              {/* Programmatic Location SEO Dynamic Routes */}
              <Route path="/:city/:serviceSlug" element={<LocationServicePage />} />
              <Route path="/locations/:city/:serviceSlug" element={<LocationServiceRedirect />} />

              {/* ✅ PAYMENT SUCCESS PAGE (Non-Indexable) */}
              <Route path="/payment/success" element={
                <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                  <Helmet>
                    <title>Payment Successful | Growth Service</title>
                    <meta name="robots" content="noindex, nofollow" />
                  </Helmet>
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4 border border-green-100">
                    <div className="text-green-500 text-6xl mb-4">✅</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Thank you for your payment. We've received your order and our account manager will contact you within 24 hours.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="/"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors block shadow-md"
                      >
                        Return to Home
                      </a>
                      <a
                        href={businessConfig.whatsapp.defaultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors block shadow-md"
                      >
                        💬 WhatsApp Support
                      </a>
                    </div>
                  </div>
                </div>
              } />

              {/* ✅ PAYMENT FAILED PAGE (Non-Indexable) */}
              <Route path="/payment/failed" element={
                <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                  <Helmet>
                    <title>Payment Failed | Growth Service</title>
                    <meta name="robots" content="noindex, nofollow" />
                  </Helmet>
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4 border border-red-100">
                    <div className="text-red-500 text-6xl mb-4">❌</div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Your payment could not be processed. Please try again or contact our support team.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="/pricing"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors block shadow-md"
                      >
                        Try Again
                      </a>
                      <a
                        href={businessConfig.whatsapp.defaultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors block shadow-md"
                      >
                        💬 WhatsApp Support
                      </a>
                      <a
                        href={`tel:${businessConfig.phones.supportDesk.replace(/[^0-9+]/g, '')}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors block shadow-md"
                      >
                        📞 Call Support
                      </a>
                    </div>
                  </div>
                </div>
              } />

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
