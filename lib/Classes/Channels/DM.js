const Channel = require("./Channel");
const ChannelMessages = require('./ChannelMessages')
class DM extends Channel {
    constructor(channel, client) {
        super(channel, client)
        this.messages = new ChannelMessages(this, this.client)
        this.lastMessageID = channel.last_message_id
    }
}
module.exports = DM