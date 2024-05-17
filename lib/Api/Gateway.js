const WebSocket = require('ws');
const get = require('./Get');
const util = require('../Util/channels');
const Message = require('../Classes/Message/Message');
const Channel = require('../Classes/Channel/Channel');
const Guild = require('../Classes/Guild/Guild');
const User = require('../Classes/User/User');
const GuildMember = require('../Classes/User/GuildMember');
const Presence = require('../Classes/User/Presence');

const wss = new WebSocket('wss://gateway.discord.gg/?v=8&encoding=json');

/**
 * Processes raw gateway payloads.
 * @param {Client} client The client that the event is being triggered by.
 * @param {Object} payload The raw gateway payload data.
 * @returns {Promise}
 */
module.exports = async (client, payload) => {
    const { t, d } = payload;
    let channel, user, guild, guilddata;
    switch (t) {
        /**
         * Triggered when a new message is created.
         *
         * Emits the `message` event.
         * @event Client#message
         */
        case 'MESSAGE_CREATE':
            try {

                [channel, user, guild, member] = await Promise.all([
                    get.channel(d.channel_id, client.token),
                    get.user(d.author.id, client.token),
                    get.guild(d.guild_id, client.token),
                    get.member(d.guild_id, d.author.id, client.token)
                ]);

                d.guild = new Guild(guild, client);

                d.user = new User(client, user);

                d.member = new GuildMember(member, d.guild, client);

                delete d.channel;

                const message = new Message(d, util.getChannel(channel, client), client);

                client.emit('message', message);
            } catch (error) {
                console.error('Error processing MESSAGE_CREATE:', error);
            }
            break;

        /**
         * Triggered when a new channel is created.
         *
         * Emits the `channelCreate` event.
         * @event Client#channelCreate
         */
        case 'CHANNEL_CREATE':
            try {
                channel = util.getChannel(d, client);
                client.emit('channelCreate', channel);
            } catch (error) {
                console.error('Error processing CHANNEL_CREATE:', error);
            }
            break;

        /**
         * Triggered when a channel is updated.
         *
         * Emits the `channelUpdate` event.
         * @event Client#channelUpdate
         */
        case 'CHANNEL_UPDATE':
            try {
                channel = util.getChannel(d, client);
                client.emit('channelUpdate', channel);
            } catch (error) {
                console.error('Error processing CHANNEL_UPDATE:', error);
            }
            break;

        /**
         * Triggered when a channel is deleted.
         *
         * Emits the `channelDelete` event.
         * @event Client#channelDelete
         */
        case 'CHANNEL_DELETE':
            try {
                channel = util.getChannel(d, client);
                client.emit('channelDelete', channel);
            } catch (error) {
                console.error('Error processing CHANNEL_DELETE:', error);
            }
            break;

        /**
         * Triggered when a channel's pins are updated.
         *
         * Emits the `channelPinsUpdate` event.
         * @event Client#channelPinsUpdate
         */
        case 'CHANNEL_PINS_UPDATE':
            try {
                channel = util.getChannel(d, client);
                client.emit('channelPinsUpdate', channel);
            } catch (error) {
                console.error('Error processing CHANNEL_PINS_UPDATE:', error);
            }
            break;

        /**
         * Triggered when the client joins a new guild.
         *
         * Emits the `guildJoin` event.
         * @event Client#guildJoin
         */
        case 'GUILD_CREATE':
            try {
                guild = new Guild(d, client);
                client.emit('guildJoin', guild);
            } catch (error) {
                console.error('Error processing GUILD_CREATE:', error);
            }
            break;

        /**
         * Triggered when a guild is updated.
         *
         * Emits the `guildUpdate` event.
         * @event Client#guildUpdate
         */
        case 'GUILD_UPDATE':
            try {
                guild = new Guild(d, client);
                client.emit('guildUpdate', guild);
            } catch (error) {
                console.error('Error processing GUILD_UPDATE:', error);
            }
            break;

        /**
         * Triggered when the client leaves a guild.
         *
         * Emits the `guildLeave` event.
         * @event Client#guildLeave
         */
        case 'GUILD_DELETE':
            try {
                guild = new Guild(d, client);
                client.emit('guildLeave', guild);
            } catch (error) {
                console.error('Error processing GUILD_DELETE:', error);
            }
            break;

        /**
         * Triggered when a user is banned from a guild.
         *
         * Emits the `guildBan` event.
         * @event Client#guildBan
         */
        case 'GUILD_BAN_ADD':
            try {
                user = new User(client, d.user);
                guilddata = await get.guild(d.guild_id, client.token);
                guild = new Guild(guilddata, client);
                client.emit('guildBan', guild, user);
            } catch (error) {
                console.error('Error processing GUILD_BAN_ADD:', error);
            }
            break;

        /**
         * Triggered when a user is unbanned from a guild.
         *
         * Emits the `guildUnban` event.
         * @event Client#guildUnban
         */
        case 'GUILD_BAN_REMOVE':
            try {
                user = new User(client, d)
                client.emit('guildUnban', user);
            } catch (error) {
                console.error('Error processing GUILD_BAN_REMOVE:', error);
            }
            break;

        /**
         * Triggered when a user's presence is updated.
         *
         * Emits the `presenceUpdate` event.
         * @event Client#presenceUpdate
         */
        case 'PRESENCE_UPDATE':
            try {
                client.emit('presenceUpdate', new Presence(client, d));
            } catch (error) {
                console.error('Error processing PRESENCE_UPDATE:', error);
            }
            break;

        /**
         * Triggered when a user starts typing in a channel.
         *
         * Emits the `typingStart` event.
         * @event Client#typingStart
         */
        case 'TYPING_START':
            try {

                user = new User(client, d);
                const channeldata = await get.channel(d.channel_id, client.token);
                channel = util.getChannel(await get.channel(d.channel_id, client.token), client);
                if (d.guild_id && d.member) {
                    guild = new Guild(await get.guild(d.guild_id, client.token), client);
                    channel.guild = guild;
                    user.member = new GuildMember(d.member, guild, client);
                }
                client.emit('typingStart', user, channel);
            } catch (error) {
                console.error('Error processing TYPING_START:', error);
            }
            break;

        default:
            client.emit('raw', payload);
            break;
    }
};

