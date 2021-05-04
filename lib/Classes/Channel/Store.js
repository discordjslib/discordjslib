const ServerChannel = require("./ServerChannel");

module.exports = class Store extends ServerChannel {
    constructor(channel, client) {
        super(channel, client)
    }
}