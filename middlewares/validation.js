const { Joi, ValidationError } = require("express-validation");

const titleValidation = {
  body: Joi.object({
    title: Joi.string().alphanum.max(40),
  }),
};

const validationError = (error, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
};

exports.module = { titleValidation, validationError };
