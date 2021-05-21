# A Channel is any type of [Discord Channel](https://discord.com/developers/docs/resources/channel)

```js
new Discord().Channel(channel, client);
```

## Properties:

`.id` a snowflake - returns [string](https://javascript.info/types#string)

`.type` the [type](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Useful.md) of Discord channel - returns [string](https://javascript.info/types#string)

# ServerChannel extends Channel

```js
new Discord().ServerChannel(channel, client);
```

## Properties:

Extends the regular Channels Properties. The additional properties include:

`.position` returns [number](https://javascript.info/types#number)

`.permissions` returns permission [object](https://javascript.info/object)

`.name` returns [string](https://javascript.info/types#string)

`.nsfw` returns [boolean](https://javascript.info/types#boolean-logical-type)

`.parent` returns category [object](https://javascript.info/object)

## Methods:

`.setName([name - string], [reason - string])` changes the channels name - returns channel [object](https://javascript.info/object)

`.setParent([category - object], [reason - string])` changes the parent category - returns channel [object](https://javascript.info/object)

`.setTopic([topic - string], [reason - string])` changes the channels topic - returns channel [object](https://javascript.info/object)

`.setPosition(position - number), [reason - string])` changes the channels position - returns channel [object](https://javascript.info/object)

`.newInvite([options])` returns url [string](https://javascript.info/types#string)

# [Text](https://discord.com/developers/docs/resources/channel#channel-object-channel-types) extends ServerChannel

```js
new Discord().Text(channel, client);
```

## Properties:

`.messages` list of channel message objects - returns [array](https://javascript.info/array)

`.lastMessage` returns message [object](https://javascript.info/object)

## Methods:

`.send(content)` returns message [object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Channels)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Client.md)
