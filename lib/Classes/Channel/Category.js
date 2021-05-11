const Channel = require('./Channel')

module.exports = class Category extends Channel {
    constructor(channel, client) {
        super()
        this.client = client
    }
    async setParent() {
        return null
    }
}