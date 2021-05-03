const ServerChannel = require("./ServerChannel");

class Store extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
    }
}
module.exports = Store