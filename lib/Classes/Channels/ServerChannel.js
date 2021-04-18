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
        async function parent(){
        return await get.channel(channel.parentID)
        }
        this.parent = new Category(parent(), token)
    }
    async name(name, reason){
        if(!name) throw new Error('No parameters were supplied')
        if(typeof name !== 'string') throw new Error('Name must be a string')
        let channel = methods.name(name, this.id, this.token, reason)
        return channel
    }
    async parent(category, reason){
        channel = await methods.parent(category, this.id, this.token, reason)
        return channel
    }
    async position(position, reason){
        if(typeof position !== 'number') throw new Error('.position() parameter is not a number')
        channel = await methods.position(position, this.id, this.token, reason)
        return channel
    }
    async newInvite(){
        invite = await methods.position(this.id, this.token, reason)
    }
    async editPerm(){

    }
}
module.exports = ServerChannel