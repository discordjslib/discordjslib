const get = require('../../get')
const User = require("../User")
const Guild = require("../Guild")
class Message {
    constructor(message, channel, token) {
        this.channel = channel
        this.id = message.id
        async function author() {
            if (message.author.id.length) {
                return new User((await get.user(message.author.id, token)))
            } else {
               return null
            }
        }
        this.user = author()
        this.guild = channel.guild
    }
}
module.exports = Message