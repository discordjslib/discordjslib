const GuildMemberRoles = require('./GuildMemberRoles')
class User {
    constructor(client, user) {
        if (!user) return null
        this.client = client
        this.id = user.id
        this.name = user.username
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
module.exports = class GuildMember {
    constructor(member, guild, client) {
        this.guild = guild
        this.client = client
        this.nickname = member.nick
        this.joinedAt = member.joined_at
        this.premiumSince = member.premium_since
        this.voice = {
            deafened: member.deaf,
            muted: member.mute,
            pending: member.pending ? member.pending : null,

        }
        this.manageable = member.manageable
        this.permissions = member.permissions || null
        this.roles = new GuildMemberRoles(this, client)
        this.user = member.user ? new User(client, member.user) : null
    }
    async ban() {
        const user = await methods.ban(this.id, this.client.token, this.guild.id)
        return new User(client, user)
    }
    async kick() {
        const user = await methods.kick(this.id, this.client.token, this.guild.id)
        return new User(client, user)
    }
    async nickname() {
        const user = methods.nickname(this.id, this.client.token, this.guild.id)
        return new User(client, user)
    }
    async hasPerm(permission) {
        const has = await methods.hasPerm(this.id, permission, this.client.token, this.guild.id)
        return has
    }
}