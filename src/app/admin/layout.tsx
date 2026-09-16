import type { Metadata } from "next";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import { createSessionClient } from "@/lib/supabase/server";
import type { AdminRole } from "@/lib/authorization";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Dashboard | Growth Service",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userEmail: string | null = null;
  let userRole: AdminRole | null = null;

  // 1. Fast path: check if middleware already verified and forwarded the user identity (0ms network delay)
  const headersList = await headers();
  const headerEmail = headersList.get("x-user-email");
  const headerRole = headersList.get("x-user-role") as AdminRole | null;

  if (headerEmail) {
    userEmail = headerEmail;
    userRole = headerRole;
  } else {
    // 2. Fallback only if headers missing or direct access
    try {
      const supabase = await createSessionClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      userEmail = user?.email || null;
      userRole = (user?.app_metadata?.role as AdminRole) || null;
    } catch {
      userEmail = null;
      userRole = null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-purple-600 selection:text-white">
      <Toaster
        richColors
        position="top-right"
        theme="dark"
        closeButton
      />
      {!userEmail ? (
        children
      ) : (
        <AdminShell userEmail={userEmail} userRole={userRole}>{children}</AdminShell>
      )}
    </div>
  );
}
