import Link from "next/link";

import type { ConfiguracaoEmpresa } from "@/types/site";

const menu = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/trabalhe-conosco", label: "Trabalhe conosco" },
  { href: "/contato", label: "Contato" }
];

interface HeaderProps {
  empresa: ConfiguracaoEmpresa;
}

export function Header({ empresa }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-2xl text-ink">{empresa.nome}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-brand-700">
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
            className="rounded-full border border-slate-200 px-4 py-2 text-ink transition hover:border-brand-500 hover:text-brand-700"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
