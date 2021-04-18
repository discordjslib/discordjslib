const Discord = require('../lib/Discord')
const client = new Discord().Client('')
const run = async() =>{
const channel = await client.channels.find('825019102266916864')
console.log(channel.name)
console.log(await channel.messages.find('833438582672064533'))
}
run()
