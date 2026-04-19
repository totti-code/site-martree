import { HeroCarousel } from "@/components/site/hero-carousel";
import { SectionGrid } from "@/components/site/section-grid";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getBannersAtivos,
  getPagina,
  getSecoesPorPagina,
  getSiteData
} from "@/services/public-content";

export default async function HomePage() {
  const [siteData, pagina, banners, secoesHome, secoesServicos] = await Promise.all([
    getSiteData(),
    getPagina("home"),
    getBannersAtivos(),
    getSecoesPorPagina("home"),
    getSecoesPorPagina("servicos")
  ]);

  return (
    <>
      <HeroCarousel
        banners={banners}
        paginaInicial={pagina}
        empresa={siteData.configuracoesEmpresa}
      />

      <SectionGrid
        eyebrow="Destaques"
        title="Um supermercado pensado para transmitir confiança, organização e praticidade"
        description="Os blocos da página inicial podem ser administrados no painel, incluindo banners, textos, CTAs e imagens."
        secoes={secoesHome}
      />

      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Setores"
            title="Categorias organizadas para uma experiência de compra mais eficiente"
            description="A Comercial Martree combina abastecimento, cuidado visual e atendimento próximo."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {secoesServicos.slice(0, 3).map((secao) => (
              <Card key={secao.id} className="rounded-[28px] bg-white/10 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">
                  {secao.subtitulo}
                </p>
                <h3 className="mt-4 font-display text-2xl">{secao.titulo}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{secao.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
