import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import Loading from '../components/loading';
import Hero from '../components/hero';
import Explanation from '../components/explanation';
import Section from '../components/section';
import Details from '../components/details';
import FixedDates from '../components/fixed-dates';
import LineChart from '../components/line-chart';

import { SERVERLESS_START_DATE, SERVER_START_DATE, STATIC_START_DATE, END_DATE, SERVER_DAYS, STATIC_DAYS } from '../const/dates';

const Page = ({ data, serverData }) => {
  const [start, setStart] = useState(SERVERLESS_START_DATE);
  const [end, setEnd] = useState(END_DATE);

  const [clientResults, setClientResults] = useState(serverData ? serverData.serverResults : null);
  const [clientDate, setClientDate] = useState(serverData ? serverData.serverDate : null);
  const [clientDays, setClientDays] = useState(SERVER_DAYS);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
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
        setIsDisabled(false);
        setClientResults(results.data);
        setClientDate(`${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`);
        setClientDays(parseInt((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24), 10));
      }
    } catch (error) {
      setIsLoading(false);
      setIsDisabled(true);
      setError(error.message);
    }
  };

  useEffect(() => {
    runReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="grid gap-36 xl:gap-48 mx-auto max-w-7xl text-slate-500 px-4 sm:px-8">
        <Section>
          <Explanation />
          <StaticImage width={800} src="../images/diagram-v1.jpg" alt="diagram" className="my-8 xl:my-0 max-w-2xl mx-auto" />
        </Section>
        <Section>
          <Details
            primary="sky"
            secondary="blue"
            title="Serverless Analytics"
            description="The shared function is used by a Serverless Function which is called from the client. The response is stored in React's <code>useState</code>."
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
                  min={SERVERLESS_START_DATE}
                  max={END_DATE}
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
                  min={SERVERLESS_START_DATE}
                  max={END_DATE}
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
          <LineChart title="Serverless Analytics" error={error} data={clientResults ? clientResults : null} method="Serverless" days={clientDays} />
        </Section>
        <Section>
          <Details
            primary="pink"
            secondary="purple"
            title=" Server-side Analytics"
            description="The shared function is used by <code>getServerData()</code>. The reponse is returned to the page via the <code>serverData</code> prop."
            date={serverData.serverDate}
            order="xl:order-1"
          >
            <FixedDates start={SERVER_START_DATE} />
          </Details>
          <LineChart
            primary="pink"
            title="Server-side Analytics"
            error={serverData.serverError}
            data={serverData ? serverData.serverResults : null}
            method="SSR"
            days={SERVER_DAYS}
          />
        </Section>
        <Section>
          <Details
            primary="lime"
            secondary="lime"
            title="  Static Analytics"
            description="The shared funciton is used in <code>gatsby-node.js</code>. The response is stored in Gatsby's Data Layer which can be queried using GraphQL and returned to the page via the <code>data</code> prop."
            date={data.siteBuildMetadata.stamp}
          >
            <FixedDates start={STATIC_START_DATE} end={data.siteBuildMetadata.date} />
          </Details>
          <LineChart primary="lime" title="Static Analytics" data={data.allStaticResults.nodes} method="SSG" days={STATIC_DAYS} />
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
      stamp: buildTime(formatString: "DD/MM/YYYY hh:mm:ss")
      date: buildTime(formatString: "DD/MM/YYYY")
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
  const date = `${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`;

  try {
    const response = await util(SERVER_START_DATE, END_DATE);

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

export const Head = () => {
  return <Seo />;
};
