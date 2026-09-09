import React from "react";
import { Helmet } from "react-helmet";
import {
  getBusinessName,
  getBusinessLegalName,
  getBusinessDescription,
  getCanonicalOrigin,
  getPrimaryPhone,
  getSocialProfiles,
  getPhysicalOffices
} from "../selectors";
import {
  HomeHero,
  HomePresenceRibbon,
  HomeTrustSection,
  HomeServicesOverview,
  HomeProcessSection,
  HomeCaseStudiesSection,
  HomeTeamSection,
  HomeIndustriesSection,
  HomeLocationsSection,
  HomeTechnologySection,
  HomeClientsSection,
  HomeWhyChooseUs,
  HomeTestimonialsSection,
  HomeCTA
} from "../components/home";

const Home: React.FC = () => {
  const businessName = getBusinessName();
  const legalName = getBusinessLegalName();
  const canonicalOrigin = getCanonicalOrigin();
  const businessDescription = getBusinessDescription();
  const primaryPhone = getPrimaryPhone();
  const social = getSocialProfiles();
  const offices = getPhysicalOffices();

  const sameAsLinks = [
    social.facebook,
    social.instagram,
    social.linkedin,
    social.youtube
  ].filter(Boolean);

  const addressSchema = offices.map((office) => ({
    "@type": "PostalAddress",
    "addressLocality": office.city,
    "addressRegion": office.state,
    "postalCode": office.postalCode,
    "addressCountry": office.country
  }));

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden selection:bg-purple-600 selection:text-white">
      <Helmet>
        <title>{businessName} - Best Digital Marketing & Web Development Agency</title>
        <meta 
          name="description" 
          content={`${businessName} is a leading digital marketing agency offering SEO, web development, performance marketing, and social media management. Offices in ${offices.map(o => o.city).join(', ')}. 500+ happy clients.`} 
        />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, web development, performance marketing, social media management, e-commerce solutions, digital marketing India, SEO India, web development India, growth service" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalOrigin} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${businessName} - Digital Marketing & Web Development Agency`} />
        <meta property="og:description" content={`Expert SEO, web development, and digital marketing services. Offices in ${offices.map(o => o.city).join(', ')}. Transform your business with ${businessName}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalOrigin} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": legalName,
            "url": canonicalOrigin,
            "logo": `${canonicalOrigin}/logo.png`,
            "description": businessDescription,
            "address": addressSchema,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": primaryPhone,
              "contactType": "Customer Service"
            },
            "sameAs": sameAsLinks
          })}
        </script>
      </Helmet>

      {/* 1. Hero Section with Carousel & Metrics Showcase */}
      <HomeHero />

      {/* 2. Office Locations Interactive Presence Ribbon */}
      <HomePresenceRibbon />

      {/* 3. Trust & Social Proof Strip */}
      <HomeTrustSection />

      {/* 4. Service Categories & Detailed Services Bento Grid */}
      <HomeServicesOverview />

      {/* 5. How We Work Process Timeline */}
      <HomeProcessSection />

      {/* 6. Measurable Impact & Client Case Studies */}
      <HomeCaseStudiesSection />

      {/* 7. Leadership & Specialist Team Preview */}
      <HomeTeamSection />

      {/* 8. Industries & Business Verticals Served */}
      <HomeIndustriesSection />

      {/* 9. Verified Physical Offices & Locations Directory */}
      <HomeLocationsSection />

      {/* 10. Modern Technology Stack */}
      <HomeTechnologySection />

      {/* 11. Trusted Client Logos */}
      <HomeClientsSection />

      {/* 12. Why Choose Us Advantage Grid */}
      <HomeWhyChooseUs />

      {/* 13. Verified Client Reviews & Testimonials Carousel */}
      <HomeTestimonialsSection />

      {/* 14. Final Call to Action Banner */}
      <HomeCTA />
    </div>
  );
};

export default Home;