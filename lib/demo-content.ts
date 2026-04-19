import type { SiteData } from "@/types/site";

export const demoContent: SiteData = {
  configuracoesEmpresa: {
    id: "empresa-padrao",
    nome: "Comercial Martree",
    slogan: "Supermercado de confiança com variedade, economia e atendimento próximo.",
    resumo:
      "A Comercial Martree é um supermercado focado em abastecer famílias e pequenos negócios com produtos selecionados, preços competitivos e uma experiência de compra simples e acolhedora.",
    missao:
      "Oferecer compras práticas, variedade de qualidade e atendimento atencioso para o dia a dia da comunidade.",
    visao:
      "Ser referência regional em supermercado de proximidade, unindo eficiência operacional, bons preços e relacionamento de confiança.",
    valores:
      "Respeito ao cliente, qualidade no abastecimento, transparência, agilidade, organização e compromisso com a comunidade.",
    logo_url: null,
    cta_primario_label: "Fale com a loja",
    cta_primario_href: "/contato",
    cta_secundario_label: "Conheça nossos setores",
    cta_secundario_href: "/servicos"
  },
  paginas: [
    {
      id: "page-home",
      chave: "home",
      titulo: "Qualidade, variedade e economia para a rotina da sua família",
      subtitulo: "Comercial Martree",
      descricao:
        "Um supermercado preparado para atender compras do dia a dia, reposição da semana e necessidades sazonais com praticidade.",
      imagem_url: null,
      seo_titulo: "Comercial Martree | Supermercado",
      seo_descricao: "Site institucional de supermercado com conteúdo editável via Supabase.",
      ativo: true
    },
    {
      id: "page-about",
      chave: "quem-somos",
      titulo: "Um supermercado próximo da comunidade e comprometido com confiança",
      subtitulo: "Quem somos",
      descricao:
        "A Comercial Martree atende clientes com foco em bom abastecimento, cuidado na seleção de produtos e relacionamento duradouro.",
      imagem_url: null,
      seo_titulo: "Quem somos | Comercial Martree",
      seo_descricao: "Conheça a história e os diferenciais da Comercial Martree.",
      ativo: true
    },
    {
      id: "page-services",
      chave: "servicos",
      titulo: "Setores organizados para facilitar sua compra do início ao fim",
      subtitulo: "Setores e serviços",
      descricao:
        "Da mercearia ao hortifruti, reunimos categorias essenciais com abastecimento constante e apresentação cuidadosa.",
      imagem_url: null,
      seo_titulo: "Setores | Comercial Martree",
      seo_descricao: "Conheça os setores e serviços da Comercial Martree.",
      ativo: true
    },
    {
      id: "page-jobs",
      chave: "trabalhe-conosco",
      titulo: "Venha fazer parte de uma equipe que valoriza atendimento, organização e compromisso",
      subtitulo: "Trabalhe conosco",
      descricao:
        "Buscamos profissionais dedicados ao varejo alimentar, com foco em colaboração, agilidade e boa experiência para o cliente.",
      imagem_url: null,
      seo_titulo: "Carreiras | Comercial Martree",
      seo_descricao: "Veja oportunidades abertas na Comercial Martree.",
      ativo: true
    },
    {
      id: "page-contact",
      chave: "contato",
      titulo: "Fale com a Comercial Martree",
      subtitulo: "Contato",
      descricao:
        "Entre em contato para dúvidas, atendimento comercial, parcerias, encomendas e informações da loja.",
      imagem_url: null,
      seo_titulo: "Contato | Comercial Martree",
      seo_descricao: "Entre em contato com a Comercial Martree.",
      ativo: true
    }
  ],
  banners: [
    {
      id: "banner-1",
      chave: "hero-principal",
      titulo: "Tudo para o seu dia a dia em um supermercado organizado, acessível e completo",
      subtitulo: "Supermercado de proximidade",
      descricao:
        "Abastecimento constante, setores bem distribuídos e uma operação pensada para compras rápidas e seguras.",
      imagem_url:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
      cta_label: "Ver contato",
      cta_href: "/contato",
      ordem: 1,
      ativo: true
    },
    {
      id: "banner-2",
      chave: "hero-secundario",
      titulo: "Hortifruti fresco, mercearia completa e conveniência para a rotina",
      subtitulo: "Variedade com qualidade",
      descricao:
        "Uma seleção pensada para atender compras residenciais e demandas do pequeno comércio local.",
      imagem_url:
        "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1400&q=80",
      cta_label: "Conhecer setores",
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
      titulo: "Compra prática com categorias essenciais bem organizadas",
      subtitulo: "Destaques da loja",
      descricao:
        "A loja foi pensada para facilitar a jornada do cliente, com circulação clara, exposição objetiva e reposição frequente.",
      conteudo:
        "Mercearia e itens básicos\nHortifruti selecionado\nBebidas e conveniência\nLimpeza, higiene e utilidades",
      imagem_url: null,
      cta_label: "Ver setores",
      cta_href: "/servicos",
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-home-2",
      pagina_chave: "home",
      chave: "atendimento",
      titulo: "Atendimento próximo e operação preparada para o dia a dia",
      subtitulo: "Nossa proposta",
      descricao:
        "Valorizamos agilidade no caixa, reposição eficiente e uma equipe disponível para orientar o cliente quando necessário.",
      conteudo:
        "Equipe treinada para atendimento\nOrganização de loja e reposição\nFoco em qualidade e validade\nRelacionamento de confiança com o bairro",
      imagem_url: null,
      cta_label: "Conheça a empresa",
      cta_href: "/quem-somos",
      ordem: 2,
      ativo: true
    },
    {
      id: "sec-about-1",
      pagina_chave: "quem-somos",
      chave: "historia",
      titulo: "Uma operação construída para servir bem e crescer com consistência",
      subtitulo: "Nossa história",
      descricao:
        "A Comercial Martree nasceu com a proposta de unir abastecimento confiável, atendimento próximo e ambiente de compra agradável.",
      conteudo:
        "Trabalhamos para ser um supermercado lembrado pela regularidade, pela boa apresentação dos setores e pelo respeito ao cliente em cada etapa da compra.",
      imagem_url:
        "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80",
      cta_label: null,
      cta_href: null,
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-services-1",
      pagina_chave: "servicos",
      chave: "mercearia",
      titulo: "Mercearia e itens essenciais",
      subtitulo: "Abastecimento diário",
      descricao:
        "Produtos de alta rotatividade, marcas reconhecidas e variedade para compras rápidas ou completas.",
      conteudo:
        "Arroz, feijão e farináceos\nEnlatados e conservas\nMassas, molhos e temperos",
      imagem_url: null,
      cta_label: "Falar com a loja",
      cta_href: "/contato",
      ordem: 1,
      ativo: true
    },
    {
      id: "sec-services-2",
      pagina_chave: "servicos",
      chave: "hortifruti",
      titulo: "Hortifruti",
      subtitulo: "Frescor e seleção",
      descricao:
        "Frutas, legumes e verduras organizados com foco em qualidade visual, giro e praticidade para o cliente.",
      conteudo:
        "Reposição frequente\nSeleção cuidadosa\nVariedade para rotina e consumo familiar",
      imagem_url: null,
      cta_label: "Solicitar informação",
      cta_href: "/contato",
      ordem: 2,
      ativo: true
    },
    {
      id: "sec-services-3",
      pagina_chave: "servicos",
      chave: "padaria-conveniencia",
      titulo: "Padaria, bebidas e conveniência",
      subtitulo: "Complementos da compra",
      descricao:
        "Setores pensados para completar a experiência com praticidade, agilidade e boa apresentação.",
      conteudo:
        "Pães e itens de apoio\nBebidas geladas\nProdutos de compra imediata",
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
      titulo: "Atendimento comercial e institucional",
      subtitulo: "Fale conosco",
      descricao:
        "Use este canal para dúvidas gerais, informações sobre a loja, atendimento corporativo e oportunidades de parceria.",
      conteudo:
        "Respondemos solicitações comerciais, dúvidas sobre funcionamento, contatos institucionais e demandas de fornecedores.",
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
      titulo: "Operador de Caixa",
      localizacao: "Presencial",
      modalidade: "CLT",
      descricao:
        "Atendimento ao cliente, registro de compras, organização do checkout e apoio à rotina da frente de loja.",
      requisitos:
        "Boa comunicação\nAgilidade no atendimento\nOrganização e atenção",
      link_candidatura:
        "mailto:rh@comercialmartree.com?subject=Vaga%20Operador%20de%20Caixa",
      ordem: 1,
      ativo: true
    },
    {
      id: "vaga-2",
      titulo: "Repositor de Mercadorias",
      localizacao: "Presencial",
      modalidade: "CLT",
      descricao:
        "Reposição de produtos, organização de gôndolas, conferência de validade e apoio ao abastecimento da loja.",
      requisitos:
        "Comprometimento com rotina operacional\nBoa disposição física\nAtenção à organização e limpeza",
      link_candidatura:
        "mailto:rh@comercialmartree.com?subject=Vaga%20Repositor%20de%20Mercadorias",
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
      valor: "contato@comercialmartree.com",
      href: "mailto:contato@comercialmartree.com",
      icone: "mail",
      ordem: 2,
      ativo: true
    },
    {
      id: "contact-3",
      tipo: "endereco",
      rotulo: "Endereço",
      valor: "Av. Principal, 2500 - São Paulo, SP",
      href: "https://maps.google.com/?q=Av+Principal+2500+Sao+Paulo",
      icone: "map-pin",
      ordem: 3,
      ativo: true
    },
    {
      id: "contact-4",
      tipo: "instagram",
      rotulo: "Instagram",
      valor: "@comercialmartree",
      href: "https://instagram.com/comercialmartree",
      icone: "globe",
      ordem: 4,
      ativo: true
    }
  ]
};
