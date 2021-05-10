# A Channel is any type of [Discord Channel](https://discord.com/developers/docs/resources/channel) 
```js
new Discord().Channel(channel, client)
```

## Properties:

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.type` the [type](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Useful.md) of Discord channel - returns [String](https://javascript.info/types#string)

`.guild` *guild - returns [Object](https://javascript.info/object)

`.lastMessage` message object - returns [Object](https://javascript.info/object)

*This will return null if the channel is a dm


# ServerChannel extends Channel
```js
new Discord().ServerChannel(channel, client)
```

## Properties:

Extends the regular Channels Properties. The additional properties include:

`.position` returns [Number](https://javascript.info/types#number)

`.permissions` returns permission [Object](https://javascript.info/object)

`.name` returns [String](https://javascript.info/types#string)

`.nsfw` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.parent` returns category [Object](https://javascript.info/object)


## Methods: 

`.setName([name - string], [reason - string])` changes the channels name - returns channel [Object](https://javascript.info/object)

`.setParent([category - object], [reason - string])` changes the parent category - returns channel [Object](https://javascript.info/object)

`.setTopic([topic - string], [reason - string])` changes the channels topic - returns channel [Object](https://javascript.info/object)

`.setPosition(position - number), [reason - string])` changes the channels position - returns channel [Object](https://javascript.info/object)

`.newInvite([options])` returns url [String](https://javascript.info/types#string)


# [Text channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) extends ServerChannel
```js
new Discord().Text(channel, client)
```

## Properties:

`.messages` list of channel message objects - returns [Array](https://javascript.info/array)


## Methods: 

`.send(message content)` returns message [Object](https://javascript.info/object)

# Voice channel extends ServerChannel


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channels)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Client.md)