import { PageHero } from "@/components/site/page-hero";
import { SectionGrid } from "@/components/site/section-grid";
import { getPagina, getSecoesPorPagina } from "@/services/public-content";

export default async function ServicosPage() {
  const [pagina, secoes] = await Promise.all([
    getPagina("servicos"),
    getSecoesPorPagina("servicos")
  ]);

  return (
    <>
      <PageHero pagina={pagina} ctaLabel="Solicitar proposta" ctaHref="/contato" />
      <SectionGrid
        eyebrow="Serviços"
        title="Soluções adaptáveis ao estágio da sua operação"
        description="Cadastre, reorganize e edite essas ofertas diretamente pelo painel administrativo."
        secoes={secoes}
      />
    </>
  );
}
