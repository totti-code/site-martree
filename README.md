# Site institucional com Next.js, Tailwind e Supabase

Projeto base para site institucional com área administrativa editável em `/admin`, usando:

- `Next.js` com App Router
- `React`
- `Tailwind CSS`
- `Supabase Auth`, `Database` e `Storage`
- estrutura pronta para deploy na `Vercel`

## O que está incluído

- Site público com páginas:
  - `Home`
  - `Quem somos`
  - `Serviços`
  - `Trabalhe conosco`
  - `Contato`
- Painel administrativo protegido por login em `/admin`
- Edição de:
  - informações da empresa
  - páginas institucionais
  - seções de conteúdo
  - banners da home
  - vagas
  - contatos e redes sociais
- Upload de imagens para o bucket `site-assets`
- Schema SQL completo com tabelas, seeds e políticas RLS
- Fallback local com conteúdo de exemplo caso o Supabase ainda não esteja configurado

## Estrutura do projeto

```text
app/
  (site)/
  admin/
components/
  admin/
  site/
  ui/
hooks/
lib/
  supabase/
services/
supabase/
types/
```

## 1. Instalação

```bash
npm install
```

## 2. Configuração do Supabase

1. Crie um projeto no Supabase.
2. Copie `.env.example` para `.env.local`.
3. Preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

4. No painel do Supabase, abra `SQL Editor`.
5. Execute o arquivo [schema.sql](/D:/Totti/developer/Site%20Martree/supabase/schema.sql).
6. Em `Authentication > Users`, crie manualmente o primeiro usuário administrador com e-mail e senha.

## 3. Rodando localmente

```bash
npm run dev
```

Acesse:

- Site público: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## 4. Como o conteúdo funciona

- O site público lê os dados das tabelas do Supabase.
- O painel `/admin` permite alterar os registros diretamente no banco.
- As imagens enviadas pelo painel vão para o bucket `site-assets`.
- Sem variáveis do Supabase, o projeto abre com dados de demonstração para facilitar a primeira execução.

## 5. Tabelas criadas

- `configuracoes_empresa`
- `paginas`
- `secoes`
- `vagas`
- `banners`
- `contatos`

Todas já estão preparadas com:

- `id`
- `created_at`
- `updated_at`
- campo `ativo`
- ordenação por `ordem` onde faz sentido

## 6. GitHub

Para subir no GitHub:

```bash
git init
git add .
git commit -m "feat: projeto institucional com admin e supabase"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

## 7. Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Importe o repositório na Vercel.
3. Configure as mesmas variáveis de ambiente do `.env.local`.
4. Faça o deploy.

Se quiser usar o domínio principal na Vercel, o fluxo já está pronto para isso sem ajustes extras no código.

## 8. Observações de manutenção

- O layout público fica em `app/(site)`.
- O painel administrativo fica em `app/admin`.
- Os clientes Supabase estão em `lib/supabase`.
- As operações de leitura ficam em `services/public-content.ts`.
- As operações de edição e upload ficam em `services/admin-content.ts`.
- Os tipos centrais do projeto estão em `types/site.ts`.

## 9. Próximos incrementos recomendados

- integrar formulário de contato com e-mail ou webhook
- adicionar editor rich text
- criar gerenciamento de usuários admin com papéis
- gerar tipos do banco automaticamente com Supabase CLI
