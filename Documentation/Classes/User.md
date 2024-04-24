# A User represents a [Discord User](https://discord.com/developers/docs/resources/user#user-object)
```js
new Discord().User(client, user)
```

## Properties:

`.client` returns the client [Object](https://javascript.info/object)

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.name` the user's username, not unique across Discord - returns [String](https://javascript.info/types#string)

`.globalName` the user's display name, if it is set. For bots, this is the application name - returns [String](https://javascript.info/types#string)

`.client` returns [Object](https://javascript.info/object)
 
`.discriminator` returns [String](https://javascript.info/types#string)

`.avatar` null if not set (default avatar) otherwise - returns [String](https://javascript.info/types#string)

`.bot` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.system` an official Discord system user - returns [Boolean](https://javascript.info/types#string)

`.flags` [Click Here for Examples](https://discord.com/developers/docs/resources/user#user-object-user-flags)(the flags are listed under the description column - returns [String](https://javascript.info/types#string)

`.language` returns [String](https://javascript.info/types#string)


## Methods: 

`.dm(message content)` direct messages a user - returns a User object [Object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/User/User.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channel.md)
