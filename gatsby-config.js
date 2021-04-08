require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(`Env file will be: .env.${process.env.NODE_ENV}`)
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Patrickbuildscoolstuff`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.BUCKET_NAME,
      }
    }
  ],
}
