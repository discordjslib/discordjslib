const fetch = require('node-fetch')
const url = 'https://discord.com/api/v8/'



exports.guild = async (id, token) => {
    const guild = await fetch(url + `guilds/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return guild.json()
}
exports.channel = async (id, token) => {
    const channel = await fetch(url + `channels/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    const json = channel.json()
    if (json.code) return console.log(null)
    else return json
}
exports.message = async (channelid, messageid, token) => {
    const message = await fetch(url + `/channels/${channelid}/messages/${messageid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return message.json()
}
exports.user = (id, token) => {
    fetch(url + ``, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    }).then(user => {
        get.user(this.id, token)
        return new User(user.json(), token)
    })
    return
}