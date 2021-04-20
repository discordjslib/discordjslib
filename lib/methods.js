const fetch = require('node-fetch')
const string = require('query-string')

const url = 'https://discord.com/api/v8/'

exports.react = async (messageid, channelid, emojii) => {
    const emoji = string.parseUrl(emojii)
    let msg = await fetch(url + `/channels/${channelid}/messages/${messageid}/reactions/${emoji}/@me`,{ method: 'PUT'})
    return msg
}

exports.deleteMessages = (amount, token) => {
    fetch(url, { method: '' })
}
exports.send = async (id, content, token) => {
    body = {
        "content": content,
        "tts": false,
    }
    msg = await fetch(url + `channels/${id}/messages`, {
        method: 'POST', body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return msg.json()
}