class GuildMember {
    constructor(member, guild, client) {
        this.guild = guild
        this.client = client
    }
    async ban() {
        const user = await methods.ban(this.id, this.client.token, this.guild.id)
        return user
    }
    async kick() {
        const user = await methods.kick(this.id, this.client.token, this.guild.id)
        return user
    }
    async nickname() {
        const user = methods.nickname(this.id, this.client.token, this.guild.id)
        return user
    }
    async hasPerm(permission) {
        const has = await methods.hasPerm(this.id, permission, this.client.token, this.guild.id)
        return has
    }
}