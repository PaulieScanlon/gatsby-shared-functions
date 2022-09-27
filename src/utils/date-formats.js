const functionalDate = (date) => new Date(date).toLocaleDateString('en-CA');
const timestamp = () => `${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString('en-GB')}`;

module.exports = {
  functionalDate,
  timestamp
};
