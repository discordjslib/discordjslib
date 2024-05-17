const get = require('../../Api/Get')
const methods = require('../../Api/Methods')
const Channel = require('./Channel')
const Category = require('./Category')
const Invite = require('../Guild/Invite')
module.exports = class ServerChannel extends Channel {
    constructor(channel, client, guild) {
        super(channel, client)
        if (!channel) return
        this.guildID = channel.guild_id
        this.position = channel.position
        this.permissions = null // new Permissions(this)
        this.name = channel.name
        this.nsfw = channel.nsfw || null
        this.topic = channel.topic || null
        this.guild = guild || null
        this.parentID = channel.parent_id || null
    }
    async setName(name, reason) {
        if (!name) throw new Error('No parameters were supplied')
        if (typeof name !== 'string') throw new Error('Name must be a string')
        const channel = methods.channel.name(name, this.id, this.client.token, reason)
        return channel
    }
    async setParent(categoryID, reason) {
        const channel = await methods.channel.parent(categoryID, this.id, this.client.token, reason)
    }
    async findParent() {
        if(this.parentID){
        const parent = await get.channel(this.parentID, this.client.token)
        return new Category(parent, this.client, this.guild)
        }
    }
    async setPosition(position, reason) {
        if (typeof position !== 'number') throw new Error('.position() parameter is not a number')
        const channel = await methods.channel.position(position, this.id, this.client.token, reason)
    }
    async newInvite(maxAge, maxUses) {
        const invite = await methods.invites.create(this.id, maxAge, maxUses, this.client.token)
        invite.channel = this
        return new Invite(invite, this.client)
    }
    async editPerm() {
    }
    async delete() {
       const channel = await methods.channel.delete(this.id, this.client.token)
       return new ServerChannel(channel, this.client)
    }
}