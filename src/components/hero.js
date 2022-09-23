import React from 'react';

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center py-20 border-b-2 border-b-gray-100 px-4 sm:px-8"
      style={{
        backgroundImage: `url(
            "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M10-6V6M10 14v12M26 10H14M6 10H-6'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 95%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"
          )`
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-24 h-24 mb-4">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" className="[--start-color:theme(colors.amber.400)]" stopColor="var(--start-color)" />
            <stop offset="100%" className="[--end-color:theme(colors.orange.500)]" stopColor="var(--end-color)" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#icon-gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>

      <h1 className="m-0 text-center font-extrabold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
        Shared Functions
      </h1>
      <div className="mt-4 mb-10">
        <h2 className="text-center text-slate-500 m-0">
          Use the same function on the client <b>&</b> the server, <br />
          <em>
            at Runtime <b>&</b> Build Time!
          </em>
        </h2>
        <p className="text-center text-slate-400 m-0">Read the post for more information about Shared Functions.</p>
      </div>
      <a
        href="https://paulie.dev"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-white uppercase tracking-widest rounded bg-amber-400 px-6 py-2 hover:bg-orange-500 transition-all duration-300 no-underline"
      >
        Read Post
      </a>
    </div>
  );
};

export default Hero;
