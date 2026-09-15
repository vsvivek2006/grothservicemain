"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Package,
  LogOut,
  Loader2,
  User,
  X,
  PlusCircle,
  ExternalLink,
  CreditCard,
} from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

export interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
    ],
  },
  {
    title: "Billing",
    items: [
      { label: "Overview", href: "/admin/billing", icon: CreditCard, exact: true },
      { label: "Clients", href: "/admin/clients", icon: Users },
      { label: "Catalog Items", href: "/admin/billing/items", icon: Package },
      { label: "Invoices", href: "/admin/billing/invoices", icon: FileText },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Blog Posts", href: "/admin/blog", icon: FileText },
    ],
  },
];

interface SidebarProps {
  userEmail?: string | null;
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ userEmail, isMobileOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    if (onClose) {
      onClose();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape key
  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen, onClose]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Logout failed", { description: error.message });
        setIsLoggingOut(false);
        return;
      }

      toast.success("Logged out successfully");
      if (onClose) onClose();
      router.push("/admin/login");
      router.refresh();
    } catch {
      toast.error("Error signing out");
      setIsLoggingOut(false);
    }
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between bg-gray-900">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-gray-800 flex items-center justify-between">
          <div>
            <Link
              href="/admin"
              className="text-lg font-bold tracking-tight text-white inline-flex items-center gap-1.5"
            >
              Growth <span className="text-yellow-400">Service</span>
            </Link>
            <p className="text-[11px] text-gray-400 font-medium">Admin Portal</p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Action Button */}
        <div className="p-4 pb-2">
          <Link
            href="/admin/blog/new"
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            Create Post
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-4">
          {navGroups.map((group) => (
            <div key={group.title} className="space-y-1">
              <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {group.title}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.exact
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-purple-600 text-white shadow-xs"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="pt-3 border-t border-gray-800/80 mt-3">
            <Link
              href="/blog"
              target="_blank"
              className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4" />
                <span>View Public Blog</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">↗</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Footer / User Profile & Logout */}
      <div className="p-4 border-t border-gray-800 space-y-2 bg-gray-900/90">
        {userEmail && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/60 text-xs text-gray-300 border border-gray-800">
            <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate font-medium text-[11px]">{userEmail}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-rose-400 hover:bg-gray-800 border border-transparent transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Signing out...
            </>
          ) : (
            <>
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-60 bg-gray-900 border-r border-gray-800 min-h-screen flex-col shrink-0 text-gray-200">
        {navContent}
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-64 max-w-[80vw] bg-gray-900 border-r border-gray-800 shadow-xl h-full z-10 flex flex-col">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
}
