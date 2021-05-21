# A GuildMember represents a [Discord Member](https://discord.com/developers/docs/resources/guild#guild-member-object)

```js
new Discord().GuildMember(member, guild, client);
```

## Properties:

`.guild` returns guild [object](https://javascript.info/object)

`.roles` list of role objects for each guild - returns [array](https://javascript.info/array)

`.manageable` returns [boolean](https://javascript.info/types#boolean-logical-type)

## Methods:

`.ban([reason - string])` bans a user - returns a user object [object](https://javascript.info/object)

`.kick([reason - string])` kicks a user - returns a user object [object](https://javascript.info/object)

`.nickname([name - string], [reason - string])` Changes a users nickname - returns a user [object](https://javascript.info/object)

`.hasPerm([[*permission flag - string], [reason - string])` Checks a users permission - returns [boolean](https://javascript.info/types#boolean-logical-type)

\*Permission flags listed [here](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/User/GuildMember.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Message.md)
