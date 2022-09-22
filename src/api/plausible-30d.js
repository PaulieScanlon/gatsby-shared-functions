const util = require('../utils/plausible-30d-util');

export default async function handler(req, res) {
  try {
    const response = await util();
    if (!response.ok) {
      throw new Error(response.message, {
        cause: response.cause
      });
    }
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(error.cause).json({ status: error.cause, message: error.message });
  }
}
