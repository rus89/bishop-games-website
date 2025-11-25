/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
        duration: 1000
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bishop Games',
        short_name: 'Bishop Games',
        description: 'Your favorite game development studio',
        lang: 'en',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f16a22',
        display: 'minimal-ui',
        icon: 'src/images/icon/icon.png'
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-ZF9N01F105',
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f16a22',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bishop.games',
        sitemap: 'https://bishop.games/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }, { userAgent: '*', disallow: ['/accounts', '/admin'] }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
      },
    },
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    title: 'Bishop Games - Your favorite game development studio',
    siteUrl: 'https://bishop.games',
    email: 'office@bishop.games',
    description: 'A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle'
  },
};
