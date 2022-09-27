const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const analyticsDataClient = new BetaAnalyticsDataClient({
  projectId: 'paulie-dev',
  credentials: {
    client_email: 'google-analytics@paulie-dev.iam.gserviceaccount.com',
    private_key: process.env.GOOGLE_APPLICATION_CREDENTIALS.replace(/\\n/gm, '\n')
  }
});

function formatDate(string) {
  const year = string.toString().substring(0, 4);
  const month = string.toString().substring(4, 6);
  const day = string.toString().substring(6, 8);

  return `${year}/${month}/${day}`;
}

module.exports = async function (start, end) {
  console.log('start: ', start);
  console.log('end: ', end);
  try {
    // https://ga-dev-tools.web.app/ga4/dimensions-metrics-explorer/
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GOOGLE_GA4_PROPERTY_ID}`,
      orderBys: [
        {
          dimension: {
            orderType: 'NUMERIC',
            dimensionName: 'date'
          }
        }
      ],
      dateRanges: [
        {
          startDate: start,
          endDate: end
        }
      ],
      dimensions: [
        {
          name: 'date'
        }
      ],
      metrics: [
        {
          name: 'screenPageViews'
        }
      ],
      keepEmptyRows: false
    });

    const data = response.rows.map((row) => {
      return {
        date: formatDate(row.dimensionValues[0].value),
        value: row.metricValues[0].value
      };
    });

    return {
      data: data
    };
  } catch (error) {
    return error;
  }
};
