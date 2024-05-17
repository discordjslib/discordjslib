/** @type {*} */
const get = require('../../Api/Get')
const methods = require('../../Api/Methods')

const User = require("../User/User")
const GuildInvite = require('./Invite')
const GuildMember = require('../User/GuildMember')
const GuildRoles = require('../User/GuildRoles.js')
const GuildChannels = require('../Guild/GuildChannels.js')
module.exports = class Guild {
    constructor(guild, client) {
        this.client = client
        this.id = guild.id
        this.avaliable = !guild.unavaliable || true
        if (!this.unavaliable) {
            this.owner = guild.owner || guild.owner_id
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
            this.nsfw = guild.nsfw_level
            this.roles = new GuildRoles(this, this.client)
            this.channels = new GuildChannels(this, this.client)
            this.nsfw = guild.nswf_level || null
            if (guild.owner) {
                const owner = new User(guild.owner, this.client)
                this.owner = owner
            }
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
    async findAllMembers() {
        const members = await get.findAllMembers(this.id, this.client.token)
        return members.map(member => new GuildMember(member, this, this.client))
    }
    async findMember(user) {
        if (user.id) {
            const userdata = await get.user(user.id, this.client.token)
            const memberdata = await get.member(this.guild.id, user.id, this.client.token)
            const member = new GuildMember(memberdata, this, this.client)
            member.user = new User(this.client, userdata)
            return member
        } else if (typeof user === 'string') {
            const userdata = await get.user(user, this.client.token)
            const memberdata = await get.member(this.id, user, this.client.token)
            const member = new GuildMember(memberdata, this, this.client)
            member.user = new User(this.client, userdata)
            return member
        }
        else return null
    }
    leave() {
        const guild = methods.leave(this, this.client)
        return guild
    }
}