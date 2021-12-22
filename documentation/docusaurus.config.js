const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'RealWorld',
  tagline: 'The mother of all demo apps',
  url: 'http://gothinkster.github.io/realworld/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gothinkster', // Usually your GitHub org/user name.
  projectName: 'realworld', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gothinkster/realworld/tree/main/docs/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/gothinkster/realworld/tree/main/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/realworld.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/gothinkster/realworld',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'CodebaseShow',
                href: 'https://codebase.show/projects/realworld'
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/gothinkster/realworld/discussions',
              },
                /*
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },

                 */
            ],
          }
            /*
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gothinkster/realworld',
              },
            ],
          },

             */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RealWorld. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
