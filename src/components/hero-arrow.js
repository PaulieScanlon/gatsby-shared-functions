import React from 'react';

const HeroArrow = () => {
  return (
    <div className="animate-bounce bg-background mt-24 p-2 w-10 h-10 ring-2 ring-primary/50 shadow-lg rounded-full flex items-center justify-center">
      <svg
        className="w-6 h-6 text-primary/80"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  );
};

export default HeroArrow;
