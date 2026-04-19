create extension if not exists "pgcrypto";

create table if not exists public.configuracoes_empresa (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  slogan text not null default '',
  resumo text not null default '',
  missao text not null default '',
  visao text not null default '',
  valores text not null default '',
  logo_url text,
  cta_primario_label text not null default 'Fale conosco',
  cta_primario_href text not null default '/contato',
  cta_secundario_label text not null default 'Conhecer setores',
  cta_secundario_href text not null default '/servicos',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.paginas (
  id uuid primary key default gen_random_uuid(),
  chave text not null unique,
  titulo text not null,
  subtitulo text not null default '',
  descricao text not null default '',
  imagem_url text,
  seo_titulo text,
  seo_descricao text,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.secoes (
  id uuid primary key default gen_random_uuid(),
  pagina_chave text not null references public.paginas(chave) on update cascade on delete cascade,
  chave text not null,
  titulo text not null,
  subtitulo text not null default '',
  descricao text not null default '',
  conteudo text not null default '',
  imagem_url text,
  cta_label text,
  cta_href text,
  ordem integer not null default 1,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.vagas (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  localizacao text not null default 'Presencial',
  modalidade text not null default 'CLT',
  descricao text not null default '',
  requisitos text not null default '',
  link_candidatura text,
  ordem integer not null default 1,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.banners (
  id uuid primary key default gen_random_uuid(),
  chave text not null unique,
  titulo text not null,
  subtitulo text not null default '',
  descricao text not null default '',
  imagem_url text,
  cta_label text,
  cta_href text,
  ordem integer not null default 1,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contatos (
  id uuid primary key default gen_random_uuid(),
  tipo text not null,
  rotulo text not null,
  valor text not null,
  href text,
  icone text,
  ordem integer not null default 1,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at_configuracoes_empresa on public.configuracoes_empresa;
create trigger set_updated_at_configuracoes_empresa
before update on public.configuracoes_empresa
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_paginas on public.paginas;
create trigger set_updated_at_paginas
before update on public.paginas
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_secoes on public.secoes;
create trigger set_updated_at_secoes
before update on public.secoes
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_vagas on public.vagas;
create trigger set_updated_at_vagas
before update on public.vagas
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_banners on public.banners;
create trigger set_updated_at_banners
before update on public.banners
for each row execute function public.set_updated_at();

drop trigger if exists set_updated_at_contatos on public.contatos;
create trigger set_updated_at_contatos
before update on public.contatos
for each row execute function public.set_updated_at();

alter table public.configuracoes_empresa enable row level security;
alter table public.paginas enable row level security;
alter table public.secoes enable row level security;
alter table public.vagas enable row level security;
alter table public.banners enable row level security;
alter table public.contatos enable row level security;

drop policy if exists "public_can_read_configuracoes" on public.configuracoes_empresa;
create policy "public_can_read_configuracoes"
on public.configuracoes_empresa
for select
to anon, authenticated
using (true);

drop policy if exists "public_can_read_paginas" on public.paginas;
create policy "public_can_read_paginas"
on public.paginas
for select
to anon, authenticated
using (ativo = true);

drop policy if exists "public_can_read_secoes" on public.secoes;
create policy "public_can_read_secoes"
on public.secoes
for select
to anon, authenticated
using (ativo = true);

drop policy if exists "public_can_read_vagas" on public.vagas;
create policy "public_can_read_vagas"
on public.vagas
for select
to anon, authenticated
using (ativo = true);

drop policy if exists "public_can_read_banners" on public.banners;
create policy "public_can_read_banners"
on public.banners
for select
to anon, authenticated
using (ativo = true);

drop policy if exists "public_can_read_contatos" on public.contatos;
create policy "public_can_read_contatos"
on public.contatos
for select
to anon, authenticated
using (ativo = true);

drop policy if exists "authenticated_manage_configuracoes" on public.configuracoes_empresa;
create policy "authenticated_manage_configuracoes"
on public.configuracoes_empresa
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated_manage_paginas" on public.paginas;
create policy "authenticated_manage_paginas"
on public.paginas
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated_manage_secoes" on public.secoes;
create policy "authenticated_manage_secoes"
on public.secoes
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated_manage_vagas" on public.vagas;
create policy "authenticated_manage_vagas"
on public.vagas
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated_manage_banners" on public.banners;
create policy "authenticated_manage_banners"
on public.banners
for all
to authenticated
using (true)
with check (true);

drop policy if exists "authenticated_manage_contatos" on public.contatos;
create policy "authenticated_manage_contatos"
on public.contatos
for all
to authenticated
using (true)
with check (true);

insert into public.configuracoes_empresa (
  id, nome, slogan, resumo, missao, visao, valores, cta_primario_label, cta_primario_href, cta_secundario_label, cta_secundario_href
)
values (
  '11111111-1111-1111-1111-111111111111',
  'Comercial Martree',
  'Supermercado de confiança com variedade, economia e atendimento próximo.',
  'A Comercial Martree é um supermercado focado em abastecer famílias e pequenos negócios com produtos selecionados, preços competitivos e uma experiência de compra simples e acolhedora.',
  'Oferecer compras práticas, variedade de qualidade e atendimento atencioso para o dia a dia da comunidade.',
  'Ser referência regional em supermercado de proximidade, unindo eficiência operacional, bons preços e relacionamento de confiança.',
  'Respeito ao cliente, qualidade no abastecimento, transparência, agilidade, organização e compromisso com a comunidade.',
  'Fale com a loja',
  '/contato',
  'Conheça nossos setores',
  '/servicos'
)
on conflict (id) do nothing;

insert into public.paginas (id, chave, titulo, subtitulo, descricao, seo_titulo, seo_descricao, ativo)
values
  ('20000000-0000-0000-0000-000000000001', 'home', 'Qualidade, variedade e economia para a rotina da sua família', 'Comercial Martree', 'Um supermercado preparado para atender compras do dia a dia, reposição da semana e necessidades sazonais com praticidade.', 'Comercial Martree | Supermercado', 'Site institucional de supermercado com conteúdo editável via Supabase.', true),
  ('20000000-0000-0000-0000-000000000002', 'quem-somos', 'Um supermercado próximo da comunidade e comprometido com confiança', 'Quem somos', 'A Comercial Martree atende clientes com foco em bom abastecimento, cuidado na seleção de produtos e relacionamento duradouro.', 'Quem somos | Comercial Martree', 'Conheça a história e os diferenciais da Comercial Martree.', true),
  ('20000000-0000-0000-0000-000000000003', 'servicos', 'Setores organizados para facilitar sua compra do início ao fim', 'Setores e serviços', 'Da mercearia ao hortifruti, reunimos categorias essenciais com abastecimento constante e apresentação cuidadosa.', 'Setores | Comercial Martree', 'Conheça os setores e serviços da Comercial Martree.', true),
  ('20000000-0000-0000-0000-000000000004', 'trabalhe-conosco', 'Venha fazer parte de uma equipe que valoriza atendimento, organização e compromisso', 'Trabalhe conosco', 'Buscamos profissionais dedicados ao varejo alimentar, com foco em colaboração, agilidade e boa experiência para o cliente.', 'Carreiras | Comercial Martree', 'Veja oportunidades abertas na Comercial Martree.', true),
  ('20000000-0000-0000-0000-000000000005', 'contato', 'Fale com a Comercial Martree', 'Contato', 'Entre em contato para dúvidas, atendimento comercial, parcerias, encomendas e informações da loja.', 'Contato | Comercial Martree', 'Entre em contato com a Comercial Martree.', true)
on conflict (id) do nothing;

insert into public.banners (id, chave, titulo, subtitulo, descricao, imagem_url, cta_label, cta_href, ordem, ativo)
values
  ('30000000-0000-0000-0000-000000000001', 'hero-principal', 'Tudo para o seu dia a dia em um supermercado organizado, acessível e completo', 'Supermercado de proximidade', 'Abastecimento constante, setores bem distribuídos e uma operação pensada para compras rápidas e seguras.', 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80', 'Ver contato', '/contato', 1, true),
  ('30000000-0000-0000-0000-000000000002', 'hero-secundario', 'Hortifruti fresco, mercearia completa e conveniência para a rotina', 'Variedade com qualidade', 'Uma seleção pensada para atender compras residenciais e demandas do pequeno comércio local.', 'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1400&q=80', 'Conhecer setores', '/servicos', 2, true)
on conflict (id) do nothing;

insert into public.secoes (id, pagina_chave, chave, titulo, subtitulo, descricao, conteudo, imagem_url, cta_label, cta_href, ordem, ativo)
values
  ('40000000-0000-0000-0000-000000000001', 'home', 'destaques', 'Compra prática com categorias essenciais bem organizadas', 'Destaques da loja', 'A loja foi pensada para facilitar a jornada do cliente, com circulação clara, exposição objetiva e reposição frequente.', 'Mercearia e itens básicos\nHortifruti selecionado\nBebidas e conveniência\nLimpeza, higiene e utilidades', null, 'Ver setores', '/servicos', 1, true),
  ('40000000-0000-0000-0000-000000000002', 'home', 'atendimento', 'Atendimento próximo e operação preparada para o dia a dia', 'Nossa proposta', 'Valorizamos agilidade no caixa, reposição eficiente e uma equipe disponível para orientar o cliente quando necessário.', 'Equipe treinada para atendimento\nOrganização de loja e reposição\nFoco em qualidade e validade\nRelacionamento de confiança com o bairro', null, 'Conheça a loja', '/quem-somos', 2, true),
  ('40000000-0000-0000-0000-000000000003', 'quem-somos', 'historia', 'Uma operação construída para servir bem e crescer com consistência', 'Nossa história', 'A Comercial Martree nasceu com a proposta de unir abastecimento confiável, atendimento próximo e ambiente de compra agradável.', 'Trabalhamos para ser um supermercado lembrado pela regularidade, pela boa apresentação dos setores e pelo respeito ao cliente em cada etapa da compra.', 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80', null, null, 1, true),
  ('40000000-0000-0000-0000-000000000004', 'servicos', 'mercearia', 'Mercearia e itens essenciais', 'Abastecimento diário', 'Produtos de alta rotatividade, marcas reconhecidas e variedade para compras rápidas ou completas.', 'Arroz, feijão e farináceos\nEnlatados e conservas\nMassas, molhos e temperos', null, 'Falar com a loja', '/contato', 1, true),
  ('40000000-0000-0000-0000-000000000005', 'servicos', 'hortifruti', 'Hortifruti', 'Frescor e seleção', 'Frutas, legumes e verduras organizados com foco em qualidade visual, giro e praticidade para o cliente.', 'Reposição frequente\nSeleção cuidadosa\nVariedade para rotina e consumo familiar', null, 'Solicitar informação', '/contato', 2, true),
  ('40000000-0000-0000-0000-000000000006', 'servicos', 'padaria-conveniencia', 'Padaria, bebidas e conveniência', 'Complementos da compra', 'Setores pensados para completar a experiência com praticidade, agilidade e boa apresentação.', 'Pães e itens de apoio\nBebidas geladas\nProdutos de compra imediata', null, 'Ver contato', '/contato', 3, true),
  ('40000000-0000-0000-0000-000000000007', 'contato', 'atendimento', 'Atendimento da loja', 'Fale conosco', 'Use este canal para dúvidas gerais, horários, atendimento da loja, parcerias e informações para fornecedores.', 'Respondemos solicitações comerciais, dúvidas sobre funcionamento, contatos institucionais e demandas de fornecedores.', null, null, null, 1, true)
on conflict (id) do nothing;

insert into public.vagas (id, titulo, localizacao, modalidade, descricao, requisitos, link_candidatura, ordem, ativo)
values
  ('50000000-0000-0000-0000-000000000001', 'Operador de Caixa', 'Presencial', 'CLT', 'Atendimento ao cliente, registro de compras, organização do checkout e apoio à rotina da frente de loja.', 'Boa comunicação\nAgilidade no atendimento\nOrganização e atenção', 'mailto:rh@comercialmartree.com?subject=Vaga%20Operador%20de%20Caixa', 1, true),
  ('50000000-0000-0000-0000-000000000002', 'Repositor de Mercadorias', 'Presencial', 'CLT', 'Reposição de produtos, organização de gôndolas, conferência de validade e apoio ao abastecimento da loja.', 'Comprometimento com rotina operacional\nBoa disposição física\nAtenção à organização e limpeza', 'mailto:rh@comercialmartree.com?subject=Vaga%20Repositor%20de%20Mercadorias', 2, true)
on conflict (id) do nothing;

insert into public.contatos (id, tipo, rotulo, valor, href, icone, ordem, ativo)
values
  ('60000000-0000-0000-0000-000000000001', 'telefone', 'Telefone', '+55 (11) 4000-1234', 'tel:+551140001234', 'phone', 1, true),
  ('60000000-0000-0000-0000-000000000002', 'email', 'E-mail', 'contato@comercialmartree.com', 'mailto:contato@comercialmartree.com', 'mail', 2, true),
  ('60000000-0000-0000-0000-000000000003', 'endereco', 'Endereço', 'Av. Principal, 2500 - São Paulo, SP', 'https://maps.google.com/?q=Av+Principal+2500+Sao+Paulo', 'map-pin', 3, true),
  ('60000000-0000-0000-0000-000000000004', 'instagram', 'Instagram', '@comercialmartree', 'https://instagram.com/comercialmartree', 'globe', 4, true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('site-assets', 'site-assets', true)
on conflict (id) do nothing;

drop policy if exists "public_read_site_assets" on storage.objects;
create policy "public_read_site_assets"
on storage.objects
for select
to public
using (bucket_id = 'site-assets');

drop policy if exists "authenticated_upload_site_assets" on storage.objects;
create policy "authenticated_upload_site_assets"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'site-assets');

drop policy if exists "authenticated_update_site_assets" on storage.objects;
create policy "authenticated_update_site_assets"
on storage.objects
for update
to authenticated
using (bucket_id = 'site-assets')
with check (bucket_id = 'site-assets');

drop policy if exists "authenticated_delete_site_assets" on storage.objects;
create policy "authenticated_delete_site_assets"
on storage.objects
for delete
to authenticated
using (bucket_id = 'site-assets');
