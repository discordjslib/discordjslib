# A Message is a [Discord Message](https://discord.com/developers/docs/resources/channel#message-object)
```js
new Discord().Message(message, channel, client)
```

## Properties:


`.client` returns the Client [Object](https://javascript.info/object)

`.user` the author of the Message - returns User [Object](https://javascript.info/object)

`.member` returns GuildMember [Object](https://javascript.info/object)

`.channel` the Channel the Message was sent in - returns Channel [Object](https://javascript.info/object)

`.guild` the Guild the Message was sent in - returns Guild [Object](https://javascript.info/object)

`.content` the content of the Message - returns [String](https://javascript.info/types#string)

`.pinned` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.reference` returns [Object](https://javascript.info/object)

`.tts` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.webhook` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.attachements` returns [Array](https://javascript.info/array) 

`.mentions` returns a list of User objects [Array](https://javascript.info/array) 

## Methods:

`.reply` - responds to Message, mentioning original User - returns Message [Object](https://javascript.info/object)

`.delete([Number - (timeout)])` deletes the Message - returns Message [Object](https://javascript.info/object)

`.edit([String])` *edits the Message - returns Message [Object](https://javascript.info/object)

`.react([String])` reacts to the Message - returns [Message Reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md) [Object](https://javascript.info/object)

*The Message must be sent by the bot

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/Messages/Message.js)   

# MessageEmbed is a [Discord Embed](https://discord.com/developers/docs/resources/channel#embed-object)
```js
new Discord().MessageEmbed(data)
```

## Properties:                                                                 

`.title` returns [String](https://javascript.info/types#string)                 

`.description` returns [String](https://javascript.info/types#string)             

`.fields` returns [Array](https://javascript.info/array)                        

`.author` returns [String](https://javascript.info/types#string)       

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

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md) 🡣
