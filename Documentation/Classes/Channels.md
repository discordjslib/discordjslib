### A channel represents any type of [Discord channel](https://discord.com/developers/docs/resources/channel)   

# Properties:

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.type` the [type](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Useful.md) of Discord channel - returns [String](https://javascript.info/types#string)

`.guild` *guild - returns [Object](https://javascript.info/object)]

`.lastMessage` message object - returns [Object](https://javascript.info/object)

`.messages` list of channel message objects - returns [Array](https://javascript.info/array)


*This will return null if the channel is a dm


## ServerChannel represents a channel in a server 

# Properties:

Extends the regular Channels Properties. The additional properties include:

`.position` returns [Number](https://javascript.info/types#number)

`.permissions` returns permission [Object](https://javascript.info/object)

`.name` returns [String](https://javascript.info/types#string)

`.nsfw` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.parent` returns category [Object](https://javascript.info/object)


# Methods: 

`.name([name - string], [reason - string])` changes the channels name returns channel - [Object](https://javascript.info/object)

`.parent([category - object], [reason - string])` changes the parent category returns channel [Object](https://javascript.info/object)

`.topic([topic - string], [reason - string])` changes the channels topic returns channel [Object](https://javascript.info/object)

`position(position - number), [reason - string])` changes the channels position returns channel [Object](https://javascript.info/object)

`.newInvite([options])` returns url [String](https://javascript.info/types#string)


## Represents a Discord [text channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) and extends a ServerChannel

# Properties:
TO DO


# Methods: 

`.send([message - string])` returns message [Object](https://javascript.info/object)




Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channels)