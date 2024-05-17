const Channel = require('./Channel')
module.exports = class Category extends Channel {
    constructor(channel, client, guild) {
        super(channel, client)
        this.guild = guild || null
        this.isCategory = true
    }
 
    async findChildren(){
        let channels = await this.guild.channels.findAllChannels()
        channels = channels.filter(c => c.parentID === this.id)
        return channels
    }

}