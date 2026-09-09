import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin, Building, Zap } from "lucide-react";
import { Container } from "../ui";
import { getPhysicalOffices, getPrimaryPhone, getBusinessEmail, getOfficePhone } from "../../selectors";
import { getTelHref, getMailtoHref, getNepalWhatsAppUrl } from "../../services";

const texts = ["Jaipur • Vrindavan • Nepal", "300+ Happy Clients", "Digital Growth Partner"];

export const TopBar: React.FC = () => {
  const [animatedText, setAnimatedText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (currentIndex <= currentText.length) {
        setAnimatedText(currentText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeWriter, 80);
      }
    };

    typeWriter();
    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  const offices = getPhysicalOffices();
  const primaryPhone = getPrimaryPhone();
  const businessEmail = getBusinessEmail();
  const nepalPhone = getOfficePhone('nepal');

  const topNavItems = [
    { 
      name: `India: ${primaryPhone}`, 
      href: getTelHref(primaryPhone), 
      icon: <Phone className="h-4 w-4" />,
      location: "🇮🇳 Jaipur & Vrindavan Offices"
    },
    { 
      name: `Nepal: ${nepalPhone}`, 
      href: getNepalWhatsAppUrl(), 
      icon: <MessageCircle className="h-4 w-4" />,
      location: "🇳🇵 Nepal Office"
    },
    { 
      name: `Email: ${businessEmail}`, 
      href: getMailtoHref(businessEmail), 
      icon: <Mail className="h-4 w-4" />,
      location: "🌐 Global Support"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-wrap justify-between items-center py-1.5 gap-2">
          {/* Left - Office Locations (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 text-xs">
            {offices.map((office) => (
              <Link 
                key={office.id}
                to={`/offices/${office.slug}`} 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-0.5 rounded-full border border-white/20 transition-colors"
              >
                {office.id === 'nepal' ? (
                  <Building className="h-3 w-3 text-yellow-300" />
                ) : (
                  <MapPin className="h-3 w-3 text-yellow-300" />
                )}
                {office.city}
              </Link>
            ))}
          </div>

          {/* Center - Animated Text */}
          <div className="flex items-center justify-center flex-1">
            <div className="bg-white/10 backdrop-blur-sm px-3 py-0.5 rounded-full border border-white/15">
              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 text-yellow-300 animate-pulse shrink-0" />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold text-xs whitespace-nowrap">
                  {animatedText}
                </span>
                <Zap className="h-3 w-3 text-yellow-300 animate-pulse shrink-0" />
              </div>
            </div>
          </div>

          {/* Right - Contact Icons */}
          <div className="flex items-center space-x-2">
            {topNavItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 relative group"
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                aria-label={item.name}
              >
                {item.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-950 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-purple-800 z-50 pointer-events-none">
                  {item.location}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
