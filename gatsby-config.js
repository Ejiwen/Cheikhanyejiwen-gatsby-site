module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6237eox9dm6z`,
        accessToken: `NTl2ySG7s74M4rHEUAD5WhI8CDyDUubYp_NgyftBBqw`,
      },
    },
  ],
}
