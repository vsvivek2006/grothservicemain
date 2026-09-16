"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-200 print:min-h-0 print:bg-white print:text-black">
      {/* Sidebar (Desktop + Mobile Slide-over Drawer) */}
      <Sidebar
        userEmail={userEmail}
        userRole={userRole}
        isMobileOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 print:w-full print:block">
        {/* Mobile Sticky Top Bar */}
        <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 print:hidden">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Open sidebar menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/admin" className="text-sm font-bold text-white tracking-wide">
              Growth <span className="text-yellow-400">Service</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              target="_blank"
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              title="View Public Blog"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
            {userRole !== "billing_manager" && (
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>New Post</span>
              </Link>
            )}
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto print:p-0 print:m-0 print:overflow-visible print:w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
