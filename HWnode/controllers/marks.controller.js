const validators = require('./validation');
const marksRepository = require('../database/repositories/marks.repository');

const createMarks = async (body) => {
    const { value, error } = validators.validate(body, validators.setMarksValidator);
    if (error) return { error };

    const { error: dbError } = await marksRepository.setMark(value.mark, value.student_id, value.course_id, value.university_id);

    if (dbError) return { error: { status: 500, data: { error } } };
    return { result: { data: { created: 1 }, status: 201 } };
};

module.exports = { createMarks };