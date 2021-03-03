const joi = require("joi");
const userValidation = joi.object({
     firstName: joi.string().required(),
     lastName: joi.string().required(),
     email: joi.string().email().lowercase().required(),
     phoneNumber: joi.number().min(10).required(),
});

module.exports = userValidation ;



