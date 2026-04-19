update public.configuracoes_empresa
set
  nome = 'Comercial Martree',
  slogan = 'Supermercado de confiança com variedade, economia e atendimento próximo.',
  resumo = 'A Comercial Martree é um supermercado focado em abastecer famílias e pequenos negócios com produtos selecionados, preços competitivos e uma experiência de compra simples e acolhedora.',
  missao = 'Oferecer compras práticas, variedade de qualidade e atendimento atencioso para o dia a dia da comunidade.',
  visao = 'Ser referência regional em supermercado de proximidade, unindo eficiência operacional, bons preços e relacionamento de confiança.',
  valores = 'Respeito ao cliente, qualidade no abastecimento, transparência, agilidade, organização e compromisso com a comunidade.',
  cta_primario_label = 'Fale com a loja',
  cta_primario_href = '/contato',
  cta_secundario_label = 'Conheça nossos setores',
  cta_secundario_href = '/servicos',
  updated_at = now();

update public.paginas
set
  titulo = case chave
    when 'home' then 'Qualidade, variedade e economia para a rotina da sua família'
    when 'quem-somos' then 'Um supermercado próximo da comunidade e comprometido com confiança'
    when 'servicos' then 'Setores organizados para facilitar sua compra do início ao fim'
    when 'trabalhe-conosco' then 'Venha fazer parte de uma equipe que valoriza atendimento, organização e compromisso'
    when 'contato' then 'Fale com a Comercial Martree'
    else titulo
  end,
  subtitulo = case chave
    when 'home' then 'Comercial Martree'
    when 'quem-somos' then 'Quem somos'
    when 'servicos' then 'Setores e serviços'
    when 'trabalhe-conosco' then 'Trabalhe conosco'
    when 'contato' then 'Contato'
    else subtitulo
  end,
  descricao = case chave
    when 'home' then 'Um supermercado preparado para atender compras do dia a dia, reposição da semana e necessidades sazonais com praticidade.'
    when 'quem-somos' then 'A Comercial Martree atende clientes com foco em bom abastecimento, cuidado na seleção de produtos e relacionamento duradouro.'
    when 'servicos' then 'Da área de perecíveis à limpeza, reunimos categorias essenciais com abastecimento constante e apresentação cuidadosa.'
    when 'trabalhe-conosco' then 'Buscamos profissionais dedicados ao varejo alimentar, com foco em colaboração, agilidade e boa experiência para o cliente.'
    when 'contato' then 'Entre em contato para dúvidas, atendimento comercial, parcerias, encomendas e informações da loja.'
    else descricao
  end,
  seo_titulo = case chave
    when 'home' then 'Comercial Martree | Supermercado'
    when 'quem-somos' then 'Quem somos | Comercial Martree'
    when 'servicos' then 'Setores | Comercial Martree'
    when 'trabalhe-conosco' then 'Carreiras | Comercial Martree'
    when 'contato' then 'Contato | Comercial Martree'
    else seo_titulo
  end,
  seo_descricao = case chave
    when 'home' then 'Site institucional de supermercado com conteúdo editável via Supabase.'
    when 'quem-somos' then 'Conheça a história e os diferenciais da Comercial Martree.'
    when 'servicos' then 'Conheça os setores e serviços da Comercial Martree.'
    when 'trabalhe-conosco' then 'Veja oportunidades abertas na Comercial Martree.'
    when 'contato' then 'Entre em contato com a Comercial Martree.'
    else seo_descricao
  end,
  updated_at = now();

update public.banners
set
  titulo = case chave
    when 'hero-principal' then 'Tudo para o seu dia a dia em um supermercado organizado, acessível e completo'
    when 'hero-secundario' then 'Perecíveis frescos, açougue bem abastecido e conveniência para a rotina'
    else titulo
  end,
  subtitulo = case chave
    when 'hero-principal' then 'Supermercado de proximidade'
    when 'hero-secundario' then 'Variedade com qualidade'
    else subtitulo
  end,
  descricao = case chave
    when 'hero-principal' then 'Abastecimento constante, setores bem distribuídos e uma operação pensada para compras rápidas e seguras.'
    when 'hero-secundario' then 'Uma seleção pensada para atender compras residenciais e demandas do pequeno comércio local.'
    else descricao
  end,
  imagem_url = case chave
    when 'hero-principal' then 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80'
    when 'hero-secundario' then 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1400&q=80'
    else imagem_url
  end,
  cta_label = case chave
    when 'hero-principal' then 'Ver contato'
    when 'hero-secundario' then 'Conhecer setores'
    else cta_label
  end,
  cta_href = case chave
    when 'hero-principal' then '/contato'
    when 'hero-secundario' then '/servicos'
    else cta_href
  end,
  updated_at = now();

delete from public.secoes
where pagina_chave = 'servicos'
and chave not in (
  'acougue',
  'padaria',
  'hortifruti',
  'frios-laticinios',
  'bebidas',
  'limpeza-higiene'
);

