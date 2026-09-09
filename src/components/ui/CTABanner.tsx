import React from 'react';
import { Phone, MessageCircle, FileText, Sparkles, MapPin, Clock } from 'lucide-react';
import Button from './Button';

export interface CTABannerProps {
  title: string;
  description: string;
  whatsappUrl: string;
  phoneNumber: string;
  contactLink?: string;
  offices?: Array<{ name: string; flag: string; mapLink?: string }>;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  whatsappUrl,
  phoneNumber,
  contactLink = "/contact",
  offices = [
    { name: "Jaipur Office", flag: "🇮🇳" },
    { name: "Vrindavan Office", flag: "🇮🇳" },
    { name: "Nepal Office", flag: "🇳🇵" }
  ]
}) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 text-white overflow-hidden" aria-label="Contact Call to Action">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Scale Your Digital Growth Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
          {title}
        </h2>

        <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href={whatsappUrl}
            isExternal
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Chat on WhatsApp
          </Button>

          <Button
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            variant="white"
            size="lg"
            icon={<Phone className="w-5 h-5 text-slate-800" />}
          >
            Call {phoneNumber}
          </Button>

          <Button
            to={contactLink}
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800/40 hover:text-white"
            icon={<FileText className="w-5 h-5" />}
          >
            Contact Form
          </Button>
        </div>

        {offices && offices.length > 0 && (
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-purple-300 text-xs sm:text-sm font-medium mb-4 flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Our Office Locations</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-200">
              {offices.map((office, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <span>{office.flag}</span>
                  <span className="font-semibold">{office.name}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-semibold text-white">24/7 Support</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTABanner;
