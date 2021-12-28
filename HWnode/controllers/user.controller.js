const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');

const getSingleUser = async (query) => {
  const { value, error } = validators.validate(query, validators.idValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.getUserById(value.id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};
const getUsers = async () => {
  const { error: dbError, result } = await userRepository.getEvery();

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};
const createTeacher = async (body) => {
  const { value, error } = validators.validate(body, validators.userValidator);
  if (error) return { error };

  const { error: dbError } = await userRepository.createTeacher(value.name, value.age, value.university_id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { created: 1 }, status: 201 } };
};
const createStudent = async (body) => {
  const { value, error } = validators.validate(body, validators.userValidator);
  if (error) return { error };

  const { error: dbError } = await userRepository.createStudent(value.name, value.age, value.university_id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { created: 1 }, status: 201 } };
};
const getTeachersByUnivId = async (query) => {
  const { value, error } = validators.validate(query, validators.teacherValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.getTeachersList(value.id, value.page, value.perPage, value.teacherName);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

const deleteStudent = async (body) => {
  const { value, error } = validators.validate(body, validators.idValidator);
  if (error) return { error };

  const { error: dbError } = await userRepository.deleteStudent(value.id, value.name);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: { deleted: 1 }, status: 201 } };
};

const getStudentByCourse = async (query) => {
  const { value, error } = validators.validate(query, validators.studentValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.getStudentByCourse(value.id, value.page, value.perPage, value.studentName);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

const getStudentRate = async (query) => {
  const { value, error } = validators.validate(query, validators.rateValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.getStudentRate(value.id, value.perPage);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

const setCourseForStudent = async (query) => {
  const { value, error } = validators.validate(query, validators.studentCourseValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.setCourseForStudent(value.student_id, value.course_id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

const updateStudent = async (body) => {
  const { value, error } = validators.validate(body, validators.studentUpdateValidator);
  if (error) return { error };

  const { error: dbError, result } = await userRepository.updateStudent(value.id, value.name, value.age, value.university_id);

  if (dbError) return { error: { status: 500, data: { error } } };
  return { result: { data: result, status: 200 } };
};

module.exports = { updateStudent, getStudentRate, getSingleUser, getUsers, createTeacher, createStudent, getTeachersByUnivId, deleteStudent, getStudentByCourse, setCourseForStudent };
