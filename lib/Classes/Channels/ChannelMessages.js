const get = require('../../get')
const methods = require('../../methods')

const Message = require('../Messages/Message')

class ChannelMessages {
    constructor(channel, token) {
        this.channel = channel
        this.token = token
    }
    async find(id) {
        let message = await get.message(id, this.channel.id, this.token)
        return new Message(message, this.channel, this.token)
    }
    async delete(amount) {
        return (await methods.deleteMessages(amount))
    }

}
module.exports = ChannelMessages