import React from 'react';

const Explanation = () => {
  return (
    <div className="flex flex-col p-4 gap-8 justify-center lg:order-2">
      <div className="flex flex-col">
        <h2 className="text-center xl:text-left m-0 mb-2 font-extrabold !leading-tight text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-purple-900">
          How It Works
        </h2>
        <p className="mt-0 mb-4 text-center xl:text-left text-slate-500">
          Import and reuse the same function logic in Serverless Functions, <code>getServerData()</code>, and <code>gatsby-node.js</code>.
        </p>
        <p className="mt-0 mb-4 text-center xl:text-left text-slate-500">
          I wrote a little more about how this site works on{' '}
          <a href="https://paulie.dev" target="_blank" rel="noreferrer" className="text-purple-400 no-underline">
            paulie.dev
          </a>
        </p>
        <a
          href="https://paulie.dev"
          target="_blank"
          rel="noreferrer"
          className="self-center xl:self-start uppercase tracking-widest text-xs font-bold border border-purple-500 px-4 py-2 rounded-full text-purple-500 no-underline"
        >
          Read Post
        </a>
      </div>
    </div>
  );
};

export default Explanation;
