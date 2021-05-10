const get = require('../../Api/Get')

const Guild = require("../Guild/Guild")

module.exports = class ClientGuilds {
    constructor(client) {
        this.client = client
    }
    async find(id) {
        const guilddata = await get.guild(id, this.client.token)
        if (guilddata.code) throw new Error(guilddata.message)
        else return new Guild(guilddata, this.client)
    }
}