# Site One Page Pro

Um template de **landing page / site de página única** construído com React, TypeScript e shadcn/ui, focado em performance, acessibilidade e facilidade de customização.

## ✨ Stack

- **[Vite](https://vitejs.dev/)** — build tool e dev server
- **[React 18](https://react.dev/)** + **TypeScript**
- **[shadcn/ui](https://ui.shadcn.com/)** + **Radix UI** — componentes acessíveis
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária
- **[React Router](https://reactrouter.com/)** — roteamento
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — formulários e validação
- **[TanStack Query](https://tanstack.com/query)** — gerenciamento de estado assíncrono
- **[Vitest](https://vitest.dev/)** + **[Testing Library](https://testing-library.com/)** — testes unitários
- **[Playwright](https://playwright.dev/)** — testes end-to-end

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- npm (ou pnpm/yarn, ajustando os comandos abaixo)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Kobayashi24730/site-one-page-pro.git
cd site-one-page-pro

# Instale as dependências
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173` (porta padrão do Vite).

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run build:dev` | Gera o build em modo desenvolvimento |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint |
| `npm run test` | Executa os testes unitários (Vitest) |
| `npm run test:watch` | Executa os testes em modo watch |

## 🧪 Testes

Testes unitários com Vitest:

```bash
npm run test
```

Testes end-to-end com Playwright (configurados em `playwright.config.ts`):

```bash
npx playwright test
```

## 📁 Estrutura do projeto

```
site-one-page-pro/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React (incluindo UI do shadcn)
│   ├── pages/           # Páginas/seções do site
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Funções utilitárias
│   └── ...
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── playwright.config.ts
```

> Ajuste esta seção conforme a estrutura real do seu `src/`.

## 🎨 Customização

- **Cores e tema**: edite `tailwind.config.ts`
- **Componentes shadcn/ui**: configuração em `components.json`
- **Conteúdo do site**: edite os componentes dentro de `src/pages` ou `src/components`

## 🏗️ Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`, prontos para deploy em serviços como Vercel, Netlify, Cloudflare Pages ou GitHub Pages.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: minha feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 📄 Licença

Defina aqui a licença do projeto (ex.: MIT). Se ainda não houver uma, considere adicionar um arquivo `LICENSE`.
