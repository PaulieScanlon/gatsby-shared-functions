const util = require('../utils/shared-function');

export default async function handler(req, res) {
  const response = await util();
  res.status(200).json({ message: 'A ok!', data: response.data });
}
