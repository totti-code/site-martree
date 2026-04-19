import Link from "next/link";

import { RichText } from "@/components/site/rich-text";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
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

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {secoes.map((secao, index) => (
          <Card
            key={secao.id}
            className="flex h-full flex-col rounded-[30px] border border-brand-100 bg-white p-0 shadow-[0_24px_50px_-32px_rgba(22,51,40,0.28)]"
          >
            <div className="rounded-t-[30px] bg-[linear-gradient(135deg,#183C22,#378D4A_62%,#EDEDED)] px-6 py-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {secao.subtitulo}
                </p>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight text-white">
                {secao.titulo}
              </h3>
            </div>

            <div className="flex flex-1 flex-col px-6 py-6">
              <p className="text-base leading-8 text-slate-700">{secao.descricao}</p>

              <div className="mt-6 rounded-[24px] bg-mist p-5">
                <RichText
                  text={secao.conteudo}
                  listClassName="space-y-3 [&>p]:text-sm [&>p]:font-medium [&>p]:leading-7 [&>p]:text-ink"
                />
              </div>

              {secao.cta_href && secao.cta_label ? (
                <Link
                  href={secao.cta_href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-accent-700 transition hover:text-accent-900"
                >
                  {secao.cta_label}
                </Link>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
