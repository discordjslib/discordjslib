# A Role represents a [Discord Role](https://discord.com/developers/docs/resources/guild#role-object)

```js
new Discord().Role(role, guild, client);
```

## Properties:

`.client` returns client [object](https://javascript.info/object)

`.name` returns [string](https://javascript.info/types#string)

`.animated` returns [boolean](https://javascript.info/types#boolean-logical-type)

`.guild` returns guild [object](https://javascript.info/object)

## Methods:

`.delete()` returns the delete role [object](https://javascript.info/object)

`.setName(string)` - returns `this`

`.setColor(color hex)` - returns `this`

Source Code: [Click Here](https://github.com/discordjslib/discordjslib/tree/main/lib/Classes/Guild/Role)

[Next Page](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md)
