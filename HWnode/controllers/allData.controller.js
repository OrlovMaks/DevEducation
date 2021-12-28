const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');
const universityRepository = require('../database/repositories/university.repository');

const getAllData = async function (query) {
    let table = [];

    const { value, error } = validators.validate(query, validators.pageValidator);
    if (error) return { error };

    const { error: dbError, result } = await universityRepository.getEveryUniversities(value.page);
    if (dbError) return { error: { status: 500, data: { error } } };

    for (let element of result) {
        let id = element.id
        const { error: dbError, result } = await userRepository.getStudentRate(id)
        if (dbError) return { error: { status: 500, data: { error } } };
        const row = {
            id: element.id,
            name: element.name,
            students: result
        }
        table.push(row);
    }
    return { result: { data: table, status: 200 } };
};

module.exports = { getAllData };