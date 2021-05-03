const get = require('../../get')
const methods = require('../../methods')

const Message = require('../Message/Message(circular dependency)')

class ChannelMessages {
    constructor(channel, client) {
        this.channel = channel
        this.client = client
    }
    async find(id) {
        let message = await get.message(id, this.channel.id, this.client.token)
        return new Message(message, this.channel, this.client.token)
    }
    async delete(amount) {
        return (await methods.deleteMessages(amount))
    }

}
module.exports = ChannelMessages