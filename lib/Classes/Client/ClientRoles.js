const get = require("../../Api/Get");
const Role = require("../Guild/Role");

module.exports = class ClientRoles {
  constructor(client) {
    this.client = client;
  }
  async find(id) {
    const data = await get.role(id, this.client.token);
    return new Role(this.client, data);
  }
};
