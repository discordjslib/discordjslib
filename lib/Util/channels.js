const Channel = require('../Classes/Channel/Channel')
const ServerChannel = require('../Classes/Channel/ServerChannel')
const DMChannel = require('../Classes/Channel/DM')
const Text = require('../Classes/Channel/Text')
const Voice = require('../Classes/Channel/Voice')
const Category = require('../Classes/Channel/Category')
exports.getChannel = (channel, token) => {
    switch (channel.type) {
        case (0):
            return new Text(channel, token)
        case (1):
            return new DMChannel(channel, token)
        case (2):
            return new Voice(channel, token)
        case (3):
            return new DMChannel(channel, token)
        case (4):
            return new Category(channel, token)
        case (5):
            return new ServerChannel(channel, token)
        case (6):
            return new ServerChannel(channel, token)
        case (13):
            return new ServerChannel(channel, token)
        default:
            return new Channel(channel, token)
    }
}
