const util = require('../../Util/channels')
const get = require('../../Api/Get')
module.exports = class GuildChannels {
    constructor(guild, client){
        this.guild = guild
        this.client = client

    }
    async find(channelid) {
        const channeldata = await get.channel(channelid, this.client.token)
        const channel = util.getChannel(channeldata, this.client)
        return channel
    }
    async findAllChannels() {
        const allChannels = await get.allChannels(this.guild.id, this.client.token)
        const channels = allChannels.map(c => util.getChannel(c, this.client, this.guild))
        return channels

    }
}