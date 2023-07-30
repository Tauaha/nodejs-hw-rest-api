const { Contact } = require("../../models/contact")


const getAll = async (req, res) => {
    const { _id: owner } = req.user
    const { page = 1, limit = 20, favorite } = req.query
    const skip =(page-1)*limit
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit })
    if (favorite) {
        const filterFavorite = result.filter(item => item.favorite === JSON.parse(favorite))
        return res.json(filterFavorite)
    }
    res.json(result)
}

module.exports= getAll