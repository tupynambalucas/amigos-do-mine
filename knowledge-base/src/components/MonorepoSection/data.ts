export interface WorkspaceInfo {
  id: string;
  name: string;
  path: string;
  description: string;
  stack: string[];
  responsibilities: string[];
  enUS?: Partial<WorkspaceInfo>;
}

export const MONOREPO_OVERVIEW: WorkspaceInfo = {
  id: 'root',
  name: 'Arquitetura Amigos Do Mine',
  path: '/',
  description: 'Um monorepo de alta performance construído com PNPM Workspaces e Turborepo, integrando uma experiência Minecraft customizada com ferramentas web modernas.',
  stack: ['PNPM v10', 'Turborepo', 'TypeScript 6', 'Docker'],
  responsibilities: [
    'Fonte Única de Verdade (SSOT) via /portal/packages/core',
    'Orquestração de Tarefas Automatizada',
    'Sincronização de Servidor Minecraft e Ativos',
    'Tokens de Design e Ativos Visuais Compartilhados'
  ],
  enUS: {
    name: 'Amigos Do Mine Architecture',
    description: 'A high-performance monorepo built on PNPM Workspaces and Turborepo, integrating a custom Minecraft experience with modern web tools.',
    responsibilities: [
      'Single Source of Truth (SSOT) via /portal/packages/core',
      'Automated Task Orchestration',
      'Minecraft Server & Asset synchronization',
      'Shared Design Tokens & Visual Assets'
    ]
  }
};

export const WORKSPACES: Record<string, WorkspaceInfo> = {
  portal: {
    id: 'portal',
    name: 'Escopo Portal',
    path: '/portal',
    description: 'A infraestrutura web, contando com o dashboard do jogador e a API de gerenciamento.',
    stack: ['React 19', 'Fastify v5', 'Zod', 'GSAP'],
    responsibilities: [
      'Dashboard Web (@amigos-portal/web)',
      'API de Gerenciamento (@amigos-portal/api)',
      'Lógica Core Compartilhada (@amigos-portal/core)'
    ],
    enUS: {
      name: 'Portal Scope',
      description: 'The web infrastructure, featuring the player dashboard and management API.',
      responsibilities: [
        'Web Dashboard (@amigos-portal/web)',
        'Management API (@amigos-portal/api)',
        'Shared Core Logic (@amigos-portal/core)'
      ]
    }
  },
  minecraft: {
    id: 'minecraft',
    name: 'Escopo Minecraft',
    path: '/minecraft',
    description: 'O ambiente core do servidor de jogo utilizando Purpur.',
    stack: ['Purpur 1.21+', 'Java 21', 'Docker'],
    responsibilities: [
      'Servidor de jogo de alta performance',
      'Implantação conteinerizada',
      'Integração direta com o console'
    ],
    enUS: {
      name: 'Minecraft Scope',
      description: 'The core game server environment using Purpur.',
      responsibilities: [
        'High-performance game server',
        'Containerized deployment',
        'Direct console integration'
      ]
    }
  },
  resources: {
    id: 'resources',
    name: 'Escopo Resources',
    path: '/resources',
    description: 'Conteúdo customizado do jogo, incluindo plugins e resource packs.',
    stack: ['Kotlin', 'Java', 'MCreator', 'Gradle'],
    responsibilities: [
      'Desenvolvimento do Amigos Plugin',
      'Modelos 3D e texturas customizadas',
      'Empacotamento automático de ativos'
    ],
    enUS: {
      name: 'Resources Scope',
      description: 'Custom game content, including plugins and resource packs.',
      responsibilities: [
        'Amigos Plugin development',
        'Custom 3D models and textures',
        'Automated asset bundling'
      ]
    }
  },
  studio: {
    id: 'studio',
    name: 'Contexto do Studio',
    path: '/studio',
    description: 'A fonte única de verdade para identidade visual e ativos de design.',
    stack: ['TailwindCSS v4', 'Penpot', 'Blender'],
    responsibilities: [
      'Tokens de Design Canônicos',
      'Gerenciamento de Ativos de Marca',
      'Hub de Design Self-hosted'
    ],
    enUS: {
      name: 'Studio Context',
      description: 'The single source of truth for visual identity and design assets.',
      responsibilities: [
        'Canonical Design Tokens',
        'Brand Asset Management',
        'Self-hosted Design Hub'
      ]
    }
  },
  tools: {
    id: 'tools',
    name: 'Contexto de Ferramentas',
    path: '/tools',
    description: 'Orquestração de infraestrutura e espinha dorsal de automação técnica.',
    stack: ['MCP', 'Docker', 'Automation Scripts'],
    responsibilities: [
      'Servidores de Contexto para Agentes de IA',
      'Automação de todo o projeto',
      'Infraestrutura de DevOps'
    ],
    enUS: {
      name: 'Tools Context',
      description: 'Infrastructure orchestration and technical automation backbone.',
      responsibilities: [
        'AI Agent Context Servers',
        'Project-wide automation',
        'DevOps infrastructure'
      ]
    }
  }
};
