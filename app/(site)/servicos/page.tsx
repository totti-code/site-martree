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
      <PageHero pagina={pagina} ctaLabel="Falar com a loja" ctaHref="/contato" />
      <SectionGrid
        eyebrow="Setores"
        title="Áreas da loja pensadas para compras rápidas, completas e bem abastecidas"
        description="Cadastre, reorganize e edite esses setores diretamente pelo painel administrativo."
        secoes={secoes}
      />
    </>
  );
}
