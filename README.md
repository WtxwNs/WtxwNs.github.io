# Tongxi Wang Academic Homepage

Personal academic homepage for Tongxi Wang / 王童曦, built with Astro, TypeScript, Tailwind CSS, MDX, and Astro Content Collections.

The information architecture balances academic research with systems work:

- Research: learning dynamics, adaptive computation, and reliable learning
- Publications: complete research archive
- Systems: medical robotics, agent workflows, and embedded/FPGA work
- Writing: research notes and essays
- CV: education, publications, projects, coursework, and honors

The public site is configured for:

```text
https://wtxwns.github.io
```

Chinese is the default language. English remains available under `/en`.

## 在浏览器中管理内容

在网站页脚选择“管理内容”，或访问 `/manage/`。可以修改中英文首页资料、上传个人照片、管理论文和项目，也可以新建博客或导入已有的 Markdown 文稿。

首次在线编辑时选择“使用令牌登录”。按照登录窗口中的链接创建 GitHub 细粒度访问令牌，仅选择 `WtxwNs.github.io` 仓库并授予 Contents 读写权限。在自己的浏览器中完成登录。

撰写博客时可直接粘贴正文，用图片按钮上传配图。关闭“保存为草稿”并保存后，文章会出现在对应语言的博客列表和首页近期写作中。GitHub Actions 自动构建并发布。导入文稿时可使用普通 Markdown，也可携带标题、日期、摘要、语言、分类和标签。

本地预览时，用 Edge 或 Chrome 打开 `/manage/`，进入后台后选择本地仓库并选择本项目目录。此模式将修改保存到本地。提交并推送到 `source` 后会触发线上发布。

## Local Development

Use pnpm through Corepack if the short `pnpm` command is not on PATH:

```powershell
corepack pnpm install
corepack pnpm dev
```

Open:

```text
http://localhost:4321/zh
http://localhost:4321/en
```

## Scripts

```powershell
corepack pnpm check
corepack pnpm build
corepack pnpm preview
corepack pnpm format
```

## Repository and Deployment

The `source` branch is the single source of truth. Push source changes there; GitHub Actions builds the site and publishes the generated `dist` artifact to GitHub Pages. Do not manually copy individual generated HTML files into `main`.

In repository settings, configure Pages to use **GitHub Actions** as the deployment source.

## Repository Hygiene

Do not commit generated or installed files:

```text
node_modules
dist
.astro
.vercel
.DS_Store
*.log
```

These are already covered by `.gitignore`.

## Content

- Publications: `src/content/publications/*.md`
- Projects: `src/content/projects/*.md`
- Blog posts: `src/content/blog/*.md`
- Homepage and contact details: `src/data/home.json`
- Academic profile: `src/data/profile.ts`
- Monogram: `src/components/Monogram.astro`
- Social preview: `public/og-card.svg` and `public/og-card.png`

Only add publication links when they are real. Empty, missing, or `#todo` links are intentionally hidden by the UI.

## Public CV

The website uses the web CV pages at `/zh/cv` and `/en/cv`.

Add `public/cv.pdf` only when a redacted public CV is ready. The public CV must not include a phone number, future PhD information, or other private academic details. Until a redacted PDF is ready, keep `hasPublicPdfCv: false` in `src/data/profile.ts`.

Do not expose a phone number anywhere in data, pages, generated content, README examples, or JSON-LD.

## Deployment

### GitHub Pages

The workflow in `.github/workflows/deploy.yml` runs on pushes to `source`, builds the static site, and deploys `dist` to GitHub Pages.

### Vercel

Use:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`
