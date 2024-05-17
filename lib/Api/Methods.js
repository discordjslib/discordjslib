const fetch = require('node-fetch');
const queryString = require('query-string');
const API_URL = 'https://discord.com/api/v8/';

function getDefaultHeader(token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${token}`
    };
}

async function sendRequest(url, options) {
    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        return response
    }

    // Parse JSON response
    return response.json();
}

module.exports = {
    async reply(messageId, channelId, content, token) {
        const body = {
            content: content,
            message_reference: {
                message_id: messageId
            }
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        return await sendRequest(API_URL + `channels/${channelId}/messages`, options);
    },
    async replyEmbed(messageId, channelId, content, embed, token) {
        const body = {
            content: content,
            message_reference: {
                message_id: messageId
            },
            embeds: [embed]
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        return await sendRequest(API_URL + `channels/${channelId}/messages`, options);
    },

    async react(messageId, channelId, emoji, token) {
        const emojiUrl = queryString.parseUrl(emoji).url;
        const options = {
            method: 'PUT',
            headers: getDefaultHeader(token)
        };
        return await sendRequest(API_URL + `/channels/${channelId}/messages/${messageId}/reactions/${encodeURIComponent(emojiUrl)}/@me`, options);
    },

    async deleteMessages(id, messages, token) {
        const body = {
            messages: messages
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        await sendRequest(API_URL + `/channels/${id}/messages/bulk-delete`, options);
    },
    async send(id, content, token) {
        const body = {
            content: content,
            tts: false,
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        const response = await sendRequest(API_URL + `channels/${id}/messages`, options);
        return response
    },
    async sendEmbed(id, content, embed, token) {
        const body = {
            content: content,
            embeds: [embed]
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        const response = await sendRequest(API_URL + `channels/${id}/messages`, options);
        return response
    },

    async sendEmbed(id, embed, token) {
        const body = {
            embed: embed,
            tts: false,
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        return sendRequest(API_URL + `channels/${id}/messages`, options);
    },

    async edit(messageId, channelId, content, token) {
        const body = {
            content: content
        };
        const options = {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        };
        return sendRequest(API_URL + `/channels/${channelId}/messages/${messageId}`, options);
    },

    async dm(id, content, token) {
        const body = {
            recipient_id: id,
        };
        let channel = await fetch(API_URL + `users/@me/channels`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getDefaultHeader(token)
        });
        channel = await channel.json();
        const b = {
            content: content
        };
        const msg = await sendRequest(API_URL + `channels/${channel.id}/messages`, {
            method: 'POST',
            body: JSON.stringify(b),
            headers: getDefaultHeader(token)
        });
        return msg;
    },

    role: {
        async delete(guildID, roleID, token) {
            try {
                const response = await fetch(API_URL + `guilds/${guildID}/roles/${roleID}`, {
                    method: 'DELETE',
                    headers: getDefaultHeader(token)
                });

                // Check if the role is successfully deleted
                if (response.status !== 204) {
                    throw new Error(`Failed to delete role. Status code: ${response.status}`);
                }
            } catch (error) {

                console.error('Error deleting role:', error);
                throw error; // Rethrow the error to be caught by the caller
            }
        },
        async setName(guildID, roleID, name, token) {
            const body = {
                name: name,
            }
            const options = {
                body: JSON.stringify(body),
                headers: getDefaultHeader(token),
                method: 'PATCH'
            }
            try {
                const response = sendRequest(API_URL + `guilds/${guildID}/roles/${roleID}`, options);
                return response
            } catch (error) {
                console.error('Error setting new role name:', error);
                throw error; // Rethrow the error to be caught by the caller
            }
        },
        async setColor(guildID, roleID, color, token) {

            const body = {
                color: color,
            }
            const options = {
                body: JSON.stringify(body),
                headers: getDefaultHeader(token),
                method: 'PATCH'
            }
            try {
                const response = await sendRequest(API_URL + `guilds/${guildID}/roles/${roleID}`, options)
                return response
            } catch (error) {
                console.error('Error setting new role color:', error);
                throw error; // Rethrow the error to be caught by the caller
            }
        }
    },

    channel: {
        async delete(channelid, token) {
            try {
                const response = await sendRequest(API_URL + `/channels/${channelid}`, {
                    method: 'DELETE',
                    headers: getDefaultHeader(token)
                },);
                return response
            } catch (error) {

                console.error('Error deleting channel:', error);
                throw error; // Rethrow the error to be caught by the caller
            }
        },
        async parent (categoryID, channelID, token, reason) {
            try {
                const response = await sendRequest(API_URL + `/channels/${channelid}`, {
                    method: 'PATCH',
                    body: JSON.stringify({parent_id: categoryID}),
                    headers: getDefaultHeader(token)
                },);
                return response
            } catch (error) {

                console.error('Error deleting channel:', error);
                throw error; // Rethrow the error to be caught by the caller
            }
        }
    },

    invites: {
        async delete(code, token) {
            const invite = await sendRequest(API_URL + `invites/${code}`, {
                method: 'DELETE',
                headers: getDefaultHeader(token)
            });
            return invite;
        },
        async create(channelID, maxAge, maxUses, token){
            const invite = await sendRequest(API_URL + `channels/${channelID}/invites`, {
                method: 'POST',
                headers: getDefaultHeader(token),
                body: JSON.stringify({
                    max_age: maxAge,
                    max_uses: maxUses
                })
            })
            return invite
        }
    }
};
