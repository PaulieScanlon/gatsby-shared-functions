const util = require('./src/utils/ga4-run-report-util');
const { START, END } = require('./src/const/dates');

exports.sourceNodes = async ({ actions, reporter, createNodeId, createContentDigest }) => {
  const response = await util(START, END);

  if (!response) {
    reporter.panicOnBuild('🚨  ERROR: Loading "GA4" util');
  }

  response.data.forEach((item) => {
    actions.createNode({
      ...item,
      id: createNodeId(item.date),
      internal: {
        type: 'staticResults',
        contentDigest: createContentDigest(item)
      }
    });
  });
};
