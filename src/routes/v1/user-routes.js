const express = require('express');

const { UserController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/users/signup POST
router.post('/signup', 
        AuthMiddlewares.validateAuthRequest,
        UserController.signup);

// /api/v1/users/signin POST
router.post('/signin', 
        AuthMiddlewares.validateAuthRequest,
        UserController.signin);

module.exports = router;