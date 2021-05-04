const get = require('../../Api/Get')
const methods = require('../../Api/Methods')
const ServerChannel = require('./ServerChannel')
const Message = require('../Message/Message')
const Guild = require('../Guild/Guild')
const ChannelMessages = require('./ChannelMessages')
module.exports = class Text extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
        this.lastMessageID = channel.last_message_id || null
        this.messages = new ChannelMessages(this, this.client)
    }
    async send(content) {
        if (typeof content === 'string') {
            const msg = await methods.send(this.id, content, this.client.token)
            if (msg.code) throw new Error(`${msg.message}`)
            return new Message(msg, this, this.client)
        } else if (typeof content === 'object') {
            const msg = await methods.sendEmbed(this.id, content, this.client.token)
            if (msg.code) throw new Error(`${msg.message}`)
            return new Message(msg, this, this.client)
        } else if (typeof content === 'function') {
            const msg = await methods.sendEmbed(this.id, content.toObject(), this.client.token)
            if (msg.code) throw new Error(`${msg.message}`)
            return new Message(msg, this, this.client)
        } else {
            throw new Error('Invalid parameter type for .send()')
        }
    }
    async topic(topic, reason) {
        const channel = await methods.topic(topic, this.id, this.client.token, reason)
        if (channel.code) throw new Error(`${channel.message}`)
        return new Text(channel, client)
    }
    async bulkDelete(number) {
        const messages = await get.channelMessages(this.id, number, this.client.token)
        if (messages.code) throw new Error(`${messages.message}`)
        let ids = []
        for (let i = 0; i < messages.length; i++) {
            ids.push(messages[i].id)
        }
        await methods.deleteMessages(this.id, ids, this.client.token)
        return this
    }
}