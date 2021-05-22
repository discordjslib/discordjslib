const get = require("../../Api/Get");
const methods = require("../../Api/Methods");
const util = require("../../Util");

module.exports = class GuildChannels {
  constructor(client, guild) {
    this.client = client;
    this.guild = guild;
  }
  async find(channelid) {
    const channeldata = await get.channel(channelid, this.client.token);
    const channel = util.getChannel(channeldata, this.client);
    return channel;
  }
  async findAll() {
    return;
  }
  async create(options) {
    const channel = await methods.channel.create(
      this.guild.id,
      options,
      this.client.token
    );
    if (channel.message) throw new Error(channel.message);
    return util.getChannel(channel, this.client);
  }
};
