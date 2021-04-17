const { getMessage, getChannel } = require('../../get')
const methods = require('../../methods')
class ChannelMessages {
    constructor(channel, token){
        this.channel = channel
        this.token = token
    }
    find(id){
       message = getMessage(this.channel.id, id, this.token)
       return new Message(message)
    }
    delete(amount){
        return methods.deleteMessages(amount)
    }

}
module.exports = ChannelMessages