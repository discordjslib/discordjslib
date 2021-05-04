# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)
```js
new Discord().Message(message, channel, client)
```

## Properties:


`.client` returns the client [Object](https://javascript.info/object)

`.user` the author of the message - returns user [Object](https://javascript.info/object)

`.member` returns guildmember [Object](https://javascript.info/object)

`.channel` the channel the message was sent in - returns channel [Object](https://javascript.info/object)

`.guild` the guild the message was sent in - returns guild [Object](https://javascript.info/object)

`.content` the content of the message - returns [String](https://javascript.info/types#string)

## Methods:

`.delete([Number - (timeout)])` deletes the message - returns message [Object](https://javascript.info/object)

`.edit([String])` *edits the message - returns message [Object](https://javascript.info/object)

`.pin()` pins the message - returns channel pins 

`.react([String])` reacts to a message - returns [message reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)) [Object](https://javascript.info/object)

*The message must be sent by the bot

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/Messages/Message.js)   

# MessageEmbed is a [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)
```js
new Discord().MessageEmbed(data)
```

## Properties:                                                                  ## Methods
                                                                                Note: Unless indicated otherwise, all methods return `this`

`.title` returns [String](https://javascript.info/types#string)                 `.addTitle(String)` 

`.description` returns [String](https://javascript.info/types#string)           `.addDescription(String)`     

`.fields` returns [Array](https://javascript.info/array)                        `.addField(String)`

`.author` returns returns [String](https://javascript.info/types#string)        `.addAuthor(String)`

`.color` returns [String](https://javascript.info/types#string)                 `.addColor(String)`

`.colour` returns [String](https://javascript.info/types#string)                `.addColour(String)`

`.url` returns [String](https://javascript.info/types#string)                   `.addUrl(String)`

`.timestamp` returns [Date](https://javascript.info/date)                       `.addTimestamp(Date Object)`

`.thumbnail` returns [String](https://javascript.info/types#string)             `.addThumbnail(String)`

`.footer` returns [Array](https://javascript.info/array)                        `.addFooter(String)`

`.files` returns [Array](https://javascript.info/array)                         `.addFile(String])`

                                                                                `.toObject()` - returns [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Message/MessageEmbed.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)