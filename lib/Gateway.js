const WebSocket = require('ws')
const wss = new WebSocket('wss://gateway.discord.gg/?v=8&encoding=json')

const get = require('./get')
const util = require('./Util/channels')

const Message = require('./Classes/Messages/Message')
const Channel = require('./Classes/Channels/Channel')
const Guild = require('./Classes/Guild/Guild')
const User = require('./Classes/User')
function heartbeat(ms) {
    return setInterval(() => {
        wss.send(JSON.stringify({ op: 2, d: null }))
    }, ms)
}
module.exports = async (client, payload) => {
    const { t, d } = payload
    switch (t) {
        case ('MESSAGE_CREATE'):
            let channel = await get.channel(d.channel_id, client.token)
            let user = await get.user(d.author.id, client.token)
            d.user = new User(client, user)
            if(d.channel) delete d.channel
            const message = new Message(d, util.getChannel(channel, client), client)
            client.emit('message', message)
            break
        case ('CHANNEL_CREATE'):
            channel = util.getChannel(d, client)
            client.emit('channelCreate', channel)
            break
        case ('CHANNEL_UPDATE'):
            channel = util.getChannel(d, client)
            client.emit('channelUpdate', channel)
            break
        case ('CHANNEL_DELETE'):
            channel = util.getChannel(d, client)
            client.emit('channelDelete', channel)
            break
        case ('CHANNEL_PINS_UPDATE'):
            channel = util.getChannel(d, client)
            client.emit('channelPinsUpdate', channel)
            break
        case ('GUILD_CREATE'):
            let guild = new Guild(d, client)
            client.emit('guildJoin', guild)
            break
        case ('GUILD_UPDATE'):
            guild = new Guild(d, client)
            client.emit('guildUpdate', guild)
            break
        case ('GUILD_DELETE'):
            guild = new Guild(d, client)
            client.emit('guildLeave', guild)
            break
        case ('GUILD_BAN_ADD'):
            user = new User(client, d.user)
            let guilddata = await get.guild(d.guild_id, client.token)
            guild = new Guild(guilddata, client)
            client.emit('guildBan', guild, user)
            break
        case ('GUILD_BAN_REMOVE'):
            client.emit('guildUnban', 10)
            break
    }
}