import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import OnboardingAgreement from './pages/OnboardingAgreement';
import Privacy from './pages/Privacy';
import FAQ from './FAQ';
import NotFound from './pages/NotFound';
import FreeWebsiteAudit from './pages/FreeWebsiteAudit';
import Offer from './pages/Offer';
import GrowthServices from './pages/GrowthServices';
import BookCall from './pages/BookCall';
import OurImpact from './pages/OurImpact';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import SEOService from './pages/digital-marketing/SEOService';
import SocialMediaManagement from './pages/digital-marketing/SocialMediaManagement';
import MetaAdsManagement from './pages/digital-marketing/MetaAdsManagement';
import GoogleBusinessProfile from './pages/digital-marketing/GoogleBusinessProfile';
import ContentMarketing from './pages/digital-marketing/ContentMarketing';
import LeadGeneration from './pages/digital-marketing/LeadGeneration';
import BrandStrategy from './pages/digital-marketing/BrandStrategy';

import WebsiteDevelopment from './pages/design-development/WebsiteDevelopment';
import UIUXDesign from './pages/design-development/UIUXDesign';
import WordPressDevelopment from './pages/design-development/WordPressDevelopment';
import EcommerceDevelopment from './pages/design-development/EcommerceDevelopment';
import MobileAppDevelopment from './pages/design-development/MobileAppDevelopment';

import WhiteLabel from './pages/WhiteLabel';
import WhiteLabelSEO from './pages/white-label/WhiteLabelSEO';
import WhiteLabelPPC from './pages/white-label/WhiteLabelPPC';
import WhiteLabelSocialMedia from './pages/white-label/WhiteLabelSocialMedia';
import WhiteLabelWebDevelopment from './pages/white-label/WhiteLabelWebDevelopment';

import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import Testimonials from './pages/Testimonials';
import HelpCenter from './pages/HelpCenter';




function App() {
  return (
    <Router>
      {/* Global SEO + GA4 */}
      <Helmet>
        {/* GA4 Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M92TJDJ055"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M92TJDJ055');
          `}
        </script>

        {/* ✅ Razorpay Script for Payment Functionality */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
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
            <Route path="/seo" element={<SEOService />} />
            <Route path="/social-media" element={<SocialMediaManagement />} />
            <Route path="/paid-marketing" element={<MetaAdsManagement />} />
            <Route path="/local-seo" element={<GoogleBusinessProfile />} />
            <Route path="/content-marketing" element={<ContentMarketing />} />
            <Route path="/lead-generation" element={<LeadGeneration />} />
            <Route path="/branding" element={<BrandStrategy />} />

            <Route path="/design-development" element={<WebsiteDevelopment />} /> {/* Default to Web Dev or create a main Design page if exists. Header links to /design-development */}
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
            <Route path="/app-development" element={<MobileAppDevelopment />} />

            <Route path="/white-label" element={<WhiteLabel />} />
            <Route path="/white-label-seo" element={<WhiteLabelSEO />} />
            <Route path="/white-label-ppc" element={<WhiteLabelPPC />} />
            <Route path="/white-label-smo" element={<WhiteLabelSocialMedia />} />
            <Route path="/white-label-web" element={<WhiteLabelWebDevelopment />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/digital-marketing" element={<SEOService />} /> {/* Fallback or main page for Digital Marketing */}

            <Route path="/offer" element={<Offer />} />

            {/* ✅ PAYMENT SUCCESS PAGE */}
            <Route path="/payment/success" element={
              <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-green-500 text-6xl mb-4">✅</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                  <p className="text-gray-600 mb-6">
                    Thank you for your payment. We've received your order and will contact you within 24 hours.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="/"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Return to Home
                    </a>
                    <a
                      href="https://wa.me/919521281509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 WhatsApp Support
                    </a>
                  </div>
                </div>
              </div>
            } />

            {/* ✅ PAYMENT FAILED PAGE */}
            <Route path="/payment/failed" element={
              <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                  <div className="text-red-500 text-6xl mb-4">❌</div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                  <p className="text-gray-600 mb-6">
                    Your payment could not be processed. Please try again or contact our support team.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="/pricing"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      Try Again
                    </a>
                    <a
                      href="https://wa.me/919521281509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      💬 WhatsApp Support
                    </a>
                    <a
                      href="tel:+919521281509"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                    >
                      📞 Call Support
                    </a>
                  </div>
                </div>
              </div>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
