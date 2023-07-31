const Joi = require("joi")

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})


const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),

})

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),

})

module.exports = {
  addSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema
}