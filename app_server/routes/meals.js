const express = require('express')
const router = require('router')
const controller = require('./controller/meals')

// GET meals
router.get('/', controller.meals)

module.exports = router