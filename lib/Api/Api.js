const fetch = require("node-fetch");

module.exports = class Api {
    constructor(token) {
        this.token = token
    }
    async channels(object, method) {
        if (method.toLowerCase() !== 'get') {
            const channel = await fetch('discord.com/api/channels' + object.id, {
                method: method,
                body: JSON.stringify(object)
            })
            return channel.json()
        } else {
            const channel = await fetch('discord.com/api/channels' + object.id, {
                method: method,
            })
            return channel.json()
        }
    }
    async guilds(method, object) {
    }
    async message() { }
}