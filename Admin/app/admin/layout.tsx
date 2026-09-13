import { createSessionClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/admin/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSessionClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      <Sidebar userEmail={user.email} />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
