const get = require('../get')
const Guild = require('./Guild')
const Role = require('./Role')
class User {
    constructor(user, token, member) {
        this.token = token
        this.id = user.id
        this.name = user.username
        this.bot = user.bot
        this.system = user.system
        this.flags = user.flags
        if (member) { const guild = new Guild(member.guild_id) }
        let roles = []
        if (user.roles) {
            user.roles.forEach(role => {
                roles.push(new Role(role, guild, token))
            })
        }
        this.roles = roles
    }
    async dm() {
        let user = await methods.dm(this.id, this.token)
        return user
    }
    async ban() {
        user = await methods.ban(this.id, this.token)
        return user
    }
    async kick() {
        user = await methods.kick(this.id, this.token)
        return user
    }
    async nickname() {
        user = methods.nickname(this.id, this.token)
        return user
    }
    async hasPerm(perm) {
        const has = await methods.hasPerm(this.id, perm, this.token)
        return has
    }
    async

}
module.exports = User