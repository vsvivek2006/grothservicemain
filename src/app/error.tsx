"use client";

import { useEffect } from "react";
import Link from "next/link";
import { 
  RefreshCw, 
  Home, 
  Search, 
  Code, 
  TrendingUp, 
  Globe, 
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui";
import { getPrimaryWhatsAppUrl } from "@/services";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console or telemetry service
    console.error("Application Server Error (500):", error);
  }, [error]);

  const primaryWhatsApp = getPrimaryWhatsAppUrl();

  const quickServices = [
    {
      title: "SEO Services",
      description: "Organic search ranking & audits",
      href: "/seo",
      icon: <Search className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Web Development",
      description: "Custom high-speed web apps",
      href: "/web-development",
      icon: <Code className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Paid Marketing",
      description: "High-ROI PPC ad campaigns",
      href: "/paid-marketing",
      icon: <TrendingUp className="w-5 h-5 text-pink-400" />,
    },
    {
      title: "Official Blog",
      description: "Actionable growth insights",
      href: "/blog",
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-between selection:bg-purple-600 selection:text-white">
      {/* Ambient background glow */}
      <div className="relative overflow-hidden flex-1 flex items-center justify-center py-20 px-6">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-xs font-semibold text-yellow-300 shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />
            <span>HTTP 500 • Internal Server Notice</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Something went <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">wrong</span>
            </h1>
            <p className="text-base sm:text-lg text-purple-200/80 max-w-xl mx-auto leading-relaxed">
              We encountered a temporary technical glitch on this page. Our team has received the report and is already resolving it.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 shadow-lg shadow-purple-950/50 hover:shadow-purple-700/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gray-900/90 hover:bg-gray-800 border border-purple-800/50 hover:border-purple-600 transition-all cursor-pointer"
            >
              <Home className="w-4 h-4 text-purple-400" />
              Back to Home
            </Link>

            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#25D366] hover:bg-emerald-600 shadow-md shadow-emerald-950/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Helpful Destination Cards */}
          <div className="pt-10 border-t border-purple-900/30">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-300/70 mb-5">
              Or continue exploring Growth Service:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {quickServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="p-4 rounded-xl bg-gray-900/70 border border-purple-900/40 hover:border-purple-600/70 hover:bg-gray-900 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/40 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </p>
                      <p className="text-xs text-purple-300/70">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 group-hover:text-yellow-400 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
