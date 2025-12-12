import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  // Correct WhatsApp number: +977 9707382481
  const whatsappNumber = "9779707382481";
  const defaultMessage = "Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20digital%20marketing%20project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Floating WhatsApp Button with Enhanced Pulse Effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-3xl group-hover:shadow-green-500/40 active:scale-95"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <div className="relative">
          {/* Outer Animated Rings */}
          <div className="absolute -inset-4 bg-green-500 rounded-full opacity-20 animate-ping duration-1000"></div>
          <div className="absolute -inset-3 bg-emerald-400 rounded-full opacity-30 animate-pulse duration-2000"></div>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="h-8 w-8 relative z-10 transition-transform group-hover:rotate-12 duration-300" strokeWidth={2.5} />
          
          {/* Live Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </a>

      {/* Animated Tooltip */}
      <div className="absolute right-20 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none min-w-[180px]">
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
            +977 9707382481
          </div>
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900"></div>
      </div>

      {/* Floating Animation Badge */}
      <div className="absolute -top-10 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-float">
        <div className="flex items-center space-x-1">
          <span className="animate-bounce">👇</span>
          <span>Message Now!</span>
          <span className="animate-bounce">👇</span>
        </div>
      </div>

      {/* WhatsApp Number Display (Mobile Only) */}
      <div className="lg:hidden absolute -left-4 bottom-0 transform -translate-x-full bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="font-mono">+977 9707382481</div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
