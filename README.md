# discordjslib
A node.js Discord library!

Example:
```js
const Discord = require('discordjslib')
const client = new Discord().Client()
client.channels.find('').then(channel => channel.send('Hello World!'))
```