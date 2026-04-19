import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Banner, ConfiguracaoEmpresa, Pagina } from "@/types/site";

interface HeroCarouselProps {
  banners: Banner[];
  paginaInicial: Pagina;
  empresa: ConfiguracaoEmpresa;
}

export function HeroCarousel({
  banners,
  paginaInicial,
  empresa
}: HeroCarouselProps) {
  const principal = banners[0];
  const secundarios = banners.slice(1, 3);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-mesh">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(55,141,74,0.22),transparent_65%)]" />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {paginaInicial.subtitulo}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-ink md:text-7xl">
            {principal?.titulo ?? paginaInicial.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {principal?.descricao ?? paginaInicial.descricao}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={principal?.cta_href ?? empresa.cta_primario_href}>
              <Button>{principal?.cta_label ?? empresa.cta_primario_label}</Button>
            </Link>
            <Link href={empresa.cta_secundario_href}>
              <Button variant="secondary">{empresa.cta_secundario_label}</Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Hortifruti selecionado",
              "Mercearia completa",
              "Conveniência para a rotina"
            ].map((item) => (
              <Card key={item} className="rounded-[24px] border-brand-100 p-5">
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-soft">
            <img
              src={
                principal?.imagem_url ??
                "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
              }
              alt={principal?.titulo ?? paginaInicial.titulo}
              className="h-[420px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {secundarios.map((banner) => (
              <Card key={banner.id} className="rounded-[24px] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                  {banner.subtitulo}
                </p>
                <p className="mt-3 font-display text-2xl text-ink">{banner.titulo}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {banner.descricao}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
