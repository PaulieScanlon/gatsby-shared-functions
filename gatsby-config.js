require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    name: 'Gatsby Shared Functions',
    description: 'Use the same function everywhere!',
    keywords: ['Gatsby', 'Serverless Functions', 'Server-side Rendering'],
    siteUrl: 'https://gatsbysharedfunctions.gatsbyjs.io/',
    defaultImage: 'https://gatsbysharedfunctions.gatsbyjs.io/images/gatsby-shared-functions-open-graph-image.jpg'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred'
        }
      }
    }
  ]
};
