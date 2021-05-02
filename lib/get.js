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
    if (json) return json
}
exports.channelMessages = async (id, number, token) => {
    const messages = await fetch(url + `/channels/${id}/messages?limit=${String(number)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        },
    })
    const json = messages.json()
    return json
}
exports.message = async (messageid, channelid, token) => {
    const message = (await fetch(url + `/channels/${channelid}/messages/${messageid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })).json()
    return message
}
exports.user = async (id, token) => {
    const user = (await fetch(url + `users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })).json()
    return user
}
exports.member = async (guildid, memberid, token) => {
    const member = (await fetch(url + `guilds/${guildid}/members/${memberid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })).json()
    return member
}