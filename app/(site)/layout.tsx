import type { ReactNode } from "react";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { getDadosGlobais } from "@/services/public-content";

export default async function SiteLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const { configuracoesEmpresa, contatos } = await getDadosGlobais();

  return (
    <>
      <Header empresa={configuracoesEmpresa} />
      <main>{children}</main>
      <Footer empresa={configuracoesEmpresa} contatos={contatos} />
    </>
  );
}
