import React from "react";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import DecorativeGrid from "../ui/DecorativeGrid";
import { AnimatedButton, FadeIn } from "../animations";
import { getPhysicalOffices, getPrimaryPhone } from "../../selectors";
import { getPrimaryWhatsAppUrl, getTelHref } from "../../services";

export const HomeCTA: React.FC = () => {
  const offices = getPhysicalOffices();
  const phoneNumber = getPrimaryPhone();
  const whatsappUrl = getPrimaryWhatsAppUrl();

  return (
    <Section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden" aria-label="Contact Call to Action">
      <DecorativeGrid variant="dots" dark />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[140px] animate-pulse-subtle" />
      </div>

      <Container size="narrow" className="text-center relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your digital needs. We serve clients from {offices.map(o => o.city).join(', ')}, and globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton
              href={whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Chat on WhatsApp
            </AnimatedButton>
            
            <AnimatedButton
              href={getTelHref(phoneNumber)}
              variant="white"
              size="lg"
              icon={<Phone className="w-5 h-5 text-slate-800" />}
            >
              Call {phoneNumber}
            </AnimatedButton>

            <AnimatedButton
              to="/contact"
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
            >
              Contact Form
            </AnimatedButton>
          </div>
          
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-purple-300 text-sm font-medium mb-4 flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Our Office Locations</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-200">
              {offices.map((office) => (
                <a 
                  key={office.id}
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                >
                  <span>{office.flag}</span>
                  <span className="font-semibold text-white">{office.name}</span>
                </a>
              ))}
              <span className="text-purple-500 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5 text-emerald-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-white">24/7 Support</span>
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};

export default HomeCTA;
