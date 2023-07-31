const express = require('express')
const ctrl = require("../../controllers/contactsControllers")
const {isValidId, validateBody, authenticate} = require("../../middlewares")
const { schemas } = require('../../models/contact')

const router = express.Router()

router.get('/',authenticate, ctrl.getAll)

router.get('/:id',authenticate, isValidId, ctrl.getContactById)

router.post('/',authenticate, validateBody(schemas.addSchema), ctrl.addContact)

router.delete('/:id',authenticate, isValidId, ctrl.removeContact)

router.put('/:id',authenticate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact)

router.patch('/:id/favorite',authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact)

module.exports = router
