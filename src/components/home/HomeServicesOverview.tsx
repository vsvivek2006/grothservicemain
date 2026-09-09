import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle, ArrowRight, Search, Code, BarChart3, 
  Users, Target, ShoppingBag 
} from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      title: "SEO Services",
      icon: "🔍",
      services: ["SEO Optimization", "Local SEO", "Technical SEO", "Content Strategy"],
      color: "from-blue-500 to-cyan-500",
      path: "/seo"
    },
    {
      title: "Web Development",
      icon: "💻",
      services: ["Custom Websites", "E-commerce", "React Development", "Node.js Solutions"],
      color: "from-purple-600 to-pink-500",
      path: "/web-development"
    },
    {
      title: "Performance Marketing",
      icon: "📈",
      services: ["PPC Campaigns", "Social Media Ads", "Google Ads", "Analytics"],
      color: "from-amber-500 to-yellow-400",
      path: "/paid-marketing"
    },
    {
      title: "Digital Marketing",
      icon: "📱",
      services: ["Social Media", "Content Marketing", "Email Marketing", "Brand Strategy"],
      color: "from-emerald-500 to-teal-400",
      path: "/digital-marketing"
    }
  ];

  const ourServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO services to improve your search engine rankings and drive organic traffic.",
      features: ["Keyword Research & Strategy", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "SEO Analytics & Reporting"],
      path: "/seo",
      color: "from-blue-600 to-cyan-600",
      icon: "🔍"
    },
    {
      title: "Website Development",
      description: "Custom website development using modern technologies for optimal performance and user experience.",
      features: ["Responsive Web Design", "E-commerce Development", "React & Next.js Development", "Node.js Backend", "CMS Integration", "Web Application Development"],
      path: "/web-development",
      color: "from-purple-600 to-pink-600",
      icon: "💻"
    },
    {
      title: "Performance Marketing",
      description: "Data-driven performance marketing campaigns to maximize ROI and drive conversions.",
      features: ["Google Ads Management", "Social Media Advertising", "PPC Campaigns", "Display Advertising", "Retargeting", "Conversion Optimization"],
      path: "/paid-marketing",
      color: "from-amber-500 to-orange-500",
      icon: "📈"
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and management to build brand presence and engagement.",
      features: ["Content Strategy", "Community Management", "Social Media Advertising", "Analytics & Insights", "Brand Storytelling", "Influencer Marketing"],
      path: "/social-media",
      color: "from-indigo-600 to-purple-600",
      icon: "📱"
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage audiences, build authority, and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Case Studies", "Whitepapers", "Content Strategy"],
      path: "/content-marketing",
      color: "from-emerald-600 to-teal-600",
      icon: "✍️"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce solutions to create, manage, and grow your online store.",
      features: ["Online Store Setup", "Payment Integration", "Product Management", "Inventory Management", "Order Processing", "E-commerce Analytics"],
      path: "/ecommerce",
      color: "from-rose-600 to-pink-600",
      icon: "🛒"
    }
  ];

  return (
    <>
      {/* Service Categories Overview */}
      <Section variant="subtle" aria-label="Our Services Categories">
        <Container>
          <SectionHeader
            badge="Digital Solutions"
            title="Our"
            titleHighlight="Services"
            description="Comprehensive digital solutions to grow your business online"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={90}>
            {serviceCategories.map((category, index) => (
              <StaggerItem key={index} index={index} className="h-full">
                <Link 
                  to={category.path}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col group h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury mb-5`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5 mb-6 flex-grow text-sm text-slate-600">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Complete Digital Services Detailed Grid */}
      <Section variant="subtle" aria-label="Detailed Services">
        <Container>
          <SectionHeader
            badge="Full-Funnel Capabilities"
            title="Complete"
            titleHighlight="Digital Services"
            highlightColor="text-purple-600"
            description="Everything you need to succeed in the digital landscape"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* 1. Anchor Service: SEO (Large 7-col Bento Card) */}
            <div className="lg:col-span-7 h-full">
              <Link
                to={ourServices[0].path}
                className="group h-full bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury shadow-sm">
                    <Search className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                    Core Growth Engine
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {ourServices[0].title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {ourServices[0].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 flex-grow">
                  {ourServices[0].features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 font-bold text-sm text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200 mt-auto">
                  <span>Explore SEO Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* 2. Service 2: Website Development (5-col Bento Card) */}
            <div className="lg:col-span-5 h-full">
              <Link
                to={ourServices[1].path}
                className="group h-full bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ease-luxury shadow-sm">
                    <Code className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                    Full-Stack
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                  {ourServices[1].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {ourServices[1].description}
                </p>
                <div className="space-y-2 mb-6 flex-grow">
                  {ourServices[1].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 font-bold text-sm text-purple-600 group-hover:translate-x-1.5 transition-transform duration-200 mt-auto">
                  <span>View Development Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* 3. Performance Marketing (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[2].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[2].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[2].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[2].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 4. Social Media Management (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[3].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[3].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[3].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[3].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 5. Content Marketing (4-col) */}
            <div className="lg:col-span-4 h-full">
              <Link
                to={ourServices[4].path}
                className="group h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600" />
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                  {ourServices[4].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {ourServices[4].description}
                </p>
                <div className="space-y-2 mb-5 flex-grow">
                  {ourServices[4].features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 font-bold text-xs text-purple-600 group-hover:translate-x-1 transition-transform mt-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>

            {/* 6. Service 6: E-commerce Solutions (Full-Width 12-col Bento Banner) */}
            <div className="lg:col-span-12">
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-300/80 card-lift transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {ourServices[5].title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {ourServices[5].description}
                    </p>
                    <Link
                      to={ourServices[5].path}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md group/btn"
                    >
                      <span>Explore E-commerce Solutions</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/80 p-5 sm:p-6 rounded-xl border border-slate-100">
                    {ourServices[5].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomeServicesOverview;
