const express = require('express')
const router = require('router')
const controller = require('./controller/about')

// GET about
router.get('/', controller.about)

module.exports = router