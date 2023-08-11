const { model, Schema, } = require('mongoose')
const Joi = require("joi")
const {mongooseError} = require("../helpers")

const subscriptionList = ["starter", "pro", "business"];

const userSchema = new Schema(  {
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true
  },
  
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

}, {versionKey: false, timestamps: true})
  
userSchema.post('save', mongooseError)

const User = model('user', userSchema)


const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),

})

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),

})

const emailSchema = Joi.object({
   email: Joi.string().required(),
})

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionList).required()
})

const schemas = {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  emailSchema
}

module.exports = {User, schemas}