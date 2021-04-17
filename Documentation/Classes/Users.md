A User represents both a GuildMember and a regular User
(which means that you don't have to worry about specific GuildMember properties)

Properties:

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.username` returns [String](https://javascript.info/types#string)

`.discriminator` returns [Number](https://javascript.info/types#number)

`.tag` a Discord mention - returns [String](https://javascript.info/types#string)

`.avatar` returns [String](https://javascript.info/types#string)

`.bot` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`system` an official Discord system user - returns [Boolean](https://javascript.info/types#string)

`.2fa` if the user has 2 factor authentication enabled - returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.flags` [Click Here for Examples](google.com) - returns [String](https://javascript.info/types#string)

`roles` list of role objects for each guild - returns [Array](https://javascript.info/array)


Methods: 

Note: If guild id is not passed the function will be performed on all guilds the bot shares with the user


`.dm([message])` direct messages a user - returns a user object [Object](https://javascript.info/object)

`.ban([reason], [guild id])` bans a user - returns a user object [Object](https://javascript.info/object)

`.kick([reason], [guild id])` kicks a user - returns a user object [Object](https://javascript.info/object)

`nickname([name], [reason], [guild id])` Changes a users nickname - returns a user object [Object](https://javascript.info/object)

`hasPerm([[*permission flag], [reason], [guild id])` Checks a users permission - returns boolean [Boolean](https://javascript.info/types#boolean-logical-type)

*Permission flags listed [here](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)