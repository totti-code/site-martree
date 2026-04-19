import type { ReactNode } from "react";

import { LogoutButton } from "@/components/admin/logout-button";

interface AdminShellProps {
  children: ReactNode;
}

const menu = [
  { href: "#empresa", label: "Empresa" },
  { href: "#paginas", label: "Páginas" },
  { href: "#secoes", label: "Seções" },
  { href: "#banners", label: "Banners" },
  { href: "#vagas", label: "Vagas" },
  { href: "#contatos", label: "Contatos" }
];

export function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit rounded-[32px] bg-ink p-6 text-white shadow-soft lg:sticky lg:top-8">
          <p className="font-display text-3xl">Admin</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Painel de conteúdo conectado ao Supabase.
          </p>

          <nav className="mt-8 flex flex-col gap-2">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <LogoutButton />
          </div>
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}
