const register = require("./register")
const login = require("./login")
const getCurrent = require("./current")
const logout = require("./logout")
const updateSubscription = require("./checkSubscription")
const { ctrlWrapper } = require("../../helpers")

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscription: ctrlWrapper(updateSubscription)
}