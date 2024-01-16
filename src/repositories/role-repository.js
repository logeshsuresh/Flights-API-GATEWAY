const CrudRepository = require("./crud-repository");
const { Role } = require('../models');
const AppError = require('../utils/errors/app-error')

class RoleRepository extends CrudRepository {
    constructor() {
        super(Role)
    }

    async getRoleByName(roleName) {
        const response = await Role.findOne({
            where: {
                name: roleName
            }
        });
        return response;
    }
}

module.exports = RoleRepository;