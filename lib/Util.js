const Channel = require("./Classes/Channel/Channel");
const DMChannel = require("./Classes/Channel/DM");
const Text = require("./Classes/Channel/Text");
const Voice = require("./Classes/Channel/Voice");
const Category = require("./Classes/Channel/Category");
const Stage = require("./Classes/Channel/Stage");
const News = require("./Classes/Channel/News");
const Store = require("./Classes/Channel/Store");
const $ = require("chalk");

module.exports = new (class Util {
  constructor() {
    this.debug = {
      connecting: `${$.green("[INFO]")} connecting to the gateway...`,
      connected: `${$.green("[INFO]")} connected to the gateway...`,
      disconnecting: `${$.green("[INFO]")} disconnecting to the gateway...`,
      disconnected: `${$.red("[INFO]")} disconnected to the gateway...`,

      ratelimitWarning: `${$.yellow(
        "[WARNING]"
      )} your bot is currently ratelimited`,
      null: (at) => `${$.yellow("[WARNING]")} returned null at ${at}`,
      event: (event) => `${$.green("[INFO]")} the ${event} event was triggered`,
      error: (error) => `${$.red("[ERROR]")} ${error}`,
      info: (msg) => `${$.green("[INFO]")} ${msg}`,
    };
  }
  getChannel(channel, token) {
    switch (channel.type) {
      case 0:
        return new Text(channel, token);
      case 1:
        return new DMChannel(channel, token);
      case 2:
        return new Voice(channel, token);
      case 3:
        return new Channel(channel, token);
      case 4:
        return new Category(channel, token);
      case 5:
        return new News(channel, token);
      case 6:
        return new Store(channel, token);
      case 13:
        return new Stage(channel, token);
      default:
        return new Channel(channel, token);
    }
  }
  DS() {
    return DataStructure;
  }
  emptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
})();
class DataStructure {
  constructor() {}
  toObject() {
    for (const key in this) {
      console.log(key);
    }
  }
  add(object) {
    if (typeof object !== "object")
      throw new TypeError("Invalid parmater for DataStructure#add()");
    let i = 0;
    this.keys = Object.keys(object);
    const all = Object.entries(object);
    this.values = get(all);
    this.keys.forEach((k) => {
      this[k] = this.values[i];
      i++;
    });
    return this;
  }
  search(object) {
    const all = Object.entries(object);

    const props = Object.entries(this);
    for (let i = 0; i < props.length; i++) {
      const found = all.find((a) => {
        a === props[i];
      });
      if (found) {
        i = props.length;
        console.log("s" + found);
        return found;
      } else return null;
    }
  }
  contains(object) {
    const keys = Object.keys(object);
    const hasProperty = this.hasOwnProperty(keys);
    if (hasProperty) {
      return true;
    } else {
      return find(object, this.values);
    }
  }
  test() {
    return console.log(this);
  }
}
function get(entries) {
  let arr = [];
  for (let i = 0; i < entries.length; i++) {
    arr.push(entries[i][1]);
  }
  return arr;
}
function find(object, values) {
  let t = false;
  const objValues = Object.values(object);
  return t;
}
