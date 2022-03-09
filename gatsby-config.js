/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `my-site-name`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      {
          resolve: `gatsby-source-graphql`,
          options: {
              fieldName: `cms`,
              url: `https://countries.trevorblades.com`,
              typeName: `GraphCMS`,
              refetchInterval: 60,
          },
      },
  ]
}
