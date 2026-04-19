import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/login-form";
import { Card } from "@/components/ui/card";
import { hasSupabaseEnv } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLoginPage() {
  if (hasSupabaseEnv) {
    const supabase = await createClient();
    const {
      data: { session }
    } = await supabase!.auth.getSession();

    if (session) {
      redirect("/admin");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mesh px-6 py-16">
      <Card className="w-full max-w-md rounded-[32px]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
          Painel administrativo
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink">Acesso restrito</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Entre com um usuário criado no Supabase Auth para editar o conteúdo do
          site.
        </p>
        {!hasSupabaseEnv ? (
          <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Configure o Supabase para habilitar autenticação real.
          </p>
        ) : null}
        <div className="mt-8">
          <LoginForm />
        </div>
      </Card>
    </div>
  );
}
