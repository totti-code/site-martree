import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { AdminShell } from "@/components/admin/admin-shell";
import { hasSupabaseEnv } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedAdminLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  if (hasSupabaseEnv) {
    const supabase = await createClient();
    const {
      data: { session }
    } = await supabase!.auth.getSession();

    if (!session) {
      redirect("/admin/login");
    }
  }

  return <AdminShell>{children}</AdminShell>;
}
