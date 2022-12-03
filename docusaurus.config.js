// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Felt',
  tagline: 'The best way to make maps on the Internet.',
  url: 'https://duckduckquy.github.io',
  baseUrl: '/felt-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // TODO Replace

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'duckduckquy', // Usually your GitHub org/user name.
  projectName: 'felt-docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins : [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-reference',
        path: 'docs-reference',
        routeBasePath: 'docs-reference',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Felt',
        logo: {
          alt: 'Felt Logo',
          src: 'img/felt-icon.png',
        },
        items: [

          {
            to: '/docs/intro',    
            label: 'Felt Style Language',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-reference/intro',    
            label: 'Reference',
            position: 'left',
            activeBaseRegex: `/docs-reference/`,
          },
          // {to: '/blog', label: 'Reference', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [{
              label: 'About',
              href: 'https://felt.com/',
            },
            {
              label: 'Blog',
              href: 'https://felt.com/blog',
            }],
          },
          {
            title: 'Social',
            items: [              {
              label: 'Twitter',
              href: 'https://twitter.com/felt'
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/feltmaps/' 
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCtdtdKL6bYupzOijn5s4XaA'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/feltmaps/'
            }],
          },
        ],
        copyright: `FELT, 2022. COPYRIGHT, ALL RIGHTS RESERVED.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
