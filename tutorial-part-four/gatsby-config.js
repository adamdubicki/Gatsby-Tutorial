module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};