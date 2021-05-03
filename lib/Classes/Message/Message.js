const methods = require('../../Api/Methods')
const get = require('../../Api/Get')
const util = require('../../Util/channels')
const User = require("../User/User")
const Guild = require("../Guild/Guild")

class Message {
    constructor(message, channel, client) {
        this.channel = channel
        this.guild = message.guild || null
        this.id = message.id
        this.client = client
        this.content = message.content
        this.tts = message.tts
        this.attachements = message.attachements || null
        this.pinned = message.pinned
        this.webhook = message.webhook_id ? true : false
        this.reference = message.message_reference || false
        this.guildID = message.guild_id
        this.user = message.user || null
        this.member = message.member
    }
    async member() {
        const member = await get.member(this.guildID, this.user.id, this.client.token,)
        return member
    }
    async react(emoji) {
        try {
            let message = await methods.react(this.id, this.channel.id, emoji, this.client.token)
            return new Message(message, this.channel, this.client)
        } catch (err) {
        }
    }
    async reply(content) {
        const message = await methods.reply(this.id, this.channel.id, content, this.client.token)
        return new Message(message, this.channel, this.client)
    }
    async edit(content) {
        let message = await methods.edit(this.id, this.channel.id, content, this.client.token)
        return new Message(message, this.channel, this.client)
    }
}
module.exports = Message