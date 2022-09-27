import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import Loading from '../components/loading';
import Hero from '../components/hero';
import Explanation from '../components/explanation';
import About from '../components/about';
import Section from '../components/section';
import Details from '../components/details';
import FixedDates from '../components/fixed-dates';
import LineChart from '../components/line-chart';

import { functionalDate, timestamp } from '../utils/date-formats';

import { RUNTIME_START_DATE, BUILD_TIME_START_DATE, END_DATE, RUNTIME_DAYS, BUILD_TIME_DAYS } from '../const/dates';

const Page = ({
  data: {
    siteBuildMetadata: { staticTimestamp, staticDate },
    allStaticResults: { nodes: staticResults }
  },
  serverData: { serverResults, serverDate, serverError }
}) => {
  const [start, setStart] = useState(RUNTIME_START_DATE);
  const [end, setEnd] = useState(END_DATE);

  const [clientResults, setClientResults] = useState(null);
  const [clientDate, setClientDate] = useState(null);
  const [clientDays, setClientDays] = useState(RUNTIME_DAYS);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/ga4-run-report?start=${functionalDate(start)}&end=${functionalDate(end)}`);

      if (response.status !== 200) {
        throw new Error('Error');
      } else {
        const results = await response.json();
        setIsLoading(false);
        setIsDisabled(false);
        setClientResults(results.data);
        setClientDate(timestamp());
        setClientDays(parseInt((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24), 10));
      }
    } catch (error) {
      setIsLoading(false);
      setIsDisabled(true);
      setError(error.message);
    }
  };

  useEffect(() => {
    const s = new Date(start).setHours(0, 0, 0, 0);
    const e = new Date(end).setHours(0, 0, 0, 0);

    setIsDisabled(s.valueOf() >= e.valueOf() - 1);
  }, [start, end]);

  return (
    <div className="grid gap-24 xl:gap-32 pb-24 xl:pb-48">
      <Hero />
      <div className="grid gap-36 xl:gap-48 mx-auto max-w-7xl text-slate-500 px-4 sm:px-8">
        <Section>
          <Explanation />
          <StaticImage width={800} src="../../static/images/diagram-v1.jpg" alt="diagram" className="my-8 xl:my-0 max-w-2xl mx-auto" />
        </Section>
        <section>
          <About />
        </section>
        <Section>
          <Details
            primary="sky"
            secondary="blue"
            title="Serverless Analytics"
            description="The shared function is used by a Serverless Function which is called from the client. The response is stored in React's <code>useState</code>."
            date={clientDate ? clientDate : serverDate}
          >
            <form className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-end justify-center lg:justify-start" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-1">
                <small className="font-bold text-xs">Start</small>
                <input
                  className="block cursor-pointer bg-transparent rounded border border-slate-300 text-slate-400 px-2"
                  type="date"
                  required
                  defaultValue={functionalDate(start)}
                  min={functionalDate(RUNTIME_START_DATE)}
                  max={functionalDate(END_DATE)}
                  format="dd-mm-yyyy"
                  onChange={(event) => setStart(event.target.value)}
                />
              </label>
              <label className="flex flex-col gap-1">
                <small className="font-bold text-xs">End</small>
                <input
                  className="block cursor-pointer bg-transparent rounded border border-slate-300 text-slate-400 px-2"
                  type="date"
                  required
                  defaultValue={functionalDate(end)}
                  min={functionalDate(RUNTIME_START_DATE)}
                  max={functionalDate(END_DATE)}
                  format="dd-mm-yyyy"
                  onChange={(event) => setEnd(event.target.value)}
                />
              </label>
              <button
                disabled={isDisabled || isLoading}
                type="submit"
                className="flex col-span-2 lg:col-auto justify-center items-center uppercase tracking-widest font-bold bg-sky-500 hover:bg-sky-400 transition-all duration-300 p-2 rounded text-white text-xs disabled:text-sky-300 disabled:bg-sky-100 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loading /> : 'Submit'}
              </button>
            </form>
          </Details>
          <LineChart title="Serverless Analytics" error={error} data={clientResults ? clientResults : serverResults} method="Serverless" days={clientDays} />
        </Section>
        <Section>
          <Details
            primary="pink"
            secondary="purple"
            title=" Server-side Analytics"
            description="The shared function is used by <code>getServerData()</code>. The reponse is returned to the page via the <code>serverData</code> prop."
            date={serverDate}
            order="xl:order-1"
          >
            <FixedDates start={RUNTIME_START_DATE} />
          </Details>
          <LineChart primary="pink" title="Server-side Analytics" error={serverError} data={serverResults} method="SSR" days={RUNTIME_DAYS} />
        </Section>
        <Section>
          <Details
            primary="lime"
            secondary="lime"
            title="  Static Analytics"
            description="The shared funciton is used in <code>gatsby-node.js</code>. The response is stored in Gatsby's Data Layer which can be queried using GraphQL and returned to the page via the <code>data</code> prop. <br /><em class='block text-xs mx-auto xl:mx-0 max-w-sm my-4'>This site is rebuilt every Monday using a GitHub Action that calls a Gatsby Cloud webhook which rebuilds the Static Analytics.</em>"
            date={staticTimestamp}
          >
            <FixedDates start={BUILD_TIME_START_DATE} end={staticDate} />
          </Details>
          <LineChart primary="lime" title="Static Analytics" data={staticResults} method="SSG" days={BUILD_TIME_DAYS} />
        </Section>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    siteBuildMetadata {
      staticTimestamp: buildTime(formatString: "DD/MM/YYYY @hh:mm:ss")
      staticDate: buildTime(formatString: "DD/MM/YYYY")
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
  const util = require('../utils/shared-function');
  const { timestamp } = require('../utils/date-formats');

  try {
    const response = await util(functionalDate(RUNTIME_START_DATE), functionalDate(END_DATE));

    if (!response.data) {
      throw new Error('Error');
    }
    return {
      props: {
        serverResults: response.data,
        serverDate: timestamp()
      }
    };
  } catch (error) {
    return {
      props: {
        serverError: error.message,
        serverDate: timestamp()
      }
    };
  }
}

export default Page;

export const Head = () => {
  return <Seo />;
};
