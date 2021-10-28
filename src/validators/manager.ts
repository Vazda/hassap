import Joi from "joi";

export const JOIAddNewManager = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  // jmbg: Joi.string().required(),
  // sanitarBooklet: Joi.string().required(),
  // sanitarMinimum: Joi.string().required(),
  role: Joi.string().required()
});
