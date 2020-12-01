module.exports = {
  title: 'Jake\'s Cheat Sheets',
  tagline: 'Programming and Cyber Security Cheat Sheets',
  url: 'https://cheatsheets.jakew.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jake-walker', // Usually your GitHub org/user name.
  projectName: 'cheatsheets.jakew.me', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jake\'s Cheat Sheets',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/jake-walker/cheatsheets.jakew.me',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://jakew.me/',
            },
            {
              label: 'Blog',
              href: 'https://jakew.me/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jake-walker',
            },
          ],
        },
      ],
      copyright: "Licensed under GNU General Public Licence v3.0",
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jake-walker/cheatsheets.jakew.me/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
