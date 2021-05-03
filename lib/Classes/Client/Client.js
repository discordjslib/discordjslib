const Events = require('events')

const User = require('../Guild/Role')
const ClientGuilds = require('./ClientGuilds')
const ClientChannels = require('./ClientChannels')
const ClientUsers = require('./ClientUsers')
const gateway = require('../../Gateway')

const Web = require('ws')
const wss = new Web('wss://gateway.discord.gg/?v=8&encoding=json')

class Client extends Events {
    constructor(token, options) {
        super()
        this.token = token
        if (!token) throw new Error('No token was supplied')
        this.guilds = new ClientGuilds(this)
        this.channels = new ClientChannels(this)
        this.users = new ClientUsers(this)
        if(options) this.presence = options.presence
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
        wss.on('message', async data => {
            const payload = JSON.parse(data)
            const { t, event, op, d } = payload
            if (op === 10) {
                sessionid = d.session_id
                hb(d.heartbeat_interval)
            } else if (op === 11) {
            }
            gateway(this, payload)
        })
        wss.on('close', () => {
            throw new Error('The Client disconnected from the gateway - check your internet connection!')
        })
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
module.exports = Client