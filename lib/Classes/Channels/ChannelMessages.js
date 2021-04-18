const get = require('../../get')
const methods = require('../../methods')

const Message = require('../Messages/Message')

class ChannelMessages {
    constructor(channel, token) {
        this.channel = channel
        this.token = token
    }
    find(id) {
        return get.message(id, this.channel.id, this.token).then(message => new Message(message, this.channel, this.token))
    }
    delete(amount) {
        return methods.deleteMessages(amount)
    }

}
module.exports = ChannelMessages