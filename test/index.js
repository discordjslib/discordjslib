const Discord = require('../lib/Discord')
const client = new Discord().Client()
client.on('ready', () => {
    console.log('LOL')
})