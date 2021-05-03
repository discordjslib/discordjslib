const Client = require('./Classes/Client/Client')
const ClientChannels = require('./Classes/Client/ClientChannels')
const ClientUsers = require('./Classes/Client/ClientUsers')

const Guild = require('./Classes/Guild/Guild')
const Role = require('./Classes/Guild/Role')
const Message = require('./Classes/Message/Message')
const Reaction = require('./Classes/Message/Reaction')
const User = require('./Classes/User/User')
const Channel = require('./Classes/Channel/Category')
const Category = require('./Classes/Channel/Category')
const ChannelMessages = require('./Classes/Channel/ChannelMessages')
const DM = require('./Classes/Channel/DM')
const ServerChannel = require('./Classes/Channel/ServerChannel')
const Text = require('./Classes/Channel/Text')
const Voice = require('./Classes/Channel/Voice')
const MessageEmbed = require('./Classes/Message/MessageEmbed')

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