const Role = require("../Guild/Role")
const get = require('../../Api/Get')
module.exports = class GuildMemberRoles {
    constructor(member, guild, client) {
        this.member = member
        this.guild = guild
        this.client = client
    }
    async find(roleString) {
        if (typeof roleString !== 'string') return console.error('<Guild>.roles.find() parameter must be a string!')
            if (!isNaN(roleString)) {
                const roles = await get.roles(this.guild.id, this.client.token)
                role = roles.find(r => r.id === roleString && this.member.roleIDs.includes(r.id))
            } else {
                const roles = await get.roles(this.guild.id, this.client.token)
                role = roles.find(r => r.name === roleString && this.member.roleIDs.includes(r.id))
            }
            if(role) return new Role(role, this.guild, this.client)
            else return null
    }
    async findAllRoles() {
        let roles = await get.roles(this.guild.id, this.client.token)
        roles = roles.map(r => new Role(r, this.guild, this.client))
        roles  = roles.filter(r => this.member.roleIDs.includes(r.id))
        return roles
    }

}