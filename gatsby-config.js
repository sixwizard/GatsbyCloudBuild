/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: `my-site-name`,
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
          resolve: `gatsby-source-graphql`,
          options: {
              fieldName: `cms`,
              url: `https://countries.trevorblades.com`,
              typeName: `GraphCMS`,
              refetchInterval: 60,
          },
      },
      {
          resolve: `gatsby-source-contentful`,
          options: {
              spaceId: `8h0c4zlrto03`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: `y1UMggjjiQLXt8N9iP5xqZu9BgsHqne4QFjz-etDco8`,
          },
      },
  ]
}
