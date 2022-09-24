import React from 'react';

import HeroIcon from './hero-icon';
import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative bg-background overflow-hidden">
      <div className="relative flex flex-col items-center px-4 sm:px-8 py-32 z-10">
        <HeroIcon />
        <h1 className="m-0 text-center font-extrabold text-transparent sm:text-7xl text-white">Shared Functions</h1>
        <div className="mt-4 mb-10">
          <h2 className="text-center text-highlight m-0 mb-4 font-semibold">
            Use the same function on the <span className="text-lighter">client</span> <b>&</b> the <span className="text-lighter">server</span>, <br />
            <em>
              at <span className="text-lighter">Runtime</span> <b>&</b> <span className="text-lighter">Build Time</span>!
            </em>
          </h2>
          <p className="text-center text-highlight m-0">Read the post for more information about Shared Functions.</p>
        </div>
        <a
          href="https://paulie.dev"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white uppercase tracking-widest rounded px-6 py-2 bg-primary hover:bg-default transition-all duration-300 no-underline"
        >
          Read Post
        </a>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
