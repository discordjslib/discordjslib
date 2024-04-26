# A Role represents a [Discord Role](https://discord.com/developers/docs/resources/guild#role-object)
```js
new Discord().Role(role, guild, client)
```
## Properties:

`.client` returns Client [Object](https://javascript.info/object)

`.name` returns [String](https://javascript.info/types#string)   

`.id` returns [String](https://javascript.info/types#string)  

`.guild` returns Guild [Object](https://javascript.info/object)

`.color` integer representation of hexadecimal color code - returns [Number](https://javascript.info/types#number)

`.hoist` if this role is pinned in the User listing - returns [Boolean](https://javascript.info/types#boolean-logical-type) 

`.icon` returns  [String](https://javascript.info/types#string)  

`.position` returns [Number](https://javascript.info/types#number)

`.mentionable` returns [String](https://javascript.info/types#string)  

`.permissions` returns [String](https://javascript.info/types#string)  

`.flags` returns [Number](https://javascript.info/types#number)

`.managed` whether this role is managed by an integration - returns [Boolean](https://javascript.info/types#boolean-logical-type) 

## Methods:

`.delete()` returns `this`

`.setName([String - (name)])` returns `this`

`.setColor([Number - (color hex)])` returns `this`


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Role)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md) 🡣