update public.secoes
set
  titulo = case chave
    when 'destaques' then 'Compra prática com categorias essenciais bem organizadas'
    when 'atendimento' then 'Atendimento próximo e operação preparada para o dia a dia'
    when 'historia' then 'Uma operação construída para servir bem e crescer com consistência'
    when 'hortifruti' then 'Hortifruti'
    else titulo
  end,
  subtitulo = case chave
    when 'destaques' then 'Destaques da loja'
    when 'atendimento' then case pagina_chave when 'home' then 'Nossa proposta' else 'Fale conosco' end
    when 'historia' then 'Nossa história'
    when 'hortifruti' then 'Frescor e seleção'
    else subtitulo
  end,
  descricao = case chave
    when 'destaques' then 'A loja foi pensada para facilitar a jornada do cliente, com circulação clara, exposição objetiva e reposição frequente.'
    when 'atendimento' then case pagina_chave
      when 'home' then 'Valorizamos agilidade no caixa, reposição eficiente e uma equipe disponível para orientar o cliente quando necessário.'
      when 'contato' then 'Use este canal para dúvidas gerais, horários, atendimento da loja, parcerias e informações para fornecedores.'
      else descricao
    end
    when 'historia' then 'A Comercial Martree nasceu com a proposta de unir abastecimento confiável, atendimento próximo e ambiente de compra agradável.'
    when 'hortifruti' then 'Frutas, legumes e verduras organizados com foco em qualidade visual, giro e praticidade para o cliente.'
    else descricao
  end,
  conteudo = case chave
    when 'destaques' then 'Açougue e carnes frescas
Hortifruti selecionado
Padaria para o dia a dia
Limpeza, higiene e utilidades'
    when 'atendimento' then case pagina_chave
      when 'home' then 'Equipe treinada para atendimento
Organização de loja e reposição
Foco em qualidade e validade
Relacionamento de confiança com o bairro'
      when 'contato' then 'Respondemos solicitações comerciais, dúvidas sobre funcionamento, contatos institucionais e demandas de fornecedores.'
      else conteudo
    end
    when 'historia' then 'Trabalhamos para ser um supermercado lembrado pela regularidade, pela boa apresentação dos setores e pelo respeito ao cliente em cada etapa da compra.'
    when 'hortifruti' then 'Reposição frequente
Seleção cuidadosa
Variedade para rotina e consumo familiar'
    else conteudo
  end,
  imagem_url = case chave
    when 'historia' then 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80'
    else imagem_url
  end,
  cta_label = case chave
    when 'destaques' then 'Ver setores'
    when 'atendimento' then case pagina_chave when 'home' then 'Conheça a loja' else cta_label end
    when 'hortifruti' then 'Ver contato'
    else cta_label
  end,
  cta_href = case chave
    when 'destaques' then '/servicos'
    when 'atendimento' then case pagina_chave when 'home' then '/quem-somos' else cta_href end
    when 'hortifruti' then '/contato'
    else cta_href
  end,
  updated_at = now()
where chave in ('destaques', 'atendimento', 'historia', 'hortifruti');

insert into public.secoes (
  id, pagina_chave, chave, titulo, subtitulo, descricao, conteudo, imagem_url, cta_label, cta_href, ordem, ativo
)
values
  ('40000000-0000-0000-0000-000000000004', 'servicos', 'acougue', 'Açougue', 'Carnes frescas e cortes variados', 'Setor pensado para oferecer cortes bovinos, suínos e aves com reposição constante e apresentação cuidadosa.', 'Carnes para o dia a dia\nCortes para churrasco\nAves e suínos selecionados', null, 'Falar com a loja', '/contato', 1, true),
  ('40000000-0000-0000-0000-000000000005', 'servicos', 'padaria', 'Padaria', 'Produção diária e praticidade', 'Itens de apoio para café da manhã, lanche e compras rápidas com boa apresentação e giro constante.', 'Pães e salgados\nBolos e itens complementares\nProdutos para consumo diário', null, 'Solicitar informação', '/contato', 2, true),
  ('40000000-0000-0000-0000-000000000006', 'servicos', 'hortifruti', 'Hortifruti', 'Frescor e seleção', 'Frutas, legumes e verduras organizados com foco em qualidade visual, giro e praticidade para o cliente.', 'Reposição frequente\nSeleção cuidadosa\nVariedade para rotina e consumo familiar', null, 'Ver contato', '/contato', 3, true),
  ('40000000-0000-0000-0000-000000000008', 'servicos', 'frios-laticinios', 'Frios e laticínios', 'Conservação e variedade', 'Setor abastecido com itens refrigerados, queijos, iogurtes, manteigas e produtos de apoio para a rotina.', 'Queijos e presuntos\nIogurtes e sobremesas\nLeites e derivados', null, 'Fale conosco', '/contato', 4, true),
  ('40000000-0000-0000-0000-000000000009', 'servicos', 'bebidas', 'Bebidas', 'Linha completa para a rotina e ocasiões', 'Refrigerantes, águas, sucos e opções para compras do dia a dia ou abastecimento para eventos e encontros.', 'Bebidas geladas\nÁguas e sucos\nItens para confraternizações', null, 'Ver contato', '/contato', 5, true),
  ('40000000-0000-0000-0000-000000000010', 'servicos', 'limpeza-higiene', 'Limpeza e higiene', 'Casa e cuidados pessoais', 'Produtos essenciais para manutenção da casa, lavanderia, higiene pessoal e abastecimento da rotina familiar.', 'Produtos de limpeza\nHigiene pessoal\nItens para lavanderia e casa', null, 'Solicitar informação', '/contato', 6, true)
on conflict (id) do update set
  pagina_chave = excluded.pagina_chave,
  chave = excluded.chave,
  titulo = excluded.titulo,
  subtitulo = excluded.subtitulo,
  descricao = excluded.descricao,
  conteudo = excluded.conteudo,
  imagem_url = excluded.imagem_url,
  cta_label = excluded.cta_label,
  cta_href = excluded.cta_href,
  ordem = excluded.ordem,
  ativo = excluded.ativo,
  updated_at = now();
