const Joi = require('joi');

exports.pageValidator = Joi.object().keys({
    page: Joi.string(),
    perPage: Joi.string(),
    name: Joi.string(),
});