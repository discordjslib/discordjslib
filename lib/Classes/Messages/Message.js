const methods = require('../../methods')
const get = require('../../get')

const User = require("../User")
const Guild = require("../Guild")

class Message {
    constructor(message, channel, token) {
        this.channel = channel
        this.id = message.id
        this.token = token
        this.content = message.content
        async function author() {
            if (!message.author) return
            if (message.author.id.length) {
                return new User((await get.user(message.author.id, token)))
            } else {
                return null
            }
        }
        this.user = author()
    }
    async guild(){
    return this.channel.guild
    }
    async react(emoji) {
        try{
        let message = methods.react(this.id, this.channel.id, emoji, this.token)
        } catch(err){
            console.error(err)
        }
    }
}
module.exports = Message