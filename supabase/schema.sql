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
  cta_secundario_label text not null default 'Conhecer serviços',
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
  localizacao text not null default 'Remoto',
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
  'Martree Consulting',
  'Estratégia, operação e tecnologia para empresas que querem crescer com consistência.',
  'A Martree Consulting apoia organizações na estruturação de processos, posicionamento institucional e evolução digital com foco em resultado sustentável.',
  'Transformar desafios corporativos em operações mais eficientes, humanas e escaláveis.',
  'Ser referência em projetos de transformação empresarial com execução simples e alto padrão.',
  'Clareza, responsabilidade, parceria de longo prazo, consistência operacional e foco em impacto real.',
  'Falar com a equipe',
  '/contato',
  'Conhecer serviços',
  '/servicos'
)
on conflict (id) do nothing;

insert into public.paginas (id, chave, titulo, subtitulo, descricao, seo_titulo, seo_descricao, ativo)
values
  ('20000000-0000-0000-0000-000000000001', 'home', 'Consultoria empresarial com visão estratégica e execução prática', 'Martree Consulting', 'Projetos sob medida para posicionamento institucional, processos, operação comercial e presença digital.', 'Martree Consulting | Consultoria Empresarial', 'Site institucional com conteúdo editável via Supabase.', true),
  ('20000000-0000-0000-0000-000000000002', 'quem-somos', 'Uma empresa orientada por estrutura, proximidade e entrega', 'Quem somos', 'Construímos relações de longo prazo com empresas que valorizam organização, comunicação clara e evolução contínua.', 'Quem somos | Martree Consulting', 'Conheça a história e os diferenciais da Martree Consulting.', true),
  ('20000000-0000-0000-0000-000000000003', 'servicos', 'Serviços pensados para empresas em fase de consolidação e crescimento', 'Serviços', 'Atuamos da estratégia ao desdobramento operacional, com soluções adaptadas ao momento do negócio.', 'Serviços | Martree Consulting', 'Consultoria, branding, processos e presença digital.', true),
  ('20000000-0000-0000-0000-000000000004', 'trabalhe-conosco', 'Faça parte de uma equipe que combina método, colaboração e ambição', 'Trabalhe conosco', 'Buscamos profissionais comprometidos com qualidade, autonomia e construção de valor de longo prazo.', 'Carreiras | Martree Consulting', 'Veja oportunidades abertas na Martree Consulting.', true),
  ('20000000-0000-0000-0000-000000000005', 'contato', 'Fale com a Martree Consulting', 'Contato', 'Conte um pouco sobre sua empresa e o contexto do projeto. Nosso time retorna com agilidade.', 'Contato | Martree Consulting', 'Entre em contato com a Martree Consulting.', true)
on conflict (id) do nothing;

