const get = require('../get')
const User = require("./User")
const Member = require('../Structures/Member')
const Guild = require("./Guild")
class Message {
    constructor(message, channel, token) {
        this.channel = channel
        this.token = token
        this.id = message.id
    }
    async user() {
        const user = await get.user(this.id)
        return new User(user, this.token)
    }
    async member() {
        const member = await get.member(this.id)
        new Member(member, this.token)
    }
    async guild(){
        const guild = await get.guild(this.guild_id)
        this.guild = new Guild(guild)
    }
}
module.exports = Message