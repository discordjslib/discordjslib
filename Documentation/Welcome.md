# Welcome to discordjslib documentation!

## Classes:  
- [Client](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Client.md)
- [Guilds](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guild.md)  
- [Channels](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channel.md)  
- [Users](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/User.md)  
- [Messages](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Message.md)
- [Roles](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Role.md)


## Install:
`npm i discordjslib`


## Example: 
```js
const Discord = require('discordjslib')
const client = new Discord().Client('client-token')
client.channels.find('channel-id').then(channel => channel.send('Hello World!'))
```