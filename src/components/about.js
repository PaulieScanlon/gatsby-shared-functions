import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col p-4 gap-8 justify-center">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-16 h-16">
            <defs>
              <linearGradient id="analytics-icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="[--start-color:theme(colors.amber.300)]" stopColor="var(--start-color)" />
                <stop offset="100%" className="[--end-color:theme(colors.orange.400)]" stopColor="var(--end-color)" />
              </linearGradient>
            </defs>
            <path
              stroke="url(#analytics-icon-gradient)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.4}
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>
        <h2 className="text-center m-0 mb-2 font-extrabold !leading-tight text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
          Google Analytics GA4
        </h2>
        <div className="flex flex-col gap-2 justify-center text-slate-500 mx-auto max-w-3xl xl:max-w-auto">
          <p className="m-0 text-center">
            Here's a glimpse into the page view data for{' '}
            <a href="https://paulie.dev" target="_blank" rel="noreferrer" className="text-orange-400 no-underline">
              paulie.dev
            </a>
            .
          </p>
          <p className="m-0 text-center">
            Data is requested from the{' '}
            <a
              href="https://developers.google.com/analytics/devguides/reporting/data/v1?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 no-underline"
            >
              Google Analytics Data API (GA4)
            </a>
            , and displayed as Svg Line Charts.
          </p>
          <p className="m-0 text-center text-xs">
            <em>All charts work even when JavaScript is disabled in the browser!</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
