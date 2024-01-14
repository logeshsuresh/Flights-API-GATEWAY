const express = require('express');

const userRoutes = require('./user-routes');
const { InfoController } = require('../../controllers');
const { AuthMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/info', 
        AuthMiddlewares.checkAuth,
        InfoController.info);
router.use('/users', userRoutes);

module.exports = router;