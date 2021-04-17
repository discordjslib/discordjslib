const fetch = require('node-fetch')


const url = 'https://discord.com/api/v8/'

function body(body) {
    return JSON.stringify(body)
}


exports.deleteMessages = (amount, token) => {
    fetch(url, { method: '' })
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