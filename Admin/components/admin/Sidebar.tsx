"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, FileText, LogOut, Loader2, User } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

export interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  // Future items for upcoming phases:
  // { label: "Job Openings", href: "/admin/jobs", icon: Briefcase },
  // { label: "Applications", href: "/admin/applications", icon: Users },
];

interface SidebarProps {
  userEmail?: string | null;
}

export function Sidebar({ userEmail }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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
      router.push("/admin/login");
      router.refresh();
    } catch {
      toast.error("Error signing out");
      setIsLoggingOut(false);
    }
  };

  return (
    <aside className="w-64 bg-gray-900/90 border-r border-purple-900/40 min-h-screen flex flex-col justify-between text-gray-200">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-purple-900/40">
          <Link href="/admin" className="text-xl font-bold tracking-wider text-white">
            Growth <span className="text-yellow-400">Service</span>
          </Link>
          <p className="text-xs text-purple-300 mt-1">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-900/40"
                    : "text-gray-300 hover:bg-purple-900/30 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-yellow-300" : "text-purple-400"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / User Profile & Logout */}
      <div className="p-4 border-t border-purple-900/40 space-y-3">
        {userEmail && (
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-800/60 border border-purple-900/30 text-xs text-purple-200">
            <User className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span className="truncate font-medium">{userEmail}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center gap-2.5 px-4 py-2 rounded-lg text-sm font-medium text-rose-300 hover:text-white hover:bg-rose-950/30 border border-rose-900/20 transition-colors disabled:opacity-50 cursor-pointer"
        >
          {isLoggingOut ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Logging out...
            </>
          ) : (
            <>
              <LogOut className="w-4 h-4" />
              Sign Out
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
