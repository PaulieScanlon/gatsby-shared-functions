require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

module.exports = {
  siteMetadata: {
    name: 'Gatsby Shared Functions',
    description: 'Use the same function logic everywhere!',
    keywords: ['Gatsby', 'Serverless Functions', 'Server-side Rendering'],
    siteUrl: 'https://gatsbysharedfunctions.gtsb.io',
    defaultImage: 'https://gatsbysharedfunctions.gtsb.io/images/gatsby-shared-functions-open-graph.jpg'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          formats: ['auto', 'webp'],
          placeholder: 'blurred'
        }
      }
    }
  ]
};
