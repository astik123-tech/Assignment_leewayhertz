const express = require('express');
const router = express.Router()
const {addUser,getUser} = require('../controllers/userController')



router.post('/createUser',addUser);

router.get('/getAllUser',getUser)

module.exports = router