# Passo a passo: Vercel + Supabase

## 1. Publicar na Vercel

1. Acesse `https://vercel.com/new`
2. Faça login com sua conta GitHub
3. Selecione o repositório `totti-code/site-martree`
4. Clique em `Import`

Na configuração do projeto:

1. Framework: `Next.js`
2. Root Directory: deixe o padrão
3. Build Command: deixe o padrão
4. Output Directory: deixe o padrão

## 2. Configurar variáveis de ambiente na Vercel

Adicione estas 3 variáveis:

1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. `SUPABASE_SERVICE_ROLE_KEY`

Depois clique em `Deploy`.

## 3. Onde pegar as variáveis no Supabase

1. Abra seu projeto no Supabase
2. Vá em `Project Settings`
3. Vá em `API`
4. Copie:

- `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
- `anon public key` -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role key` -> `SUPABASE_SERVICE_ROLE_KEY`

## 4. Criar banco e storage

1. No Supabase, vá em `SQL Editor`
2. Abra o arquivo [schema.sql](D:/Totti/developer/Site%20Martree/supabase/schema.sql)
3. Copie todo o conteúdo
4. Cole no SQL Editor
5. Execute

Esse arquivo já cria:

- tabelas do site
- políticas de acesso
- conteúdo inicial
- bucket `site-assets`

## 5. Criar usuário admin

1. No Supabase, vá em `Authentication`
2. Vá em `Users`
3. Clique em `Add user`
4. Crie um usuário com:

- e-mail
- senha

Esse usuário será usado no login de:

- `/admin/login`

## 6. Testar o site publicado

Depois do deploy:

1. Abra a URL gerada pela Vercel
2. Teste a home
3. Teste as páginas internas
4. Abra `/admin/login`
5. Entre com o usuário criado no Supabase
6. Edite um conteúdo
7. Volte ao site e confirme a alteração

## 7. Links importantes

- Repositório GitHub:
  `https://github.com/totti-code/site-martree`

- Arquivo SQL:
  [schema.sql](D:/Totti/developer/Site%20Martree/supabase/schema.sql)

- README principal:
  [README.md](D:/Totti/developer/Site%20Martree/README.md)

## 8. Observações

- Sem configurar o Supabase, o projeto usa conteúdo de demonstração
- O login do admin só funciona de verdade depois de criar o usuário no Supabase
- O upload de imagens depende do bucket `site-assets`, que já está no SQL
