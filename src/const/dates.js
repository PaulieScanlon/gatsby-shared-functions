const LOCALE = 'en-CA';

const createDate = (period) => {
  return new Date(new Date().setDate(new Date().getDate() - period)).toLocaleDateString(LOCALE);
};

const runtimeDays = 29;
const builTimeDays = 13;

module.exports = {
  RUNTIME_START_DATE: createDate(runtimeDays),
  RUNTIME_DAYS: runtimeDays,
  BUILD_TIME_START_DATE: createDate(builTimeDays),
  BUILD_TIME_DAYS: builTimeDays,
  END_DATE: new Date().toLocaleDateString(LOCALE)
};
