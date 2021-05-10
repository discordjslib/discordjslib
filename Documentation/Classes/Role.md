# A Role represents a [Discord Role](https://discord.com/developers/docs/resources/guild#role-object)
```js
new Discord().Role(role, guild, client)
```
## Properties:

`.client` returns client [Object](https://javascript.info/object)

`.name` returns [String](https://javascript.info/types#string)   

`.animated` returns [String](https://javascript.info/types#boolean-logical-type) 

`.guild` returns guild [Object](https://javascript.info/object)

## Methods:

`.delete()` returns the delete role [Object](https://javascript.info/object)

`.rename(String)` - returns `this`


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Role)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md)