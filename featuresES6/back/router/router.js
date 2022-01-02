const URL = require('url');

const { GET_HISTORYCAL_DATA, GET_REGIONAL_DATA } = require('../constants/routes');
const { getHistoricalData, getRegionalData } = require('../repositories/data.repository');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'GET' && pathname === GET_HISTORYCAL_DATA:
      ({ result, error } = await getHistoricalData(query));
      break;
    case method === 'GET' && pathname === GET_REGIONAL_DATA:
      ({ result, error } = await getRegionalData(query));
      break;
    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }

  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify({ error }));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };
