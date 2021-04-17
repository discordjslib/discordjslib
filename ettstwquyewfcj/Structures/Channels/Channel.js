
const get = require('../../get')

const Guild = require('../Guild')

class Channel {
    constructor(channel, token) {
        const type = {
            0: 'text',
            1: 'dm',
            2: 'voice',
            3: 'ur trying to use a self bot LOL', // GROUP_DM
            4: 'category',
            5: 'news',
            6: 'store',
            7: 'channel',
            13: 'stage',
        }
        async function guildValue() {
            const guild = await get.guild(channel.guild_id)
            if (channel.guild_id) return new Guild(channel.guild_id)
            else return null
        }
        this.id = channel.id
        this.type = type[String(channel.type)]
        this.guild = guildValue()
        this.lastMessageID = channel.last_message_id
    }
}
module.exports = Channel