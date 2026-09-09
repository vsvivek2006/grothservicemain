import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, Users, Trophy, Briefcase, FileText, Lock, DollarSign, Eye, ShieldCheck,
  TrendingUp, Search, Share2, Target, MapPin, BookOpen, Palette, Layout,
  ShoppingCart, Globe, BarChart3, Award, HelpCircle, Phone, Shield
} from "lucide-react";

interface FooterLink {
  name: string;
  path: string;
  icon: React.ElementType;
}

export const FooterNavigation: React.FC = () => {
  const companyLinks: FooterLink[] = [
    { name: "About Growth Service", path: "/about", icon: Building2 },
    { name: "Our Team", path: "/team", icon: Users },
    { name: "Our Impact", path: "/impact", icon: Trophy },
    { name: "Careers", path: "/careers", icon: Briefcase },
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
    { name: "FAQs", path: "/faq", icon: HelpCircle },
    { name: "Book a Consultation", path: "/book-call", icon: Phone }
  ];

  const columns = [
    { title: "Company", icon: Shield, links: companyLinks },
    { title: "Services", icon: TrendingUp, links: serviceLinks },
    { title: "Development", icon: Layout, links: developmentLinks },
    { title: "White Label", icon: Briefcase, links: whiteLabelLinks },
    { title: "Locations", icon: Globe, links: locationLinks },
    { title: "Resources", icon: BookOpen, links: resourceLinks },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pb-12 border-b border-purple-800/60">
      {columns.map((col) => {
        const HeaderIcon = col.icon;
        return (
          <div key={col.title}>
            <h3 className="text-sm font-bold tracking-wider uppercase text-purple-300 mb-4 pb-2 border-b border-purple-700/50 flex items-center">
              <HeaderIcon className="h-4 w-4 mr-1.5 text-purple-400" />
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-xs flex items-center group py-0.5"
                    >
                      <ItemIcon className="h-3 w-3 mr-1.5 text-purple-400/80 group-hover:text-purple-300 transition-colors flex-shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterNavigation;
