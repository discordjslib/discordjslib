const Events = require('events')
const User = require('../User/User')
const ClientGuilds = require('./ClientGuilds')
const ClientChannels = require('./ClientChannels')
const ClientUsers = require('./ClientUsers')
const gateway = require('../../Api/Gateway')
const Web = require('ws')
const wss = new Web('wss://gateway.discord.gg/?v=8&encoding=json')
let connect = true
module.exports = class Client extends Events {
    constructor(token, options = {}) {
        super()
        this.token = token
        if (!token) throw new Error('No token was supplied')
        const users = new ClientUsers(this),
            guilds = new ClientGuilds(this),
            channels = new ClientChannels(this)
        this.guilds = guilds
        this.channels = channels
        this.users = users
        this.user = null
        if (options) this.presence = options.presence || null
        this._maxListeners = null
        let identity = {
            op: 2,
            d: {
                token: token,
                intents: 65534,
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
            if(data.xyz === 'ping') this.ping = Date.now() - data.ms
            setTimeout(function timeout() {
                ws.send({
                    xyz: 'ping',
                    ms: Date.now()
                });
            }, 500);
            this.ws = {
                ping: data
            }
            const payload = JSON.parse(data)
            const { t, event, op, d } = payload
            if (d) {
                if (d.user) {
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
            if (connect) throw new Error('The client disconnected from the gateway, possibly an invalid token')
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