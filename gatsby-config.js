module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `chivo\:300,400,500,600`,
          `sans-serif`
        ]
      }
    },
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
        trackingId: "UA-125314045-1"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-subfont`,
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: 'Naruth Kongurai',
    description: 'Frontend developer with experience in designing and building web and mobile apps.',
    keywords: 'naruth, kongurai, frontend, backend, engineer, portfolio, personal website, developer',
    url: 'https://www.naruthk.com',
  }
};
