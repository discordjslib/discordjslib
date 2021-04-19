# A Guild is a [Discord Guild](https://discord.com/developers/docs/resources/guild)

## Properties: 

`.id` returns [String](https://javascript.info/types#string)

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

`.users` list of user objects in the guild - returns [Array](https://javascript.info/array)

`.owner` the owner of the guild - returns user [Object](https://javascript.info/object)

`.admins` list of user objects with the administrator permission returns [Array](https://javascript.info/array)

`.bots` list of bot user objects in the guild - returns [Array](https://javascript.info/array)

`.createdAt` when the guild was created - returns [Date](https://javascript.info/date)


## Methods:

`.leave()` the bot leaves the guild

`.name([name - string], [reason - string])` changes the guilds name - returns guild [Object](https://javascript.info/object)

`.icon([image url - string], [reason- string])` changes the guilds icon - returns guild [Object](https://javascript.info/object)




Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild)
