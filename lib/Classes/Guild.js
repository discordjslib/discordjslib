const get = require('../get')


const User = require("./User")
const Role = require('./Role')


class Guild {
    constructor(guild, token) {
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

        let rolesArray = []
        if (guild.roles) {
            guild.roles.forEach(role => {
                rolesArray.push(new Role(role, this, token))
            })
        }
        if (guild.owner) {
            this.owner = owner() || new User(guild.owner, token)
        }
        this.roles = rolesArray
        this.lol = 'no u'
    }
    async owner() {
        if (!guild.owner) {
            return new User(await get.user(guild.owner_id, token), token)
        } else return new User(this.owner, this.token)
    }
    leave() {
        const guild = methods.leave(this, this.token)
        return guild
    }
}
module.exports = Guild