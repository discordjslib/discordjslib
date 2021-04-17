const Client = require('./Classes/Client/Client')
class Discord {
    constructor(){
    }
    Client(token){
        return new Client(token)
    }
}
module.exports = Discord