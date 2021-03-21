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
        description: 'A social media platform with conversational AI integration. The AI recognizes and responds to specific intents, allowing users to query for their connections’ events through speech or text messaging feature.',
        image: `./meets.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'My Galaxy',
        description: '.',
        image: `./galaxy.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'Radcats Karaoke',
        description: 'A full-featured karaoke application that allows for customization of lyrics and timing, provides a hub for multiuser live sessions, dynamically loads contents, and incorporates gaming as well as 3D elements for fun and interactive experience.',
        image: `./radcats.gif`,
        github: '',
        repository: '',
      },
      {
        title: 'Voicely',
        description: 'An online notepad with 19 color themes, Speech-to-Text, Speech-to-Emoji, and SMS forwarding features.',
        image: `./voicely.png`,
        github: '',
        repository: '',
      },
      {
        title: 'Animal Quiz',
        description: 'A social media platform with conversational AI integration. The AI recognizes and responds to specific intents, allowing users to query for their connections’ events through speech or text messaging feature.',
        image: `./animal.jpg`,
        github: '',
        repository: '',
      },
      {
        title: 'Amazon Copy',
        description: 'A social media platform with conversational AI integration. The AI recognizes and responds to specific intents, allowing users to query for their connections’ events through speech or text messaging feature.',
        image: `./amazon.png`,
        github: '',
        repository: '',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chomieu.com',
        sitemap: 'https://chomieu.com/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
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
