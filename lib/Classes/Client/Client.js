const Events = require("events");
const util = require("../../Util.js");
const gateway = require("../../Api/Gateway");
const User = require("../User/User");
const ClientGuilds = require("./ClientGuilds");
const ClientChannels = require("./ClientChannels");
const ClientUsers = require("./ClientUsers");
const ClientCache = require("../../../Caching/ClientCaching");
const WebSocket = require("ws");
let connect = true;

module.exports = class Client extends Events {
  constructor(token, options) {
    super();

    this.options = options || {};
    this.token = token;
    if (!token) throw new TypeError("No token was supplied");

    const users = new ClientUsers(this),
      guilds = new ClientGuilds(this),
      channels = new ClientChannels(this);
    this.guilds = guilds;
    this.channels = channels;
    this.users = users;
    this.user = null;

    this.cache = new ClientCache(this, this.options.cache);

    if (options) this.presence = options.presence || null;
    else this.presence = null;

    this._maxListeners = null;

    const ws = new WebSocket(
      "wss://gateway.discord.gg/?v=8&encoding=json",
      this
    );
    let identity = {
      op: 2,
      d: {
        token: this.token,
        intents: 65534,
        properties: {
          $os: process.platform,
          $browser: "discordjslib",
          $device: "discordjslib",
        },
      },
    };
    ws.on("open", () => {
      this.emit("debug", util.debug.connecting);
    ws.send(JSON.stringify(identity));
    });
    let i = 0;
    let trig = false;
    ws.on("message", async (data) => {
      this.emit("debug", util.debug.connecting);
      const payload = JSON.parse(data);
      const { t, op, d } = payload;
      if (d) {
        if (d.user) {
          this.user = new User(this, d.user);
          if (!i) this.emit("on");
          i++;
        }
      }
      if (t) {
        if (t.session_id) {
          this.sessionID = t.session_id
        }
      }
      if (op === 10) {
        if(d.session_id) this.sessionID = d.session_id;
        heartbeat(d.heartbeat_interval);
      } else if (op === 11) {
        
      }
      trig ? this.emit("debug", util.debug.connected) : null;
      trig = false;
      gateway(this, payload);
    });
    this.emit("on");
   ws.on("close", () => {
      this.client.emit("debug", util.debug.disconnected);
      if (connect)
        throw new Error(
          "The client disconnected from the gateway, possibly an invalid token"
        );
      else return;
    });
    function heartbeat(hbt) {
      const p = {
        op: 1,
        d: null,
      };
      setInterval(() => {
        ws.send(JSON.stringify(p));
      }, hbt);
    }
  }
  async disconnect() {
    connect = false;
    this.emit("debug", util.debug.disconnecting);
    await this.ws.terminate();
    this.emit("debug", util.debug.disconnected);
    return this.token;
  }
  async setPresence(options) {
    if (options) {
      this.options.presence = options;
      this.presence = options;
      const status = {
        op: 3,
        d: {
          since: options.since,
          activities: [
            {
              name: options.name,
              type: options.type,
            },
          ],
          status: options.status,
          afk: options.afk,
        },
      };
      this.ws.once("open", () => this.ws.send(JSON.stringify(status)));
    }
    return this;
  }
};
