const get = require('../get')
const Guild = require('./Guild')
const Role = require('./Role')
class User {
    constructor(user, token, member) {
        if (member) {
            let guilds = []
            member.forEach(m => guilds.push(new Guild(m.guild_id, token)))
            this.guilds = guilds
            if (roles) {
                let roles = []
                member.forEach(m => roles.push(m.role, new Guild(m.guild_id, token), token))
                this.roles = roles
            }
        }
        this.token = token
        this.id = user.id
        this.name = user.username
        this.bot = user.bot
        this.system = user.system
        this.flags = user.flags
        let roles = []
        if (user.roles) {
            user.roles.forEach(role => {
                roles.push(new Role(role, guild, token))
            })
        }
        this.roles = roles
    }
    async dm(guildid) {
        let user = await methods.dm(this.id, this.token, guildid)
        return user
    }
    async ban(guildid) {
        user = await methods.ban(this.id, this.token, guildid)
        return user
    }
    async kick(guildid) {
        user = await methods.kick(this.id, this.token, guildid)
        return user
    }
    async nickname(guildid) {
        user = methods.nickname(this.id, this.token, guildid)
        return user
    }
    async hasPerm(perm, guildid) {
        const has = await methods.hasPerm(this.id, perm, this.token, guildid)
        return has
    }

}
module.exports = User