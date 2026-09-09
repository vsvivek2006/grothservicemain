import React from 'react';
import { ArrowDown } from 'lucide-react';
import { WhatsAppIcon } from './ui';
import { getNepalWhatsAppUrl } from '../services';
import { getOfficePhone } from '../selectors';

const WhatsAppFloat: React.FC = () => {
  const displayPhone = getOfficePhone('nepal');
  const whatsappUrl = getNepalWhatsAppUrl("Hello Growth Service, I want to discuss my digital marketing project.");

  return (
    <aside className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group" aria-label="WhatsApp Support">
      {/* Floating WhatsApp Button with Enhanced Pulse Effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-3xl group-hover:shadow-green-500/40 active:scale-95 touch-manipulation"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Outer Animated Rings */}
          <div className="absolute -inset-3 bg-green-500 rounded-full opacity-20 animate-ping duration-1000 pointer-events-none"></div>
          <div className="absolute -inset-2 bg-emerald-400 rounded-full opacity-30 animate-pulse duration-2000 pointer-events-none"></div>
          
          {/* Authentic WhatsApp Icon */}
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform group-hover:rotate-12 duration-300 text-white" />
          
          {/* Live Notification Dot */}
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white pointer-events-none">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </a>

      {/* Animated Tooltip (Desktop Only) */}
      <div className="hidden sm:block absolute right-20 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-[180px] z-50">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">Chat with us!</span>
            <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 rounded-full font-semibold">
              Online Now
            </span>
          </div>
          <div className="text-xs text-gray-300">
            Quick Response • 24/7 Support
          </div>
          <div className="text-xs text-green-400 font-mono mt-1">
            {displayPhone}
          </div>
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900"></div>
      </div>

      {/* Floating Animation Badge (Scaled on desktop, subtle on small) */}
      <div className="hidden sm:flex absolute -top-10 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-float pointer-events-none">
        <div className="flex items-center space-x-1.5">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>Message Now!</span>
        </div>
      </div>
    </aside>
  );
};

export default WhatsAppFloat;

