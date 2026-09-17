import React from "react";
import { HomeHero } from "../components/home/HomeHero";
import { HomePresenceRibbon } from "../components/home/HomePresenceRibbon";
import { HomeTrustSection } from "../components/home/HomeTrustSection";
import { HomeServicesOverview } from "../components/home/HomeServicesOverview";
import { HomeProcessSection } from "../components/home/HomeProcessSection";
import { HomeCaseStudiesSection } from "../components/home/HomeCaseStudiesSection";
import { HomeTeamSection } from "../components/home/HomeTeamSection";
import { HomeIndustriesSection } from "../components/home/HomeIndustriesSection";
import { HomeLocationsSection } from "../components/home/HomeLocationsSection";
import { HomeTechnologySection } from "../components/home/HomeTechnologySection";
import { HomeClientsSection } from "../components/home/HomeClientsSection";
import { HomeWhyChooseUs } from "../components/home/HomeWhyChooseUs";
import { HomeTestimonialsSection } from "../components/home/HomeTestimonialsSection";
import { HomeCTA } from "../components/home/HomeCTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden selection:bg-purple-600 selection:text-white">
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