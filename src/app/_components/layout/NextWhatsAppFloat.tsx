"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from '../../../components/ui/WhatsAppIcon';
import { getNepalWhatsAppUrl } from '../../../services';

export const NextWhatsAppFloat: React.FC = () => {
  const pathname = usePathname();
  const whatsappUrl = getNepalWhatsAppUrl("Hello Growth Service, I want to discuss my digital marketing project.");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isWAHovered, setIsWAHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center gap-3">
      {/* Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className={`
          group relative flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12 rounded-2xl
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-[0_8px_32px_rgba(106,13,173,0.35)]
          hover:shadow-[0_8px_40px_rgba(106,13,173,0.55)]
          hover:bg-purple-600 hover:border-purple-500
          transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          ${showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        style={{
          background: showScrollTop
            ? 'linear-gradient(135deg,rgba(124,58,237,0.85) 0%,rgba(106,13,173,0.85) 100%)'
            : undefined,
        }}
      >
        <span className="absolute inset-0 rounded-2xl bg-purple-400/0 group-hover:bg-purple-400/20 transition-all duration-300" />
        <ArrowUp className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>

      {/* WhatsApp Floating Button */}
      <div className="relative group">
        {/* Tooltip — desktop only */}
        <div
          className={`
            hidden sm:flex absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2
            flex-col min-w-[190px]
            bg-gray-950/90 backdrop-blur-md border border-white/10
            text-white rounded-2xl px-4 py-3 shadow-2xl
            transition-all duration-300 pointer-events-none
            ${isWAHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
          `}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-sm tracking-tight">Chat with us!</span>
            <span className="flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse inline-block" />
              Online
            </span>
          </div>
          <p className="text-xs text-gray-400">Quick response · 24/7 support</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[7px] w-3.5 h-3.5 bg-gray-950/90 border-r border-t border-white/10 rotate-45 rounded-[2px]" />
        </div>

        {/* Main WA button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
          onMouseEnter={() => setIsWAHovered(true)}
          onMouseLeave={() => setIsWAHovered(false)}
          className="
            relative flex items-center justify-center
            w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
            shadow-[0_8px_32px_rgba(37,211,102,0.45)]
            hover:shadow-[0_10px_48px_rgba(37,211,102,0.65)]
            transition-all duration-300 hover:scale-110 active:scale-95
            touch-manipulation
          "
          style={{
            background: 'linear-gradient(145deg,#2ecc71 0%,#25D366 45%,#1db954 100%)',
          }}
        >
          <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 hidden sm:block animate-ping opacity-60 pointer-events-none" />
          <span className="absolute -inset-1.5 rounded-[18px] border-2 border-emerald-400/25 animate-pulse pointer-events-none" />
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </div>
  );
};

export default NextWhatsAppFloat;
