const util = require('./src/utils/shared-function');

const { functionalDate } = require('./src/utils/date-formats');
const { BUILD_TIME_START_DATE, END_DATE } = require('./src/const/dates');

exports.sourceNodes = async ({ actions, reporter, createNodeId, createContentDigest }) => {
  const response = await util(functionalDate(BUILD_TIME_START_DATE), functionalDate(END_DATE));

  if (!response) {
    reporter.panicOnBuild('🚨  ERROR: Loading shared function');
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
