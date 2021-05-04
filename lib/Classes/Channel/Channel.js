
const get = require('../../Api/Get')

const Guild = require('../Guild/Guild')

module.exports = class Channel {
    constructor(channel, client) {
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
        if (!channel) return
        this.client = client
        this.id = channel.id
        this.type = type[String(channel.type)]
    }
}