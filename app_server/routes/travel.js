const express = require('express')
const router = require('router')
const controller = require('./controller/travel')

// GET homepage
router.get('/', controller.travel)

module.exports = router