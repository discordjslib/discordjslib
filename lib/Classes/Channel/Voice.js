const ServerChannel = require('./ServerChannel')
class Voice extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
        this.bitrate = channel.bitrate
        this.userLimit = channel.user_limit
    }
}
module.exports = Voice