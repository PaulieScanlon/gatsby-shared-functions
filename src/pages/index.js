import React, { useState, useEffect } from 'react';

const Page = ({ serverData }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await fetch('/api/plausible-30d');

        if (!response.ok) {
          throw new Error(response.statusText, {
            cause: response.status
          });
        }
        const data = await response.json();

        setResults({ status: response.status, data: data });
      } catch (error) {
        setResults({ error: error.cause, message: error.message });
      }
    };
    getResults();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div>
        <h2>CSR</h2>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </div>
      <div>
        <h2>SSR</h2>
        <pre>{JSON.stringify(serverData, null, 2)}</pre>
      </div>
    </div>
  );
};

export async function getServerData() {
  const util = require('../utils/plausible-30d-util');

  try {
    const response = await util();
    if (!response.ok) {
      throw new Error(response.message, {
        cause: response.cause
      });
    }
    const data = await response.json();
    return {
      props: {
        status: response.status,
        data: data
      }
    };
  } catch (error) {
    return {
      props: {
        status: error.cause,
        message: error.message
      }
    };
  }
}

export default Page;
