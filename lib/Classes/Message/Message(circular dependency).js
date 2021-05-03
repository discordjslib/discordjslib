const methods = require('../../methods')
const get = require('../../get')
const util = require('../../Util/channels')
const User = require("../User/User")
const Guild = require("../Guild/Guild")

class Message {
    constructor(message, channel, client) {
        this.channel = channel
        this.id = message.id
        this.client = client
        this.content = message.content
        this.pinned = message.pinned
        this.webhook = message.webhook_id ? true : false
        if(message.message_reference) this.reply = message.message_reference
        else this.reply = false
        if(channel.guild_id) this.guildID = channel.guild_id
        if(message.user) this.user = message.user
    }
    async guild(){
        const data = await get.guild(this.guildID)
        try{
        return new Guild(data, this.client)
        } catch(error){

        }
    }
    async react(emoji) {
        try {
            let message = await methods.react(this.id, this.channel.id, emoji, this.client.token)
            return new Message(message, this.channel, this.client)
        } catch (err) {
        }
    }
    async reply(content){
        let message = await methods.reply(this.id)        
    }
    async edit(content){
        let message = await methods.edit(this.id, this.channel.id, content, this.client.token)
        return new Message(message, this.channel, this.client)
    }
}
module.exports = Message