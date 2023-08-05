const path = require("path")
const fs = require("fs/promises")
const { User } = require("../../models/user")
const Jimp = require("jimp")

const avatarDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const {_id} = req.user
    const { path: tempUpload, originalname } = req.file
    const filename = `${_id}_${originalname}`
    const resultUpload = path.join(avatarDir, filename)
    const img = await Jimp.read(tempUpload)
    await img.autocrop().cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(tempUpload)
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("avatars", originalname)
    await User.findByIdAndUpdate(_id, { avatarURL })
    res.json({
        avatarURL
    })
}

module.exports = updateAvatar