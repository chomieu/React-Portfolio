module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Built with Gatsby`,
    url: 'https://chomieu.com',
    author: `Chomkan Usaneerungrueng`,
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
        title: 'Meets',
        description: 'Social media platform with Conversational AI integration',
        image: `./meets.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'My Space',
        description: 'Galaxy-themed personal portfolio (pun intended)',
        image: `./galaxy.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'Radcats Karaoke',
        description: 'Multiplayer karaoke game for your next party',
        image: `./radcats.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'Voicely',
        description: 'Online notepad with Speech-to-Text/Emoji and SMS forwarding features',
        image: `./voicely.png`,
        github: '',
        repository: '',
      },
      {
        title: 'Animal Quiz',
        description: 'Interactive quiz about the animal kingdom',
        image: `./animal.jpg`,
        github: '',
        repository: '',
      },
      {
        title: 'Amazon Copy',
        description: '[Release Date 3/26] Website that looks and functions like Amazon.com',
        image: `./amazon.png`,
        github: '',
        repository: '',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Oxanium",
              variants: ["400", "600"],
            },
            {
              family: "Poppins",
              variants: ["400"],
            },
          ],
        },
      },
    },
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
