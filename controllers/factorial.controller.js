const validators = require('./validation');
const factorialRepository = require('../database/repositories/factorial.repository');
const { performance } = require('perf_hooks')

const getFactorialCycle = async (query) => {
    const { value, error } = validators.validate(query, validators.numberValidator);
    if (error) return { error };

    const start = performance.now();
    const result = await factorialRepository.factorialCycle(value.number);
    const end = performance.now();
    time = end - start


    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: { factorial: result, time: time }, status: 200 } };
};
const getFactorialRecursion = async (query) => {
    const { value, error } = validators.validate(query, validators.numberValidator);
    if (error) return { error };

    const start = performance.now();
    const result = await factorialRepository.factorialRecursion(value.number);
    const end = performance.now();
    time = end - start

    if (error) return { error: { status: 500, data: { error } } };
    return { result: { data: { factorial: result, time: time }, status: 200 } };
};

module.exports = { getFactorialCycle, getFactorialRecursion };
