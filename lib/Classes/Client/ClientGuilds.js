const get = require('../../Api/Get')

const Guild = require("../Guild/Guild")

class ClientGuilds {
    constructor(client){
        this.client = client
    }
    async find(id){
        const guilddata = await get.guild(id, this.client.token)
        if(guilddata.code) return null
        else return new Guild(guilddata, this.client)
    }
}
module.exports = ClientGuilds