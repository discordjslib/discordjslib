

module.exports =
    class Presence {
        constructor(client, presence) {
            this.client = client
            this.userID = presence.user.id
            this.activities = presence.activities 
            this.clientStatus = presence.client_status 
            this.status = presence.status
            this.broadcast = presence.broadcast
            this.guildID = presence.guild_id
        }
    }
