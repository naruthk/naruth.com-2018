module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `chivo\:300,600`,
    //       `sans-serif`,
    //       `open sans\:300,600`
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'data/posts/assets/',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125314045-1",
        head: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    title: 'Naruth Kongurai',
    description: 'Frontend developer with experience in designing and building web and mobile apps.',
    keywords: 'naruth, kongurai, frontend, backend, engineer, portfolio, personal website, developer',
    url: 'https://www.naruthk.com',
    globalMenu: [
      {
        name: 'Home',
        iconName: 'home',
        href: '/',
      },
      {
        name: 'About',
        iconName: 'user',
        href: '/about',
      },
      {
        name: 'Blog',
        iconName: 'newspaper',
        href: '/blog',
      },
      {
        name: 'Contact',
        iconName: 'envelope',
        href: '/contact',
      }
    ],
    socialMenu: [
      {
        className: 'github',
        name: 'GitHub',
        href: 'https://www.github.com/naruthk',
      },
      {
        className: 'twitter',
        name: 'Twitter',
        href: 'https://www.twitter.com/naruthkongurai',
      },
      {
        className: 'linkedin',
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/naruthkongurai',
      },
      {
        className: 'codepen',
        name: 'Codepen',
        href: 'https://codepen.io/naruthk',
      }
    ]
  }
};
