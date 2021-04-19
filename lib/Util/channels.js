const Channel = require('../Classes/Channels/Channel')
const ServerChannel = require('../Classes/Channels/ServerChannel')
const DMChannel = require('../Classes/Channels/DM')
const Text = require('../Classes/Channels/Text')
const Voice = require('../Classes/Channels/Voice')
const Category = require('../Classes/Channels/Category')
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
