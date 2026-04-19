import { Dashboard } from "@/components/admin/dashboard";
import { hasSupabaseEnv } from "@/lib/env";
import { getSiteData } from "@/services/public-content";

export default async function AdminDashboardPage() {
  const siteData = await getSiteData();

  return <Dashboard initialData={siteData} supabaseReady={hasSupabaseEnv} />;
}
