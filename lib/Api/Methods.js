const fetch = require('node-fetch')
const string = require('query-string')

const url = 'https://discord.com/api/v8/'

exports.reply = async (messageid, channelid,content, token) => {
    const body = {
        "content": content,
        "message_reference": {
            "message_id": messageid,
        }
    }
    const msg = await fetch(url + `channels/${channelid}/messages`, {
        method: 'POST', body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return msg.json()
}
exports.react = async (messageid, channelid, emojii, token) => {
    const emoji = string.parseUrl(emojii)
    const msg = await fetch(url + `/channels/${channelid}/messages/${messageid}/reactions/${encodeURIComponent(emoji)}/@me`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        },
    })
    const json = msg.json()
    console.log(json)
    return json
}

exports.deleteMessages = async (id, messages, token) => {
    const body = {
        "messages": messages
    }
    await fetch(url + `/channels/${id}/messages/bulk-delete`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        },
    })
}
exports.send = async (id, content, token) => {
    const body = {
        "content": content,
        "tts": false,
    }
    const msg = await fetch(url + `channels/${id}/messages`, {
        method: 'POST', body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return msg.json()
}
exports.sendEmbed = async (id, embed, token) => {
    const body = {
        "embed": embed,
        "tts": false,
    }
    const msg = await fetch(url + `channels/${id}/messages`, {
        method: 'POST', body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    return msg.json()
}
exports.edit = async (messageid, channelid, content, token) => {
    const body = {
        "content": content
    }
    const msg = await fetch(url + `/channels/${channelid}/messages/${messageid}`, {
        method: 'POST', body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        },
        body: JSON.stringify(body)

    })
    return msg.json()
}
exports.dm = async (id, content, token) => {
    const body = {
        "recipient_id": id,
    }
    let channel = await fetch(url + `users/@me/channels`, {
        method: 'POST', body: JSON.stringify(body), headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })
    channel = await channel.json()
    const b = {
        "content": content
    }
    const msg = (await fetch(url + `channels/${channel.id}/messages`, {
        method: 'POST',
        body: JSON.stringify(b),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })).json()
    return msg
}
exports.deleteRole = async(guildid, roleid, token) => {
    const msg = (await fetch(url + `guilds/${guildid}/roles/${roleid}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    })).json()
    return msg
}