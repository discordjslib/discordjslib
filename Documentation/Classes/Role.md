# A Role represents a [Discord Role](https://discord.com/developers/docs/resources/guild#role-object)
```js
new Discord().Role(role, guild, client)
```
## Properties:

`.name` returns [String](https://javascript.info/types#string)   

`.id` returns [String](https://javascript.info/types#string)  

`.guild` returns guild [Object](https://javascript.info/object)

`.client` returns client [Object](https://javascript.info/object)

`.animated` returns [Boolean](https://javascript.info/types#boolean-logical-type) 

`.hoist` returns [Boolean](https://javascript.info/types#boolean-logical-type) 

`.deleted` returns [Boolean](https://javascript.info/types#boolean-logical-type) 

`.position` returns [Number](https://javascript.info/types#number)

`.mentionable` returns [String](https://javascript.info/types#string)  



## Methods:

`.delete()` returns `this` [Object](https://javascript.info/object)

`.setName(String)` returns `this`

`.setColor(color hex)` returns `this`


Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Role)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md)
