
const get = require('../../get')

const Guild = require('../Guild')

class Channel {
    constructor(channel, token) {
        const type = {
            0: 'text',
            1: 'dm',
            2: 'voice',
            3: 'dm', // GROUP_DM
            4: 'category',
            5: 'news',
            6: 'store',
            7: 'channel',
            13: 'stage',
        }
        if(!channel) return
        this.id = channel.id
        this.type = type[String(channel.type)]
        this.guild = null
        this.lastMessageID = channel.last_message_id
    }
}
module.exports = Channel