const get = require('../../get')


const User = require("../User/User")
const Role = require('./Role')

const GuildUsers = require('./GuildUsers')

class Guild {
    constructor(guild, client) {
        this.client = client
        this.owner = guild.owner || null
        this.id = guild.id
        this.banner = guild.banner
        this.emojis = guild.emojis
        this.features = guild.features
        this.systemChannelID = guild.system_channel_id
        this.vanity = guild.vanity_url_code
        this.nitroLevel = guild.premium_tier
        this.nitroCount = guild.premium_subscription_count
        this.region = guild.region
        this.name = guild.name
        this.icon = guild.icon
        this.mfaLevel = guild.mfa_level
        this.nsfw = guild.nsfw
        this.users = new GuildUsers(client, this)
        let rolesArray = []
        try {
            if (guild.roles) {
                guild.roles.forEach(role => {
                    rolesArray.push(new Role(role, this, this.client))
                })
            }
            if (guild.owner) {
                this.owner = owner() || new User(guild.owner, this.client)
            }
            this.roles = rolesArray
        } catch (error) {

        }
    }
    async owner() {
        if (!this.owner) {
            return new User(await get.user(guild.owner_id, this.client.token), this.client)
        } else return new User(this.owner, this.client)
    }
    leave() {
        const guild = methods.leave(this, this.client)
        return guild
    }
}
module.exports = Guild