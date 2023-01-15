const express = require('express')
const router = express.Router()
const controller = require('../controllers/contact')

// GET contact
router.get('/', controller.contact)

module.exports = router