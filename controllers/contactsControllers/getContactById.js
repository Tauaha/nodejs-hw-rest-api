const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact");

const getContactById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const result = await Contact.findById(id)
    if (!result) {
      throw HttpError(404, "Not found")
    }
     res.json(result)
}

module.exports =getContactById