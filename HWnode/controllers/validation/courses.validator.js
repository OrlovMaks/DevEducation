const Joi = require('joi');

exports.coursesValidator = Joi.object().keys({
    name: Joi.string().required(),
    university_id: Joi.number().integer().min(1).required(),
    teachers_id: Joi.number().integer().min(1).required(),
});

exports.coursesListValidator = Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
    page: Joi.number().integer().min(1),
    perPage: Joi.number().integer().min(1),
    courseName: Joi.string()
});