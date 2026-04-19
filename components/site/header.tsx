import Link from "next/link";
import { Menu } from "lucide-react";

import type { ConfiguracaoEmpresa } from "@/types/site";

const menu = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/servicos", label: "Setores" },
  { href: "/trabalhe-conosco", label: "Trabalhe conosco" },
  { href: "/contato", label: "Contato" }
];

interface HeaderProps {
  empresa: ConfiguracaoEmpresa;
}

export function Header({ empresa }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex max-w-[70%] flex-col">
          <span className="font-display text-2xl text-ink">{empresa.nome}</span>
          <span className="line-clamp-1 text-xs uppercase tracking-[0.18em] text-accent-700">
            {empresa.slogan}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin"
            className="rounded-full border border-brand-200 px-4 py-2 text-ink transition hover:border-accent-500 hover:text-accent-700"
          >
            Admin
          </Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex list-none items-center justify-center rounded-full border border-brand-200 bg-white p-3 text-ink transition hover:border-accent-500 hover:text-accent-700">
            <Menu size={20} />
          </summary>

          <div className="absolute right-0 top-[calc(100%+12px)] w-72 rounded-[28px] border border-brand-100 bg-white p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="mt-2 rounded-2xl bg-accent-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-accent-700"
              >
                Admin
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
