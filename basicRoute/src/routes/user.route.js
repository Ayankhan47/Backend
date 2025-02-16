const express = require('express')
const router = express.Router()
const Usercontroller = require('../controllers/user.controller')

router.post('/register', Usercontroller.registerUserController)

module.exports = router