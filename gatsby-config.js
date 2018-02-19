module.exports = {
  siteMetadata: {
    url: 'http://www.naruthk.com',
    title: 'Naruth Kongurai | Front End Web Developer',
    subtitle: 'Front End Developer.',
    copyright:
      '© 2017-2018 | Naruth Kongurai. Built with Gatsby.JS, React, and ❤️',
    disqusShortname: 'naruthk',
    menu: [
      {
        label: 'Read my story 👍',
        description: 'Interested in knowing about me more?',
        path: '/about/',
      },
      {
        label: 'Contact me! 😃',
        description: 'Want to hire / talk to me?',
        path: '/contact/',
      },
      {
        label: 'View list of experiences',
        description: 'Are you looking for my resume?',
        path: '/resume/',
      },
    ],
    author: {
      name: 'Naruth Kongurai',
      email: 'contact@naruthk.com',
      telegram: '#',
      twitter: 'naruthkongurai',
      github: 'naruthk',
      rss: '#',
      vk: '#',
      codepen: 'naruthk',
      linkedin: 'naruthkongurai',
    },
  },
  plugins: [
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: ['gatsby-remark-responsive-iframe'],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                title
                subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.url + edge.node.fields.slug,
                  guid: site.siteMetadata.url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: '' },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:400,400i,500,700`],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: 'daily',
              priority: 0.7,
            }
          }),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss-sass',
  ],
}
