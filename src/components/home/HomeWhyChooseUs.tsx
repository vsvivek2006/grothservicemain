import React from "react";
import { Users, TrendingUp, Target, Headphones } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import DecorativeGrid from "../ui/DecorativeGrid";
import { StaggerContainer, StaggerItem } from "../animations";

export const HomeWhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Expert Digital Team",
      description: "Certified professionals specializing in SEO, web development, and performance marketing",
      Icon: Users,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-300",
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable growth and ROI for 500+ businesses",
      Icon: TrendingUp,
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-300",
    },
    {
      title: "Customized Solutions",
      description: "Tailored digital strategies aligned with your unique business goals",
      Icon: Target,
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-300",
    },
    {
      title: "24/7 Support",
      description: "Ongoing support and maintenance from our offices in India and Nepal",
      Icon: Headphones,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-300",
    },
  ];

  return (
    <Section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden" aria-label="Why Choose Us">
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px] animate-pulse-subtle" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600 rounded-full blur-[100px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge="The Growth Service Advantage"
          title="Why Choose"
          titleHighlight="Growth Service"
          highlightColor="text-yellow-400"
          description="We combine expertise with dedication to deliver exceptional results"
          dark
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={90}>
          {benefits.map((benefit, index) => (
            <StaggerItem key={index} index={index} className="h-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 hover:border-purple-400/50 card-lift transition-all duration-300 group h-full flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
                  <benefit.Icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};

export default HomeWhyChooseUs;
