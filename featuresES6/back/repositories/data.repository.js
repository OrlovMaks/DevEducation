const axios = require('axios');
exports.getHistoricalData = async () => {
  try {
    const historicalData = await axios.get('http://api.adzuna.com/v1/api/jobs/gb/history?app_id=16a50707&app_key=4200ae3b644cc432b13a93d1f9f73892&location0=UK&location1=London&category=it-jobs&content-type=application/json');
    return { result: historicalData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getRegionalData = async () => {
  try {
    const regionalData = await axios.get('http://api.adzuna.com/v1/api/jobs/gb/history?app_id=16a50707&app_key=4200ae3b644cc432b13a93d1f9f73892&location0=UK&location1=West%20Midlands&content-type=application/json');
    return { result: regionalData };
  } catch (e) {
    return { error: e.message };
  }
};