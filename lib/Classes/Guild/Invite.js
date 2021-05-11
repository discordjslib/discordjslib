const User = require("../User/User")
const Guild = require("./Guild")
const util = require('../../Util/channels')
const methods = require('../../Api/Methods')
module.exports = class GuildInvite {
    constructor(invite, client) {
        this.client = client
        this.code = invite.code

        if (invite.channel) this.channel = util.getChannel(invite.channel, client)
        else this.channel = null

        if (invite.approximate_presence_count) this.online = invite.approximate_presence_count
        else this.online = null

        if (invite.approximate_member_count) this.members = invite.approximate_member_count
        else this.members = null

        if (invite.expires_at) this.expires = invite.expires_at
        else this.expires = null


    }
    toString() {
        return this.code
    }
    async delete() {
        const invite = await this.methods.invites.delete()
        return invite
    }
}
