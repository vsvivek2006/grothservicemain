import React, { useState, useEffect } from "react";
import { 
  Sparkles, MapPin, ChevronLeft, 
  ChevronRight, Play, Pause, TrendingUp, Users, 
  Star, Headphones, Globe 
} from "lucide-react";
import Container from "../ui/Container";
import DecorativeGrid from "../ui/DecorativeGrid";
import BentoGrid, { BentoItem } from "../ui/BentoGrid";
import { WhatsAppIcon } from "../ui";
import { AnimatedButton } from "../animations";
import { getPhysicalOffices } from "../../selectors";
import { getPrimaryWhatsAppUrl } from "../../services";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  location: string;
  flag: string;
}

export const HomeHero: React.FC = () => {
  const offices = getPhysicalOffices();
  const whatsappUrl = getPrimaryWhatsAppUrl();

  const heroSlides: HeroSlide[] = [
    {
      title: `Digital Growth Solutions ${offices[0]?.flag || '🇮🇳'}`,
      subtitle: "Transform Your Business with Expert Digital Marketing & Web Development",
      description: `Leading digital marketing agency serving clients from ${offices[0]?.name || 'Jaipur Office'}, ${offices[1]?.name || 'Vrindavan Office'}, and ${offices[2]?.name || 'Nepal Office'}. We deliver SEO, web development, performance marketing, and comprehensive digital solutions to grow your business online.`,
      cta: "Start Your Digital Journey",
      ctaLink: "/contact",
      location: offices[0]?.name || 'Jaipur Office',
      flag: offices[0]?.flag || '🇮🇳'
    },
    {
      title: `SEO & Performance Marketing ${offices[1]?.flag || '🇮🇳'}`,
      subtitle: "Drive Traffic, Generate Leads, and Boost Conversions",
      description: `Expert SEO services, social media marketing, PPC campaigns, and performance marketing strategies from our ${offices[1]?.name || 'Vrindavan Office'} and ${offices[0]?.name || 'Jaipur Office'} offices. We help businesses rank higher and attract more customers.`,
      cta: "Get Free SEO Audit",
      ctaLink: "/free-audit",
      location: offices[1]?.name || 'Vrindavan Office',
      flag: offices[1]?.flag || '🇮🇳'
    },
    {
      title: `Web Development & Digital Transformation ${offices[2]?.flag || '🇳🇵'}`,
      subtitle: "Modern Websites, E-commerce Solutions & Digital Excellence",
      description: `Custom website development, e-commerce solutions, and digital transformation services available across India and Nepal. Our ${offices[2]?.name || 'Nepal Office'}, ${offices[0]?.name || 'Jaipur Office'}, and ${offices[1]?.name || 'Vrindavan Office'} teams deliver cutting-edge digital solutions.`,
      cta: "View Our Services",
      ctaLink: "/services",
      location: offices[2]?.name || 'Nepal Office',
      flag: offices[2]?.flag || '🇳🇵'
    }
  ];

  const heroBentoItems: BentoItem[] = [
    {
      colSpan: 2,
      className: "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/12 via-white/8 to-purple-600/15 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-purple-400/40 transition-all duration-300",
      children: (
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Track Record
            </div>
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 tracking-tight">
            500+
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            Projects Completed & Businesses Scaled
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-yellow-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Across India, Nepal & International
            </span>
            <span className="text-purple-200 font-medium">Jaipur • Vrindavan • Nepal</span>
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-purple-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-3 group-hover:scale-110 transition-transform">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            300+
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Happy Clients
          </div>
          <div className="text-[11px] text-purple-300/80 mt-1">
            Multi-Industry Growth
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-yellow-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-3 group-hover:scale-110 transition-transform">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            4.9 / 5
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Client Rating
          </div>
          <div className="text-[11px] text-amber-300/80 mt-1 flex items-center gap-1.5">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>Verified Feedback</span>
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-emerald-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="flex items-center gap-1 text-[11px] text-emerald-300 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            24/7
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Dedicated Support
          </div>
          <div className="text-[11px] text-emerald-300/80 mt-1">
            Direct WhatsApp line
          </div>
        </div>
      )
    },
    {
      colSpan: 1,
      className: "group rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-4 sm:p-5 hover:bg-white/12 hover:border-indigo-400/40 transition-all duration-300 shadow-card",
      children: (
        <div>
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3 group-hover:scale-110 transition-transform">
            <Globe className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {offices.length} Offices
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
            Company Locations
          </div>
          <div className="text-[11px] text-purple-300/80 mt-1 truncate">
            Jaipur • Vrindavan • Nepal
          </div>
        </div>
      )
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isHeroPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [heroSlides.length, isHeroPaused]);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Ambient backdrop glow layers & grid */}
      <DecorativeGrid variant="dots" dark />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" style={{ animationDelay: '4s' }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Text & Dynamic Slides */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div 
              className="relative min-h-[520px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col justify-center focus:outline-none"
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
              onFocus={() => setIsHeroPaused(true)}
              onBlur={() => setIsHeroPaused(false)}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Growth Service Capabilities and Regional Presence"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") prevSlide();
                if (e.key === "ArrowRight") nextSlide();
              }}
            >
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0 relative z-10' 
                      : 'opacity-0 translate-y-6 absolute inset-0 pointer-events-none z-0'
                  }`}
                >
                  {/* Location Pill */}
                  <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5 shadow-inner transition-colors mx-auto lg:mx-0 self-center lg:self-start">
                    <span className="text-base">{slide.flag}</span>
                    <span className="text-purple-200 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{slide.location}</span>
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Main Hero Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.15] text-white">
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <div className="text-base sm:text-xl text-purple-200 font-medium mb-4 sm:mb-5 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
                    {slide.description}
                  </p>
                  
                  {/* Dual CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                    <AnimatedButton
                      to={slide.ctaLink}
                      variant="primary"
                      size="lg"
                      icon={<Sparkles className="w-5 h-5 text-yellow-300" />}
                    >
                      {slide.cta}
                    </AnimatedButton>

                    <AnimatedButton
                      href={whatsappUrl}
                      isExternal
                      variant="white"
                      size="lg"
                      icon={<WhatsAppIcon className="w-5 h-5 text-emerald-600" />}
                    >
                      Free Consultation
                    </AnimatedButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Accessible Controls Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 sm:mt-8 z-20 relative pt-2" aria-label="Hero Slide Navigation">
              <button
                onClick={prevSlide}
                aria-label="Previous slide (ArrowLeft)"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                      index === currentSlide 
                        ? 'bg-yellow-400 w-9 shadow-glow' 
                        : 'bg-white/30 hover:bg-white/60 w-2.5'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.location}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next slide (ArrowRight)"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsHeroPaused((v) => !v)}
                aria-label={isHeroPaused ? "Resume auto rotation" : "Pause auto rotation"}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-yellow-400 ml-1"
                title={isHeroPaused ? "Resume auto rotation" : "Pause auto rotation"}
              >
                {isHeroPaused ? <Play className="w-3.5 h-3.5 text-yellow-300" /> : <Pause className="w-3.5 h-3.5 text-purple-200" />}
              </button>

              <span className="text-xs text-purple-300/80 font-medium ml-1">
                {currentSlide + 1} / {heroSlides.length} • {heroSlides[currentSlide]?.location}
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Agency Bento Showcase */}
          <div className="lg:col-span-5 w-full">
            <BentoGrid columns={2} items={heroBentoItems} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
