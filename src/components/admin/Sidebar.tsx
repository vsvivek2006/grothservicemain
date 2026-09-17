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
  Receipt,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import type { AdminRole } from "@/lib/authorization";

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
      { label: "Overview", href: "/admin/billing", icon: TrendingUp, exact: true },
      { label: "Clients", href: "/admin/clients", icon: Users },
      { label: "Catalog Items", href: "/admin/billing/items", icon: Package },
      { label: "Invoices", href: "/admin/billing/invoices", icon: Receipt },
      { label: "Payments", href: "/admin/billing/payments", icon: CreditCard },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Blog Posts", href: "/admin/blog", icon: FileText },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Team & Admins", href: "/admin/team", icon: ShieldCheck },
    ],
  },
];

import { isPaymentsEnabled } from "@/modules/billing/constants/featureFlags";

interface SidebarProps {
  userEmail?: string | null;
  userRole?: AdminRole | null;
  isMobileOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ userEmail, userRole, isMobileOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const paymentsActive = isPaymentsEnabled();

  // Role-based navigation group filtering
  const visibleNavGroups = navGroups
    .filter((group) => {
      if (group.title === "Billing") {
        return userRole === "superadmin" || userRole === "admin" || userRole === "billing_manager";
      }
      if (group.title === "Content") {
        return userRole === "superadmin" || userRole === "admin" || userRole === "editor";
      }
      if (group.title === "System") {
        return userRole === "superadmin" || userRole === "admin";
      }
      return true;
    })
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (item.href === "/admin/billing/payments" && !paymentsActive) {
          return false;
        }
        return true;
      }),
    }));

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
    <div className="flex flex-col h-full bg-gray-900 overflow-hidden">
      {/* Brand Header */}
      <div className="px-4 py-3.5 border-b border-gray-800/80 flex items-center justify-between shrink-0">
        <div>
          <Link
            href="/admin"
            className="text-base font-bold tracking-tight text-white inline-flex items-center gap-1.5"
          >
            Growth <span className="text-yellow-400">Service</span>
          </Link>
          <p className="text-[10px] text-gray-400 font-medium">Admin Portal</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Role-Aware Action Button */}
      <div className="px-3 pt-3 pb-1 shrink-0">
        {userRole === "editor" ? (
          <Link
            href="/admin/blog/new"
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Create Post</span>
          </Link>
        ) : (
          <Link
            href="/admin/billing/invoices/new"
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white transition-all shadow-xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>New Invoice</span>
          </Link>
        )}
      </div>

      {/* Navigation Links (Scrollbar completely hidden) */}
      <div className="flex-1 overflow-y-auto min-h-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <nav className="p-3 space-y-2.5">
          {visibleNavGroups.map((group) => (
            <div key={group.title} className="space-y-0.5">
              <div className="px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-400">
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
                    className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-purple-600 text-white shadow-xs"
                        : "text-gray-300 hover:bg-gray-800/80 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}

          {(userRole === "superadmin" || userRole === "admin" || userRole === "editor") && (
            <div className="pt-2 border-t border-gray-800/80 mt-2">
              <Link
                href="/blog"
                target="_blank"
                className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Public Blog</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">↗</span>
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Footer / User Profile & Logout */}
      <div className="p-3 border-t border-gray-800/80 space-y-1.5 bg-gray-900 shrink-0">
        {userEmail && (
          <div className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-800/50 text-xs text-gray-300 border border-gray-800">
            <div className="flex items-center gap-1.5 min-w-0">
              <User className="w-3 h-3 text-gray-400 shrink-0" />
              <span className="truncate font-medium text-[11px]">{userEmail}</span>
            </div>
            {userRole && (
              <span className="rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-purple-950/80 text-yellow-400 border border-purple-800/40 shrink-0">
                {userRole.replace("_", " ")}
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-rose-400 hover:bg-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Signing out...</span>
            </>
          ) : (
            <>
              <LogOut className="w-3 h-3" />
              <span>Sign Out</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-60 h-screen sticky top-0 bg-gray-900 border-r border-gray-800 flex-col shrink-0 text-gray-200 select-none overflow-hidden print:!hidden no-print">
        {navContent}
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex print:!hidden no-print">
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
