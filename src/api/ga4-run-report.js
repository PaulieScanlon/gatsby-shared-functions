const util = require('../utils/ga4-run-report-util');

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
    console.log('////// error');
    res.status(500).json({ message: error.message });
  }
}
