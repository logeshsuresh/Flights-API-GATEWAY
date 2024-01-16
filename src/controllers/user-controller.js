const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /users/signup
 * req-body {email: 'logeshsrinivasans@gmail.com', password: 'thisismypassword'}
 */
async function signup(req, res) {
    try {
        const user = await UserService.signup({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * POST : /users/signin 
 * req-body {email: 'logeshsrinivasans@gmail.com', password: 'thisismypassword'}
 */
async function signin(req, res) {
    try {
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse); 
    }
}

/**
 * POST : /users/role 
 * req-body {userId: 1', role: 'flight_company'}
 */
async function addRoleToUser(req, res) {
    try {
        const user = await UserService.addRoleToUser({
            id: req.body.userId,
            role: req.body.role,
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse); 
    }
}

module.exports = {
    signup,
    signin,
    addRoleToUser
}