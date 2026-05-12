export interface WorkspaceInfo {
  id: string;
  name: string;
  path: string;
  description: string;
  stack: string[];
  responsibilities: string[];
  ptBR?: Partial<WorkspaceInfo>;
}

export const MONOREPO_OVERVIEW: WorkspaceInfo = {
  id: 'root',
  name: 'Amigos Do Mine Architecture',
  path: '/',
  description: 'A high-performance monorepo built on PNPM Workspaces and Turborepo, integrating a custom Minecraft experience with modern web tools.',
  stack: ['PNPM v10', 'Turborepo', 'TypeScript 6', 'Docker'],
  responsibilities: [
    'Single Source of Truth (SSOT) via /portal/packages/core',
    'Automated Task Orchestration',
    'Minecraft Server & Asset synchronization',
    'Shared Design Tokens & Visual Assets'
  ],
  ptBR: {
    name: 'Arquitetura Amigos Do Mine',
    description: 'Um monorepo de alta performance construído com PNPM Workspaces e Turborepo, integrando uma experiência Minecraft customizada com ferramentas web modernas.',
    responsibilities: [
      'Fonte Única de Verdade (SSOT) via /portal/packages/core',
      'Orquestração de Tarefas Automatizada',
      'Sincronização de Servidor Minecraft e Ativos',
      'Tokens de Design e Ativos Visuais Compartilhados'
    ]
  }
};

export const WORKSPACES: Record<string, WorkspaceInfo> = {
  portal: {
    id: 'portal',
    name: 'Portal Scope',
    path: '/portal',
    description: 'The web infrastructure, featuring the player dashboard and management API.',
    stack: ['React 19', 'Fastify v5', 'Zod', 'GSAP'],
    responsibilities: [
      'Web Dashboard (@amigos-portal/web)',
      'Management API (@amigos-portal/api)',
      'Shared Core Logic (@amigos-portal/core)'
    ],
    ptBR: {
      name: 'Escopo Portal',
      description: 'A infraestrutura web, contando com o dashboard do jogador e a API de gerenciamento.',
      responsibilities: [
        'Dashboard Web (@amigos-portal/web)',
        'API de Gerenciamento (@amigos-portal/api)',
        'Lógica Core Compartilhada (@amigos-portal/core)'
      ]
    }
  },
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft Scope',
    path: '/minecraft',
    description: 'The core game server environment using Purpur.',
    stack: ['Purpur 1.21+', 'Java 21', 'Docker'],
    responsibilities: [
      'High-performance game server',
      'Containerized deployment',
      'Direct console integration'
    ],
    ptBR: {
      name: 'Escopo Minecraft',
      description: 'O ambiente core do servidor de jogo utilizando Purpur.',
      responsibilities: [
        'Servidor de jogo de alta performance',
        'Implantação conteinerizada',
        'Integração direta com o console'
      ]
    }
  },
  resources: {
    id: 'resources',
    name: 'Resources Scope',
    path: '/resources',
    description: 'Custom game content, including plugins and resource packs.',
    stack: ['Kotlin', 'Java', 'MCreator', 'Gradle'],
    responsibilities: [
      'Amigos Plugin development',
      'Custom 3D models and textures',
      'Automated asset bundling'
    ],
    ptBR: {
      name: 'Escopo Resources',
      description: 'Conteúdo customizado do jogo, incluindo plugins e resource packs.',
      responsibilities: [
        'Desenvolvimento do Amigos Plugin',
        'Modelos 3D e texturas customizadas',
        'Empacotamento automático de ativos'
      ]
    }
  },
  studio: {
    id: 'studio',
    name: 'Studio Context',
    path: '/studio',
    description: 'The single source of truth for visual identity and design assets.',
    stack: ['TailwindCSS v4', 'Penpot', 'Blender'],
    responsibilities: [
      'Canonical Design Tokens',
      'Brand Asset Management',
      'Self-hosted Design Hub'
    ],
    ptBR: {
      name: 'Contexto do Studio',
      description: 'A fonte única de verdade para identidade visual e ativos de design.',
      responsibilities: [
        'Tokens de Design Canônicos',
        'Gerenciamento de Ativos de Marca',
        'Hub de Design Self-hosted'
      ]
    }
  },
  tools: {
    id: 'tools',
    name: 'Tools Context',
    path: '/tools',
    description: 'Infrastructure orchestration and technical automation backbone.',
    stack: ['MCP', 'Docker', 'Automation Scripts'],
    responsibilities: [
      'AI Agent Context Servers',
      'Project-wide automation',
      'DevOps infrastructure'
    ],
    ptBR: {
      name: 'Contexto de Ferramentas',
      description: 'Orquestração de infraestrutura e espinha dorsal de automação técnica.',
      responsibilities: [
        'Servidores de Contexto para Agentes de IA',
        'Automação de todo o projeto',
        'Infraestrutura de DevOps'
      ]
    }
  }
};
