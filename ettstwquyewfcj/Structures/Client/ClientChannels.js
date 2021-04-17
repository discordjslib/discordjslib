const fetch = require('node-fetch')
const get = require('../../get')
const ChannelMessages = require('../Channels/ChannelMessages')
const Text = require('../Channels/Text')
const DM = require('../Channels/DM')
const Voice = require('../Channels/Voice')
const Category = require('../Channels/Category')
class Channels {
    constructor(token) {
        this.token = token
    }
    async find(id) {
        const channel = await get.channel(id, this.token)
    if (channel.type || channel.type === 0) {
            if (channel.type === 0) return new Text(channel, this.token)
            else if (channel.type === 1) return new DmChannel(channel, this.token)
            else if (channnel.type === 2) return new Voice(channel, this.token)
            else if (channel.type === 3) return new Channel(channel, this.token) // should not be possible
            else if (channel.type === 4) return new Category(channel, this.token)
            else if (channel.type === 5) return new Channel(channel, this.token) // this and below are not yet supported
            else if (channel.type === 6) return new Channel(channel, this.token)
            else if (channel.type === 13) return new Channel(channel, this.token)
        }
        else return channel.type
    }
}
module.exports = Channels