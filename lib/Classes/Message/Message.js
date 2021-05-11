const methods = require('../../Api/Methods')
const get = require('../../Api/Get')

module.exports = class Message {
    constructor(message, channel, client) {
        this.channel = channel
        this.mentions = { } // to do
        if(message.member) this.guild = message.member.guild || channel.guild || message.guild || null
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
        if (typeof content === 'string') {
            const message = await methods.reply(this.id, this.channel.id, content, this.client.token)
            if (message.code) throw new Error(`${message.message}`)
            return new Message(message, this.channel, this.client)
        } else if (typeof content === 'object') {
            const message = await methods.replyEmbed(this.id, this.channel.id, content, this.client.token)
            if (message.code) throw new Error(`${message.message}`)
            return new Message(message, this.channel, this.client)
        } else if (typeof content === 'function') {
            if (content.toObject()) {
                const message = await methods.replyEmbed(this.id, this.channel.id, content.toObject(), this.client.token)
                if (message.code) throw new Error(`${message.message}`)
                return new Message(message, this.channel, this.client)
            }
            else throw new Error('Invalid .reply() paramater')
        }
    }
    async edit(content) {
        let message = await methods.edit(this.id, this.channel.id, String(content), this.client.token)
        if(message.message) throw new Error(message.message)
        return new Message(message, this.channel, this.client)
    }
}