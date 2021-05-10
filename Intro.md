# discordjslib
A node.js Discord library!

<a href="https://nodei.co/npm/discordjslib/"><img src="https://nodei.co/npm/discordjslib.png?compact=true"></a>

Install: 
```
npm i discordjslib
```


Example:
```js
const Discord = require('discordjslib')
const client = new Discord().Client('client-token')
client.channels.find('channel-id').then(channel => channel.send('Hello World!'))
client.on('message', async (message) => {
    message.reply('Hello World!')
})
```


Documentation: 
[Click Here](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Welcome.md)


FAQ: 
[Click Here](https://github.com/discordjslib/discordjslib/blob/main/Documentation/FAQ.md)


Contribute: 
[Click Here](https://opensource.guide/how-to-contribute/)
