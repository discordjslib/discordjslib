const DataStructure = require("../../Util").DS();
class GuildsCache extends DataStructure {
  constructor(client) {}
}
module.exports = class ClientCaching {
  constructor(client, options) {
    this.client = client;
    this.options = options || {};

    this.options.guilds = {}
    this.options.channels = {};
    this.options.members = {};
    this.options.users = {};
    this.options.messages = {};
    this.options.emojis = {};

    this.update = () => {
      if (!options) return;
      if (options.includes("GUILDS"))
        this.options.guilds = new GuildsCache(client);

      if (options.includes("CHANNELS")) this.options.channels = {};

      if (options.includes("MEMBERS")) this.options.members = {};

      if (options.includes("USERS")) this.options.users = {};

      if (options.includes("MESSAGES")) this.options.messages = {};

      if (options.includes("EMOJIS")) this.options.emojis = {};
    };
    this.update();
  }
  save(cache) {
    this.options = cache;
    this.update();
  }
  delete(cache) {
    this.options = cache;
    this.update();
  }
};
