const ws = require('ws')


const ClientChannels = require('./ClientChannels')
const ClientUsers = require('./ClientUsers')

class Client {
    constructor(token) {
        this.token = token
        this.channels = new ClientChannels(token)
        this.users = new ClientUsers(token)
        //this.listen = new ws('wss://gateway.discord.gg/?v=8&encoding=json').on
    }
}
module.exports = Client