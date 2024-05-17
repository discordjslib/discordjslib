
const Events = require('events')
const User = require('../User/User')
const ClientGuilds = require('./ClientGuilds')
const ClientChannels = require('./ClientChannels')
const ClientUsers = require('./ClientUsers')
const ClientRoles = require('./ClientRoles')
const gateway = require('../../Api/Gateway')
const Web = require('ws')
const wss = new Web('wss://gateway.discord.gg/?v=8&encoding=json')
let connect = true

module.exports = class Client extends Events {
    constructor(token, options = {}) {
        super()
        this.token = token
        if (!token) throw new Error('No token was supplied')
        this.guilds = new ClientGuilds(this)
        this.channels = new ClientChannels(this)
        this.users = new ClientUsers(this)
        this.user = null
        this.roles = new ClientRoles(this)
        if (options) this.presence = options.presence || null
        this._maxListeners = null
        let identity = {
            op: 2,
            d: {
                token: token,
                intents: 131071,
                properties: {
                    $os: process.platform,
                    $browser: 'discordjslib',
                    $device: 'discordjslib',
                },
                presence: this.presence
            }
        }
        wss.on('open', () => {
            wss.send(JSON.stringify(identity))
        })
        let sessionid
        let i = 0
        wss.on('message', async data => {
            const payload = JSON.parse(data)
            const { t, event, op, d } = payload
            if (d) {
                if (d.user && d.user.bot) {
                    this.user = new User(this, d.user)
                    if (!i) this.emit('on')
                    i++
                }
            }
            if (t) {
                if (t.session_id) {
                    this.sessionID = t.sessionID
                }
            }
            if (op === 10) {
                sessionid = d.session_id
                hb(d.heartbeat_interval)
            } else if (op === 11) {
            }
            gateway(this, payload)
        })
        this.emit('on')
        wss.on('close', () => {
            if (connect) throw new Error('The client disconnected from the gateway, possibly an invalid token or intents are disabled in discord.com/developers')
            else return
        })
    }
    async logout() {
        connect = false
        wss.terminate()
        return this.token
    }

}

const hb = (hbt) => {
    const p = {
        op: 1,
        d: null
    }
    setInterval(() => {
        wss.send(JSON.stringify(p))
    }, hbt)
}