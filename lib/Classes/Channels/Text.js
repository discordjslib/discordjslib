const get = require('../../get')
const methods = require('../../methods')
const ServerChannel = require('./ServerChannel')
const Message = require('../Messages/Message')
const Guild = require('../Guild')
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
    }
    async send(content) {
        const msg = await methods.send(this.id, content, this.token)
        return new Message(msg, this, this.token)
    }
}
module.exports = Text