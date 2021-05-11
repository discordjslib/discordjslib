const get = require('../../Api/Get')
const methods = require('../../Api/Methods')

const User = require("../User/User")
const GuildUsers = require('./GuildUsers')
const GuildRoles = require('./GuildRoles')
const GuildChannels = require('./GuildChannels')
const GuildInvite = require('./Invite')
module.exports = class Guild {
    constructor(guild, client) {
        this.client = client
        this.id = guild.id
        this.avaliable = !guild.unavaliable || true
        if (!this.unavaliable) {
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
            const users = new GuildUsers(client, this),
                roles = new GuildRoles(client, this),
                channels = new GuildChannels(client, this)
            this.users = users
            this.roles = roles
            this.channels = channels
            if (guild.owner) {
                const owner = new User(guild.owner, this.client)
                this.owner = owner
                
            } else this.owner = null
            this.invites = {
                find: async (code) => {
                    const invite = await get.invites.get(code, client.token)
                    return new GuildInvite(invite, client)
                }
            }
        }
    }
    async findOwner() {
        if (!this.owner) {
            return new User(await get.user(guild.owner_id, this.client.token), this.client)
        } else return new User(this.owner, this.client)
    }
    leave() {
        const guild = methods.leave(this, this.client)
        return new Guild(guild, this.client)
    }
}