import Link from "next/link";

import type { ConfiguracaoEmpresa, Contato } from "@/types/site";

interface FooterProps {
  empresa: ConfiguracaoEmpresa;
  contatos: Contato[];
}

export function Footer({ empresa, contatos }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="max-w-xl">
          <p className="font-display text-3xl">{empresa.nome}</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">{empresa.resumo}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
            Navegação
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/quem-somos">Quem somos</Link>
            <Link href="/servicos">Setores</Link>
            <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-200">
            Contatos
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            {contatos.map((contato) => (
              <a
                key={contato.id}
                href={contato.href ?? "#"}
                className="block transition hover:text-white"
              >
                <span className="font-medium text-white">{contato.rotulo}: </span>
                {contato.valor}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
