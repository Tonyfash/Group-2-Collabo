const router = require('express').Router()
const { createUser } = require('../controller/user');

router.post('/user', createUser)

module.exports = router