
const {addSchema, updateFavoriteSchema} = require("../utils/validation")

const Contact = require("../models/contact")

const { HttpError } = require("../helpers")



const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find()
    res.json(result)
  }
  catch(error) {
    next(error)
  }
  
}

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.params)
    const result = await Contact.findById(id)
    if (!result) {
      throw HttpError(404, "Not found")
    }
     res.json(result)
  }
  catch (error) {
    next(error)
  }
}

const addContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body)
    if (error) {
      throw HttpError(400, "missing required name field")
    }
    const result = await Contact.create(req.body)
    res.status(201).json(result)
  }
  catch (error) {
     next(error)
  }
}

const removeContact = async (req, res, next) => {
   try {
     const { id } = req.params;
     const result = await Contact.findByIdAndDelete(id)
    if (!result) {
      throw HttpError(404, "Not found")
     }
     res.json({message: "contact deleted"})
  }
  catch (error) {
    next(error)
  }
}

const updateContact = async (req, res, next) => {
  try {
   const { error } = addSchema.validate(req.body)
    if (error) {
      throw HttpError(400, "missing fields")
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body) 
        if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }
}

const updateStatusContact  = async (req, res, next) => {
  try {
     if (JSON.stringify(req.body) === "{}") {
    throw HttpError(400, "missing field favorite");
  }
   const { error } = updateFavoriteSchema.validate(req.body)
    if (error) {
      throw HttpError(400, error.message)
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body) 
        if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json(result)
  }
  catch (error) {
    next(error)
  }
}


module.exports = {
    getAll,
    getContactById,
    addContact,
    removeContact,
  updateContact,
    updateStatusContact 
}