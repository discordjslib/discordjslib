const methods = require('../../Api/Methods');
const get = require('../../Api/Get');

module.exports = class Message {
     constructor(message, channel, client) {
          this.channel = channel;
          this.mentions = {}; // to do
          if (message.member) this.guild = message.member.guild || channel.guild || message.guild || null;
          this.id = message.id;
          this.client = client;
          this.content = message.content || null;
          this.tts = message.tts || null;
          this.attachements = message.attachements || null;
          this.pinned = message.pinned;
          this.webhook = message.webhook_id ? true : false;
          this.webhookID = message.webhook_id || null;
          this.reference = message.message_reference || false;
          this.guildID = message.guild_id || null;
          this.user = message.user || null;
          this.member = message.member || null;
     }
     async findMember() {
          const member = await get.member(this.guildID, this.user.id, this.client.token);
          return member;
     }
     async react(emoji) {
          let message = await methods.react(this.id, this.channel.id, emoji, this.client.token);
          if (message['Symbol(Response internals)']) throw new Error('Invalid Emoji');
          return this;
     }
     async reply(content, embed) {
          if (typeof content === 'string' && !embed) {
               const message = await methods.reply(this.id, this.channel.id, content, this.client.token);
               if (message.code) throw new Error(`${message.message}`);
               return new Message(message, this.channel, this.client);
          } else if (typeof content === 'object') {
               const message = await methods.replyEmbed(this.id, this.channel.id, content, this.client.token);
               if (message.code) throw new Error(`${message.message}`);
               return new Message(message, this.channel, this.client);
          } else if (typeof content === 'function') {
               if (content.toObject()) {
                    const message = await methods.replyEmbed(this.id, this.channel.id, content.toObject(), this.client.token);
                    if (message.code) throw new Error(`${message.message}`);
                    return new Message(message, this.channel, this.client);
               } else throw new Error('Invalid .reply() paramater');
          } else if (typeof content === 'string' && embed) {
               const message = await methods.messageAndEmbed(this.id, this.channel.id, content, this.client.token);
               if (message.code) throw new Error(`${message.message}`);
               return new Message(message, this.channel, this.client);
          }
     }
     async edit(content) {
          let message = await methods.edit(this.id, this.channel.id, String(content), this.client.token);
          if (message.message) throw new Error(message.message);
          return new Message(message, this.channel, this.client);
     }
     async delete() {}
};
