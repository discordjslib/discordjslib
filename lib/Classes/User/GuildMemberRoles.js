const Role = require("../Guild/Role")

module.exports = class GuildMemberRoles {
    constructor(member, client) {
        this.member = member
        this.client = client
    }
    async find(roleString) {
        if (typeof roleString !== 'string')
            if (!isNaN(roleString)) {
                const roles = await get.roles(this.member.guild.id, this.client.token)
                const role = roles.find(r => r.id === id)
                return new Role(role, this.member.guild.id, this.client)
            } else {
                const roles = await get.roles(this.member.guild.id, this.client.token)
                const role = roles.find(r => r.name === roleString)
                return new Role(role, this.member.guild.id, this.client)
            }
    }
}