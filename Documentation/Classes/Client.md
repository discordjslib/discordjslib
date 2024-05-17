# A Client represents a [Discord Client](https://discord.com/developers/applications)
```js
new Discord().Client(token, options)
```

## Properties:

`.user` returns the Client as a User [Object](https://javascript.info/object)

`.token` returns the token supplied in the constructor [String](https://javascript.info/types#string)

`.users` returns a ClientUsers [Object](https://javascript.info/object)

`.channels` returns a ClientChannels [Object](https://javascript.info/object)

`.roles` returns a ClientRoles [Object](https://javascript.info/object)

`.guilds` returns a ClientGuilds [Object](https://javascript.info/object)

## Events:
`client.on('event', () => {})`

`message` Emits when a Message is sent - parameter: Message object

`channelCreate` Emits when a Channel is deleted - parameter: Channel object

`channelUpdate` Emits when a Channel is updated - parameter: Channel object

`channelDelete` Emits when a Channel is deleted - parameter: Message object

`channelPinsUpdate` Emits when the pins of a Channel is updated - parameter: Channel object

`guildJoin` Emits when the Client is added to a new server - parameter: Guild object

`guildUpdate` Emits when a Guild is updated - parameter: Guild object

`guildLeave` Emits when a Client is removed or has left a server - parameter: Guild object

`guildBan` Emits when a GuildMember is banned from a server - parameter: Guild and User, object

`guildUnban` Emits when a User is unbanned from a server


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Client/Client.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md) 🡣
