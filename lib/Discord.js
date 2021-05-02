const Client = require('./Classes/Client/Client')
const ClientChannels = require('./Classes/Client/ClientChannels')
const ClientUsers = require('./Classes/Client/ClientUsers')

const Guild = require('./Classes/Guild/Guild')
const Role = require('./Classes/Role')
const Message = require('./Classes/Messages/Message')
const Reaction = require('./Classes/Messages/Reaction')
const User = require('./Classes/User')
const Channel = require('./Classes/Channels/Category')
const Category = require('./Classes/Channels/Category')
const ChannelMessages = require('./Classes/Channels/ChannelMessages')
const DM = require('./Classes/Channels/DM')
const ServerChannel = require('./Classes/Channels/ServerChannel')
const Text = require('./Classes/Channels/Text')
const Voice = require('./Classes/Channels/Voice')
const MessageEmbed = require('./Classes/Messages/MessageEmbed')

class Discord {
    constructor() {
    }
    Client(token) {
        return new Client(token)
    }
    ClientChannels(client){
        return new ClientChannels(client)
    }
    ClientUsers(client){
        return new ClientUsers(client)
    }
    Message(message, channel, client){
        return new Message(message, channel, client)
    }
    MessageEmbed(data){
        return new MessageEmbed(data)
    }
    Reaction(reaction, message, client){
        return new Reaction(reaction, message, client)
    }
    Guild(guild, client){
        return new Guild(guild, client)
    }
    Role(role, guild, client){
        return new Role(role, guild, client)
    }
    User(client, user, member){
        return new User(client, user, member)
    }
    Channel(channel, client){
        return new Channel(channel, client)
    }
    Category(channel, client){
        return new Category(channel, client)
    }
    ChannelMessages(channel, client){
        return new ChannelMessages(channel, client)
    }
    DMChannel(channel, client){
        return new DM(channel, client)
    }
    ServerChannel(channel, client){
        return new ServerChannel(channel, client)
    }
    Text(channel, client){
        return new Text(channel, client)
    }
    Voice(channel, client){
        return new Voice(channel, client)
    }
}
module.exports = Discord