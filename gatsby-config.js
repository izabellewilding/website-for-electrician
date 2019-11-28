module.exports = {
  siteMetadata: {
    author: `@izabellewilding`,
    title: "Alex Wilding Electrical Services",
    titleTemplate: "%s · Alex Wilding Electrical Services ",
    description:
      "Fully qualified electrician in Pembrokeshire, Wales. I carry out electrical services accross Pembrokeshire and South West Wales. Examples of the service I provide accross Pembrokeshire are Domestic Rewires, Fuse Box (Consumer Unit Upgrades), new build rewires, electrical installations, and EICR tests.",
    url: "https://www.alexwildingelectricalservices.com", // No trailing slash allowed!
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

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
