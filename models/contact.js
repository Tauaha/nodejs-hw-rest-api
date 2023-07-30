const { model, Schema, } = require('mongoose')
const Joi = require("joi")
const {mongooseError} = require("../helpers")

const contactSchema = new Schema(  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
})
  
contactSchema.post('save', mongooseError)

const Contact = model('contact', contactSchema)



const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {Contact, schemas}