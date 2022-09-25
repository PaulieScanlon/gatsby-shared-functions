require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

module.exports = {
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
          quality: 90,
          formats: ['auto', 'webp'],
          placeholder: 'blurred'
        }
      }
    }
  ]
};
