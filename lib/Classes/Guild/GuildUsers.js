const get = require("../../Api/Get");
const User = require("./../User/User");

module.exports = class GuildUsers {
  constructor(client, guild) {
    this.client = client;
    this.guild = guild;
  }
  async findAll() {
    await methods.guildmembers(this.guild.id, this.client.token);
  }
  async find(user) {
    if (user.id) {
      const userdata = await get.user(user.id, this.client.token);
      const memberdata = await get.member(
        this.guild.id,
        user.id,
        this.client.token
      );
      return new User(client, userdata, memberdata);
    } else if (typeof user === "string") {
      const userdata = await get.user(user, this.client.token);
      const memberdata = await get.member(
        this.guild.id,
        user,
        this.client.token
      );
      return new User(this.client, userdata, memberdata);
    } else return null;
  }
};
