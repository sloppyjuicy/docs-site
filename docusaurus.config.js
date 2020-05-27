module.exports = {
  title: 'PlaceOS',
  url: 'https://place.technology',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'place-technology',
  projectName: 'website',
  themeConfig: {
    defaultDarkMode: true,
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
      links: [
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
        {
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'podcast',
          activeBasePath: 'podcast',
          label: 'Podcast',
          position: 'left',
        },
        {
          to: 'contact',
          activeBasePath: 'contact',
          label: 'Contact',
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
        {
          title: 'Partner',
          items: [
            {
              label: 'Find a partner',
              to: 'partners',
            },
            {
              label: 'Become a partner',
              to: 'partner-program',
            }
          ],
        },
        {
          title: 'Follow',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Podcast',
              to: 'podcast',
            },
            {
              label: 'Newsletter',
              to: 'newsletter',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/placeos/',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Company',
              to: 'company'
            },
            {
              label: 'Careers',
              to: 'join-us',
            },
            {
              label: 'Contact',
              to: 'contact',
            }
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
      require.resolve('@docusaurus/preset-classic'),
      {
        docs: {
          path: 'node_modules/placeos-docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/placeos/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
