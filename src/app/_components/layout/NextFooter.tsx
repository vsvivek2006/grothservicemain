"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Building2, Users, Trophy, Briefcase, FileText, Lock, DollarSign, Eye, ShieldCheck,
  TrendingUp, Search, Share2, Target, MapPin, BookOpen, Palette, Layout,
  ShoppingCart, Globe, BarChart3, Award, HelpCircle, Phone, Shield, ChevronRight,
  AlertTriangle, Star, Facebook, Instagram, Linkedin, Youtube, Clock
} from "lucide-react";
import { Container } from "../../../components/ui/Container";
import { DecorativeGrid } from "../../../components/ui/DecorativeGrid";
import { 
  getPhysicalOffices, getSocialProfiles, getTrustSignals, 
  getBusinessName, getBusinessTagline, getBusinessEmail 
} from "../../../selectors";
import { getTelHref, getMailtoHref } from "../../../services";

interface FooterLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

export const NextFooter: React.FC = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const offices = getPhysicalOffices();
  const social = getSocialProfiles();
  const trustSignals = getTrustSignals();
  const businessName = getBusinessName();
  const tagline = getBusinessTagline();
  const businessEmail = getBusinessEmail();

  const companyLinks: FooterLink[] = [
    { name: "About Growth Service", path: "/about", icon: Building2 },
    { name: "Our Team", path: "/team", icon: Users },
    { name: "Our Impact", path: "/impact", icon: Trophy },
    { name: "Terms & Conditions", path: "/terms", icon: FileText },
    { name: "Privacy Policy", path: "/privacy", icon: Lock },
    { name: "Refund Policy", path: "/refund", icon: DollarSign },
    { name: "Accessibility Statement", path: "/accessibility", icon: Eye },
    { name: "Trust & Verification", path: "/verify", icon: ShieldCheck }
  ];

  const serviceLinks: FooterLink[] = [
    { name: "Digital Marketing", path: "/digital-marketing", icon: TrendingUp },
    { name: "SEO Services", path: "/seo", icon: Search },
    { name: "Social Media Management", path: "/social-media", icon: Share2 },
    { name: "Meta Ads Management", path: "/paid-marketing", icon: Target },
    { name: "Google Business Profile", path: "/local-seo", icon: MapPin },
    { name: "Content Marketing", path: "/content-marketing", icon: BookOpen },
    { name: "Lead Generation", path: "/lead-generation", icon: Target },
    { name: "Brand Strategy", path: "/branding", icon: Palette }
  ];

  const developmentLinks: FooterLink[] = [
    { name: "Design & Development", path: "/design-development", icon: Layout },
    { name: "Website Development", path: "/web-development", icon: Layout },
    { name: "UI/UX Design", path: "/ui-ux-design", icon: Palette },
    { name: "WordPress Development", path: "/wordpress-development", icon: Layout },
    { name: "E-commerce Solutions", path: "/ecommerce", icon: ShoppingCart },
    { name: "Mobile App Development", path: "/app-development", icon: Layout }
  ];

  const whiteLabelLinks: FooterLink[] = [
    { name: "White Label Hub", path: "/white-label", icon: Briefcase },
    { name: "White Label SEO", path: "/white-label-seo", icon: Search },
    { name: "White Label PPC", path: "/white-label-ppc", icon: Target },
    { name: "White Label Social Media", path: "/white-label-smo", icon: Share2 },
    { name: "White Label Web Dev", path: "/white-label-web", icon: Layout }
  ];

  const locationLinks: FooterLink[] = [
    { name: "Locations Directory", path: "/locations", icon: Globe },
    { name: "Company Offices Hub", path: "/offices", icon: MapPin },
    { name: "Jaipur Office", path: "/offices/jaipur", icon: MapPin },
    { name: "Vrindavan Office", path: "/offices/vrindavan", icon: MapPin },
    { name: "Nepal Office", path: "/offices/nepal", icon: MapPin },
    { name: "Delhi NCR Services", path: "/locations/delhi", icon: Globe },
    { name: "Patna Services", path: "/locations/patna", icon: Globe },
    { name: "Goa Services", path: "/locations/goa", icon: Globe }
  ];

  const resourceLinks: FooterLink[] = [
    { name: "Blog & Insights", path: "/blog", icon: BookOpen },
    { name: "Case Studies", path: "/case-studies", icon: BarChart3 },
    { name: "Client Testimonials", path: "/testimonials", icon: Trophy },
    { name: "Free Digital Audit", path: "/free-audit", icon: Search },
    { name: "Marketing Resources", path: "/resources", icon: BookOpen },
    { name: "Growth Packages", path: "/packages", icon: Award },
    { name: "Pricing Plans", path: "/pricing", icon: DollarSign },
    { name: "Help Center", path: "/help-center", icon: HelpCircle },
    { name: "Book a Consultation", path: "/book-call", icon: Phone }
  ];

  const columns = [
    { title: "Company", links: companyLinks, icon: Building2 },
    { title: "Digital Marketing", links: serviceLinks, icon: TrendingUp },
    { title: "Design & Dev", links: developmentLinks, icon: Layout },
    { title: "White Label", links: whiteLabelLinks, icon: Briefcase },
    { title: "Locations", links: locationLinks, icon: Globe },
    { title: "Resources", links: resourceLinks, icon: BookOpen }
  ];

  const socialLinks = [
    { icon: Facebook, href: social.facebook, label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: social.instagram, label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: social.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Youtube, href: social.youtube, label: "YouTube", color: "hover:text-red-500" }
  ];

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid and ambient glow */}
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      <Container className="py-12 relative z-10">
        {/* Rating & Trust Banner */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-0.5" />
                ))}
              </div>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm">
                {trustSignals.displayString}
              </span>
              <span className="text-gray-300 text-sm flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {trustSignals.reviewCount}+ Reviews
              </span>
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-2">
              Trusted by 500+ Businesses Worldwide
            </p>
            <p className="text-gray-300 text-sm">
              ⭐ Rated 4.8/5 average across Google, Facebook & Trustpilot
            </p>
            <div className="flex justify-center gap-6 mt-3 text-xs text-gray-400">
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Google Partner</span>
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Meta Business Partner</span>
              <span className="flex items-center"><Award className="h-3 w-3 mr-1 text-yellow-400" /> Trustpilot 4.7</span>
            </div>
          </div>
        </div>

        {/* 6 Category Link Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {columns.map((column, index) => {
            const IconComponent = column.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-purple-800 pb-2">
                  <IconComponent className="h-4 w-4 text-purple-400" />
                  <h4 className="font-bold text-sm text-yellow-400 tracking-wider uppercase">
                    {column.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => {
                    const LinkIcon = link.icon;
                    return (
                      <li key={linkIndex}>
                        <Link
                          href={link.path}
                          className="text-gray-400 hover:text-white text-xs transition-colors duration-200 flex items-center space-x-1.5 group"
                        >
                          <LinkIcon className="h-3 w-3 text-purple-400 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                          <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Physical Offices & Quick Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-b border-purple-800/60">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-purple-400" />
                <h3 className="text-base font-bold text-white tracking-wide">
                  Verified Physical Offices
                </h3>
              </div>
              <Link 
                href="/offices" 
                className="text-xs text-purple-300 hover:text-yellow-300 transition-colors font-medium flex items-center gap-1"
              >
                View All Office Hubs <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {offices.map((office) => (
                <div 
                  key={office.id}
                  className="bg-purple-950/40 hover:bg-purple-900/40 p-4 rounded-xl transition-all duration-300 border border-purple-800/40 hover:border-purple-600/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{office.flag}</span>
                      <Link 
                        href={`/offices/${office.slug}`}
                        className="font-semibold text-purple-200 hover:text-white text-xs hover:underline"
                      >
                        {office.name} ({office.state})
                      </Link>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed mb-2 flex items-start gap-1">
                      <MapPin className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-purple-800/40">
                    <a 
                      href={getTelHref(office.phone)} 
                      className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="h-3 w-3 text-yellow-400" />
                      <span>{office.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Profiles & Direct Contact */}
          <div className="flex flex-col justify-between p-5 bg-purple-950/30 rounded-xl border border-purple-800/40">
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Connect With Us</h4>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Follow our official social profiles for daily digital growth insights, client case studies, and industry updates.
              </p>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 transition-colors ${item.color}`}
                      aria-label={item.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-800/40 space-y-2">
              <a
                href={getMailtoHref(businessEmail)}
                className="text-xs text-purple-300 hover:text-white flex items-center gap-2"
              >
                <span>✉️</span> {businessEmail}
              </a>
              <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-purple-400" /> Support: Mon–Sat, 9 AM – 7 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Security & Authenticity Verification Alert */}
        <div className="my-8 p-5 bg-gradient-to-r from-yellow-950/40 via-purple-950/40 to-yellow-950/40 border border-yellow-600/40 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-yellow-400" />
                  Official Authenticity & Scam Alert Warning
                </p>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  Growth Service does <span className="font-semibold text-white">NOT</span> recruit via Telegram, offer paid review tasks, or request advance deposits to personal accounts. Always verify communications through our official security portal.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
              <Link 
                href="/verify" 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Verify Official Domain & Staff
              </Link>
              <a 
                href={getMailtoHref(businessEmail, "Report Fraud")} 
                className="border border-yellow-500/60 hover:bg-yellow-500/10 text-yellow-300 font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1.5"
              >
                Report Fraud
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright, Links, Badges */}
        <div className="border-t border-purple-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-white/95 p-1 flex items-center justify-center shadow-lg shadow-purple-500/30 border border-purple-300 shrink-0">
                  <Image
                    src="/logo.png"
                    alt={`${businessName} Logo`}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    © {year} <span className="text-purple-300 font-bold">{businessName}</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    {tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Policy Links */}
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {[
                { label: 'Terms', path: '/terms' },
                { label: 'Privacy', path: '/privacy' },
                { label: 'Refund', path: '/refund' },
                { label: 'Sitemap', path: '/locations' },
                { label: 'Accessibility', path: '/accessibility' },
                { label: 'Verify', path: '/verify' }
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="px-3 py-1 rounded-md text-xs text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default NextFooter;
