import { JobList } from "@/components/site/job-list";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPagina, getVagasAtivas } from "@/services/public-content";

export default async function TrabalheConoscoPage() {
  const [pagina, vagas] = await Promise.all([
    getPagina("trabalhe-conosco"),
    getVagasAtivas()
  ]);

  return (
    <>
      <PageHero pagina={pagina} ctaLabel="Enviar currículo" ctaHref="/contato" />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Oportunidades"
          title="Vagas publicadas e gerenciadas no painel"
          description="Inclua novas posições, ajuste descrição, requisitos e links de candidatura sem alterar o código."
        />
        <div className="mt-12">
          <JobList vagas={vagas} />
        </div>
      </section>
    </>
  );
}
