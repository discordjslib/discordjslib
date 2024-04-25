# A User represents a [Discord User](https://discord.com/developers/docs/resources/user#user-object)
```js
new Discord().User(client, user)
```

## Properties:

`.client` returns [Object](https://javascript.info/object)

`.id` a snowflake - returns [String](https://javascript.info/types#string)

`.name` the user's username, not unique across Discord - returns [String](https://javascript.info/types#string)

`.globalName` the user's display name, if it is set. For bots, this is the application name - returns [String](https://javascript.info/types#string)

`.client` returns [Object](https://javascript.info/object)
 
`.discriminator` returns [String](https://javascript.info/types#string)

`.avatar` null if not set (default avatar) otherwise - returns [String](https://javascript.info/types#string)

`.bot` returns [Boolean](https://javascript.info/types#boolean-logical-type)

`.system` an official Discord system user - returns [Boolean](https://javascript.info/types#string)

`.flags` [Click Here for Examples](https://discord.com/developers/docs/resources/user#user-object-user-flags) - returns [String](https://javascript.info/types#string)

`.language` returns [String](https://javascript.info/types#string)


## Methods: 

`.dm(message content)` direct messages a user - returns a User [Object](https://javascript.info/object)

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/User/User.js)



# A Presence represents a [Discord Presence](https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields)
```js
new Discord().Presence(client, presence, user)
```

`.client` returns [Object](https://javascript.info/object)

`.user` returns User [Object](https://javascript.info/object)

`.activities` returns [Object](https://javascript.info/object)

`.status` Either "idle", "dnd", "online", or "offline" - returns [String](https://javascript.info/types#string)

`.clientStatus` User's platform-dependent status - returns [Object](https://javascript.info/object)

`.guildID` returns [String](https://javascript.info/types#string)



Source Code: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/lib/Classes/User/Presence.js) 


[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channel.md) 🡣
