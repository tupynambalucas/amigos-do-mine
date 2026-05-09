# Elo Organico Knowledge Base

This is the central documentation hub for the **Elo Organico** project, built with Docusaurus.

## Structure

- `docs/`: Core project documentation (Architecture, Master Plan, Product Vision, etc.).
- `src/pages/`: Custom landing pages for workspace contexts (Studio, Tools).
- `releases/`: Project Changelog and release notes.

## Local Development

From the project root:

```bash
pnpm dev:docs
```

Or within this directory:

```bash
pnpm start
```

## Build

```bash
pnpm build
```

The static site will be generated in the `build/` directory.

## Deployment

The documentation is automatically deployed to **GitHub Pages** via GitHub Actions whenever changes are pushed to the `main` branch.

- **Workflow:** `.github/workflows/deploy-docs.yml`
- **URL:** [https://elo-organico.com](https://elo-organico.com) (or the repository's GitHub Pages URL)

---
_Professional documentation for a sustainable organic economy._
