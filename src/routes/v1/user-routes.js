const express = require('express');

const { UserController } = require('../../controllers');

const router = express.Router();

// /api/v1/users/signup POST
router.post('/signup', 
        UserController.signup);

// /api/v1/users/signin POST
router.post('/signin', 
        UserController.signin);

module.exports = router;