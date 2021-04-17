const Discord = require('../Lib/Structures/Client/Client')
const client = new Discord('ODE4MDkyMDQyOTgxODY3NTcw.YETBlg.ogsqu6IasObg_gHuScWVNJ93KNo')
client.channels.find('813481325607780355').then(c => c.send('LOOOOL').then(m => console.log(m.user().then(m => console.log(m)))))
