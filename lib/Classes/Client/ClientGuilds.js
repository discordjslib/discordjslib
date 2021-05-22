const get = require("../../Api/Get");
const util = require("../../Util");
const Guild = require("../Guild/Guild");

module.exports = class ClientGuilds {
  constructor(client) {
    this.client = client;
  }
  async find(id) {
    const guilds = this.client.cache.options.guilds;
    if (!util.emptyObject(guilds)) {
      if (guilds.contains(id)) {
        console.log("yay");
        return this.client.cache.options.guilds.search(id);
      }
    } else {
      const guilddata = await get.guild(id, this.client.token);
      if (guilddata.code) throw new Error(guilddata.message);
      else return new Guild(guilddata, this.client);
    }
  }
};
