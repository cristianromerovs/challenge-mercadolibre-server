const express = require('express')
const router = express.Router();
const controller = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')


router.get('/', controller.index)
router.get('/user', userController.getUser)

module.exports = router;