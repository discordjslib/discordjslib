const get = require('../../Api/Get')

const User = require("../User/User")

module.exports = class ClientUsers {
    constructor(client) {
        this.client = client
    }
    async find(id) {
        const data = await get.user(id, this.client.token)
        return new User(this.client, data)
    }
    async toArray(){
        const data = await get.allUsers(this.client.token)
        return data.map(user => new User(this.client, user))
    }
}