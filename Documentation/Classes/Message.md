# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)

```js
new Discord().Message(message, channel, client);
```

## Properties:

`.client` returns the client [object](https://javascript.info/object)

`.user` the author of the message - returns user [object](https://javascript.info/object)

`.member` returns guildmember [object](https://javascript.info/object)

`.channel` the channel the message was sent in - returns channel [object](https://javascript.info/object)

`.guild` the guild the message was sent in - returns guild [object](https://javascript.info/object)

`.content` the content of the message - returns [string](https://javascript.info/types#string)

## Methods:

`.delete([number - (timeout)])` deletes the message - returns message [object](https://javascript.info/object)

`.edit([string])` \*edits the message - returns message [object](https://javascript.info/object)

`.pin()` pins the message - returns channel pins

`.react([string])` reacts to a message - returns [message reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md) [object](https://javascript.info/object)

\*The message must be sent by the bot

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/Messages/Message.js)

# MessageEmbed is a [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)

```js
new Discord().MessageEmbed(data);
```

## Properties:

`.title` returns [string](https://javascript.info/types#string)

`.description` returns [string](https://javascript.info/types#string)

`.fields` returns [array](https://javascript.info/array)

`.author` returns returns [string](https://javascript.info/types#string)

`.color` returns [string](https://javascript.info/types#string)

`.colour` returns [string](https://javascript.info/types#string)

`.url` returns [string](https://javascript.info/types#string)

`.timestamp` returns [Date](https://javascript.info/date)

`.thumbnail` returns [string](https://javascript.info/types#string)

`.footer` returns [array](https://javascript.info/array)

`.files` returns [array](https://javascript.info/array)

## Methods

Note: Unless indicated otherwise, all methods return `this`

`.addTitle(string)`

`.addDescription(string)`

`.addField(string)`

`.addAuthor(string)`

`.addColor(string)`

`.addColour(string)`

`.addUrl(string)`

`.addTimestamp(Date object)`

`.addThumbnail(string)`

`.addFooter(string)`

`.addFile(string)`

`.toObject()` - returns [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Message/MessageEmbed.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)
