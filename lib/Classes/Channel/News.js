const ServerChannel = require("./ServerChannel");

module.exports = class News extends ServerChannel {
  constructor(channel, client) {
    super(channel, client);
  }
};
