const express = require('express')
const router = require('router')
const controller = require('./controller/news')

// GET news
router.get('/', controller.news)

module.exports = router