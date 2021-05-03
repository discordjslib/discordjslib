const { user } = require('../../get');
const methods = require('../../methods')
const Guild = require('../Guild/Guild')
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
class Role {
    constructor(role, guild, client) {
        this.client = client
        this.guild = guild
        this.id = role.id
        this.colour = role.color
        this.color = role.color
        this.hoist = role.hoist
        this.position = role.position
        this.mentionable = role.mentionable
    }
    async delete(timeout) {
        if (typeof timeout !== 'number') throw new Error('.delete() parameter must be a number')
        if (timeout) sleep(timeout)

        let role = await methods.delete(this.id, this.client.token,)
        let guild = new Guild(role.guild_id, this.client.token)
        return new this(role, guild, this.client.token)
    }
    async name(name) {
        role = await methods.name(name, this.id, token)
        guild = new Guild(role.guild_id, this.client.token)
        return new this(role, guild, this.client.token)
    }
    async color(colour) {
        role = await methods.colour(colour, this.id, this.client.token)
        guild = new Guild(role.guild_id, this.client.token)
        return new this(role, guild, this.client.token)
    }
    async give(User) {
        if (user.id) return new User(await methods.giveRole(this.id, User.id, this.client.token), this.client.token)
    }
}
module.exports = Role