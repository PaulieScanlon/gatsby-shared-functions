import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const Page = () => {
  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center py-16 xl:py-32 bg-gradient-to-r from-background to-offset overflow-hidden">
      <h1 className="m-0 text-center sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-lighter to-primary">404</h1>
      <h2 className="m-0 font-light text-highlight text-center mb-8">Page Not Found</h2>
      <div>
        <Link
          to="/"
          className="self-center xl:self-start uppercase tracking-widest text-xs font-bold border border-purple-500 px-4 py-2 rounded-full text-purple-500 no-underline"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page;

export const Head = () => {
  return <Seo />;
};
