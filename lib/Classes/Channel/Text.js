const get = require('../../get')
const methods = require('../../methods')
const ServerChannel = require('./ServerChannel')
const Message = require('../Message/Message(circular dependency)')
const Guild = require('../Guild/Guild')
const ChannelMessages = require('./ChannelMessages')
class Text extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
        this.client = client
        this.messages = new ChannelMessages(this, this.client)
    }
    async send(content) {
        if (typeof content === 'string') {
            const msg = await methods.send(this.id, content, this.client.token)
            return new Message(msg, this, this.client)
        } else if (typeof content === 'object') {
            const msg = await methods.sendEmbed(this.id, content, this.client.token)
            return new Message(msg, this, this.client)
        } else if (typeof content === 'function') {
            const msg = await methods.sendEmbed(this.id, content.toObject(), this.client.token)
            return new Message(msg, this, this.client)
        } else {
            return null
        }
    }
    async topic(topic, reason) {
        const channel = await methods.topic(topic, this.id, this.client.token, reason)
        return new Text(channel, client)
        return channel
    }
    async bulkDelete(number) {
        const messages = await get.channelMessages(this.id, number, this.client.token)
        let ids = []
        for (let i = 0; i < messages.length; i++) {
            ids.push(messages[i].id)
        }
        await methods.deleteMessages(this.id, ids, this.client.token)
        return this
    }
}
module.exports = Text