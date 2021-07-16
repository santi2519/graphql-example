const users = require("../lib/data/users.json");
const { Promise } = require("bluebird");

class UserController {

    getUsers() {
        return Promise.resolve(users);
    }

    getUserById(id) {
        const userFound = users.find(u => u.id === id);
        return Promise.resolve(userFound);
    }
}

module.exports = new UserController();