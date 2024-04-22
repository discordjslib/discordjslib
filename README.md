# Discordjslib

Discordjslib is a lightweight Node.js library which interacts with the Discord API, focusing on simplicity and efficiency. It offers a streamlined experience, free from unnecessary features and bloatware.

**Key Features:**

- **Simplified API Interaction**: With a uniquely concise structure, Discordjslib enables developers of all skill levels to get started quickly.

- **Updated Documentation**: Enjoy a user-friendly experience with up-to-date documentation.

- **Bloat-Free, Real-Time Data**: Unlike other libraries, Discordjslib fetches data from the Discord API in real-time with each request, without a need for caching, which ensures accuracy and reliability for your applications.





Install: 
```
npm install discordjslib
```


<a href="https://nodei.co/npm/discordjslib/"><img src="https://nodei.co/npm/discordjslib.png?compact=true"></a>


Example:
```js
const Discord = require('discordjslib')
const client = new Discord().Client('client-token')

client.channels.find('channel-id').then(channel => channel.send('Hello World!'))

client.on('message', message => {
    if (message.content === 'Hello') {
        message.reply('Hello World!')
    }
})
```

- Documentation: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Welcome.md)

- FAQ: [Click Here](https://github.com/discordjslib/discordjslib/blob/main/Documentation/FAQ.md)

- Contribute: [Click Here](https://opensource.guide/how-to-contribute/)    
