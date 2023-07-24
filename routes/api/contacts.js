const express = require('express')
const ctrl = require("../../controllers/contacts")
const {isValidId} = require("../../middlewares")

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:id', isValidId, ctrl.getContactById)

router.post('/', ctrl.addContact)

router.delete('/:id', isValidId, ctrl.removeContact)

router.put('/:id', isValidId, ctrl.updateContact)

router.patch('/:id/favorite', isValidId, ctrl.updateStatusContact)

module.exports = router
