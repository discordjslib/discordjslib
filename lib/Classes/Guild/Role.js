const methods = require('../../Api/Methods')
module.exports = class Role {
    constructor(role, guild, client) {
        this.client = client
        this.guild = guild
        this.id = role.id
        this.color = role.color
        this.hoist = role.hoist
        this.position = role.position
        this.mentionable = role.mentionable
        this.name = role.name
        this.deleted = false
    }
    async delete() {
        await methods.role.delete(this.guild.id, this.id, this.client.token)
        this.deleted = true
        return this
    }
    async setName(name){
        await methods.role.setName(this.guild.id, this.id, name, this.client.token)
        this.name = name
        return this
    }
    async setColor(color){
        await methods.role.setColor(this.guild.id, this.id, color, this.client.token)
        this.color = color
        return this
    }
}