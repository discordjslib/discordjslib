const Discord = require('discordjslib')
const client = new Discord().Client()
client.channels.find('').then(c => console.log(c.name))
