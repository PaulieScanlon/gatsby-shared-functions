import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen sm:min-h-fit items-center justify-center py-16 lg:py-32 bg-gradient-to-r from-background to-offset overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 mx-auto max-w-7xl px-4 sm:px-8 z-10">
        <div className="flex flex-col p-4 justify-center">
          <div className="flex justify-center lg:justify-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-16 h-16">
              <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" className="[--start-color:theme(colors.primary)]" stopColor="var(--start-color)" />
                  <stop offset="100%" className="[--end-color:theme(colors.lighter)]" stopColor="var(--end-color)" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#icon-gradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
          <h1 className="m-0 text-white text-center lg:text-left sm:text-7xl lg:!leading-none mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lighter to-primary">Gatsby</span> Shared Functions
          </h1>
          <h2 className="m-0 font-light text-highlight text-center lg:text-left lg:max-w-md">
            Use the same function logic <em className="text-lighter">everywhere</em>!
          </h2>
        </div>
        <div className="flex items-center mx-auto pl-8 lg:pl-0 max-w-sm lg:max-w-md">
          <StaticImage src="../../static/images/hero-v1.png" alt="hero" />
        </div>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
