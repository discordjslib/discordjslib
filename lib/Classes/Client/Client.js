const Events = require('events')

const get = require('../../get')
const { getChannel } = require('../../Util/channels')

const User = require('../User')
const ClientChannels = require('./ClientChannels')
const ClientUsers = require('./ClientUsers')
const Message = require('../Messages/Message')



const Web = require('ws')
const wss = new Web('wss://gateway.discord.gg/?v=8&encoding=json')
class Client extends Events {
    constructor(token) {
        super()
        if (!token) throw new Error('No token was supplied')
        this.token = token
        this.user = new User(this)
        this.channels = new ClientChannels(token)
        this.users = new ClientUsers(token)
        function heartbeat(ms) {
            return setInterval(() => {
                wss.send(JSON.stringify({ op: 2, d: null }))
            }, ms)
        }
        function gateway() {
            let payload = {
                op: 2,
                d: {
                    token: token,
                    intents: 513,
                    properties: {
                        $os: 'windows',
                        $browser: 'chrome',
                        $device: 'chrome'
                    }
                }
            }
            wss.on('open', () => {
                wss.send(JSON.stringify(payload))
            })
            wss.on('message', data => {
                payload = JSON.parse(data)
                const { t, event, op, d } = payload
                if (op == 10) {
                    const hb = d.heartbeat_interval
                    let interval = heartbeat(hb)
                }
                switch (t) {
                    case ('READY'):
                        break

                }
            })
            this.emit('ready', gateway())
        }
    }
}
module.exports = Client