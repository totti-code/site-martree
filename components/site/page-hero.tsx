import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Pagina } from "@/types/site";

interface PageHeroProps {
  pagina: Pagina;
  ctaLabel?: string;
  ctaHref?: string;
}

export function PageHero({ pagina, ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-mesh">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {pagina.subtitulo}
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
            {pagina.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {pagina.descricao}
          </p>
          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <Link href={ctaHref}>
                <Button>{ctaLabel}</Button>
              </Link>
            </div>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-sand p-4 shadow-soft">
          {pagina.imagem_url ? (
            <img
              src={pagina.imagem_url}
              alt={pagina.titulo}
              className="h-full min-h-72 w-full rounded-[24px] object-cover"
            />
          ) : (
            <div className="flex h-full min-h-72 items-end rounded-[24px] bg-[linear-gradient(135deg,#163531,#2C8378,#EEF3F7)] p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/80">
                  Presença institucional
                </p>
                <p className="mt-4 max-w-sm font-display text-3xl text-white">
                  Conteúdo dinâmico, edição simples e visual corporativo.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
