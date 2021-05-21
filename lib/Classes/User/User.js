const get = require("../../Api/Get");
const methods = require("../../Api/Methods");
const util = require("../../Util");
const Message = require("../Message/Message");

module.exports = class User {
  constructor(client, user) {
    if (!user) return;
    this.client = client;

    this.id = user.id;

    this.name = user.username;

    this.discriminator = user.discriminator;

    this.mention = `<@${user.id}>`;

    if (user.bot) this.bot = true;
    else this.bot = false;

    if (user.system) this.system = user.system;
    else this.system = false;

    if (user.flags) this.flags = user.flags;
    else this.flags = null;

    if (user.avatar) this.avatar = avatar(this.id, user.avatar);
    else this.avatar = null;

    function avatar(id, av) {
      if (av.startsWith("a_"))
        return `https://cdn.discordapp.com/avatars/${id}/${av}.gif`;
      else return `https://cdn.discordapp.com/avatars/${id}/${av}`;
    }
  }
  async dm(content) {
    const message = await methods.dm(this.id, content, this.client.token);
    let channel = await get.channel(message.channel_id, this.client.token);
    channel = util.getChannel(channel, this.client);
    if (this.id === this.client.user.id) throw new Error("Cannot dm this user");
    let user = new Message(message, channel, this.client);
    return user;
  }
};
