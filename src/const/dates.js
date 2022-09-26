const LOCALE = 'en-CA';

const createDate = (period) => {
  return new Date(new Date().setDate(new Date().getDate() - period)).toLocaleDateString(LOCALE);
};

const serverlessDays = 59;
const serverDays = 13;
const staticDays = 29;

module.exports = {
  SERVERLESS_START_DATE: createDate(serverlessDays),
  SERVERLESS_DAYS: serverlessDays,
  SERVER_START_DATE: createDate(serverDays),
  SERVER_DAYS: serverDays,
  STATIC_START_DATE: createDate(staticDays),
  STATIC_DAYS: staticDays,
  END_DATE: new Date().toLocaleDateString(LOCALE)
};
