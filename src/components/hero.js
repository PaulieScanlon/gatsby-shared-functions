import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeroBackground from './hero-background';

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen sm:min-h-fit items-center justify-center py-16 lg:py-20 bg-gradient-to-r from-background to-offset overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 mx-auto max-w-7xl px-4 sm:px-8 z-10">
        <div className="flex flex-col gap-4 p-4 justify-center">
          <div className="flex justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-16 h-16">
              <defs>
                <linearGradient id="hero-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" className="[--start-color:theme(colors.lighter)]" stopColor="var(--start-color)" />
                  <stop offset="100%" className="[--end-color:theme(colors.primary)]" stopColor="var(--end-color)" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#hero-icon-gradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
          <h1 className="m-0 text-white text-center lg:text-left sm:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lighter to-primary">Gatsby</span> Shared Functions
          </h1>
          <h2 className="m-0 font-light text-highlight text-center lg:text-left lg:max-w-md">
            Use the same function <em className="text-lighter">everywhere</em>!
          </h2>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://github.com/PaulieScanlon/gatsby-shared-functions"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center text-white text-xs no-underline hover:text-lighter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-5 h-5 fill-white">
                <path
                  d="M23.9985104,1.5407293c-12.7153177,0-23.0264225,10.3098326-23.0264225,23.0292511
                c0,10.1731339,6.597558,18.8042412,15.7490349,21.8496933c1.1514359,0.2112007,1.5717106-0.4997292,1.5717106-1.1100082
                c0-0.5466614-0.0199337-1.9948158-0.0311012-3.9165497c-6.4055824,1.3916092-7.7571764-3.0868683-7.7571764-3.0868683
                c-1.0471067-2.6602287-2.556756-3.3684731-2.556756-3.3684731c-2.0908051-1.4287872,0.1581888-1.399807,0.1581888-1.399807
                c2.3109198,0.1628532,3.5272264,2.3731117,3.5272264,2.3731117c2.0541916,3.5190277,5.3895836,2.5028877,6.7017441,1.9133911
                c0.2092228-1.488163,0.8040905-2.5028877,1.4620094-3.0785294c-5.1134968-0.5811577-10.4892263-2.5567474-10.4892263-11.3811073
                c0-2.5139141,0.8972511-4.569519,2.370286-6.1792545c-0.2367887-0.582571-1.0270252-2.9238758,0.2257614-6.0942945
                c0,0,1.933465-0.6191835,6.3324966,2.360673c1.836771-0.5107555,3.8067074-0.7662048,5.7650528-0.7751102
                c1.9555168,0.0089054,3.9255962,0.2643547,5.7650528,0.7751102c4.3963432-2.9798565,6.3262749-2.360673,6.3262749-2.360673
                c1.256321,3.1704187,0.4659424,5.5117235,0.2291565,6.0942945c1.4758606,1.6097355,2.3670349,3.6653404,2.3670349,6.1792545
                c0,8.8464127-5.3840714,10.7930222-10.5141087,11.3631516c0.8268509,0.7109299,1.5633678,2.116394,1.5633678,4.2644539
                c0,3.0785294-0.0282726,5.562191-0.0282726,6.3172264c0,0.6157913,0.4147682,1.3322334,1.5834427,1.1073227
                c9.1425724-3.0511055,15.7346249-11.6765633,15.7346249-21.8470078
                C47.0279121,11.8505621,36.7166672,1.5407293,23.9985104,1.5407293z"
                />
              </svg>
              <span>
                <span className="hidden sm:inline">github.com/PaulieScanlon/</span>
                <span>gatsby-shared-functions</span>
              </span>
            </a>
          </div>
        </div>
        <div className="flex items-center max-w-xs sm:max-w-lg mt-0 sm:mt-8 mx-auto">
          <StaticImage src="../../static/images/hero-v2.png" alt="hero" />
        </div>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
