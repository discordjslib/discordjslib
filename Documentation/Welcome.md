### Welcome to discordjslib documentation!

## Classes:  

- [Guilds](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Guilds.md)  
- [Channels](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Channels.md)  
- [Users](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Users.md)  
- [Messages](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Classes/Messages.md)


## Example: 
```js
const Discord = require('discordjslib')
const client = new Discord().Client('client-token')
client.channels.find('channel-id').then(channel => channel.send('Hello World!'))
```