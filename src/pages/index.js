import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import LineChart from '../components/line-chart';
import Loading from '../components/loading';

import { START, END } from '../const/dates';

const Page = ({ data, serverData }) => {
  const [clientResults, setClientResults] = useState(null);
  const [clientDate, setClientDate] = useState(null);
  const [serverDate] = useState(`${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [start, setStart] = useState(START);
  const [end, setEnd] = useState(END);

  const timeSeries = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/ga4-run-report?start=${start}&end=${end}`);

      if (response.status !== 200) {
        throw new Error('Error');
      } else {
        const results = await response.json();

        setIsLoading(false);
        setClientResults(results.data);
        setClientDate(`${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    timeSeries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const s = new Date(start);
    const e = new Date(end);

    setIsDisabled(s.valueOf() > e.valueOf() - 1);
  }, [start, end]);

  const handleSubmit = (event) => {
    event.preventDefault();
    timeSeries();
  };

  return (
    <div className="grid gap-32">
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

        <h1 className="m-0 text-center drop-shadow font-extrabold text-transparent sm:text-8xl bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
          Shared Functions
        </h1>
        <div className="mt-4 mb-10">
          <h2 className="text-center text-slate-500 m-0">
            Use the same function on the client <b>&</b> the server,{' '}
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
          className="font-semibold text-white rounded-full bg-amber-500 px-8 py-2 hover:bg-orange-500 transition-all duration-300 no-underline"
        >
          Read Post
        </a>
      </div>
      <div className="grid gap-48 mx-auto max-w-7xl text-slate-500 px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-24">
          <div className="flex flex-col p-4 gap-8 justify-center">
            <div>
              <h2 className="text-center lg:text-left m-0 mb-2 font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Serverless Analytics
              </h2>
              <p className="text-center lg:text-left text-slate-500">The date range is dynamic. HTTP requests are made on the client.</p>
              <small className="flex gap-1 items-center justify-center lg:justify-start">
                <span className="text-slate-400">Data updated: </span>
                <b className="text-xs text-sky-500">{clientDate}</b>
              </small>
            </div>
            <form className="flex flex-cols gap-4 items-end justify-center lg:justify-start" onSubmit={handleSubmit}>
              <label className="block">
                <small className="font-bold text-xs">Start</small>
                <input
                  className="block cursor-pointer bg-transparent rounded border border-slate-300 text-slate-400 px-2"
                  type="date"
                  required
                  defaultValue={start}
                  min={START}
                  max={END}
                  onChange={(event) => setStart(event.target.value)}
                />
              </label>
              <label className="block">
                <small className="font-bold text-xs">End</small>
                <input
                  className="block cursor-pointer bg-transparent rounded border border-slate-300 text-slate-400 px-2"
                  type="date"
                  required
                  defaultValue={end}
                  min={START}
                  max={END}
                  onChange={(event) => setEnd(event.target.value)}
                />
              </label>
              <button
                disabled={isDisabled || isLoading}
                type="submit"
                className="flex justify-center items-center min-w-[120px] uppercase tracking-widest font-bold bg-sky-500 p-2 rounded text-white text-xs disabled:text-sky-400 disabled:bg-sky-100 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loading /> : 'Submit'}
              </button>
            </form>
          </div>
          <LineChart title="Serverless Analytics" error={error} data={clientResults ? clientResults : null} />
        </div>
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-24">
          <div className="flex flex-col p-4 gap-8 justify-center lg:order-2">
            <div>
              <h2 className="text-center lg:text-left m-0 mb-2 font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                Server-side Analytics
              </h2>
              <p className="text-center lg:text-left text-slate-500">The date range is fixed. The HTTP request is made by the server on page load (Runtime).</p>
              <small className="flex gap-1 items-center justify-center lg:justify-start">
                <span className="text-slate-400">Data updated: </span>
                <b className="text-xs text-pink-500">{serverDate}</b>
              </small>
            </div>
            <div className="flex flex-cols gap-4 items-end justify-center lg:justify-start">
              <div className="flex flex-col gap-1">
                <small className="block font-bold text-slate-400 text-xs">Start</small>
                <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{new Date(START).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col gap-1">
                <small className="block font-bold text-slate-400 text-xs">End</small>
                <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{new Date(END).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <LineChart primary="pink" title="Server-side Analytics" error={serverData.serverError} data={serverData ? serverData.serverResults : null} />
        </div>
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-24">
          <div className="flex flex-col p-4 gap-8 justify-center">
            <div>
              <h2 className="text-center lg:text-left m-0 mb-2 font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
                Static Analytics
              </h2>
              <p className="text-center lg:text-left text-slate-500">The date range is fixed. The HTTP request is made by the server at Build Time.</p>
              <small className="flex gap-1 items-center justify-center lg:justify-start">
                <span className="text-slate-400">Data updated:</span>
                <b className="text-xs text-green-500">{data.siteBuildMetadata.buildTime}</b>
              </small>
            </div>
            <div className="flex flex-cols gap-4 items-end justify-center lg:justify-start">
              <div className="flex flex-col gap-1">
                <small className="block font-bold text-slate-400 text-xs">Start</small>
                <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{new Date(START).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col gap-1">
                <small className="block font-bold text-slate-400 text-xs">End</small>
                <p className="inline-block m-0 text-slate-300 rounded border border-slate-200 px-2 select-none">{new Date(END).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <LineChart primary="green" title="Static Analytics" data={data.allStaticResults.nodes} />
        </div>
      </div>
      <footer className="p-4 sm:p-8 text-xs">
        <a href="https://paulie.dev" target="_blank" rel="noreferrer" className="text-slate-400 no-underline">
          paulie.dev/posts/2022/09/xxx
        </a>
      </footer>
    </div>
  );
};

export const query = graphql`
  query {
    siteBuildMetadata {
      buildTime(formatString: "DD/MM/YYYY @HH:MM:SS")
    }
    allStaticResults {
      nodes {
        value
        date
      }
    }
  }
`;

export async function getServerData() {
  const util = require('../utils/ga4-run-report-util');

  try {
    const response = await util(START, END);

    if (!response.data) {
      throw new Error('Error');
    }
    return {
      props: {
        serverResults: response.data
      }
    };
  } catch (error) {
    return {
      props: {
        serverError: error.message
      }
    };
  }
}

export default Page;
