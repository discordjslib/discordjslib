const get = require('../../Api/Get')
const methods = require('../../Api/Methods')

const Guild = require('../Guild/Guild')
const Message = require('../Message/Message')
const GuildMember = require('../User/GuildMember')

module.exports = class ChannelMessages {
    constructor(channel, client) {
        this.channel = channel
        this.client = client
    }
    async find(id) {
        let message = await get.message(id, this.channel.id, this.client.token)
        if (message.message) throw new Error(message.message)

        if(this.channel.guildID){
        const guilddata = await get.guild(this.channel.guildID, this.client.token)
        if (guilddata.message) throw new Error(guilddata.message)
        message.guild = new Guild(guilddata, this.client)
        } else message.guild = null

        const memberdata = await get.member(message.guild.id, id, this.client.token)
        if (memberdata.message) throw new Error(memberdata.message)
        message.member = new GuildMember(memberdata, guilddata, this.client)

        return new Message(message, this.channel, this.client.token)
    }
    async delete(amount) {
        return (await methods.deleteMessages(amount))
    }

}