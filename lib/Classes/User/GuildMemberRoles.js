const Role = require("../Guild/Role");
const get = require("../../Api/Get");

module.exports = class GuildMemberRoles {
  constructor(member, client) {
    this.member = member;
    this.client = client;
  }
  async find(roleString) {
    if (typeof roleString === "string")
      if (!isNaN(roleString)) {
        const roles = await get.roles(this.member.guild.id, this.client.token);
        const role = roles.find((r) => r.id === roleString);
        if (!role) return null;
        else return new Role(role, this.member.guild, this.client);
      } else {
        const roles = await get.roles(this.member.guild.id, this.client.token);
        const role = roles.find((r) => r.name === roleString);
        if (!role) return null;
        else return new Role(role, this.member.guild, this.client);
      }
  }
};
