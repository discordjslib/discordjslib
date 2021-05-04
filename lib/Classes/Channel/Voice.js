const ServerChannel = require('./ServerChannel')
module.exports = class Voice extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
        this.bitrate = channel.bitrate
        this.userLimit = channel.user_limit
    }
}