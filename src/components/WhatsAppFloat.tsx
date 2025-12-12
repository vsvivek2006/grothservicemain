import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Floating WhatsApp Button with Pulse Effect */}
      <a
        href="https://wa.me/97797073824881?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20digital%20marketing%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group-hover:shadow-3xl group-hover:shadow-green-500/30"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Outer Pulse Ring */}
          <div className="absolute -inset-4 bg-green-400 rounded-full opacity-20 animate-ping"></div>
          
          {/* Inner Pulse Ring */}
          <div className="absolute -inset-3 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="h-8 w-8 relative z-10" strokeWidth={2.5} />
          
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></div>
        </div>
      </a>

      {/* Tooltip Text */}
      <div className="absolute right-20 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm">Chat with us!</span>
          <span className="text-xs bg-green-500 px-2 py-1 rounded">24/7 Support</span>
        </div>
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-gray-900"></div>
      </div>

      {/* Floating Text Animation */}
      <div className="absolute -top-8 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
        WhatsApp Now!
      </div>
    </div>
  );
};

export default WhatsAppFloat;
