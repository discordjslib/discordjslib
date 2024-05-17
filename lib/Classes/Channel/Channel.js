module.exports = class Channel {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.type = Channel.TYPES[data.type];
        this.name = data.name || null;
    }

    static get TYPES() {
        return {
            0: "text",
            1: "dm",
            2: "voice",
            3: "group",
            4: "category",
            5: "news",
            6: "store",
            13: "stage"
        };
    }
}