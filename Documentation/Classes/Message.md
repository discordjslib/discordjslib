# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)
```js
new Discord().Message(message, channel, client)
```

## Properties:

`.user` the author of the message - returns user [Object](https://javascript.info/object)

`.channel` the channel the message was sent in - returns channel [Object](https://javascript.info/object)

`.guild` the guild the message was sent in - returns guild [Object](https://javascript.info/object)

`.content` the content of the message - returns [String](https://javascript.info/types#string)

## Methods:

`.delete()` deletes the message - returns message [Object](https://javascript.info/object)

`.edit([message - string])` *edits the message - returns message [Object](https://javascript.info/object)

`.pin()` pins the message - returns channel pins 

`.react([emoji - string])` reacts to a message - returns [message reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)) [Object](https://javascript.info/object)

*The message must be sent by the bot

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/Messages/Message.js)   

# MessageEmbed is a [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)
```js
new Discord().MessageEmbed(data)
```

## Properties: 

`.title` returns [String](https://javascript.info/types#string)

`.description` returns [String](https://javascript.info/types#string)

`.fields` returns [Array](https://javascript.info/array)

`.author` returns returns [String](https://javascript.info/types#string)

`.color` returns [String](https://javascript.info/types#string)

`.colour` returns [String](https://javascript.info/types#string)

`.url` returns [String](https://javascript.info/types#string)

`.timestamp` returns [Date](https://javascript.info/date)

`.thumbnail` returns [String](https://javascript.info/types#string)

`.footer` returns [Array](https://javascript.info/array)

`.files` returns [Array](https://javascript.info/array)

## Methods
`.addTitle([String](https://javascript.info/types#string))`

`.addDescription([String](https://javascript.info/types#string))`

`.addField([String](https://javascript.info/types#string))`

`.addAuthor([String](https://javascript.info/types#string))`

`.addColor([String](https://javascript.info/types#string))`

`.addColour([String](https://javascript.info/types#string))`

`.addUrl([String](https://javascript.info/types#string))`

`.addTimestamp([Date](https://javascript.info/date))`

`.addFile([String](https://javascript.info/types#string))`

`.addFooter([String](https://javascript.info/types#string))`

`.toObject()` - returns [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)


