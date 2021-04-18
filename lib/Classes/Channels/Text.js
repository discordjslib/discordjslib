const get = require('../../get')
const methods = require('../../methods')
const ServerChannel = require('./ServerChannel')
const Message = require('../Messages/Message')
const Guild = require('../Guild')
const ChannelMessages = require('./ChannelMessages')
class Text extends ServerChannel {
    constructor(channel, token) {
        super(channel, token)
        this.token = token
        async function guildValue(channel, token) {
            const guild = await get.guild(channel.guild_id, token)
            if (channel.guild_id) return new Guild(guild, token)
            else return null
        }
        this.guild = guildValue(channel, this.token)
        this.messages = new ChannelMessages(this, token)
    }
    async send(content) {
        const msg = await methods.send(this.id, content, this.token)
        return new Message(msg, this, this.token)
    }
    async topic(topic, reason){
        channel = await methods.topic(topic, this.id, this.token, reason)
        return channel
    }
}
module.exports = Text