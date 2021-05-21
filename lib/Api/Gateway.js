const WebSocket = require("ws");
const wss = new WebSocket("wss://gateway.discord.gg/?v=8&encoding=json");
const get = require("./Get");
const util = require("../Util");
const Message = require("../Classes/Message/Message");
const Guild = require("../Classes/Guild/Guild");
const User = require("../Classes/User/User");
const GuildMember = require("../Classes/User/GuildMember");
const Presence = require("../Classes/User/Presence");

let channel;
let user;
let guild;
let guilddata;
module.exports = async (client, payload) => {
  client.emit("raw", payload);
  const { t, d } = payload;
  switch (t) {
    case "MESSAGE_CREATE":
      channel = await get.channel(d.channel_id, client.token);
      user = await get.user(d.author.id, client.token);
      guild = await get.guild(d.guild_id, client.token);
      d.guild = new Guild(guild, client);

      d.user = new User(client, user);
      const memberdata = await get.member(guild.id, d.user.id, client.token);
      d.member = new GuildMember(memberdata, d.guild, client);
      if (d.channel) delete d.channel;
      const message = new Message(d, util.getChannel(channel, client), client);
      client.emit("message", message);
      break;
    case "CHANNEL_CREATE":
      channel = util.getChannel(d, client);
      client.emit("channelCreate", channel);
      break;
    case "CHANNEL_UPDATE":
      channel = util.getChannel(d, client);
      client.emit("channelUpdate", channel);
      break;
    case "CHANNEL_DELETE":
      channel = util.getChannel(d, client);
      client.emit("channelDelete", channel);
      break;
    case "CHANNEL_PINS_UPDATE":
      channel = util.getChannel(d, client);
      client.emit("channelPinsUpdate", channel);
      break;
    case "GUILD_CREATE":
      guild = new Guild(d, client);
      if (client.cache.guilds) client.cache.options.guilds.add(guild);
      client.emit("guildJoin", guild);
      break;
    case "GUILD_UPDATE":
      guild = new Guild(d, client);
      client.emit("guildUpdate", guild);
      break;
    case "GUILD_DELETE":
      guild = new Guild(d, client);
      client.emit("guildLeave", guild);
      break;
    case "GUILD_BAN_ADD":
      user = new User(client, d.user);
      guilddata = await get.guild(d.guild_id, client.token);
      guild = new Guild(guilddata, client);
      client.emit("guildBan", guild, user);
      break;
    case "GUILD_BAN_REMOVE":
      client.emit("guildUnban", new User(client, d));
      break;
    case "PRESENCE_UPDATE":
      user = new User(client, d);
      client.emit("presenceUpdate", new Presence(client, d, user));
      break;
    case "TYPING_START":
      user = new User(client, d);
      channel = util.getChannel(
        await get.channel(d.channel_id, client.token),
        client
      );
      if (d.guild_id && d.member) {
        guild = new Guild(await get.guild(d.guild_id, client.token), client);
        channel.guild = guild;
        user.member = new GuildMember(d.member, guild, client);
      }
      client.emit("typingStart", user, channel);
    default:
      "raw";
      client.emit("raw", payload);
      break;
  }
};
