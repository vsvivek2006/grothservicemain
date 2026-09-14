import type { Metadata } from "next";
import { Toaster } from "sonner";
import { createSessionClient } from "@/lib/supabase/server";
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
  try {
    const supabase = await createSessionClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userEmail = user?.email || null;
  } catch {
    // If Supabase env vars are missing or unconfigured
    userEmail = null;
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
        <AdminShell userEmail={userEmail}>{children}</AdminShell>
      )}
    </div>
  );
}
