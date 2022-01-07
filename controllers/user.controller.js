const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');

const createUser = async (body) => {
  const { value, error } = validators.validate(body, validators.userValidator);
  if (error) return { error };

  const { error: dbError } = await userRepository.createUser(value.email, value.name);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { created: 1 }, status: 201 } };
};

module.exports = { createUser };
