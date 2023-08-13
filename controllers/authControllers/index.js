const register = require("./register")
const login = require("./login")
const getCurrent = require("./current")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")
const updateSubscription = require("./checkSubscription")
const verify = require("./verify")
const { ctrlWrapper } = require("../../helpers")
const resendVerify = require("./resendVerify")

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscription: ctrlWrapper(updateSubscription),
    updateAvatar: ctrlWrapper(updateAvatar),
    verify: ctrlWrapper(verify),
    resendVerify: ctrlWrapper(resendVerify)
}