import type { Metadata } from "next";
import { headers } from "next/headers";
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

  const headersList = await headers();
  const headerPathname = headersList.get("x-pathname") || "";

  // Dedicated Print Route: strip entire AdminShell and dark canvas on server render
  if (headerPathname.includes("/print")) {
    return (
      <div className="min-h-screen bg-white text-black p-0 m-0">
        <Toaster richColors position="top-right" theme="light" closeButton />
        {children}
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-gray-950 text-gray-100 selection:bg-purple-600 selection:text-white print:h-auto print:min-h-0 print:bg-white print:text-black">
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
