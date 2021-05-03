## A GuildMember represents a [Discord Member](https://discord.com/developers/docs/resources/guild#guild-member-object)


`.ban([reason - string], [guild id - string])` bans a user - returns a user object [Object](https://javascript.info/object)

`.kick([reason - string], [guild id - string])` kicks a user - returns a user object [Object](https://javascript.info/object)

`.nickname([name - string], [reason - string], [guild id - string])` Changes a users nickname - returns a user object [Object](https://javascript.info/object)

`.hasPerm([[*permission flag - string], [reason - string], [guild id - string])` Checks a users permission - returns boolean [Boolean](https://javascript.info/types#boolean-logical-type)

*Permission flags listed [here](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)


