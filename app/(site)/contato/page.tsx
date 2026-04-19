import { ContactList } from "@/components/site/contact-list";
import { PageHero } from "@/components/site/page-hero";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { getContatosAtivos, getPagina } from "@/services/public-content";

export default async function ContatoPage() {
  const [pagina, contatos] = await Promise.all([
    getPagina("contato"),
    getContatosAtivos()
  ]);

  return (
    <>
      <PageHero pagina={pagina} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Contato"
              title="Canais de relacionamento da loja"
              description="Telefone, e-mail, endereço e redes sociais também são editáveis pelo painel."
            />
            <div className="mt-10">
              <ContactList contatos={contatos} />
            </div>
          </div>

          <Card className="rounded-[32px]">
            <SectionHeading
              eyebrow="Mensagem"
              title="Atendimento institucional"
              description="Este formulário é demonstrativo e pode ser integrado a uma automação ou serviço de e-mail."
            />
            <form className="mt-8 space-y-5">
              <Input placeholder="Nome" />
              <Input type="email" placeholder="E-mail" />
              <Input placeholder="Assunto" />
              <Textarea placeholder="Descreva sua dúvida, solicitação ou contato comercial" />
              <button
                type="button"
                className="rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-700"
              >
                Enviar mensagem
              </button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
