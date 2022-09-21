import React, { useState, useEffect } from 'react';

const Page = ({ serverData }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const getResults = async () => {
      try {
        const { results } = await (
          await fetch('https://plausible.io/api/v1/stats/timeseries?site_id=paulie.dev&period=30d', {
            headers: {
              Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`
            }
          })
        ).json();

        setResults(results);
      } catch (error) {
        console.error(error);
      }
    };
    getResults();
  }, []);

  return (
    <div>
      <div>
        <h2>Client Results</h2>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
      <div>
        <h2>Server Results</h2>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
      </div>
    </div>
  );
};

export async function getServerData() {
  const { results } = await (
    await fetch('https://plausible.io/api/v1/stats/timeseries?site_id=paulie.dev&period=30d', {
      headers: {
        Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`
      }
    })
  ).json();

  return {
    props: {
      results
    }
  };
}

export default Page;
