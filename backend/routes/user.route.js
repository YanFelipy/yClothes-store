const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// user register
router.post('/register', userController.register);

//user login
router.post('/login', userController.login);

module.exports = router;