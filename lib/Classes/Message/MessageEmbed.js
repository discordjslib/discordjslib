class MessageEmbed {
    constructor(data) {
        if (!data) data = 1
        this.title = data.title || null
        this.description = data.description || null
        this.fields = data.fields || []
        this.author = data.author || null
        this.color = data.color || data.colour || null
        this.colour = data.color || data.colour || null
        this.url = data.url || null
        this.timestamp = data.timestamp || null
        this.thumbnail = data.thumbnail || null
        this.footer = data.footer || null
        this.files = data.files || []

    }
    addTitle(title) {
        this.title = title
        return this
    }
    addDescription(description) {
        this.description = description
        return this
    }
    addField(field) {
        this.fields.push(field)
        return this
    }
    addAuthor(author) {
        this.author = author
        return this
    }
    addColor(color) {
        this.color = color
        return this
    }
    addColour(colour) {
        this.color = colour
        return this
    }
    addUrl(url) {
        this.url = url
        return this
    }
    addTimestamp(timestamp) {
        this.timestamp = timestamp
        return this
    }
    addThumbnail(thumbnail) {
        this.thumbnail = thumbnail
        return this
    }
    addFile(file) {
        this.files.push(file)
        return this
    }
    addFooter(footer) {
        this.footer = footer
        return this
    }
    toObject() {
        return {
            title: data.title || null,
            description: data.description || null,
            fields: data.fields || [],
            author: data.author || null,
            color: data.color || data.colour || null,
            url: data.url || null,
            timestamp: data.timestamp || null,
            thumbnail: data.thumbnail || null,
            footer: data.footer || null,
            files: data.files || [],
        }
    }
}
module.exports = MessageEmbed