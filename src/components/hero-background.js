import React from 'react';

const HeroBackground = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 z-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height={1600}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#663399" offset="0%" />
          <stop stopColor="#170c29" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="url(#a)" fill="none" strokeLinecap="round" strokeWidth={7}>
        <circle r={363} cx={400} cy={400} strokeDasharray="1939 2281" transform="rotate(360 400 400)" opacity={0.05} />
        <circle r={346.5} cx={400} cy={400} strokeDasharray="1762 2177" transform="rotate(343 400 400)" opacity={0.1} />
        <circle r={330} cx={400} cy={400} strokeDasharray="1595 2073" transform="rotate(326 400 400)" opacity={0.14} />
        <circle r={313.5} cx={400} cy={400} strokeDasharray="1435 1970" transform="rotate(309 400 400)" opacity={0.19} />
        <circle r={297} cx={400} cy={400} strokeDasharray="1284 1866" transform="rotate(291 400 400)" opacity={0.23} />
        <circle r={280.5} cx={400} cy={400} strokeDasharray="1141 1762" transform="rotate(274 400 400)" opacity={0.28} />
        <circle r={264} cx={400} cy={400} strokeDasharray="1007 1659" transform="rotate(257 400 400)" opacity={0.32} />
        <circle r={247.5} cx={400} cy={400} strokeDasharray="881 1555" transform="rotate(240 400 400)" opacity={0.37} />
        <circle r={231} cx={400} cy={400} strokeDasharray="764 1451" transform="rotate(223 400 400)" opacity={0.41} />
        <circle r={214.5} cx={400} cy={400} strokeDasharray="655 1348" transform="rotate(206 400 400)" opacity={0.46} />
        <circle r={198} cx={400} cy={400} strokeDasharray="554 1244" transform="rotate(189 400 400)" opacity={0.5} />
        <circle r={181.5} cx={400} cy={400} strokeDasharray="462 1140" transform="rotate(171 400 400)" opacity={0.55} />
        <circle r={165} cx={400} cy={400} strokeDasharray="378 1037" transform="rotate(154 400 400)" opacity={0.59} />
        <circle r={148.5} cx={400} cy={400} strokeDasharray="302 933" transform="rotate(137 400 400)" opacity={0.64} />
        <circle r={132} cx={400} cy={400} strokeDasharray="235 829" transform="rotate(120 400 400)" opacity={0.68} />
        <circle r={115.5} cx={400} cy={400} strokeDasharray="176 726" transform="rotate(103 400 400)" opacity={0.73} />
        <circle r={99} cx={400} cy={400} strokeDasharray="126 622" transform="rotate(86 400 400)" opacity={0.77} />
        <circle r={82.5} cx={400} cy={400} strokeDasharray="84 518" transform="rotate(69 400 400)" opacity={0.82} />
        <circle r={66} cx={400} cy={400} strokeDasharray="50 415" transform="rotate(51 400 400)" opacity={0.86} />
        <circle r={49.5} cx={400} cy={400} strokeDasharray="25 311" transform="rotate(34 400 400)" opacity={0.91} />
        <circle r={33} cx={400} cy={400} strokeDasharray="8 207" transform="rotate(17 400 400)" opacity={0.95} />
        <circle r={16.5} cx={400} cy={400} strokeDasharray="0 104" />
      </g>
    </svg>
  </div>
);

export default HeroBackground;
