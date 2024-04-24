# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)
```js
new Discord().Message(message, channel, client)
```

## Properties:


`.client` returns the client [Object](https://javascript.info/object)

`.user` the author of the message - returns user [Object](https://javascript.info/object)

`.member` returns guildmember (value not guaranteed; use .member() for reliablity) [Object](https://javascript.info/object)

`.channel` the channel the message was sent in - returns channel [Object](https://javascript.info/object)

`.guild` the guild the message was sent in - returns guild [Object](https://javascript.info/object)

`.content` the content of the message - returns [String](https://javascript.info/types#string)

`.pinned` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.reference` returns [Object](https://javascript.info/object)

`.tts` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.webhook` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.attachements` returns [Array](https://javascript.info/array) 

`.mentions` returns list of User objects [Array](https://javascript.info/array) 

## Methods:

`.member()` fetches member object from API - returns GuildMember [Object](https://javascript.info/object)

`.reply` - responds to message, mentioning original User - returns Message [Object](https://javascript.info/object)

`.delete([Number - (timeout)])` deletes the message - returns message [Object](https://javascript.info/object)

`.edit([String])` *edits the message - returns message [Object](https://javascript.info/object)

`.react([String])` reacts to a message - returns [message reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md) [Object](https://javascript.info/object)

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

Note: Unless indicated otherwise, all methods return `this`

`.addTitle(String)` 

`.addDescription(String)` 

`.addField(String)`

`.addAuthor(String)`

`.addColor(String)`

`.addColour(String)`

`.addUrl(String)`

`.addTimestamp(Date Object)`

`.addThumbnail(String)`

`.addFooter(String)`

`.addFile(String)`

`.toObject()` - returns [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Message/MessageEmbed.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)
