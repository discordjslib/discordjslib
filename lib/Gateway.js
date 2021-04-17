const WebSocket = require('ws')
const url = 'wss://gateway.discord.gg/?v=8&encoding=json'
const connection = new WebSocket(url)
connection.onopen = () => {
    
}