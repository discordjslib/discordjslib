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

`.banner` returns [String](https://javascript.info/types#string)

`.nitroLevel` returns [Number](https://javascript.info/types#number)

`.nitroCount` returns [Number](https://javascript.info/types#number)

`.vanity` returns [String](https://javascript.info/types#string)

`.roles` returns [GuildRoles](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildRoles.md)

`.channels` returns [GuildChannels](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildRoles.md)

`.users` returns list containing [User](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) [Objects](https://javascript.info/object)

`.emojis` returns [GuildEmojis](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#GuildEmojis)

`.owner` returns either a User.id [String](https://javascript.info/types#string) or a [User](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) [Object](https://javascript.info/object)

`.bots` list of bot [Users](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) in the Guild - returns [Array](https://javascript.info/array)

`.nsfw` returns [Number](https://javascript.info/types#number) relating to the [Guild NSFW Level](https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level)

`.createdAt` when the Guild was created - returns [Date](https://javascript.info/date)



## Methods:

`.leave()` leave the guild - returns guild [Object](https://javascript.info/object)

`findAllMembers()` - returns list of [GuildMembers](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildMember.md) [Object](https://javascript.info/object)

<code>findMember([User](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) or [User.id](https://javascript.info/types#string))</code> - returns a [GuildMembers](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildMember.md) [Object](https://javascript.info/object)

`.findOwner()` returns [User](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) [Object](https://javascript.info/object)

# A GuildInvite is a [Discord Invite](https://discord.com/developers/docs/resources/invite#invite-object-invite-structure)
```js
new Discord().GuildInvite(guild, client)
```

## Properties: 

`.client` returns Client [Object](https://javascript.info/object)

`.code` a unique ID - returns [String](https://javascript.info/types#string)

`.channel` the Channel this invite is for - returns [Object](https://javascript.info/object)

`.guild` partial Guild - returns [Object](https://javascript.info/object)

`.inviter` the user who created the invite - returns [Object](https://javascript.info/object)

`.expires` returns [Date](https://javascript.info/date)

`.members` an approximate count of total members - returns [Number](https://javascript.info/types#number)

`.online` an approximate count of online members - returns [Number](https://javascript.info/types#number)

## Methods: 

`.delete` returns `this`

`.toString()` the invite URL - returns [String](https://javascript.info/types#string)



Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Guild.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/GuildMember.md) 🡣
