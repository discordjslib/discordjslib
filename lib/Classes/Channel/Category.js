const Channel = require('./Channel')

class Category extends Channel {
    constructor(channel, client) {
        super()
        this.client = client
    }
    async setParent(){
        return null
    }
}
module.exports = Category