"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, PlusCircle, ExternalLink } from "lucide-react";
import type { AdminRole } from "@/lib/authorization";
import { Sidebar } from "./Sidebar";

interface AdminShellProps {
  userEmail?: string | null;
  userRole?: AdminRole | null;
  children: React.ReactNode;
}

export function AdminShell({ userEmail, userRole, children }: AdminShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Reset top navigation progress bar when route transition finishes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Provide instant 0ms visual feedback on any admin navigation link click
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/admin") &&
        href !== pathname &&
        !target.getAttribute("target") &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        setIsNavigating(true);
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  // If viewing a dedicated print view, completely omit all admin chrome (sidebar, topbar, drawers)
  // and provide a dedicated, freely scrollable canvas
  if (pathname?.includes("/print")) {
    return (
      <div className="min-h-screen w-full overflow-y-auto bg-gray-100 print:bg-white text-gray-900 print:text-black">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-gray-950 text-gray-200 overflow-hidden print:h-auto print:min-h-0 print:bg-white print:text-black relative">
      {/* Top Navigation Progress Indicator (0ms tactile feedback) */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none transition-all duration-300 ${
          isNavigating
            ? "opacity-100 bg-gradient-to-r from-purple-500 via-yellow-400 to-indigo-500 animate-pulse w-full"
            : "opacity-0 w-0"
        }`}
      />
      {/* Sidebar (Desktop + Mobile Slide-over Drawer) */}
      <Sidebar
        userEmail={userEmail}
        userRole={userRole}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden print:h-auto print:w-full print:block">
        {/* Mobile Sticky Top Bar */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 print:hidden shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/admin" className="flex items-center gap-2 text-sm font-bold text-white tracking-wide">
              <div className="w-6 h-6 rounded-md bg-white/95 p-0.5 flex items-center justify-center shrink-0 border border-purple-500/30">
                <Image
                  src="/logo.png"
                  alt="Growth Service"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Growth <span className="text-yellow-400">Service</span></span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {(userRole === "superadmin" || userRole === "admin" || userRole === "editor") && (
              <Link
                href="/blog"
                target="_blank"
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                title="View Public Blog"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
            {userRole === "editor" ? (
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>New Post</span>
              </Link>
            ) : (
              <Link
                href="/admin/billing/invoices/new"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white transition-all shadow-xs"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>New Invoice</span>
              </Link>
            )}
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto focus:outline-none [scrollbar-width:thin] [scrollbar-color:#374151_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-800 hover:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent print:p-0 print:m-0 print:overflow-visible print:w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
