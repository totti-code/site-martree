import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RichText } from "@/components/site/rich-text";
import type { Secao } from "@/types/site";

interface SectionGridProps {
  eyebrow: string;
  title: string;
  description?: string;
  secoes: Secao[];
}

export function SectionGrid({
  eyebrow,
  title,
  description,
  secoes
}: SectionGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {secoes.map((secao) => (
          <Card key={secao.id} className="flex h-full flex-col rounded-[28px]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {secao.subtitulo}
            </p>
            <h3 className="mt-4 font-display text-2xl text-ink">{secao.titulo}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{secao.descricao}</p>
            <div className="mt-5 flex-1">
              <RichText text={secao.conteudo} />
            </div>
            {secao.cta_href && secao.cta_label ? (
              <Link
                href={secao.cta_href}
                className="mt-6 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
              >
                {secao.cta_label}
              </Link>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
