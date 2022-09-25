import React from 'react';

const HeroIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="mx-auto w-16 h-16 sm:w-32 sm:h-32"
    >
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
        strokeWidth={1.4}
        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
      />
    </svg>
  );
};

export default HeroIcon;
