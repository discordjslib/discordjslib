

module.exports =
    class Presence {
        constructor(client, presence, user) {
            this.client = client
            this.user = user
            this.activities = presence.activities || null
            this.status = presence.client_status || presence.status
            this.guildID = presence.guildID
        }
    }
