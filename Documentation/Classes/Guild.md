# A Guild is a [Discord Guild](https://discord.com/developers/docs/resources/guild)

```js
new Discord().Guild(guild, client);
```

## Properties:

`.id` returns [string](https://javascript.info/types#string)

`.avaliable` returns [boolean](https://javascript.info/types#boolean-logical-type)

`.name` returns [string](https://javascript.info/types#string)

`.icon` returns [string](https://javascript.info/types#string)

`.region` returns [string](https://javascript.info/types#string)

`.memberCount` returns [number](https://javascript.info/types#number)

`.banner` returns [string](https://javascript.info/types#string)

`.nitroLevel` returns [number](https://javascript.info/types#number)

`.nitroCount` returns [number](https://javascript.info/types#number)

`.vanity` returns [string](https://javascript.info/types#string)

`.roles` list of role objects in the guild - returns [array](https://javascript.info/array)

`.channels` list of channel objects in the guild - returns [array](https://javascript.info/array)

`.users` returns [GuildUsers](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#GuildEmojis)

`.emojis` returns [GuildEmojis](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#GuildEmojis)

`.owner` the owner of the guild (may be null) - returns user [object](https://javascript.info/object)

`.admins` list of user objects with the administrator permission returns [array](https://javascript.info/array)

`.bots` list of bot users in the guild - returns [array](https://javascript.info/array)

`.createdAt` when the guild was created - returns [Date](https://javascript.info/date)

## Methods:

`.leave([timeout - number])` leave the guild - returns guild [object](https://javascript.info/object)

`.setName([name - string], [reason - string])` changes the guilds name - returns guild [object](https://javascript.info/object)

`.setIcon([image url - string], [reason- string])` changes the guilds icon - returns guild [object](https://javascript.info/object)

`.findOwner()` find the owner returns user [object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Guild.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildMember.md)
