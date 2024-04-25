# A Channel is any type of [Discord Channel](https://discord.com/developers/docs/resources/channel) 
```js
new Discord().Channel(channel, client)
```

## Properties:

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.type` the [type](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) of Discord channel - returns [String](https://javascript.info/types#string)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channel/Channel.js)

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

`.setName([name - string], [reason - string])` changes the Channel's name - returns Channel [Object](https://javascript.info/object)

`.setParent([category - object], [reason - string])` changes the parent category - returns Channel [Object](https://javascript.info/object)

`.setTopic([topic - string], [reason - string])` changes the Channels topic - returns Channel [Object](https://javascript.info/object)

`.setPosition(position - number), [reason - string])` changes the Channels position - returns Channel [Object](https://javascript.info/object)

`.newInvite([options])` returns an [Invite](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md#a-guildinvite-is-a-discord-invite) [Object](https://javascript.info/object)


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channel/ServerChannel.js)


# [Text channel](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) extends ServerChannel
```js
new Discord().Text(channel, client)
```

## Properties:

`.messages` returns [ChannelMessages]() 

`.lastMessage` returns Message [Object](https://javascript.info/object)

## Methods: 

`.send(content)` returns Message [Object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channel/Text.js)

# ChannelMessages
```js
new Discord().ChannelMessages(channel, client)
```

## Properties:

`.client` returns Client [Object](https://javascript.info/object)

`.channel` returns Channel [Object](https://javascript.info/object)

## Methods:

`.find(id)` - returns Message [Object](https://javascript.info/object)

`.delete(amount)` bulk deletes messages newer than two weeks - returns Message [Objects](https://javascript.info/object)


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/Channel/ChannelMessages.js)


[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Client.md) 🡣
