import type { SiteData } from "@/types/site";

export const demoContent: SiteData = {
  configuracoesEmpresa: {
    id: "empresa-padrao",
    nome: "Martree Consulting",
    slogan: "Estratégia, operação e tecnologia para empresas que querem crescer com consistência.",
    resumo:
      "A Martree Consulting apoia organizações na estruturação de processos, posicionamento institucional e evolução digital com foco em resultado sustentável.",
    missao:
      "Transformar desafios corporativos em operações mais eficientes, humanas e escaláveis.",
    visao:
      "Ser referência em projetos de transformação empresarial com execução simples e alto padrão.",
    valores:
      "Clareza, responsabilidade, parceria de longo prazo, consistência operacional e foco em impacto real.",
    logo_url: null,
    cta_primario_label: "Falar com a equipe",
    cta_primario_href: "/contato",
    cta_secundario_label: "Conhecer serviços",
    cta_secundario_href: "/servicos"
  },
  paginas: [
    {
      id: "page-home",
      chave: "home",
      titulo: "Consultoria empresarial com visão estratégica e execução prática",
      subtitulo: "Martree Consulting",
      descricao:
        "Projetos sob medida para posicionamento institucional, processos, operação comercial e presença digital.",
      imagem_url: null,
      seo_titulo: "Martree Consulting | Consultoria Empresarial",
      seo_descricao: "Site institucional com conteúdo editável via Supabase.",
      ativo: true
    },
    {
      id: "page-about",
      chave: "quem-somos",
      titulo: "Uma empresa orientada por estrutura, proximidade e entrega",
      subtitulo: "Quem somos",
      descricao:
        "Construímos relações de longo prazo com empresas que valorizam organização, comunicação clara e evolução contínua.",
      imagem_url: null,
      seo_titulo: "Quem somos | Martree Consulting",
      seo_descricao: "Conheça a história e os diferenciais da Martree Consulting.",
      ativo: true
    },
    {
      id: "page-services",
      chave: "servicos",
      titulo: "Serviços pensados para empresas em fase de consolidação e crescimento",
      subtitulo: "Serviços",
      descricao:
        "Atuamos da estratégia ao desdobramento operacional, com soluções adaptadas ao momento do negócio.",
      imagem_url: null,
      seo_titulo: "Serviços | Martree Consulting",
      seo_descricao: "Consultoria, branding, processos e presença digital.",
      ativo: true
    },
    {
      id: "page-jobs",
      chave: "trabalhe-conosco",
      titulo: "Faça parte de uma equipe que combina método, colaboração e ambição",
      subtitulo: "Trabalhe conosco",
      descricao:
        "Buscamos profissionais comprometidos com qualidade, autonomia e construção de valor de longo prazo.",
      imagem_url: null,
      seo_titulo: "Carreiras | Martree Consulting",
      seo_descricao: "Veja oportunidades abertas na Martree Consulting.",
      ativo: true
    },
    {
      id: "page-contact",
      chave: "contato",
      titulo: "Fale com a Martree Consulting",
      subtitulo: "Contato",
      descricao:
        "Conte um pouco sobre sua empresa e o contexto do projeto. Nosso time retorna com agilidade.",
      imagem_url: null,
      seo_titulo: "Contato | Martree Consulting",
      seo_descricao: "Entre em contato com a Martree Consulting.",
      ativo: true
    }
  ],
  banners: [
    {
      id: "banner-1",
      chave: "hero-principal",
      titulo: "Clareza estratégica para empresas que precisam dar o próximo passo",
      subtitulo: "Consultoria empresarial",
      descricao:
        "Unimos posicionamento institucional, estrutura operacional e tecnologia para transformar crescimento em consistência.",
      imagem_url:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
      cta_label: "Solicitar diagnóstico",
      cta_href: "/contato",
      ordem: 1,
      ativo: true
    },
    {
      id: "banner-2",
      chave: "hero-secundario",
      titulo: "Projetos com direção executiva e implementação objetiva",
      subtitulo: "Performance com método",
      descricao:
        "Mapeamos prioridades, organizamos comunicação e desenhamos uma operação mais preparada para escalar.",
      imagem_url:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      cta_label: "Ver serviços",
      cta_href: "/servicos",
      ordem: 2,
      ativo: true
    }
  ],
  secoes: [
    {
      id: "sec-home-1",
      pagina_chave: "home",
      chave: "destaques",
      titulo: "Atuação integrada para negócios em crescimento",
      subtitulo: "Como ajudamos",
      descricao:
        "Conectamos estratégia, marca e operação para reduzir improviso e aumentar previsibilidade.",
      conteudo:
        "Planejamento institucional\nEstruturação de processos\nComunicação corporativa\nProjetos digitais orientados a conversão",
      imagem_url: null,
      cta_label: "Explorar soluções",
      cta_href: "/servicos",
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-home-2",
      pagina_chave: "home",
      chave: "metodo",
      titulo: "Diagnóstico, plano, implementação e acompanhamento",
      subtitulo: "Nossa abordagem",
      descricao:
        "Cada projeto parte de uma leitura objetiva do contexto para definir prioridades claras e ações sustentáveis.",
      conteudo:
        "1. Diagnóstico do cenário atual\n2. Priorização de frentes críticas\n3. Execução com entregas objetivas\n4. Evolução contínua baseada em indicadores",
      imagem_url: null,
      cta_label: "Conhecer a empresa",
      cta_href: "/quem-somos",
      ordem: 2,
      ativo: true
    },
    {
      id: "sec-about-1",
      pagina_chave: "quem-somos",
      chave: "historia",
      titulo: "Uma consultoria criada para simplificar decisões complexas",
      subtitulo: "História",
      descricao:
        "A Martree nasceu para apoiar empresas que precisam organizar crescimento sem perder identidade e velocidade.",
      conteudo:
        "Atuamos com proximidade executiva, leitura de cenário e disciplina de implementação. Nosso papel é transformar intenção em processo e processo em resultado.",
      imagem_url:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      cta_label: null,
      cta_href: null,
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-services-1",
      pagina_chave: "servicos",
      chave: "consultoria-estrategica",
      titulo: "Consultoria estratégica",
      subtitulo: "Direção e priorização",
      descricao:
        "Alinhamento de posicionamento, objetivos, metas e governança para sustentar crescimento.",
      conteudo:
        "Workshops executivos\nMapeamento de oportunidades\nPlano de ação trimestral",
      imagem_url: null,
      cta_label: "Solicitar proposta",
      cta_href: "/contato",
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-services-2",
      pagina_chave: "servicos",
      chave: "processos-operacao",
      titulo: "Processos e operação",
      subtitulo: "Eficiência com clareza",
      descricao:
        "Estruturação de fluxos, rotinas e responsabilidades para reduzir ruído operacional.",
      conteudo:
        "Desenho de processos\nPadronização operacional\nIndicadores de acompanhamento",
      imagem_url: null,
      cta_label: "Falar com especialista",
      cta_href: "/contato",
      ordem: 2,
      ativo: true
    },
    {
      id: "sec-services-3",
      pagina_chave: "servicos",
      chave: "presenca-digital",
      titulo: "Presença digital institucional",
      subtitulo: "Marca e credibilidade",
      descricao:
        "Sites, estrutura de conteúdo e ativos digitais alinhados ao posicionamento da empresa.",
      conteudo:
        "Sites institucionais\nConteúdo corporativo\nApoio à comunicação comercial",
      imagem_url: null,
      cta_label: "Ver contato",
      cta_href: "/contato",
      ordem: 3,
      ativo: true
    },
    {
      id: "sec-contact-1",
      pagina_chave: "contato",
      chave: "atendimento",
      titulo: "Atendimento consultivo",
      subtitulo: "Vamos conversar",
      descricao:
        "Explique o momento do seu negócio, os desafios atuais e o que precisa evoluir.",
      conteudo:
        "Respondemos solicitações comerciais, parcerias e oportunidades institucionais.",
      imagem_url: null,
      cta_label: null,
      cta_href: null,
      ordem: 1,
      ativo: true
    }
  ],
  vagas: [
    {
      id: "vaga-1",
      titulo: "Analista de Projetos",
      localizacao: "Remoto",
      modalidade: "CLT",
      descricao:
        "Atuação no acompanhamento de cronogramas, comunicação com clientes e organização de entregas.",
      requisitos:
        "Experiência com gestão de projetos\nBoa comunicação escrita\nOrganização e autonomia",
      link_candidatura: "mailto:careers@martree.com?subject=Vaga%20Analista%20de%20Projetos",
      ordem: 1,
      ativo: true
    },
    {
      id: "vaga-2",
      titulo: "Designer de Marca e Conteúdo",
      localizacao: "Híbrido",
      modalidade: "PJ",
      descricao:
        "Criação de peças institucionais, páginas e materiais de apoio comercial.",
      requisitos:
        "Portfólio consistente\nDomínio de design digital\nExperiência com identidade institucional",
      link_candidatura: "mailto:careers@martree.com?subject=Vaga%20Designer",
      ordem: 2,
      ativo: true
    }
  ],
  contatos: [
    {
      id: "contact-1",
      tipo: "telefone",
      rotulo: "Telefone",
      valor: "+55 (11) 4000-1234",
      href: "tel:+551140001234",
      icone: "phone",
      ordem: 1,
      ativo: true
    },
    {
      id: "contact-2",
      tipo: "email",
      rotulo: "E-mail",
      valor: "contato@martree.com",
      href: "mailto:contato@martree.com",
      icone: "mail",
      ordem: 2,
      ativo: true
    },
    {
      id: "contact-3",
      tipo: "endereco",
      rotulo: "Endereço",
      valor: "Av. Brigadeiro Faria Lima, 1500 - São Paulo, SP",
      href: "https://maps.google.com/?q=Faria+Lima+1500+Sao+Paulo",
      icone: "map-pin",
      ordem: 3,
      ativo: true
    },
    {
      id: "contact-4",
      tipo: "linkedin",
      rotulo: "LinkedIn",
      valor: "linkedin.com/company/martree",
      href: "https://linkedin.com/company/martree",
      icone: "linkedin",
      ordem: 4,
      ativo: true
    }
  ]
};
