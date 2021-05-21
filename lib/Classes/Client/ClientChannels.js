const get = require("../../Api/Get");
const util = require("../../Util");

module.exports = class ClientChannels {
  constructor(client) {
    this.client = client;
  }
  async find(id) {
    const channel = await get.channel(id, this.client.token);
    return util.getChannel(channel, client);
  }
};
