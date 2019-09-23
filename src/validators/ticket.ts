import Joi from "joi";

export const JOIAddNewTicket = Joi.object().keys({
  // firstName: Joi.string().required(),
  // lastName: Joi.string().required(),
  email: Joi.string()
    .email()
    .required()
});
