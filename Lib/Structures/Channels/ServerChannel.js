const Channel = require('./Channel')


class ServerChannel extends Channel {
    constructor(channel, token) {
        super(channel)
        this.position = channel.position
        this.permissions = null // new Permissions(this)
        this.name = channel.name
        this.nsfw = channel.nsfw
    }
}
module.exports = ServerChannel