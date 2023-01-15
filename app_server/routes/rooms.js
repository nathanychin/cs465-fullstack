const express = require('express')
const router = require('router')
const controller = require('./controller/rooms')

// GET rooms
router.get('/', controller.rooms)

module.exports = router