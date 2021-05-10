const Role = require("./Role")

module.exports = class GuildRoles {
    constructor(client, guild) {
        this.client = client
        // guild.roles.map(role => new Role(role))  circular fix this plss thnx
    }
    find(id) {
        const role = this.roles.find(role => role.id === id)
        if (role) return role
        else return null
    }
    toArray() {
        let rolesArray = []
        if (guild.roles) {
            guild.roles.forEach(role => {
                rolesArray.push(new Role(role, this, this.client))
            })
            return rolesArray
        } else {
            return null
        }
    }
}