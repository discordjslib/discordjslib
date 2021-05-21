module.exports = class WebSocket extends require("ws") {
  constructor(ws, client) {
    super(ws);
  }
  connect(){
    
  }
  sendData(data) {
    this.send(JSON.stringify(data))
  }
};