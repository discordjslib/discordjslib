const fetch = require("node-fetch");
const url = "https://discord.com/api/v8/";

module.exports = {
  replyEmbed: async (messageid, channelid, embed, token) => {
    const body = {
      embed: embed,
      message_id: messageid,
      message_reference: {
        message_id: messageid,
      },
    };
    const msg = await fetch(url + `channels/${channelid}/messages`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
    return msg.json();
  },
  reply: async (messageid, channelid, content, token) => {
    const body = {
      content: content,
      message_reference: {
        message_id: messageid,
      },
    };
    const msg = await fetch(url + `channels/${channelid}/messages`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
    return msg.json();
  },
  react: async (messageid, channelid, emoji, token) => {
    const msg = await fetch(
      url +
        `/channels/${channelid}/messages/${messageid}/reactions/${encodeURIComponent(
          emoji
        )}/@me`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${token}`,
        },
      }
    );
    return msg;
  },
  deleteMessages: async (id, messages, token) => {
    const body = {
      messages: messages,
    };
    await fetch(url + `/channels/${id}/messages/bulk-delete`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
  },
  send: async (id, content, token) => {
    const body = {
      content: content,
      tts: false,
    };
    const msg = await fetch(url + `channels/${id}/messages`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
    return msg.json();
  },
  sendEmbed: async (id, embed, token) => {
    const body = {
      embed: embed,
      tts: false,
    };
    const msg = await fetch(url + `channels/${id}/messages`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
    return msg.json();
  },
  edit: async (messageid, channelid, content, token) => {
    const body = {
      content: content,
    };
    const msg = await fetch(
      url + `/channels/${channelid}/messages/${messageid}`,
      {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    return await msg.json();
  },
  dm: async (id, content, token) => {
    const body = {
      recipient_id: id,
    };
    let channel = await fetch(url + `users/@me/channels`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`,
      },
    });
    channel = await channel.json();
    const b = {
      content: content,
    };
    const msg = (
      await fetch(url + `channels/${channel.id}/messages`, {
        method: "POST",
        body: JSON.stringify(b),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${token}`,
        },
      })
    ).json();
    return msg;
  },
  role: {
    delete: async (guildid, roleid, token) => {
      const role = (
        await fetch(url + `guilds/${guildid}/roles/${roleid}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${token}`,
          },
        })
      ).json();
      return role;
    },
  },
  channel: {
    delete: async (channelid, token) => {
      const msg = (
        await fetch(url + `/channels/${channelid}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${token}`,
          },
        })
      ).json();
      return msg;
    },
    create: async (guildid, options, token) => {
      const channel = (
        await fetch(url + `/guilds/${guildid}/channels`, {
          method: "POST",
          body: JSON.stringify({
            name: options.name,
            type: options.type ? channel[options.type] : 0,
            topic: options.topic || "",
            position: options.position,
            permission_overwrites: options.permissions,
            parent_id: options.parent,
            nsfw: options.nsfw,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${token}`,
          },
        })
      ).json();
      return channel;
    },
  },
  invites: {
    delete: async (code) => {
      const invite = (
        await fetch(url + `invites/${code}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bot ${this.client.token}`,
          },
        })
      ).json();
      return invite;
    },
  },
  guild: {
    delete: async (guildid, token) => {
      const invite = await fetch(url + `/guilds/${guildid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bot ${token}`,
        },
      });
    },
  },
};
