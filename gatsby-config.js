module.exports = {
  siteMetadata: {
    author: `@izabellewilding`,
    title: "Alex Wilding Electrical Services Maenclochog",
    titleTemplate: "Alex Wilding Electrical Services · %s",
    description:
      " ELECSA approved electrical contractor offering domestic, commercial and industrial services across all areas of Pembrokeshire.",
    url: "https://www.alexwildingelectricalservices.com",
    siteUrl: "https://www.alexwildingelectricalservices.com",
    image: "/src/images/awelectrical.PNG",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [__dirname + "/node_modules/"],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/markdown-pages`,
    //     name: "markdown-pages",
    //   },
    // },
    // `gatsby-transformer-remark`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        icon: `src/images/aw-favicon.png`,
        display: `minimal-ui`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
