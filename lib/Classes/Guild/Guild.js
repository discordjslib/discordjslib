const get = require('../../Api/Get');
const methods = require('../../Api/Methods');
const User = require('../User/User');
const GuildUsers = require('./GuildUsers');
const GuildChannels = require('./GuildChannels');
const GuildInvite = require('./Invite');
const Role = require('./Role');
module.exports = class Guild {
     constructor(guild, client) {
          this.client = client;
          this.id = guild.id;
          this.avaliable = !guild.unavaliable || true;
          if (!this.unavaliable) {
               this.banner = guild.banner;
               this.emojis = guild.emojis;
               this.features = guild.features;
               this.systemChannelID = guild.system_channel_id;
               this.vanity = guild.vanity_url_code;
               this.nitroLevel = guild.premium_tier;
               this.nitroCount = guild.premium_subscription_count;
               this.region = guild.region;
               this.name = guild.name;
               this.icon = guild.icon;
               this.mfaLevel = guild.mfa_level;
               this.nsfw = guild.nsfw;
               const users = new GuildUsers(client, this),
                    roles = guild.roles.map((r) => new Role(r, this, client)),
                    channels = new GuildChannels(client, this);
               //this.members = new GuildMembers(client, this)
               this.users = users;
               this.roles = roles;
               this.channels = channels;
               if (guild.owner) {
                    const owner = new User(this.client, guild.owner);
                    this.owner = owner;
               } else this.owner = null;

               this.ownerID = guild.owner_id;
               this.invites = {
                    find: async (code) => {
                         const invite = await get.invites.get(code, client.token);
                         return new GuildInvite(invite, client);
                    },
               };
          }
     }
     async findOwner() {
          if (!this.owner) {
               const user = await get.user(this.ownerID, this.client.token);
               if (user.message) throw new Error(user.message);
               else return new User(this.client, user);
          } else return this.owner;
     }
     leave() {
          const guild = methods.leave(this, this.client);
          return new Guild(guild, this.client);
     }
     delete(id) {
          try {
               methods.guild.delete(id, this.client.token);
               return true;
          } catch (err) {
               return false;
          }
     }
};
