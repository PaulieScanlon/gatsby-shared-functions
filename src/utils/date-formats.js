const prettyDate = (date) => new Date(date).toLocaleDateString();
const functionalDate = (date) => new Date(date).toLocaleDateString('en-CA');
const timestamp = () => `${new Date().toLocaleDateString()} @${new Date().toLocaleTimeString()}`;

module.exports = {
  prettyDate,
  functionalDate,
  timestamp
};
