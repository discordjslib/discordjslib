const GuildMember = require('../User/GuildMember')
class ClientMembers {
    constructor(client){
        this.client = client
    }
    async find(memberid, guildid){
        const memberdata = await get.member(guildid, memberid, this.client.token)
        const guilddata = await get.guild(guildid, this.client.token)
        if(guilddata.code) return null
        else return new GuildMember(memberdata, guilddata, this.client)
    }
}
