const Joi = require('joi');

exports.numberValidator = Joi.object().keys({
    number: Joi.string(),
});