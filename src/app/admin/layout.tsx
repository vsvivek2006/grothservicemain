import type { Metadata } from "next";
import { Toaster } from "sonner";
import { assertAdminUser, type AdminRole } from "@/lib/authorization";
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

  try {
    const adminUser = await assertAdminUser();
    userEmail = adminUser.email;
    userRole = adminUser.role;
  } catch {
    userEmail = null;
    userRole = null;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-purple-600 selection:text-white print:h-auto print:min-h-0 print:bg-white print:text-black">
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
