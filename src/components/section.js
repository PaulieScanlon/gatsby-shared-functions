import React from 'react';

const Section = ({ children }) => {
  return <section className="grid xl:grid-cols-2 gap-6 xl:gap-24">{children}</section>;
};

export default Section;
