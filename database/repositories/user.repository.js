const pgClient = require('../index');
const customError = require('../../error/customError');

exports.createUser = async (email, name) => {
  try {
    await pgClient.query(`INSERNNNN INTO users(email, name) VALUES ('${email}', '${name}')`);
    return { result: true };
  } catch (e) {
    throw new customError('Что-то пошло не так!');
  }
};