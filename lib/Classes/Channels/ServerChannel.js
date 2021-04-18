const get = require('../../get')

const Channel = require('./Channel')
const Guild = require('../Guild')
const Category = require('./Category')

class ServerChannel extends Channel {
    constructor(channel, token) {
        super(channel)
        this.position = channel.position
        this.permissions = null // new Permissions(this)
        this.name = channel.name
        this.nsfw = channel.nsfw
        this.parent = new Category(channel.parentID, token)
    }
    async name(name, reason){
        if(!name) throw new Error('No parameters were supplied')
        if(typeof name !== 'string') throw new Error('Name must be a string')
        let channel = methods.name(name, reason, this.id, this.token)
        return channel
    }
    async parent(category, reason){
        methods.parent(category, this.id, this.token, reaso)

    }
}
module.exports = ServerChannel