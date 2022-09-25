import React from 'react';

import HeroIcon from './hero-icon';
import HeroArrow from './hero-arrow';
import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-background overflow-hidden min-h-screen">
      <div className="flex flex-col px-4 pb-16 sm:px-8 sm:pb-0 z-10">
        <div className="grid gap-4 items-center justify-center">
          <HeroIcon />
          <div>
            <h1 className="m-0 text-center font-extrabold text-transparent sm:text-7xl !leading-tight bg-clip-text bg-gradient-to-r from-lighter to-primary">
              Gatsby Shared Functions
            </h1>
            <h2 className="text-center text-highlight m-0 mb-4 font-semibold">
              Use the same function on the client & the server, <br />
              at <span className="text-sky-500">Runtime</span> & <span className="text-pink-500">Build Time</span>!
            </h2>
          </div>
          <HeroArrow />
        </div>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
