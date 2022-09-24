import React from 'react';

import HeroIcon from './hero-icon';
import HeroArrow from './hero-arrow';
import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-background overflow-hidden min-h-screen">
      <div className="flex flex-col items-center justify center px-4 sm:px-8 py-16 sm:py-24 z-10">
        <HeroIcon />
        <h1 className="m-0 text-center font-extrabold text-transparent sm:text-7xl !leading-tight bg-clip-text bg-gradient-to-r from-lighter to-primary">
          Gatsby Shared Functions
        </h1>
        <div className="mt-4 mb-10">
          <h2 className="text-center text-highlight m-0 mb-4 font-semibold">
            Use the same function on the client & the server, <br />
            at <span className="text-sky-500">Runtime</span> & <span className="text-pink-500">Build Time</span>!
          </h2>
          <p className="text-center text-highlight m-0">Read the post for more information about Shared Functions.</p>
        </div>
        <a
          href="https://paulie.dev"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-lighter uppercase tracking-widest rounded-full px-10 py-2 border-2 border-primary hover:text-white transition-all duration-300 no-underline"
        >
          Read Post
        </a>
        <HeroArrow />
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
