import React from "react";
import DecorativeGrid from "../ui/DecorativeGrid";
import { Container } from "../ui";
import FooterTrustSection from "./FooterTrustSection";
import FooterNavigation from "./FooterNavigation";
import FooterOfficeSection from "./FooterOfficeSection";
import FooterSecurityAlert from "./FooterSecurityAlert";
import FooterBottom from "./FooterBottom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid and ambient glow */}
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      <Container className="py-12 relative z-10">
        {/* Rating & Trust Section */}
        <FooterTrustSection />

        {/* 6 Category Link Navigation Grid */}
        <FooterNavigation />

        {/* Physical Offices & Quick Connect */}
        <FooterOfficeSection />

        {/* Security & Authenticity Verification Alert */}
        <FooterSecurityAlert />

        {/* Bottom Section: Copyright, Links, Badges */}
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
