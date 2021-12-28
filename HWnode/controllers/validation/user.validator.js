const Joi = require('joi');

exports.userValidator = Joi.object().keys({
  name: Joi.string().alphanum().required(),
  age: Joi.number().integer().min(0).required(),
  university_id: Joi.number().integer().min(0).required(),
});

exports.deleteUserValidator = Joi.object().keys({
  id: Joi.number().integer(),
  name: Joi.string(),
});

exports.studentValidator = Joi.object().keys({
  id: Joi.any(),
  page: Joi.string(),
  perPage: Joi.string(),
  studentName: Joi.string()
});

exports.rateValidator = Joi.object().keys({
  id: Joi.string(),
  perPage: Joi.string(),
});

exports.studentCourseValidator = Joi.object().keys({
  student_id: Joi.string().required(),
  course_id: Joi.string().required(),
});

exports.studentUpdateValidator = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required(),
  age: Joi.string().required(),
  university_id: Joi.string().required(),
});

exports.teacherValidator = Joi.object().keys({
  id: Joi.string().required(),
  page: Joi.string(),
  perPage: Joi.string(),
  teacherName: Joi.string(),
});

