const validators = require('./validation');
const coursesRepository = require('../database/repositories/courses.repository');

const createCourses = async (body) => {
  const { value, error } = validators.validate(body, validators.coursesValidator);
  if (error) return { error };

  const { error: dbError } = await coursesRepository.createCourse(value.name, value.university_id, value.teachers_id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { created: 1 }, status: 201 } };
};

const getCoursesByUnivId = async (query) => {
  const { value, error } = validators.validate(query, validators.coursesListValidator);
  if (error) return { error };

  const { error: dbError, result } = await coursesRepository.getCoursesList(value.id, value.page, value.perPage, value.courseName);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

const deleteFromCourse = async (query) => {
  const { value, error } = validators.validate(query, validators.idValidator);
  if (error) return { error };

  const { error: dbError } = await coursesRepository.deleteFromCourse(value.id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { deleted: 1 }, status: 201 } };
};

module.exports = { createCourses, getCoursesByUnivId, deleteFromCourse };