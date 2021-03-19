module.exports = {
  siteMetadata: {
    title: `Chomkan Usaneerungrueng`,
    description: `Portfolio built with Gatsby (React, GraphQL, Webpack)`,
    url: 'https://chomieu.com',
    author: `@chomieu`,
    social: [
      {
        title: 'GitHub',
        link: 'https://github.com/chomieu',
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/chomieu',
      },
    ],
    projects: [
      {
        title: '',
        description: '',
        image: '',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chomkan-usaneerungrueng`,
        short_name: `cu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/CU-logo.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
