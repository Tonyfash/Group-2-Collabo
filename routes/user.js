const router = require('express').Router()
const { createUser, getOne } = require('../controller/user');

router.post('/user', createUser);
router.get('/user/:id', getOne);

module.exports = router