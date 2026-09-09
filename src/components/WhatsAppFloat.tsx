import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './ui';
import { getNepalWhatsAppUrl } from '../services';

const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = getNepalWhatsAppUrl("Hello Growth Service, I want to discuss my digital marketing project.");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isWAHovered, setIsWAHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center gap-3">

      {/* ── Scroll-to-Top Button ─────────────────────────────── */}
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
        {/* Glow ring on hover */}
        <span className="absolute inset-0 rounded-2xl bg-purple-400/0 group-hover:bg-purple-400/20 transition-all duration-300" />
        <ArrowUp className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>

      {/* ── WhatsApp Button ──────────────────────────────────── */}
      <div className="relative group">
        {/* Tooltip — left side, desktop only */}
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
          {/* Caret */}
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
          {/* Animated glow rings */}
          <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping opacity-60 pointer-events-none" />
          <span className="absolute -inset-1.5 rounded-[18px] border-2 border-emerald-400/25 animate-pulse pointer-events-none" />

          {/* Icon */}
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 text-white drop-shadow-sm" />

          {/* Live badge */}
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full border-2 border-white z-20 pointer-events-none">
            <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75" />
            <MessageCircle className="w-2.5 h-2.5 text-white relative z-10" />
          </span>
        </a>

        {/* "Message Now" label below button, mobile only */}
        <p className="sm:hidden text-center text-[10px] font-semibold text-white mt-1 drop-shadow-sm whitespace-nowrap"
           style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
          Message Now
        </p>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
