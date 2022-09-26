import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeroIcon from './hero-icon';
import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full items-center justify-center py-16 xl:py-32 bg-gradient-to-r from-background to-offset overflow-hidden">
      <div className="grid xl:grid-cols-2 gap-6 xl:gap-0 mx-auto max-w-7xl px-4 sm:px-8 z-10">
        <div className="flex flex-col p-4 justify-center">
          <div className="flex justify-center xl:justify-start">
            <HeroIcon />
          </div>
          <h1 className="m-0 text-white text-center xl:text-left sm:text-7xl !leading-tight xl:!leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lighter to-primary">Gatsby</span> Shared Functions
          </h1>
          <h2 className="m-0 font-light text-highlight text-center xl:text-left xl:max-w-md">
            Use the same function logic <em className="text-lighter">everywhere</em>!
          </h2>
        </div>
        <div className="flex items-center mx-auto pl-8 xl:pl-0 max-w-sm xl:max-w-lg">
          <StaticImage src="../images/hero-v1.png" alt="hero" />
        </div>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
