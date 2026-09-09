import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../ui";
import TopBar from "./TopBar";
import Brand from "./Brand";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import ServiceDropdown from "./ServiceDropdown";
import MobileNavigation from "./MobileNavigation";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>("marketing");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSection = (name: string) => {
    setMobileSection((prev) => (prev === name ? null : name));
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80' : 'bg-white shadow-sm'}`}>
      {/* Top Bar with Office Badges & Verified Contacts */}
      <TopBar />

      {/* Main Navigation Bar */}
      <Container as="nav" aria-label="Main">
        <div className="flex justify-between items-center h-16">
          <Brand />
          <DesktopNavigation />
          <HeaderActions isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Desktop Services Submenu Bar */}
        <ServiceDropdown
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          closeDropdown={() => setActiveDropdown(null)}
        />
      </Container>

      {/* Mobile Menu Drawer */}
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mobileSection={mobileSection}
        toggleMobileSection={toggleMobileSection}
      />
    </header>
  );
};

export default Header;
