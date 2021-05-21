module.exports = class Reaction {
  constructor(reaction, message, client) {
    this.client = client;
    this.message = message;
    this.users = null;
    this.emoji = reaction.emoji;
    this.reacted = reaction.me;
  }
};
