/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
        duration: 1000
      }
    },
  ],
  siteMetadata: {
    title: 'Bishop Games - Your favorite game development studio',
    siteUrl: 'https://www.bishop.games',
    email: 'office@bishop.games',
    description: 'A full-service game development studio specializing in Unity game programming, game art, and the complete game development lifecycle'
  },
};
