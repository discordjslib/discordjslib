const fetch = require('node-fetch');
const url = 'https://discord.com/api/v8/';

async function fetchData(endpoint, token) {
    const response = await fetch(url + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bot ${token}`
        }
    });
    return response.json();
}

exports.guild = async function (id, token) {
    const json = await fetchData(`guilds/${id}`, token);
    return json;
};


exports.findAllMembers = async function (guildid, token) {
    'use strict';
    // Gets all members of a guild.
    // Returns an array of JSON objects.
    const json = await fetchData(`guilds/${guildid}/members`, token);
    return json;
};


exports.channel = async (id, token) => {
    const json = await fetchData(`channels/${id}`, token);
    if (json) return json;
};

exports.allChannels = async (guildID, token) => {
    const json = await fetchData(`guilds/${guildID}/channels`, token);
    if (json) {
        return json
    }
};

exports.channelMessages = async (id, number, token) => {
    return fetchData(`/channels/${id}/messages?limit=${String(number)}`, token);
};

exports.message = async (messageid, channelid, token) => {
    return fetchData(`/channels/${channelid}/messages/${messageid}`, token);
};

exports.user = async (id, token) => {
    return fetchData(`users/${id}`, token);
};

exports.member = async (guildid, memberid, token) => {
    return fetchData(`guilds/${guildid}/members/${memberid}`, token);
};

exports.roles = async (guildid, token) => {
    return fetchData(`guilds/${guildid}/roles`, token);
};

exports.invites = {
    get: async (code, token) => {
        return fetchData(`invites/${code}?with_counts=true&?with_expiration=true`, token);
    },
};
