const get = require('../get')
const User = require("./User")
const Guild = require("./Guild")
class Message {
    constructor(message, channel, token) {
        this.channel = channel
        this.id = message.id
        if (message.author.id) {
            this.user = get.user(message)
        } else {
            this.user = null
        }
        async function g() {
            const guild = await get.guild(this.guild_id)
            this.guild = new Guild(guild)
        }
        g()
    }
}
module.exports = Message