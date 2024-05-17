const ServerChannel = require('./ServerChannel')
module.exports = class Voice extends ServerChannel {
    constructor(channel, client, guild) {
        super(channel, client, guild)
        this.bitrate = channel.bitrate
        this.userLimit = channel.user_limit
    }
}