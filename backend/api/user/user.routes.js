const express = require('express')
// const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getUser, getUsers } = require('./user.controller')
const router = express.Router()

router.get('/', getUsers)
module.exports = router