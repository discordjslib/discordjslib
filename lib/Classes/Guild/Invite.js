const User = require("../User/User")
const Guild = require("./Guild")

module.exports = class GuildInvite {
    constructor(invite, client){
        this.client = client
        this.code = invite.code

        if(invite.channel) this.channel = util.getChannel(invite.channel, client)
        else this.channel = null

        if(invite.guild) this.guild = new Guild(invite.guild, clientelse)
        else this.guild = null

        if(invite.inviter) this.creator = new User(client, invite.inviter)
        else this.creator = null

        if(invite.approximate_presence_count) this.online = inviter.approximate_presence_count
        else this.online = null

        if(invite.approximate_member_count) this.members = invite.approximate_member_count
        else this.member = null

        if(invite.expires_at) this.expires = invite.expires_at
        else this.expires = null


    }
    toString(){
        return this.code
    }
    async delete(){
        const invite = await methods.deleteInvite(this.code)
        return new this(invite)
    }
}
