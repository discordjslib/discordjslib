const get = require('../../Api/Get')
const methods = require('../../Api/Methods')

const Message = require('../Message/Message')

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