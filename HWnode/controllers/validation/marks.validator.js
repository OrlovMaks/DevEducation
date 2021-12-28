const Joi = require('joi');

exports.setMarksValidator = Joi.object().keys({
    mark: Joi.string().required(),
    student_id: Joi.string().required(),
    course_id: Joi.string().required(),
    university_id: Joi.string().required(),
});