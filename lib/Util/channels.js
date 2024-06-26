const Channel = require('../Classes/Channel/Channel')
const DMChannel = require('../Classes/Channel/DM')
const Text = require('../Classes/Channel/Text')
const Voice = require('../Classes/Channel/Voice')
const Category = require('../Classes/Channel/Category')
const Stage = require('../Classes/Channel/Stage')
const News = require('../Classes/Channel/News')
const Store = require('../Classes/Channel/Store')
exports.getChannel = (channel, token, guild) => {
    switch (channel.type) {
        case (0):
            return new Text(channel, token, guild)
        case (1):
            return new DMChannel(channel, token)
        case (2):
            return new Voice(channel, token, guild)
        case (3):
            return new Channel(channel, token)
        case (4):
            return new Category(channel, token, guild)
        case (5):
            return new News(channel, token, guild)
        case (6):
            return new Store(channel, token, guild)
        case (13):
            return new Stage(channel, token, guild)
        default:
            return new Channel(channel, token)
    }
}
