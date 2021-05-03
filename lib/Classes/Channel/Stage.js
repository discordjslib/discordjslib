const ServerChannel = require("./ServerChannel");

class Stage extends ServerChannel{
    constructor(channel, client){
        this.stage = true
    }
}
module.exports = Stage