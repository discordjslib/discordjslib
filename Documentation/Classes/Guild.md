# A Guild is a [Discord Guild](https://discord.com/developers/docs/resources/guild)
```js
new Discord().Guild(guild, client)
```

## Properties: 

`.id` returns [String](https://javascript.info/types#string)

`.avaliable` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.name` returns [String](https://javascript.info/types#string)

`.icon` returns [String](https://javascript.info/types#string)

`.region` returns [String](https://javascript.info/types#string)

`.memberCount` returns [Number](https://javascript.info/types#number)

`.banner` returns [String](https://javascript.info/types#string)

`.nitroLevel` returns [Number](https://javascript.info/types#number)

`.nitroCount` returns [Number](https://javascript.info/types#number)

`.vanity` returns [String](https://javascript.info/types#string)

`.roles` list of role objects in the guild - returns [Array](https://javascript.info/array)

`.channels` list of channel objects in the guild - returns [Array](https://javascript.info/array)

`.users` returns [GuildUsers](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#GuildEmojis)

`.emojis` returns [GuildEmojis](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#GuildEmojis)

`.owner` the owner of the guild (may be null) - returns user [Object](https://javascript.info/object)

`.admins` list of user objects with the administrator permission returns [Array](https://javascript.info/array)

`.bots` list of bot users in the guild - returns [Array](https://javascript.info/array)

`.createdAt` when the guild was created - returns [Date](https://javascript.info/date)


## Methods:

`.leave([timeout - Number])` leave the guild - returns guild [Object](https://javascript.info/object)

`.setName([name - string], [reason - string])` changes the guilds name - returns guild [Object](https://javascript.info/object)

`.setIcon([image url - string], [reason- string])` changes the guilds icon - returns guild [Object](https://javascript.info/object)

`.findOwner()` find the owner returns user [Object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Guild.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildMember.md)