insert into public.banners (id, chave, titulo, subtitulo, descricao, imagem_url, cta_label, cta_href, ordem, ativo)
values
  ('30000000-0000-0000-0000-000000000001', 'hero-principal', 'Clareza estratégica para empresas que precisam dar o próximo passo', 'Consultoria empresarial', 'Unimos posicionamento institucional, estrutura operacional e tecnologia para transformar crescimento em consistência.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80', 'Solicitar diagnóstico', '/contato', 1, true),
  ('30000000-0000-0000-0000-000000000002', 'hero-secundario', 'Projetos com direção executiva e implementação objetiva', 'Performance com método', 'Mapeamos prioridades, organizamos comunicação e desenhamos uma operação mais preparada para escalar.', 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80', 'Ver serviços', '/servicos', 2, true)
on conflict (id) do nothing;

insert into public.secoes (id, pagina_chave, chave, titulo, subtitulo, descricao, conteudo, imagem_url, cta_label, cta_href, ordem, ativo)
values
  ('40000000-0000-0000-0000-000000000001', 'home', 'destaques', 'Atuação integrada para negócios em crescimento', 'Como ajudamos', 'Conectamos estratégia, marca e operação para reduzir improviso e aumentar previsibilidade.', 'Planejamento institucional\nEstruturação de processos\nComunicação corporativa\nProjetos digitais orientados a conversão', null, 'Explorar soluções', '/servicos', 1, true),
  ('40000000-0000-0000-0000-000000000002', 'home', 'metodo', 'Diagnóstico, plano, implementação e acompanhamento', 'Nossa abordagem', 'Cada projeto parte de uma leitura objetiva do contexto para definir prioridades claras e ações sustentáveis.', '1. Diagnóstico do cenário atual\n2. Priorização de frentes críticas\n3. Execução com entregas objetivas\n4. Evolução contínua baseada em indicadores', null, 'Conhecer a empresa', '/quem-somos', 2, true),
  ('40000000-0000-0000-0000-000000000003', 'quem-somos', 'historia', 'Uma consultoria criada para simplificar decisões complexas', 'História', 'A Martree nasceu para apoiar empresas que precisam organizar crescimento sem perder identidade e velocidade.', 'Atuamos com proximidade executiva, leitura de cenário e disciplina de implementação. Nosso papel é transformar intenção em processo e processo em resultado.', 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80', null, null, 1, true),
  ('40000000-0000-0000-0000-000000000004', 'servicos', 'consultoria-estrategica', 'Consultoria estratégica', 'Direção e priorização', 'Alinhamento de posicionamento, objetivos, metas e governança para sustentar crescimento.', 'Workshops executivos\nMapeamento de oportunidades\nPlano de ação trimestral', null, 'Solicitar proposta', '/contato', 1, true),
  ('40000000-0000-0000-0000-000000000005', 'servicos', 'processos-operacao', 'Processos e operação', 'Eficiência com clareza', 'Estruturação de fluxos, rotinas e responsabilidades para reduzir ruído operacional.', 'Desenho de processos\nPadronização operacional\nIndicadores de acompanhamento', null, 'Falar com especialista', '/contato', 2, true),
  ('40000000-0000-0000-0000-000000000006', 'servicos', 'presenca-digital', 'Presença digital institucional', 'Marca e credibilidade', 'Sites, estrutura de conteúdo e ativos digitais alinhados ao posicionamento da empresa.', 'Sites institucionais\nConteúdo corporativo\nApoio à comunicação comercial', null, 'Ver contato', '/contato', 3, true),
  ('40000000-0000-0000-0000-000000000007', 'contato', 'atendimento', 'Atendimento consultivo', 'Vamos conversar', 'Explique o momento do seu negócio, os desafios atuais e o que precisa evoluir.', 'Respondemos solicitações comerciais, parcerias e oportunidades institucionais.', null, null, null, 1, true)
on conflict (id) do nothing;

insert into public.vagas (id, titulo, localizacao, modalidade, descricao, requisitos, link_candidatura, ordem, ativo)
values
  ('50000000-0000-0000-0000-000000000001', 'Analista de Projetos', 'Remoto', 'CLT', 'Atuação no acompanhamento de cronogramas, comunicação com clientes e organização de entregas.', 'Experiência com gestão de projetos\nBoa comunicação escrita\nOrganização e autonomia', 'mailto:careers@martree.com?subject=Vaga%20Analista%20de%20Projetos', 1, true),
  ('50000000-0000-0000-0000-000000000002', 'Designer de Marca e Conteúdo', 'Híbrido', 'PJ', 'Criação de peças institucionais, páginas e materiais de apoio comercial.', 'Portfólio consistente\nDomínio de design digital\nExperiência com identidade institucional', 'mailto:careers@martree.com?subject=Vaga%20Designer', 2, true)
on conflict (id) do nothing;

insert into public.contatos (id, tipo, rotulo, valor, href, icone, ordem, ativo)
values
  ('60000000-0000-0000-0000-000000000001', 'telefone', 'Telefone', '+55 (11) 4000-1234', 'tel:+551140001234', 'phone', 1, true),
  ('60000000-0000-0000-0000-000000000002', 'email', 'E-mail', 'contato@martree.com', 'mailto:contato@martree.com', 'mail', 2, true),
  ('60000000-0000-0000-0000-000000000003', 'endereco', 'Endereço', 'Av. Brigadeiro Faria Lima, 1500 - São Paulo, SP', 'https://maps.google.com/?q=Faria+Lima+1500+Sao+Paulo', 'map-pin', 3, true),
  ('60000000-0000-0000-0000-000000000004', 'linkedin', 'LinkedIn', 'linkedin.com/company/martree', 'https://linkedin.com/company/martree', 'linkedin', 4, true)
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
