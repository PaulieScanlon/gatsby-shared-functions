import React from 'react';

const HeroIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-24 h-24 mb-4">
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" className="[--start-color:theme(colors.lighter)]" stopColor="var(--start-color)" />
          <stop offset="100%" className="[--end-color:theme(colors.primary)]" stopColor="var(--end-color)" />
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
  );
};

export default HeroIcon;
