# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)

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

