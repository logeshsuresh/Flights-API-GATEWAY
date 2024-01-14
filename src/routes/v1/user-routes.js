const express = require('express');

const { UserController } = require('../../controllers');
// const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/cities POST
router.post('/', 
        UserController.createUser);

module.exports = router;