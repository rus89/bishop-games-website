/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
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
        gtagConfig: {
          optimize_id: '',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          origin: 'https://www.googletagmanager.com',
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-K4F2VB2',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        enableWebVitalsTracking: true,
        selfHostedOrigin: 'https://www.googletagmanager.com',
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
        host: 'https://www.bishop.games',
        sitemap: 'https://www.bishop.games/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }, { userAgent: '*', disallow: ['/accounts', '/admin'] }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
      },
    },
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    title: 'Bishop Games - Your favorite game development studio',
    siteUrl: 'https://www.bishop.games',
    email: 'office@bishop.games',
    description: 'A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle'
  },
};
