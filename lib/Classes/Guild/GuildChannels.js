const get = require('../../Api/Get')
const util = require('../../Util/channels')
module.exports = class GuildChannels {
    constructor(client, guild) {
        this.client = client
        this.guild = guild
    }
    async find(channelid) {
        const channeldata = await get.channel(channelid, this.client.token)
        const channel = util.getChannel(channeldata, this.client)
        return channel
    }
}