const Role = require("../Guild/Role")
const get = require('../../Api/Get')
module.exports = class GuildMemberRoles {
    constructor(guild, client) {
        this.guild = guild
        this.client = client
    }
    async find(roleString) {
        let role
        if (typeof roleString !== 'string') return console.error('<guild>.roles.find() parameter must be a string!')
            if (!isNaN(roleString)) {
                const roles = await get.roles(this.guild.id, this.client.token)
                role = roles.find(r => r.id === roleString)
            } else {
                const roles = await get.roles(this.guild.id, this.client.token)
                role = roles.find(r => r.name === roleString)
               

            }
            if(role) return new Role(role, this.guild, this.client)
            else return null
    }
    async findAllRoles() {
        let roles = await get.roles(this.guild.id, this.client.token)
        roles = roles.map(r => new Role(r, this.guild, this.client))
        return roles
    }

}