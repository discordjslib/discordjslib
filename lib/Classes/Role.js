const methods = require('../methods')
class Role {
    constructor(role, guild, token){
        this.guild = guild
        this.id = role.id
    }
    delete(){
        return new this(methods.delete(this.id, token))
    }
}
module.exports = Role