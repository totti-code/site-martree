import { PageHero } from "@/components/site/page-hero";
import { RichText } from "@/components/site/rich-text";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPagina, getSecoesPorPagina, getSiteData } from "@/services/public-content";

export default async function QuemSomosPage() {
  const [pagina, secoes, siteData] = await Promise.all([
    getPagina("quem-somos"),
    getSecoesPorPagina("quem-somos"),
    getSiteData()
  ]);

  const empresa = siteData.configuracoesEmpresa;

  return (
    <>
      <PageHero pagina={pagina} ctaLabel="Falar com a equipe" ctaHref="/contato" />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[32px]">
            <SectionHeading
              eyebrow="Essência"
              title="O que sustenta a atuação da empresa"
              description={empresa.resumo}
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="font-semibold text-ink">Missão</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{empresa.missao}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Visão</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{empresa.visao}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Valores</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{empresa.valores}</p>
              </div>
            </div>
          </Card>

          {secoes.map((secao) => (
            <Card key={secao.id} className="rounded-[32px]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {secao.subtitulo}
              </p>
              <h2 className="mt-4 font-display text-3xl text-ink">{secao.titulo}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{secao.descricao}</p>
              <div className="mt-5">
                <RichText text={secao.conteudo} />
              </div>
              {secao.imagem_url ? (
                <img
                  src={secao.imagem_url}
                  alt={secao.titulo}
                  className="mt-6 h-56 w-full rounded-[24px] object-cover"
                />
              ) : null}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
