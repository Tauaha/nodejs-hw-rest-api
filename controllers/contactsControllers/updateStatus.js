const { HttpError } = require("../../helpers");
const { schemas, Contact } = require("../../models/contact");

const updateStatusContact  = async (req, res) => {
     if (JSON.stringify(req.body) === "{}") {
    throw HttpError(400, "missing field favorite");
  }
   const { error } = schemas.updateFavoriteSchema.validate(req.body)
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

module.exports =updateStatusContact