const get = require('../../Api/Get')
const methods = require('../../Api/Methods')

const Message = require('../Message/Message')

module.exports = class User {
    constructor(client, user) {
        if (!user) return null
        this.client = client
        this.id = user.id
        this.name = user.username 
        this.globalName = user.global_name
        this.discriminator = user.discriminator
        this.bot = user.bot
        this.system = user.system
        this.flags = user.flags
        this.language = user.locale || null
        if (user.bot) this.bot = true
        else this.bot = false
        if (user.system) this.system = user.system
        else this.system = false
        if (user.flags) this.flags = user.flags
        else this.flags = null
        function avatar(id, av) {
            if (av.startsWith('a_')) return `https://cdn.discordapp.com/avatars/${id}/${av}.gif`
            else return `https://cdn.discordapp.com/avatars/${id}/${av}`
        }
        if (user.avatar) this.avatar = avatar(this.id, user.avatar)
        else this.avatar = null
    }
    async dm(content) {
        const message = await methods.dm(this.id, content, this.client.token)
        const channel = await get.channel(message.channel_id, this.client.token)
        let user = new Message(message, channel, this.client)
        return user
    }
}