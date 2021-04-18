const Discord = require('../lib/Discord')
const client = new Discord().Client('ODE4MDkyMDQyOTgxODY3NTcw.YETBlg.afohtGcRavXIKeVz7CqApiGrX4Q')
const run = async() =>{
const channel = await client.channels.find('825019102266916864')
const guild = await channel.guild
console.log(await guild.owner)
}
run()