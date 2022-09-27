const util = require('./src/utils/shared-function');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const response = await util();

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
