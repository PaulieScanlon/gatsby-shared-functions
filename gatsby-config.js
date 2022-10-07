require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    name: 'Gatsby Shared Functions',
    twitter: '@PaulieScanlon',
    description: 'Use the same function everywhere!',
    keywords: ['Gatsby', 'Serverless Functions', 'Server-side Rendering'],
    siteUrl: 'https://gatsbysharedfunctions.gatsbyjs.io/',
    defaultImage: 'https://gatsbysharedfunctions.gatsbyjs.io/images/gatsby-shared-functions-open-graph-image.jpg'
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp'],
          placeholder: 'blurred'
        }
      }
    }
  ]
};
