import React from 'react';

import PageElement from './src/components/page-element';
import RootElement from './src/components/root-element';

export const wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>;
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en-GB' });
  setHeadComponents([
    <link key="x-icon" rel="icon" type="image/x-icon" href="/images/favicon.ico" />,
    <link key="16x16" rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" data-react-helmet="true" />,
    <link key="32x32" rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" data-react-helmet="true" />
  ]);
};
