const Client = require('./Classes/Client/Client')
class Discord {
    constructor(){
    }
    client(token){
        return new Client(token)
    }
}
module.exports = Discord