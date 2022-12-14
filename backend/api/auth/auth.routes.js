const express = require('express')
const { signup, logout } = require('./auth.controller')
const router = express.Router()

router.post('/signup', signup)
router.post('/logout', logout)

module.exports = router