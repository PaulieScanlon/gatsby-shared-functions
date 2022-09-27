import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

const Page = ({
  data: {
    allStaticResults: { nodes: staticResults }
  },
  serverData: { serverResults }
}) => {
  const [clientResults, setClientResults] = useState();

  const getClientData = async () => {
    const response = await fetch('/api/some-endpoint');
    const results = await response.json();
    console.log(results);
    setClientResults(results.data);
  };

  useEffect(() => {
    getClientData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(clientResults, null, 2)}</pre>
      <pre>{JSON.stringify(serverResults, null, 2)}</pre>
      <pre>{JSON.stringify(staticResults, null, 2)}</pre>
    </div>
  );
};

export const query = graphql`
  query {
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
  const response = await util();

  return {
    props: {
      serverResults: response.data
    }
  };
}

export default Page;
