const URL = require('url');

const { FACTORIAL_RECURSION, FACTORIAL_CYCLE, CREATE_USER } = require('../constants/routes');
const { createUser } = require('../controllers/user.controller');
const { getFactorialCycle, getFactorialRecursion } = require('../controllers/factorial.controller');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'POST' && pathname === CREATE_USER:
      ({ result, error } = await createUser(body));
      break;
    case method === 'GET' && pathname === FACTORIAL_CYCLE:
      ({ result, error } = await getFactorialCycle(query));
      break;
    case method === 'GET' && pathname === FACTORIAL_RECURSION:
      ({ result, error } = await getFactorialRecursion(query));
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
