const get = require('../../Api/Get')

const Channel = require('./Channel')
const Guild = require('../Guild/Guild')
const Category = require('./Category')

class ServerChannel extends Channel {
    constructor(channel, client) {
        super(channel, client)
        if(!channel) return
        this.guildID = channel.guild_id
        this.position = channel.position
        this.permissions = null // new Permissions(this)
        this.name = channel.name
        this.nsfw = channel.nsfw || null
        this.topic = channel.topic || null
        async function parent() {
            return await get.channel(channel.parentID)
        }
        this.parent = new Category(parent(), this.client.token)
    }
    async guild() {
        if (this.guildID) {
            const guild = await get.guild(this.guildID, this.client.token)
            return new Guild(guild, this.client.token)
        }
        else return null
    }
    async name(name, reason) {
        if (!name) throw new Error('No parameters were supplied')
        if (typeof name !== 'string') throw new Error('Name must be a string')
        const channel = methods.name(name, this.id, this.client.token, reason)
        return channel
    }
    async parent(category, reason) {
        const channel = await methods.parent(category, this.id, this.client.token, reason)
        return channel
    }
    async position(position, reason) {
        if (typeof position !== 'number') throw new Error('.position() parameter is not a number')
        const channel = await methods.position(position, this.id, this.client.token, reason)
        return channel
    }
    async newInvite() {
        const invite = await methods.invite(this.id, this.client.token, reason)
    }
    async editPerm() {
    }
    async delete(reason){
        const channel = await methods.delete(this.id, this.client.token, reason)
    }
}
module.exports = ServerChannel