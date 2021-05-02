const get = require('../get')
const methods = require('../methods')


const Guild = require('./Guild/Guild')
const Message = require('./Messages/Message')
const Role = require('./Role')


class User {
    constructor(client, user, member) {
        if(!user) return null
        this.client = client
        if(member){
        if (member[0]) {
            let guilds = []
            member.forEach(m => guilds.push(new Guild(m.guild_id, this.client.token)))
            this.guilds = guilds
            if (member.roles) {
                let roles = []
                member.roles.forEach(m => roles.push(m.role, new Guild(m.guild_id, this.client.token), this.client.token))
                this.roles = roles
            }
        }
    }
        this.id = user.id 
        this.name = user.username
        if(user.bot) this.bot = true
        else this.bot = false
        if(user.system) this.system = user.system
        else this.system = false
        if(user.flags) this.flags = user.flags
        else this.flags = null
       function avatar(id, av){
           if(av.startsWith('a_')) return `https://cdn.discordapp.com/avatars/${id}/${av}.gif`
           else return `https://cdn.discordapp.com/avatars/${id}/${av}`
       }
       if(user.avatar) this.avatar = avatar(this.id, user.avatar)
       else this.avatar = null
    }
    async dm(content) {
        const message = await methods.dm(this.id, content, this.client.token)
        const channel = await get.channel(message.channel_id, this.client.token)
        let user = new Message(message, channel, this.client)
        return user
    }
    async ban(guildid) {
        user = await methods.ban(this.id, this.client.token, guildid)
        return user
    }
    async kick(guildid) {
        user = await methods.kick(this.id, this.client.token, guildid)
        return user
    }
    async nickname(guildid) {
        user = methods.nickname(this.id, this.client.token, guildid)
        return user
    }
    async hasPerm(perm, guildid) {
        const has = await methods.hasPerm(this.id, perm, this.client.token, guildid)
        return has
    }

}
module.exports = User