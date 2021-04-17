const methods = require('../../methods')
const ServerChannel = require('./ServerChannel')
const Message = require('../Message')
class Text extends ServerChannel {
    constructor(channel, token){
        super(channel)
        this.token = token
    }
    async send(content){
        const msg = await methods.send(this.id, content, this.token)
        return new Message(msg, this, this.token)
    }
}
module.exports = Text