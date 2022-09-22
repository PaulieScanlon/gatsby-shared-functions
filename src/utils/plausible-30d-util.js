const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = async function () {
  try {
    const response = await fetch('https://plausible.io/api/v1/stats/timeseries?site_id=paulie.dev&period=30d', {
      headers: {
        Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(response.statusText, {
        cause: response.status
      });
    }
    return response;
  } catch (error) {
    return new Error(error.message, {
      cause: error.cause
    });
  }
};
