const Discord = require('./lib/Discord')
const client = new Discord().Client('client-token')
client.channels.find('channel-id').then(channel => channel.send('Hello World!'))
client.on('message', async (message) => {
    message.reply('Hello World!')
})