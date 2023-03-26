const express = require('express')

// controller functions
const { createUser, loginUser } = require('../controllers/userController')


const router = express.Router()


router.post('/login', loginUser)

router.post('/signup', createUser)

module.exports = router