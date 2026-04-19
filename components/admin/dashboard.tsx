"use client";

import { BannersForm } from "@/components/admin/forms/banners-form";
import { CompanySettingsForm } from "@/components/admin/forms/company-settings-form";
import { ContactsForm } from "@/components/admin/forms/contacts-form";
import { JobsForm } from "@/components/admin/forms/jobs-form";
import { PagesForm } from "@/components/admin/forms/pages-form";
import { SectionsForm } from "@/components/admin/forms/sections-form";
import { Card } from "@/components/ui/card";
import type { SiteData } from "@/types/site";

interface DashboardProps {
  initialData: SiteData;
  supabaseReady: boolean;
}

export function Dashboard({ initialData, supabaseReady }: DashboardProps) {
  return (
    <div className="space-y-8">
      {!supabaseReady ? (
        <Card className="rounded-[28px] border-amber-200 bg-amber-50">
          <p className="font-medium text-amber-900">
            O Supabase ainda não está configurado.
          </p>
          <p className="mt-2 text-sm leading-7 text-amber-800">
            O painel está carregando dados de exemplo para facilitar a visualização.
            Configure as variáveis de ambiente e aplique o schema SQL para salvar
            alterações no banco.
          </p>
        </Card>
      ) : null}

      <section id="empresa" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Loja
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Informações da loja
          </h2>
        </div>
        <CompanySettingsForm
          initialValue={initialData.configuracoesEmpresa}
          disabled={!supabaseReady}
        />
      </section>

      <section id="paginas" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Páginas
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Títulos, descrições e hero
          </h2>
        </div>
        <PagesForm initialValue={initialData.paginas} disabled={!supabaseReady} />
      </section>

      <section id="secoes" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Seções
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Blocos de conteúdo editáveis
          </h2>
        </div>
        <SectionsForm initialValue={initialData.secoes} disabled={!supabaseReady} />
      </section>

      <section id="banners" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Banners
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Destaques da home
          </h2>
        </div>
        <BannersForm initialValue={initialData.banners} disabled={!supabaseReady} />
      </section>

      <section id="vagas" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Vagas
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Trabalhe conosco
          </h2>
        </div>
        <JobsForm initialValue={initialData.vagas} disabled={!supabaseReady} />
      </section>

      <section id="contatos" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Contatos
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            Telefones, e-mails e redes sociais
          </h2>
        </div>
        <ContactsForm
          initialValue={initialData.contatos}
          disabled={!supabaseReady}
        />
      </section>
    </div>
  );
}
