module.exports = {
  title: 'PlaceOS',
  url: 'https://docs.placeos.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'placeos',
  projectName: 'docs-site',
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    image: 'img/meta.png',
    announcementBar: {
      id: 'wip',
      content: "<b>PlaceOS</b> is currently in early preview. If you are stuck and in need of a human, come say hi at <a href=\"mailto:support@place.technology\">support@place.technology</a>.",
      backgroundColor: '#24Cdfd',
      textColor: '#fff',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'PlaceOS',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'drivers',
          activeBasePath: 'drivers',
          label: 'Drivers',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Deployment',
              to: 'docs/deployment',
            },
            {
              label: 'Building Drivers',
              to: 'docs/drivers',
            },
            {
              label: 'Backoffice',
              to: 'docs/backoffice',
            },
          ],
        },
      ],
    },
  },
  stylesheets: [
    '/fonts/fonts.css'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/placeos/docs/edit/master/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
