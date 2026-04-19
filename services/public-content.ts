import { unstable_noStore as noStore } from "next/cache";

import { demoContent } from "@/lib/demo-content";
import { hasSupabaseEnv } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";
import type {
  Banner,
  ChavePagina,
  ConfiguracaoEmpresa,
  Contato,
  Pagina,
  Secao,
  SiteData,
  Vaga
} from "@/types/site";

async function fetchTable<T>(table: string, orderBy?: string) {
  const supabase = await createClient();

  if (!supabase) {
    return null;
  }

  let query = supabase.from(table).select("*");

  if (orderBy) {
    query = query.order(orderBy, { ascending: true });
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data as T[];
}

export async function getSiteData(): Promise<SiteData> {
  noStore();

  if (!hasSupabaseEnv) {
    return demoContent;
  }

  try {
    const [configuracoes, paginas, secoes, vagas, banners, contatos] =
      await Promise.all([
        fetchTable<ConfiguracaoEmpresa>("configuracoes_empresa"),
        fetchTable<Pagina>("paginas"),
        fetchTable<Secao>("secoes", "ordem"),
        fetchTable<Vaga>("vagas", "ordem"),
        fetchTable<Banner>("banners", "ordem"),
        fetchTable<Contato>("contatos", "ordem")
      ]);

    if (!configuracoes?.[0]) {
      return demoContent;
    }

    return {
      configuracoesEmpresa: configuracoes[0],
      paginas: paginas ?? [],
      secoes: secoes ?? [],
      vagas: vagas ?? [],
      banners: banners ?? [],
      contatos: contatos ?? []
    };
  } catch {
    return demoContent;
  }
}

export async function getPagina(chave: ChavePagina) {
  const data = await getSiteData();

  return (
    data.paginas.find((pagina) => pagina.chave === chave && pagina.ativo) ??
    demoContent.paginas.find((pagina) => pagina.chave === chave)!
  );
}

export async function getSecoesPorPagina(chave: ChavePagina) {
  const data = await getSiteData();

  return data.secoes.filter((secao) => secao.pagina_chave === chave && secao.ativo);
}

export async function getBannersAtivos() {
  const data = await getSiteData();
  return data.banners.filter((banner) => banner.ativo);
}

export async function getVagasAtivas() {
  const data = await getSiteData();
  return data.vagas.filter((vaga) => vaga.ativo);
}

export async function getContatosAtivos() {
  const data = await getSiteData();
  return data.contatos.filter((contato) => contato.ativo);
}

export async function getDadosGlobais() {
  const data = await getSiteData();
  return {
    configuracoesEmpresa: data.configuracoesEmpresa,
    contatos: data.contatos.filter((contato) => contato.ativo)
  };
}
