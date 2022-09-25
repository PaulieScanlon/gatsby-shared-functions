const util = require('../utils/shared-function');

export default async function handler(req, res) {
  const {
    query: { start, end }
  } = req;

  try {
    const response = await util(start, end);

    if (!response.data) {
      throw new Error(reponse.message);
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
