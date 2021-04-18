const get = require('../../get')
const User = require("../User")
const Guild = require("../Guild")
class Message {
    constructor(message, channel, token) {
        this.channel = channel
        this.id = message.id
        this.token = token
        async function author() {
            if(!message.author) return
            if (message.author.id.length) {
                return new User((await get.user(message.author.id, token)))
            } else {
               return null
            }
        }
        this.user = author()
        this.guild = channel.guild
    }
    async react(emoji){
    let message = methods.react(this.id, emoji, this.token) 
    }
}
module.exports = Message