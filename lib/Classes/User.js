const get = require('../get')
class User {
    constructor(user, token) {
        this.token = token
        this.id = user.id
        this.name = user.username
    }
}
module.exports = User