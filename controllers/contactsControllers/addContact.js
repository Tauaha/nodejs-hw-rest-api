const { HttpError } = require("../../helpers")
const { Contact, schemas } = require("../../models/contact")



const addContact = async (req, res) => {
      const {_id: owner} = req.user
    const { error } = schemas.addSchema.validate(req.body)
    if (error) {
      throw HttpError(400, "missing required name field")
  }

    const result = await Contact.create({...req.body, owner})
    res.status(201).json(result)
}

module.exports = addContact