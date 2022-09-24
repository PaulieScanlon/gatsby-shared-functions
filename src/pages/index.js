import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Loading from '../components/loading';
import Hero from '../components/hero';
import Section from '../components/section';
import Details from '../components/details';
import FixedDates from '../components/fixed-dates';
import LineChart from '../components/line-chart';

import { START, END } from '../const/dates';

const Page = ({ data, serverData }) => {
  const [start, setStart] = useState(START);
  const [end, setEnd] = useState(END);

  const [clientResults, setClientResults] = useState(null);
  const [clientDate, setClientDate] = useState(null);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const runReport = async () => {
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
    runReport();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const s = new Date(start);
    const e = new Date(end);

    setIsDisabled(s.valueOf() > e.valueOf() - 1);
  }, [start, end]);

  const handleSubmit = (event) => {
    event.preventDefault();
    runReport();
  };

  return (
    <div className="grid gap-24 xl:gap-32">
      <Hero />
      <div className="grid gap-24 xl:gap-48 mx-auto max-w-7xl text-slate-500 px-4 sm:px-8">
        <Section>
          <Details
            primary="sky"
            secondary="blue"
            title="Serverless Analytics"
            description="The date range is dynamic. HTTP requests are made on the client."
            date={clientDate}
          >
            <form className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-end justify-center lg:justify-start" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-1">
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
              <label className="flex flex-col gap-1">
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
                className="flex col-span-2 lg:col-auto justify-center items-center uppercase tracking-widest font-bold bg-sky-500 hover:bg-sky-400 transition-all duration-300 p-2 rounded text-white text-xs disabled:text-sky-400 disabled:bg-sky-100 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loading /> : 'Submit'}
              </button>
            </form>
          </Details>
          <LineChart title="Serverless Analytics" error={error} data={clientResults ? clientResults : null} method="CSR" />
        </Section>
        <Section>
          <Details
            primary="pink"
            secondary="purple"
            title=" Server-side Analytics"
            description="The date range is fixed. The HTTP request is made by the server on page load (Runtime)."
            date={serverData.serverDate}
            order="lg:order-2"
          >
            <FixedDates />
          </Details>
          <LineChart
            primary="pink"
            title="Server-side Analytics"
            error={serverData.serverError}
            data={serverData ? serverData.serverResults : null}
            method="SSR"
          />
        </Section>
        <Section>
          <Details
            primary="lime"
            secondary="lime"
            title="  Static Analytics"
            description="The date range is fixed. The HTTP request is made by the server at Build Time."
            date={data.siteBuildMetadata.stamp}
          >
            <FixedDates end={data.siteBuildMetadata.date} />
          </Details>
          <LineChart primary="lime" title="Static Analytics" data={data.allStaticResults.nodes} method="SSG" />
        </Section>
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
      stamp: buildTime(formatString: "MM/DD/YYYY hh:mm:ss")
      date: buildTime(formatString: "MM/DD/YYYY")
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
  const date = `${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`;

  try {
    const response = await util(START, END);

    if (!response.data) {
      throw new Error('Error');
    }
    return {
      props: {
        serverResults: response.data,
        serverDate: date
      }
    };
  } catch (error) {
    return {
      props: {
        serverError: error.message,
        serverDate: date
      }
    };
  }
}

export default Page;
