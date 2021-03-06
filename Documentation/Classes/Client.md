# A Client represents a [Discord Client](https://discord.com/developers/applications)
```js
new Discord().Client(token, options)
```

## Properties:

`.user` returns the client as a user [Object](https://javascript.info/object)

`.token` returns the token supplied in the constructor [String](https://javascript.info/types#string)

`.users` returns a ClientUsers class

`.channels` returns a ClientChannels class

`.roles` returns a ClientRoles class

`.guilds` returns a ClientGuilds class

## Events:
`client.on('event', () => {})`

`message` Emits when a message is sent - parameter: message object

`channelCreate` Emits when a channel is deleted - parameter: channel object

`channelUpdate` Emits when a channel is updated - parameter: channel object

`channelDelete` Emits when a channel is deleted - parameter: message object

`channelPinsUpdate` Emits when the pins of a channel is updated - parameter: channel object

`guildJoin` Emits when the client is added to a new server - parameter: guild object

`guildUpdate` Emits when a guild is updated - parameter: guild object

`guildLeave` Emits when a client is removed or has left a server - parameter: guild object

`guildBan` Emits when a GuildMember is banned from a server - parameter: guild and user, object

`guildUnban` Emits when a user is unbanned from a server


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Client/Client.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md)