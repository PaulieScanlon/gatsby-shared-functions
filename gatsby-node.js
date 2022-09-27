// const util = require('./src/utils/shared-function');
// const { BUILD_TIME_START_DATE, END_DATE } = require('./src/const/dates');

// exports.sourceNodes = async ({ actions, reporter, createNodeId, createContentDigest }) => {
//   const response = await util(BUILD_TIME_START_DATE, END_DATE);

//   if (!response) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "GA4" util');
//   }

//   response.data.forEach((item) => {
//     actions.createNode({
//       ...item,
//       id: createNodeId(item.date),
//       internal: {
//         type: 'staticResults',
//         contentDigest: createContentDigest(item)
//       }
//     });
//   });
// };
