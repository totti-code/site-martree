import { Card } from "@/components/ui/card";
import { RichText } from "@/components/site/rich-text";
import type { Vaga } from "@/types/site";

interface JobListProps {
  vagas: Vaga[];
}

export function JobList({ vagas }: JobListProps) {
  return (
    <div className="grid gap-6">
      {vagas.map((vaga) => (
        <Card key={vaga.id} className="grid gap-6 rounded-[28px] lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl text-ink">{vaga.titulo}</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
                {vaga.modalidade}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {vaga.localizacao}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{vaga.descricao}</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-ink">Requisitos</p>
              <div className="mt-2">
                <RichText text={vaga.requisitos} />
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <a
              href={vaga.link_candidatura ?? "/contato"}
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Candidatar-se
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
