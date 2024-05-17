const ServerChannel = require("./ServerChannel");

module.exports = class News extends ServerChannel {
    constructor(channel, client, guild) {
        super(channel, client, guild)
    }
}