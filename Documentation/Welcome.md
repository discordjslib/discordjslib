# Welcome to discordjslib documentation!

## Classes:  
- [Client](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Client.md)
- [Guild](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md)  
- [Channel](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channel.md)  
- [User](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md)  
- [Message](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Message.md)
- [Reaction](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Reaction.md)
- [Role](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Role.md)


## Install:
`npm i discordjslib`


## Example: 
```js
const Discord = require('discordjslib')
const client = new Discord().Client('client-token')
client.channels.find('channel-id').then(channel => channel.send('Hello World!'))
```