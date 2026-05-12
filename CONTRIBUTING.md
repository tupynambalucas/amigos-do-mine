# 🤝 Contributing Guidelines

Yo! Welcome to the team! 👋
We are super stoked you want to help build **Amigos Do Mine**. We run a tight ship with a high-performance monorepo, so here is the lowdown on how to contribute without breaking everything.

---

## 1. Quick Start ⚡

### Prerequisites

- **Node.js**: v22+ (The engine).
- **PNPM**: v10+ (The manager).
- **Docker**: Desktop or Engine + Compose (The infrastructure).
- **Java**: JDK 21+ (Only if you are touching Kotlin code in `resources/`).

### Setup

```bash
# Clone this beauty
git clone https://github.com/tupynambalucas/EloOrganico.git
cd EloOrganico

# Install the goods
pnpm install

# Wake up the Minecraft server & infrastructure
pnpm server:up
```

---

## 2. Monorepo Architecture 🏗️

We use **PNPM Workspaces** managed with **Turborepo**. This means you can run scripts from the root and they will execute across the entire project with smart caching.

### Key Scripts (Root)
- `pnpm build`: Runs the build pipeline for all packages.
- `pnpm lint`: Checks code style across the monorepo.
- `pnpm typecheck`: Validates TypeScript integrity everywhere.
- `pnpm server:up`: Starts the Dockerized Minecraft environment.
- `pnpm build:plugin`: Compiles the custom Kotlin/Java plugins.

---

## 3. Engineering Standards (Mandatory) 📜

We value code that is clean, typed, and scalable. For the full nitty-gritty, read the **[Style Guide & Standards](./knowledge-base/docs/engineering/styleguide.mdx)** in our Knowledge Base.

### The "SSOT" Rule (Single Source of Truth)
If you need a new data shape or type (like a `PlayerProfile`), **DO NOT** write it in the apps folders.
1. Define it in `portal/packages/core` using **Zod**.
2. Export it from `@amigos-portal/core`.
3. Import it everywhere else. **Zero tolerance for `any`**.

### Hygiene & Naming
- **Language**: All code, comments, and technical documentation must be in **English**.
- **File Naming**: Use the `name.type.ts` pattern (e.g., `user.schema.ts`, `auth.controller.ts`).
- **Asset Naming**: Use `snake_case.png` for Minecraft assets (textures, models).
- **SOLID Principles**: We strictly follow SOLID. If your logic is getting messy, abstract it!

---

## 4. Submitting Your Art 🎨

1. **Self-Check**: Run `pnpm lint` and `pnpm typecheck`.
2. **Commit**: Keep messages concise and in English.
3. **Pull Request**: Open a PR describing your changes. 
4. **Validation**: Ensure all CI/CD checks pass (including the documentation build).

> _New here? Check the **[Knowledge Base Intro](./knowledge-base/docs/intro.mdx)** for a deep dive into our architecture._

---
_Build it like a game, code it like a bank._
