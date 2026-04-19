export type ChavePagina =
  | "home"
  | "quem-somos"
  | "servicos"
  | "trabalhe-conosco"
  | "contato";

export interface ConfiguracaoEmpresa {
  id: string;
  nome: string;
  slogan: string;
  resumo: string;
  missao: string;
  visao: string;
  valores: string;
  logo_url: string | null;
  cta_primario_label: string;
  cta_primario_href: string;
  cta_secundario_label: string;
  cta_secundario_href: string;
  created_at?: string;
  updated_at?: string;
}

export interface Pagina {
  id: string;
  chave: ChavePagina;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem_url: string | null;
  seo_titulo: string | null;
  seo_descricao: string | null;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Secao {
  id: string;
  pagina_chave: ChavePagina;
  chave: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  conteudo: string;
  imagem_url: string | null;
  cta_label: string | null;
  cta_href: string | null;
  ordem: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Vaga {
  id: string;
  titulo: string;
  localizacao: string;
  modalidade: string;
  descricao: string;
  requisitos: string;
  link_candidatura: string | null;
  ordem: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Banner {
  id: string;
  chave: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem_url: string | null;
  cta_label: string | null;
  cta_href: string | null;
  ordem: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Contato {
  id: string;
  tipo: string;
  rotulo: string;
  valor: string;
  href: string | null;
  icone: string | null;
  ordem: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface SiteData {
  configuracoesEmpresa: ConfiguracaoEmpresa;
  paginas: Pagina[];
  secoes: Secao[];
  vagas: Vaga[];
  banners: Banner[];
  contatos: Contato[];
}
