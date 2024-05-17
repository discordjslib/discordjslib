const fetch = require('node-fetch')
const get = require('../../Api/Get')
const Text = require('../Channel/Text')
const DM = require('../Channel/DM')
const Voice = require('../Channel/Voice')
const Category = require('../Channel/Category')
const Channel = require('../Channel/Channel')
const News = require('../Channel/News')
const Store = require('../Channel/Store')
const Stage = require('../Channel/Stage')
module.exports = class ClientChannels {
    constructor(client) {
        this.client = client
    }
    async find(id) {
        const channel = await get.channel(id, this.token)
        if (channel.type || channel.type === 0) {
            if (channel.type === 0) return new Text(channel, this)
            else if (channel.type === 1) return new Dm(channel, this)
            else if (channel.type === 2) return new Voice(channel, this)
            else if (channel.type === 3) return new Channel(channel, this) // should not be possible (self bots)
            else if (channel.type === 4) return new Category(channel, this)
            else if (channel.type === 5) return new News(channel, this)
            else if (channel.type === 6) return new Store(channel, this)
            else if (channel.type === 13) return new Stage(channel, this)
        }
        else return new Channel(channel, this.client)
    }
}