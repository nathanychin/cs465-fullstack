const express = require('express')
const router = require('router')
const controller = require('./controller/contact')

// GET contact
router.get('/', controller.contact)

module.exports = router