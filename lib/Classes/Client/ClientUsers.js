const get = require('../../Api/Get')

const User = require("../User/User")

class ClientUsers {
    constructor(client) {
        this.client = client
    }
    async find(id) {
        const data = await get.user(id, this.client.token)
        return new User(this.client, data)
    }
    async toArray(){

    }
}
module.exports = ClientUsers