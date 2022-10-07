import React, { Fragment } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const Seo = () => {
  const {
    site: {
      siteMetadata: { name, twitter, description, siteUrl, defaultImage, keywords }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          twitter
          description
          siteUrl
          defaultImage
          keywords
        }
      }
    }
  `);

  return (
    <Fragment>
      <title>{name}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta name="image" content={defaultImage} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={name} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content={description} />
    </Fragment>
  );
};

export default Seo;
