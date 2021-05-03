const ServerChannel = require("./ServerChannel");

class News extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
    }
}
module.exports = News