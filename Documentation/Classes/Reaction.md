# A Reaction is a [Discord Reaction](https://discord.com/developers/docs/resources/channel#reaction-object)

## Properties:

`.message` the message of the reaction - returns message [Object](https://javascript.info/object)

`.reacted` whether the bot reacted - returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.emoji` the emoji of the reaction - returns [String](https://javascript.info/types#string)

`.users` the users who reacted to the message (use Array.length to find the number of people who reacted) - returns user [Array](https://javascript.info/array) 

## Methods:

`.unreactAll()` unreacts all users from the reaction - returns message [Object](https://javascript.info/object)

