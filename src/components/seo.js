import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ type, title }) => {
  const {
    site: {
      siteMetadata: { name, description, siteUrl, defaultImage, keywords }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          name
          description
          siteUrl
          defaultImage
          keywords
        }
      }
    }
  `);

  const htmlTitle = `${name} | ${title}`;

  return (
    <Fragment>
      <title>{htmlTitle}</title>
      <link rel="canonical" href={`${siteUrl}`} />
      <meta name="description" content={description} />
      <meta name="image" content={defaultImage} />
      <meta name="image:alt" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={htmlTitle} />
      <meta property="og:url" content={`${siteUrl}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={description}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={htmlTitle} />
      <meta name="twitter:url" content={`${siteUrl}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:image:alt" content={description}></meta>
    </Fragment>
  );
};

Seo.propTypes = {
  /** The type of meta - useful for Facebook */
  type: PropTypes.oneOf(['website', 'article']),
  /** The site title */
  title: PropTypes.string.isRequired
};

Seo.defaultProps = {
  type: 'website'
};

export default Seo;
