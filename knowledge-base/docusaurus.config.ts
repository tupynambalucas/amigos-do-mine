import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Amigos Do Mine',
  tagline: 'Professional Minecraft ecosystem management.',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://amigos-do-mine.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/EloOrganico/', // Keeping this as it matches the repo name on GitHub

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tupynambalucas', // Usually your GitHub org/user name.
  projectName: 'EloOrganico', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
        htmlLang: 'pt-BR',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'releases',
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription:
            'Acompanhe as últimas atualizações, melhorias e correções do Amigos Do Mine.',
          blogSidebarTitle: 'Todas as versões',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'magic',
        path: 'magic',
        routeBasePath: 'magic',
        sidebarPath: './sidebarsMagic.ts',
      },
    ],
    function webpackIgnoreCriticalDependencyPlugin(_context, _options) {
      return {
        name: 'webpack-ignore-critical-dependency-plugin',
        configureWebpack() {
          return {
            ignoreWarnings: [
              {
                module: /vscode-languageserver-types/,
                message: /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
              },
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'eloornico/svg/logo-negative.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'AmigosDocs',
      logo: {
        alt: 'Amigos Do Mine Logo',
        src: 'eloornico/svg/logo-negative.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'magicSidebar',
          position: 'left',
          label: 'Magic',
          docsPluginId: 'magic',
        },
        { to: '/studio', label: 'Studio', position: 'left' },
        { to: '/tools', label: 'Tools', position: 'left' },
        { to: '/changelog', label: 'Changelog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/tupynambalucas/EloOrganico',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/engineering/architecture',
            },
            {
              label: 'Style Guide',
              to: '/docs/engineering/styleguide',
            },
            {
              label: 'Cheat Sheet',
              to: '/docs/cheat-sheet',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Studio (Design)',
              to: '/studio',
            },
            {
              label: 'Tools (CLI)',
              to: '/tools',
            },
            {
              label: 'Portal (Dashboard)',
              to: '/',
            },
            {
              label: 'Minecraft (Server)',
              href: 'https://github.com/tupynambalucas/EloOrganico',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Vision',
              to: '/docs/product/vision',
            },
          ],
        },
      ],
      copyright: `
        <div class="footer__banner-container">
          <img src="/EloOrganico/eloornico/svg/banner-negative.svg" alt="Amigos Do Mine" class="footer__banner" />
        </div>
        <p>Copyright © ${new Date().getFullYear()} Amigos Do Mine. Professional Minecraft ecosystem management. Built with Docusaurus.</p>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
