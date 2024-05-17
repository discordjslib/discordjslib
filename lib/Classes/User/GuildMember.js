const GuildMemberRoles = require('./GuildMemberRoles.js')
const User = require('./User.js')
module.exports = class GuildMember {
    constructor(member, guild, client) {
        this.guild = guild
        this.client = client
        this.name = member.nick || member.user.username
        this.id = member.user.id
        this.joinedAt = member.joined_at
        this.premiumSince = member.premium_since
        this.voice = {
            deafened: member.deaf,
            muted: member.mute,
            pending: member.pending ? member.pending : null,

        }
        this.permissions = member.permissions || null
        this.roleIDs = member.roles
        this.roles = new GuildMemberRoles(this, this.guild, this.client)
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