const ServerChannel = require("./ServerChannel");

module.exports = class Stage extends ServerChannel{
    constructor(channel, client){
        super(channel, client)
    }
}