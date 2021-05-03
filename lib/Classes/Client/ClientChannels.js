const fetch = require('node-fetch')
const get = require('../../Api/Get')
const Text = require('../Channel/Text')
const DM = require('../Channel/DM')
const Voice = require('../Channel/Voice')
const Category = require('../Channel/Category')
const Channel = require('../Channel/Channel')
class ClientChannels {
    constructor(client) {
        this.client = client
    }
    async find(id) {
        const channel = await get.channel(id, this.client.token)
        if (channel.type || channel.type === 0) {
            if (channel.type === 0) return new Text(channel, this.client)
            else if (channel.type === 1) return new Dm(channel, this.client)
            else if (channel.type === 2) return new Voice(channel, this.client)
            else if (channel.type === 3) return new Channel(channel, this.client) // should not be possible
            else if (channel.type === 4) return new Category(channel, this.client)
            else if (channel.type === 5) return new Channel(channel, this.client) // this and below are not yet supported
            else if (channel.type === 6) return new Channel(channel, this.client)
            else if (channel.type === 13) return new Channel(channel, this.client)
        }
        else return channel.type
    }
}
module.exports = ClientChannels