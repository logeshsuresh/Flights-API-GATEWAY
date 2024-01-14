const CrudRepository = require("./crud-repository");
const { User } = require('../models');
const AppError = require('../utils/errors/app-error')

class UserRepository extends CrudRepository {
    constructor() {
        super(User)
    }

    async getUserByEmail(email) {
        const response = await User.findOne({
            where: {
                email: email
            }
        });
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports = UserRepository;