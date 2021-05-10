# A User represents a [Discord User](https://discord.com/developers/docs/resources/user#user-object)
```js
new Discord().User(client, user)
```

## Properties:

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.name` returns [String](https://javascript.info/types#string)

`.discriminator` returns [Number](https://javascript.info/types#number)

`.tag` a Discord mention - returns [String](https://javascript.info/types#string)

`.avatar` returns [String](https://javascript.info/types#string)

`.bot` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.system` an official Discord system user - returns [Boolean](https://javascript.info/types#string)

`.flags` [Click Here for Examples](https://discord.com/developers/docs/resources/user#user-object-user-flags) Note: the flags are listed under the description column - returns [String](https://javascript.info/types#string)


## Methods: 

`.dm(message content)` direct messages a user - returns a user object [Object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/User/User.js)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channel.md)
